import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 使用 Screen Wake Lock API 防止手機螢幕在騎乘/駕駛時自動熄滅
 * 頁面隱藏後 wake lock 會自動被系統釋放，切回顯示時自動重新請求
 *
 * 注意：需要 secure context（https）；不支援時 isActive 保持 false
 */
export function useWakeLock() {
  const isSupported = 'wakeLock' in navigator
  const isActive = ref(false)
  let sentinel = null

  const request = async () => {
    if (!isSupported) return false
    try {
      sentinel = await navigator.wakeLock.request('screen')
      isActive.value = true
      sentinel.addEventListener('release', () => {
        isActive.value = false
      })
      return true
    } catch (e) {
      isActive.value = false
      console.warn('WakeLock request failed:', e)
      return false
    }
  }

  const release = async () => {
    if (sentinel) {
      try {
        await sentinel.release()
      } catch (e) {
        // ignore
      }
      sentinel = null
      isActive.value = false
    }
  }

  const handleVisibility = () => {
    if (document.visibilityState === 'visible' && !isActive.value) {
      request()
    }
  }

  onMounted(() => {
    request()
    document.addEventListener('visibilitychange', handleVisibility)
  })

  onUnmounted(() => {
    document.removeEventListener('visibilitychange', handleVisibility)
    release()
  })

  return { isSupported, isActive, request, release }
}
