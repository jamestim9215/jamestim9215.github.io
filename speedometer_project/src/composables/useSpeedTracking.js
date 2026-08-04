import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * Haversine 公式：計算兩經緯度座標之間的地表距離（公尺）
 */
function haversineMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000
  const toRad = (d) => (d * Math.PI) / 180
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(a))
}

/**
 * 追蹤 GPS 並產生車輛儀表所需的所有真實數據
 * 回傳 refs：
 *   speed         目前速度 km/h（GPS 或 randomSpeed 覆寫）
 *   heading       航向 0-360° 順時針從正北，若不可用為 null
 *   altitude      海拔高度（公尺），不可用為 null
 *   accuracy      水平定位精度（公尺）
 *   maxSpeed      本次 session 內量測到的最高速（km/h）
 *   avgSpeed      移動平均：累積距離 / 累積時間（km/h）
 *   tripDistance  累積行駛距離（公尺）
 *   tripTime      trip 開始至今經過的秒數
 *   isGpsActive   是否有成功收到 GPS 訊號
 *   gpsError      最後一次 GPS 錯誤訊息
 *   resetTrip()   重置 max/avg/distance/time
 */
export function useSpeedTracking() {
  const speed = ref(0)
  const heading = ref(null)
  const altitude = ref(null)
  const accuracy = ref(null)
  const maxSpeed = ref(0)
  const tripDistance = ref(0) // meters
  const tripTime = ref(0) // seconds
  const isGpsActive = ref(false)
  const gpsError = ref(null)

  // 移動平均速度 = 距離(km) / 時間(hr)；避免除以 0
  const avgSpeed = computed(() => {
    if (tripTime.value === 0) return 0
    return Math.round((tripDistance.value / tripTime.value) * 3.6)
  })

  let watchId = null
  let timerId = null
  let lastPos = null

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  const onPosition = (position) => {
    isGpsActive.value = true
    gpsError.value = null

    const c = position.coords

    // 速度 m/s → km/h
    const kmh = Math.round(((c.speed || 0) * 3600) / 1000)
    speed.value = kmh
    if (kmh > maxSpeed.value) maxSpeed.value = kmh

    // 航向（機車直立握把時常會抖動；只在有效值時更新）
    if (c.heading !== null && !Number.isNaN(c.heading)) {
      heading.value = c.heading
    }

    // 海拔 / 精度
    if (c.altitude !== null && !Number.isNaN(c.altitude)) {
      altitude.value = c.altitude
    }
    accuracy.value = c.accuracy

    // 累積距離：用 Haversine 計算前後 fix 間位移，
    // 若小於 accuracy 一半則視為 GPS 抖動雜訊，不計入
    if (lastPos) {
      const d = haversineMeters(lastPos.lat, lastPos.lng, c.latitude, c.longitude)
      const noiseThreshold = (c.accuracy || 0) * 0.5
      if (d > noiseThreshold) tripDistance.value += d
    }
    lastPos = { lat: c.latitude, lng: c.longitude }
  }

  const onError = (error) => {
    isGpsActive.value = false
    gpsError.value = error.message || String(error)
    console.warn('Geolocation error:', error)
  }

  const resetTrip = () => {
    maxSpeed.value = 0
    tripDistance.value = 0
    tripTime.value = 0
    lastPos = null
  }

  onMounted(() => {
    if ('geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition(onPosition, onError, options)
    } else {
      gpsError.value = '瀏覽器不支援 Geolocation API'
      console.warn(gpsError.value)
    }

    // Trip 計時器：每秒 +1
    timerId = window.setInterval(() => {
      tripTime.value += 1
    }, 1000)
  })

  onUnmounted(() => {
    if (watchId !== null) navigator.geolocation.clearWatch(watchId)
    if (timerId !== null) window.clearInterval(timerId)
    watchId = null
    timerId = null
    lastPos = null
  })

  return {
    speed,
    heading,
    altitude,
    accuracy,
    maxSpeed,
    avgSpeed,
    tripDistance,
    tripTime,
    isGpsActive,
    gpsError,
    resetTrip,
  }
}
