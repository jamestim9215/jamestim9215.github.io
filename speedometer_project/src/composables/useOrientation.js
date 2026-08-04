import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * 監聽視窗尺寸並判斷直式 / 橫式，回傳對應的 style 字串
 * @param {string} size CSS 尺寸（例如 '80%'、'90%'），直式時套用到 width，橫式時套用到 height
 */
export function useOrientation(size = '80%') {
  const windowWidth = ref(window.innerWidth)
  const windowHeight = ref(window.innerHeight)

  const isVertical = computed(() => windowWidth.value < windowHeight.value)

  const circleStyle = computed(() =>
    isVertical.value ? `width:${size}` : `height:${size}`
  )

  const handleResize = () => {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return { windowWidth, windowHeight, isVertical, circleStyle }
}
