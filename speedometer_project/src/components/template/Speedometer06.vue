<script setup>
/**
 * Speedometer 06 — Cyberpunk / Nightcity
 * 霓虹粉/青 + RGB split glitch + 斜切多邊形 HUD + 掃描線 + 拐角框
 */
import { inject, computed } from 'vue'
import { useThemeColor } from '../../composables/useThemeColor'

const props = defineProps({
  speed: { type: Number, default: 0 },
})

const gps = inject('gps')
const {
  heading,
  altitude,
  maxSpeed,
  avgSpeed,
  tripDistance,
  isGpsActive,
} = gps
const { themeColor, changeColor } = useThemeColor(7)

const compass = computed(() => {
  const h = heading.value
  if (h === null || h === undefined) return '---'
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  return dirs[Math.round(h / 45) % 8]
})

const altText = computed(() =>
  altitude.value === null ? '---' : Math.round(altitude.value)
)

const distanceText = computed(() => {
  const m = tripDistance.value
  return m < 1000 ? Math.round(m) + 'M' : (m / 1000).toFixed(1) + 'KM'
})

const speedText = computed(() => String(props.speed).padStart(3, '0'))

// 危險門檻：>120 -> 紅色警戒色
const danger = computed(() => props.speed > 120)
</script>

<template>
  <div class="cy" :class="{ 'cy--danger': danger }" @click="changeColor">
    <!-- 背景層 -->
    <div class="bg-grid"></div>
    <div class="bg-scan"></div>
    <div class="bg-noise"></div>

    <!-- 拐角瞄準框 -->
    <div class="corner corner--tl"></div>
    <div class="corner corner--tr"></div>
    <div class="corner corner--bl"></div>
    <div class="corner corner--br"></div>

    <!-- 頂部狀態列 -->
    <div class="cy__top">
      <div class="chip">
        <span class="chip__dot" :class="{ 'chip__dot--on': isGpsActive }"></span>
        NET.LINK
      </div>
      <div class="chip">HDG // {{ compass }}</div>
      <div class="chip">ALT // {{ altText }}M</div>
    </div>

    <!-- 中央 GLITCH 數字 -->
    <div class="cy__center">
      <div class="cy__label">// VELOCITY</div>
      <div class="glitch" :data-text="speedText">{{ speedText }}</div>
      <div class="cy__unit">
        <span>KM</span><span class="sep">·</span><span>H</span><sup>-1</sup>
      </div>

      <!-- 側邊時速條 -->
      <div class="v-bar">
        <div class="v-bar__fill" :style="{ height: Math.min(100, (speed / 200) * 100) + '%' }"></div>
        <div class="v-bar__marks">
          <span v-for="i in 5" :key="i"></span>
        </div>
      </div>
    </div>

    <!-- 底部資料塊 -->
    <div class="cy__bottom">
      <div class="datablock">
        <div class="datablock__label">> MAX</div>
        <div class="datablock__val">{{ String(maxSpeed).padStart(3, '0') }}</div>
      </div>
      <div class="datablock">
        <div class="datablock__label">> AVG</div>
        <div class="datablock__val">{{ String(avgSpeed).padStart(3, '0') }}</div>
      </div>
      <div class="datablock">
        <div class="datablock__label">> DIST</div>
        <div class="datablock__val">{{ distanceText }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$cyan: #00fff9;
$magenta: #ff2bd6;
$yellow: #f7ff00;
$red: #ff2a4d;

.cy {
  position: absolute;
  inset: 0;
  padding: 40px 20px 130px;
  background: #050014;
  color: $cyan;
  font-family: 'Share Tech Mono', 'Orbitron', monospace;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;

  --neon: #{$cyan};
  --neon-alt: #{$magenta};

  &--danger {
    --neon: #{$red};
    --neon-alt: #{$yellow};
  }
}

.bg-grid {
  position: absolute;
  inset: -20px;
  background-image:
    linear-gradient(rgba(0, 255, 249, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 43, 214, 0.07) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 90%);
  animation: pan 20s linear infinite;
}

.bg-scan {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 3px,
    rgba(0, 255, 249, 0.04) 3px,
    rgba(0, 255, 249, 0.04) 4px
  );
  pointer-events: none;
}

.bg-noise {
  position: absolute;
  inset: 0;
  background: radial-gradient(
      ellipse at 20% 30%,
      rgba(255, 43, 214, 0.15) 0%,
      transparent 40%
    ),
    radial-gradient(
      ellipse at 80% 70%,
      rgba(0, 255, 249, 0.15) 0%,
      transparent 40%
    );
  pointer-events: none;
}

