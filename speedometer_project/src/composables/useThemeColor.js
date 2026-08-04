import { ref } from 'vue'

/**
 * 循環切換主題顏色（對應 --meter-color-N CSS 變數）
 * @param {number} initial 起始顏色 index（1 開始）
 * @param {number} max 顏色總數
 */
export function useThemeColor(initial = 1, max = 7) {
  const themeColor = ref(initial)

  const changeColor = () => {
    themeColor.value = themeColor.value === max ? 1 : themeColor.value + 1
  }

  return { themeColor, changeColor }
}
