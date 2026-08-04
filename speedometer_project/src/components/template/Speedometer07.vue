<script setup>
/**
 * Speedometer 07 — Mechanical / Steampunk
 * SVG 齒輪隨真實速度旋轉、類比黃銅指針錶盤、鉚釘裝飾
 */
import { inject, computed } from 'vue'
import { useThemeColor } from '../../composables/useThemeColor'

const props = defineProps({
  speed: { type: Number, default: 0 },
})

const gps = inject('gps')
const { heading, maxSpeed, avgSpeed, tripDistance } = gps
const { themeColor, changeColor } = useThemeColor(3)

const MAX = 200

// 指針角度：0 → -135°，MAX → 135°
const needleAngle = computed(() => {
  const s = Math.min(props.speed, MAX)
  return -135 + (s / MAX) * 270
})
const maxNeedleAngle = computed(() => {
  const s = Math.min(maxSpeed.value, MAX)
  return -135 + (s / MAX) * 270
})

// 齒輪隨真實速度旋轉
const gearAngle1 = computed(() => props.speed * 6)
const gearAngle2 = computed(() => -props.speed * 4)
const gearAngle3 = computed(() => props.speed * 9)

const compass = computed(() => {
  const h = heading.value
  if (h === null || h === undefined) return '—'
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  return dirs[Math.round(h / 45) % 8]
})

const distanceText = computed(() => {
  const m = tripDistance.value
  return m < 1000 ? Math.round(m) + ' m' : (m / 1000).toFixed(2) + ' km'
})

// 預先計算所有 SVG 座標，減少 template 內三角函數呼叫
const polar = (angleDeg, r) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: Math.cos(rad) * r, y: Math.sin(rad) * r }
}

const majorTicks = Array.from({ length: 11 }, (_, i) => {
  const value = i * 20
  const angle = -135 + (i / 10) * 270
  const p1 = polar(angle, 62)
  const p2 = polar(angle, 76)
  const pl = polar(angle, 52)
  return { value, x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, lx: pl.x, ly: pl.y, danger: value >= 140 }
})

const minorTicks = Array.from({ length: 51 }, (_, i) => {
  const angle = -135 + (i / 50) * 270
  const p1 = polar(angle, 70)
  const p2 = polar(angle, 75)
  return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y }
})

const rivets = Array.from({ length: 12 }, (_, i) => polar(i * 30, 90))
</script>