.corner {
  position: absolute;
  width: 26px;
  height: 26px;
  border: 2px solid var(--neon-alt);
  filter: drop-shadow(0 0 6px var(--neon-alt));
  z-index: 5;
  &--tl { top: 8px; left: 8px; border-right: 0; border-bottom: 0; }
  &--tr { top: 8px; right: 8px; border-left: 0; border-bottom: 0; }
  &--bl { bottom: 90px; left: 8px; border-right: 0; border-top: 0; }
  &--br { bottom: 90px; right: 8px; border-left: 0; border-top: 0; }
}

.cy__top {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.chip {
  font-size: 11px;
  padding: 5px 12px;
  background: rgba(0, 255, 249, 0.06);
  border: 1px solid rgba(0, 255, 249, 0.4);
  clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.2em;
  color: $cyan;

  &__dot {
    width: 6px;
    height: 6px;
    background: #444;
    border-radius: 50%;
    &--on {
      background: $cyan;
      box-shadow: 0 0 8px $cyan;
      animation: pulse 1.4s infinite;
    }
  }
}

.cy__center {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 0;
}

.cy__label {
  color: var(--neon-alt);
  font-size: 12px;
  letter-spacing: 0.5em;
  text-shadow: 0 0 8px var(--neon-alt);
  margin-bottom: 12px;
}

.glitch {
  position: relative;
  display: inline-block;
  font-family: 'Orbitron', monospace;
  font-weight: 900;
  font-size: clamp(6rem, 42vw, 22rem);
  line-height: 0.85;
  color: var(--neon);
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
  text-shadow:
    0 0 8px var(--neon),
    0 0 24px var(--neon),
    0 0 60px var(--neon);
  animation: glitch-shake 4s infinite;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  &::before {
    color: $magenta;
    transform: translate(-3px, 0);
    text-shadow: 0 0 8px $magenta;
    mix-blend-mode: screen;
    animation: glitch-x 3s infinite;
  }
  &::after {
    color: $yellow;
    transform: translate(3px, 0);
    text-shadow: 0 0 6px $yellow;
    mix-blend-mode: screen;
    animation: glitch-x2 3.5s infinite;
  }
}

.cy__unit {
  margin-top: 12px;
  font-size: 14px;
  letter-spacing: 0.4em;
  color: rgba(0, 255, 249, 0.5);
  display: flex;
  align-items: baseline;
  gap: 6px;
  sup {
    color: $yellow;
    font-size: 10px;
  }
  .sep {
    color: $magenta;
  }
}

.v-bar {
  position: absolute;
  right: 8px;
  top: 20%;
  bottom: 20%;
  width: 8px;
  border: 1px solid rgba(0, 255, 249, 0.3);
  background: rgba(0, 0, 0, 0.4);

  &__fill {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--neon), var(--neon-alt));
    box-shadow: 0 0 12px var(--neon);
    transition: height 0.4s ease-out, background 0.3s;
  }
  &__marks {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      height: 1px;
      background: rgba(0, 0, 0, 0.6);
    }
  }
}

.cy__bottom {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.datablock {
  background: linear-gradient(
    135deg,
    rgba(255, 43, 214, 0.12),
    rgba(0, 255, 249, 0.05)
  );
  border: 1px solid rgba(0, 255, 249, 0.35);
  padding: 10px 12px;
  clip-path: polygon(
    10px 0,
    100% 0,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    0 100%,
    0 10px
  );

  &__label {
    font-size: 10px;
    letter-spacing: 0.25em;
    color: $magenta;
    margin-bottom: 4px;
    text-shadow: 0 0 6px $magenta;
  }
  &__val {
    font-family: 'Orbitron', monospace;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 0 8px $cyan;
    font-variant-numeric: tabular-nums;
  }
}

@keyframes glitch-shake {
  0%, 92%, 100% { transform: translate(0, 0); }
  93% { transform: translate(-2px, 1px); }
  94% { transform: translate(2px, -1px); }
  95% { transform: translate(-1px, 2px); }
  96% { transform: translate(1px, 0); }
}
@keyframes glitch-x {
  0%, 92%, 100% { transform: translate(-3px, 0); }
  93% { transform: translate(-8px, 1px); }
  95% { transform: translate(-6px, -1px); }
}
@keyframes glitch-x2 {
  0%, 92%, 100% { transform: translate(3px, 0); }
  93% { transform: translate(8px, -1px); }
  95% { transform: translate(6px, 1px); }
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
@keyframes pan {
  0% { background-position: 0 0; }
  100% { background-position: 40px 40px; }
}
</style>
