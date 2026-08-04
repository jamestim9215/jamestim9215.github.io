<script setup>
import { ref, shallowRef, computed, provide } from 'vue'

import Speedometer01 from './components/template/Speedometer01.vue'
import Speedometer02 from './components/template/Speedometer02.vue'
import Speedometer03 from './components/template/Speedometer03.vue'
import Speedometer04 from './components/template/Speedometer04.vue'
import Speedometer05 from './components/template/Speedometer05.vue'
import Speedometer06 from './components/template/Speedometer06.vue'
import Speedometer07 from './components/template/Speedometer07.vue'
import Speedometer08 from './components/template/Speedometer08.vue'
import Speedometer09 from './components/template/Speedometer09.vue'
import Speedometer10 from './components/template/Speedometer10.vue'

import { useSpeedTracking } from './composables/useSpeedTracking'
import { useWakeLock } from './composables/useWakeLock'

// 全部樣板；shallowRef 避免 Vue 深度代理元件物件
const templates = shallowRef([
  Speedometer01,
  Speedometer02,
  Speedometer03,
  Speedometer04,
  Speedometer05,
  Speedometer06,
  Speedometer07,
  Speedometer08,
  Speedometer09,
  Speedometer10,
])

const activeIndex = ref(3)
const currentTemplate = computed(() => templates.value[activeIndex.value])
const currentLabel = computed(() => String(activeIndex.value + 1).padStart(2, '0'))

// 控制列顯示/隱藏（車用時通常會想收起來）
const showControls = ref(true)
const headsUpDisplay = ref(false)

// GPS 資料（真實）
const gps = useSpeedTracking()
const {
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
} = gps

// 把整包 GPS 資料 provide 給子元件（新元件用 inject('gps') 取用）
provide('gps', gps)

// Wake lock：防止螢幕休眠
const wakeLock = useWakeLock()

const randomSpeed = () => {
  speed.value = Math.floor(Math.random() * 200)
}

const nextTemplate = () => {
  activeIndex.value = (activeIndex.value + 1) % templates.value.length
}

const prevTemplate = () => {
  activeIndex.value =
    (activeIndex.value - 1 + templates.value.length) % templates.value.length
}

const toggleHud = () => {
  headsUpDisplay.value = !headsUpDisplay.value
}

const toggleControls = () => {
  showControls.value = !showControls.value
}

const toggleWakeLock = () => {
  if (wakeLock.isActive.value) {
    wakeLock.release()
  } else {
    wakeLock.request()
  }
}
</script>

<template>
  <div class="app-shell">
    <!-- 主要顯示區：切換 headsUpDisplay 會做水平鏡射，適合投影抬頭顯示 -->
    <div class="stage" :class="{ 'stage--hud': headsUpDisplay }">
      <component :is="currentTemplate" :speed="speed" />
    </div>

    <!-- GPS 狀態列（頂部小徽章） -->
    <div class="status-bar">
      <span class="badge" :class="isGpsActive ? 'badge--ok' : 'badge--warn'">
        <i class="dot" />
        {{ isGpsActive ? 'GPS' : (gpsError ? 'GPS 錯誤' : '定位中…') }}
        <template v-if="accuracy !== null && isGpsActive"> · ±{{ Math.round(accuracy) }}m</template>
      </span>
      <span class="badge badge--label">#{{ currentLabel }}</span>
    </div>

    <!-- 收合把手：長時間不用時可把控制列收起，避免遮擋速度 -->
    <button
      class="drawer-handle"
      :class="{ 'drawer-handle--collapsed': !showControls }"
      @click="toggleControls"
      :aria-label="showControls ? '收起控制列' : '展開控制列'"
    >
      <span class="chevron" :class="{ 'chevron--down': !showControls }" />
    </button>

    <!-- 控制列：以卡片式按鈕呈現，大觸控區、支援 iOS safe-area -->
    <div class="control-bar" :class="{ 'control-bar--hidden': !showControls }">
      <button class="ctrl" @click="prevTemplate" aria-label="上一款">
        <span class="ctrl__icon">‹</span>
        <span class="ctrl__label">Prev</span>
      </button>

      <button class="ctrl" @click="nextTemplate" aria-label="下一款">
        <span class="ctrl__icon">›</span>
        <span class="ctrl__label">Next</span>
      </button>

      <button
        class="ctrl"
        :class="{ 'ctrl--active': headsUpDisplay }"
        @click="toggleHud"
        aria-label="切換抬頭顯示"
      >
        <span class="ctrl__icon">◐</span>
        <span class="ctrl__label">HUD</span>
      </button>

      <button
        class="ctrl"
        :class="{ 'ctrl--active': wakeLock.isActive.value }"
        :disabled="!wakeLock.isSupported"
        @click="toggleWakeLock"
        :aria-label="wakeLock.isActive.value ? '關閉不休眠' : '螢幕保持常亮'"
      >
        <span class="ctrl__icon">☀</span>
        <span class="ctrl__label">Awake</span>
      </button>

      <button class="ctrl" @click="resetTrip" aria-label="重置行程紀錄">
        <span class="ctrl__icon">↺</span>
        <span class="ctrl__label">Reset</span>
      </button>

      <button class="ctrl ctrl--debug" @click="randomSpeed" aria-label="測試假速度">
        <span class="ctrl__icon">?</span>
        <span class="ctrl__label">Test</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-shell {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100dvh;
  background: #111;
  color: #fff;
  overflow: hidden;
}