<template>
  <div class="mech" @click="changeColor">
    <!-- 齒輪背景 -->
    <div class="gears">
      <svg class="gear gear--big" viewBox="-50 -50 100 100" :style="{ transform: `rotate(${gearAngle1}deg)` }">
        <g fill="#c8892f">
          <path d="M0,-45 L5,-35 L0,-30 L-5,-35 Z" />
          <path d="M0,-45 L5,-35 L0,-30 L-5,-35 Z" transform="rotate(45)" />
          <path d="M0,-45 L5,-35 L0,-30 L-5,-35 Z" transform="rotate(90)" />
          <path d="M0,-45 L5,-35 L0,-30 L-5,-35 Z" transform="rotate(135)" />
          <path d="M0,-45 L5,-35 L0,-30 L-5,-35 Z" transform="rotate(180)" />
          <path d="M0,-45 L5,-35 L0,-30 L-5,-35 Z" transform="rotate(225)" />
          <path d="M0,-45 L5,-35 L0,-30 L-5,-35 Z" transform="rotate(270)" />
          <path d="M0,-45 L5,-35 L0,-30 L-5,-35 Z" transform="rotate(315)" />
          <circle r="30" />
        </g>
        <circle r="10" fill="#2a1a0a" />
      </svg>

      <svg class="gear gear--small" viewBox="-50 -50 100 100" :style="{ transform: `rotate(${gearAngle2}deg)` }">
        <g fill="#c8892f">
          <path v-for="i in 10" :key="i" d="M0,-42 L4,-32 L0,-28 L-4,-32 Z" :transform="`rotate(${i * 36})`" />
          <circle r="28" />
        </g>
        <circle r="8" fill="#2a1a0a" />
      </svg>

      <svg class="gear gear--tiny" viewBox="-50 -50 100 100" :style="{ transform: `rotate(${gearAngle3}deg)` }">
        <g fill="#c8892f">
          <path v-for="i in 6" :key="i" d="M0,-40 L5,-30 L0,-26 L-5,-30 Z" :transform="`rotate(${i * 60})`" />
          <circle r="26" />
        </g>
        <circle r="7" fill="#2a1a0a" />
      </svg>
    </div>

    <!-- 主錶盤 -->
    <div class="dial">
      <svg viewBox="-100 -100 200 200" class="dial__svg">
        <defs>
          <radialGradient id="brass" cx="30%" cy="30%">
            <stop offset="0%" stop-color="#f4d17a" />
            <stop offset="50%" stop-color="#c8892f" />
            <stop offset="100%" stop-color="#6b3f10" />
          </radialGradient>
          <radialGradient id="dialFace" cx="50%" cy="45%">
            <stop offset="0%" stop-color="#3a2a1a" />
            <stop offset="100%" stop-color="#1a0f06" />
          </radialGradient>
        </defs>

        <circle r="95" fill="url(#brass)" />
        <circle r="86" fill="#2a1a0a" />
        <circle r="82" fill="url(#dialFace)" />

        <!-- 鉚釘 -->
        <circle
          v-for="(r, i) in rivets"
          :key="'rv' + i"
          :cx="r.x"
          :cy="r.y"
          r="2.5"
          fill="#f4d17a"
        />

        <!-- 小刻度 -->
        <line
          v-for="(t, i) in minorTicks"
          :key="'mn' + i"
          :x1="t.x1" :y1="t.y1" :x2="t.x2" :y2="t.y2"
          stroke="#c8892f"
          stroke-width="1"
        />

        <!-- 大刻度 + 數字 -->
        <template v-for="(t, i) in majorTicks" :key="'mj' + i">
          <line
            :x1="t.x1" :y1="t.y1" :x2="t.x2" :y2="t.y2"
            :stroke="t.danger ? '#d64020' : '#f4d17a'"
            stroke-width="2.5"
          />
          <text
            :x="t.lx" :y="t.ly"
            text-anchor="middle"
            dominant-baseline="middle"
            font-family="Tektur, serif"
            font-size="10"
            font-weight="700"
            :fill="t.danger ? '#d64020' : '#f4d17a'"
          >{{ t.value }}</text>
        </template>

        <!-- 最高速記憶指針（紅） -->
        <g v-if="maxSpeed > 0" :transform="`rotate(${maxNeedleAngle})`" class="dial__memo">
          <polygon points="-2,10 2,10 0,-70" fill="#d64020" opacity="0.7" />
        </g>

        <!-- 主指針 -->
        <g :transform="`rotate(${needleAngle})`" class="dial__needle">
          <polygon points="-3,15 3,15 1,-72 -1,-72" fill="#f4d17a" stroke="#6b3f10" stroke-width="0.5" />
          <circle r="4" fill="#d64020" />
          <circle r="8" fill="none" stroke="#6b3f10" stroke-width="1.5" />
        </g>

        <!-- 中央 hub -->
        <circle r="10" fill="url(#brass)" stroke="#2a1a0a" stroke-width="1" />
        <circle r="3" fill="#2a1a0a" />

        <text x="0" y="35" text-anchor="middle" font-family="Tektur, serif" font-size="7" fill="#c8892f" letter-spacing="3">km/h</text>
      </svg>

      <div class="dial__digital">{{ String(speed).padStart(3, '0') }}</div>
    </div>

    <!-- 副錶：max / avg / dist / heading -->
    <div class="sub">
      <div class="sub__gauge">
        <div class="sub__label">MAX</div>
        <div class="sub__val">{{ maxSpeed }}</div>
      </div>
      <div class="sub__gauge">
        <div class="sub__label">AVG</div>
        <div class="sub__val">{{ avgSpeed }}</div>
      </div>
      <div class="sub__gauge">
        <div class="sub__label">TRIP</div>
        <div class="sub__val sub__val--sm">{{ distanceText }}</div>
      </div>
      <div class="sub__gauge">
        <div class="sub__label">DIR</div>
        <div class="sub__val">{{ compass }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mech {
  position: absolute;
  inset: 0;
  padding: 20px 12px 130px;
  background:
    radial-gradient(ellipse at 50% 20%, #3a2a1a 0%, #1a0f06 60%),
    #0d0703;
  color: #f4d17a;
  font-family: 'Tektur', serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 40px,
      rgba(0, 0, 0, 0.08) 40px,
      rgba(0, 0, 0, 0.08) 41px
    );
    pointer-events: none;
  }
}

.gears {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.28;

  .gear {
    position: absolute;
    transition: transform 0.5s linear;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.6));

    &--big { width: 260px; height: 260px; top: -80px; right: -80px; }
    &--small { width: 180px; height: 180px; bottom: 180px; left: -60px; }
    &--tiny { width: 120px; height: 120px; top: 40%; right: -30px; }
  }
}

.dial {
  position: relative;
  z-index: 2;
  margin-top: 10px;
  width: min(85vw, 60vh, 460px);
  aspect-ratio: 1 / 1;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6));

  &__svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  &__needle {
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform-origin: 0 0;
  }
  &__memo {
    transition: transform 0.6s ease-out;
    transform-origin: 0 0;
  }
  &__digital {
    position: absolute;
    left: 50%;
    bottom: 20%;
    transform: translateX(-50%);
    font-family: 'Share Tech Mono', monospace;
    font-size: clamp(1.4rem, 4.5vw, 2.2rem);
    font-weight: 700;
    color: #ffe9b5;
    background: #1a0f06;
    padding: 4px 14px;
    border: 2px solid #c8892f;
    border-radius: 4px;
    letter-spacing: 0.15em;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.8);
    font-variant-numeric: tabular-nums;
  }
}

.sub {
  position: relative;
  z-index: 2;
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  width: 100%;
  max-width: 500px;

  &__gauge {
    background: radial-gradient(ellipse at 50% 30%, #3a2a1a, #1a0f06);
    border: 2px solid #c8892f;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.6);
    padding: 4px;
    font-variant-numeric: tabular-nums;
  }
  &__label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.3em;
    color: #c8892f;
    margin-bottom: 2px;
  }
  &__val {
    font-family: 'Tektur', serif;
    font-size: clamp(16px, 4.5vw, 22px);
    font-weight: 700;
    color: #ffe9b5;
    &--sm { font-size: clamp(11px, 3vw, 14px); }
  }
}

@media (orientation: landscape) {
  .mech {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 100px;
    gap: 20px;
  }
  .dial { width: min(75vh, 60vw); margin-top: 0; }
  .sub {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    width: 260px;
    height: 260px;
    margin-top: 0;
  }
}
</style>