.stage {
  position: absolute;
  inset: 0;
  transition: transform 0.4s ease-in-out;

  &--hud {
    // 抬頭顯示（HUD 反射）：水平鏡射
    transform: scaleX(-1);
  }
}

.status-bar {
  position: absolute;
  top: calc(6px + var(--safe-top));
  left: 8px;
  right: 8px;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  pointer-events: none;

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'Share Tech Mono', 'Tektur', monospace;
    font-size: 12px;
    line-height: 1;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.55);
    color: #eee;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);

    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: currentColor;
    }

    &--ok {
      color: #22e07a;
      border-color: rgba(34, 224, 122, 0.4);
    }
    &--warn {
      color: #ffb020;
      border-color: rgba(255, 176, 32, 0.4);

      .dot {
        animation: blink 1s infinite;
      }
    }
    &--label {
      color: #9aa;
      font-weight: 700;
    }
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.drawer-handle {
  position: absolute;
  left: 50%;
  bottom: calc(88px + var(--safe-bottom));
  transform: translateX(-50%);
  z-index: 25;
  width: 44px;
  height: 24px;
  padding: 0;
  border: 0;
  border-radius: 12px 12px 0 0;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ccc;
  backdrop-filter: blur(4px);
  transition: bottom 0.3s ease-in-out;

  &--collapsed {
    bottom: calc(0px + var(--safe-bottom));
    border-radius: 12px 12px 0 0;
  }

  .chevron {
    width: 12px;
    height: 12px;
    border-left: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(135deg); // 向上箭頭
    transition: transform 0.2s;

    &--down {
      transform: rotate(-45deg); // 向下箭頭
    }
  }
}

.control-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  padding: 8px calc(8px + var(--safe-left)) calc(8px + var(--safe-bottom))
    calc(8px + var(--safe-right));
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 6px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.5));
  transition: transform 0.3s ease-in-out;

  &--hidden {
    transform: translateY(100%);
  }
}

.ctrl {
  appearance: none;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(30, 30, 30, 0.85);
  color: #ddd;
  padding: 8px 4px;
  border-radius: 10px;
  min-height: 56px;
  font-family: 'Tektur', system-ui, sans-serif;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: background 0.15s, transform 0.05s, border-color 0.15s;
  touch-action: manipulation;

  &:active {
    transform: scale(0.96);
    background: rgba(60, 60, 60, 0.9);
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  &--active {
    background: rgba(255, 208, 0, 0.15);
    border-color: rgba(255, 208, 0, 0.6);
    color: var(--meter-color-3);
  }

  &--debug {
    color: #888;
  }

  &__icon {
    font-size: 20px;
    line-height: 1;
    font-weight: 700;
  }

  &__label {
    font-size: 10px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    opacity: 0.75;
  }
}
</style>
