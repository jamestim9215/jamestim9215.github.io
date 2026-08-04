<script setup>
/**
 * Speedometer 08 — F1 Racing (Speed-first)
 * 時速為主角、GEAR 縮小移到頂部與 RPM 同列，避免佔用主視覺
 */
import { ref, computed, watch, inject } from 'vue'
import { useThemeColor } from '../../composables/useThemeColor'

const props = defineProps({
  speed: { type: Number, default: 0 },
})

const gps = inject('gps')
const { maxSpeed, avgSpeed, tripDistance, tripTime, isGpsActive } = gps
const { themeColor, changeColor } = useThemeColor(1)

// ─── 檔位（純顯示用） ───
const gear = computed(() => {
  const s = props.speed
  if (s < 5) return 'N'
  if (s < 25) return 1
  if (s < 45) return 2
  if (s < 70) return 3
  if (s < 100) return 4
  if (s < 140) return 5
  return 6
})
const gearColor = computed(() => {
  const s = props.speed
  if (s < 60) return '#22e07a'
  if (s < 120) return '#ffb020'
  return '#ff2a4d'
})

// ─── RPM 燈條（20 顆） ───
const RPM_MAX = 180
const rpmLights = computed(() => {
  const pct = Math.min(props.speed / RPM_MAX, 1)
  const on = Math.round(pct * 20)
  return Array.from({ length: 20 }, (_, i) => {
    if (i >= on) return 'off'
    if (i < 12) return 'green'
    if (i < 17) return 'yellow'
    return 'red'
  })
})

// ─── 左側 boost 條 ───
const speedRatio = computed(() => Math.min((props.speed / RPM_MAX) * 100, 100))

// ─── 加減速 delta（真實 dt） ───
const deltaSpeed = ref(0)
let lastSpeed = props.speed
let lastT = performance.now()
watch(
  () => props.speed,
  (v) => {
    const t = performance.now()
    const dt = (t - lastT) / 1000
    if (dt > 0.05) {
      deltaSpeed.value = Math.round((v - lastSpeed) / dt)
      lastSpeed = v
      lastT = t
    }
  }
)
const deltaSymbol = computed(() => (deltaSpeed.value > 0 ? '▲' : deltaSpeed.value < 0 ? '▼' : '·'))
const deltaClass = computed(() => ({
  'delta--up': deltaSpeed.value > 0,
  'delta--down': deltaSpeed.value < 0,
}))

// ─── 速度顏色 ───
const speedColor = computed(() => {
  const s = props.speed
  if (s >= 150) return '#ff2a4d'
  if (s >= 110) return '#ffb020'
  return '#f2f5f7'
})

// ─── 底部 telemetry ───
const distText = computed(() => {
  const m = tripDistance.value
  return m < 1000 ? Math.round(m) + 'm' : (m / 1000).toFixed(2) + 'km'
})
const pad = (n) => String(n).padStart(2, '0')
const tripTimeText = computed(() => {
  const s = tripTime.value
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`
})
</script>

<template>
  <div class="race" @click="changeColor">
    <div class="race__carbon"></div>

    <!-- ═══ 頂部：RPM 燈條 + GEAR 小徽章 ═══ -->
    <div class="topbar">
      <div class="rpm-wrap">
        <div class="rpm-label">RPM</div>
        <div class="rpm">
          <div
            v-for="(state, i) in rpmLights"
            :key="i"
            class="rpm__led"
            :class="`rpm__led--${state}`"
          ></div>
        </div>
      </div>
      <div
        class="gear-badge"
        :style="{
          borderColor: gearColor,
          color: gearColor,
          boxShadow: `0 0 10px ${gearColor}55`,
        }"
      >
        <div class="gear-badge__k">GEAR</div>
        <div class="gear-badge__v">{{ gear }}</div>
      </div>
    </div>

    <!-- ═══ 主 hero：boost bar + 巨大速度 ═══ -->
    <div class="hero">
      <!-- 左：boost 條 -->
      <div class="boost">
        <div class="boost__label">SPD</div>
        <div class="boost__track">
          <div class="boost__fill" :style="{ height: speedRatio + '%' }"></div>
          <div class="boost__redline"></div>
        </div>
        <div class="boost__pct">{{ Math.round(speedRatio) }}%</div>
      </div>

      <!-- 右：時速 HUGE -->
      <div class="speed">
        <div class="speed__num" :style="{ color: speedColor, textShadow: `0 0 20px ${speedColor}80` }">
          {{ speed }}
        </div>
        <div class="speed__unit">
          <span class="unit__km">km</span>
          <span class="unit__slash">/</span>
          <span class="unit__h">h</span>
        </div>
        <div class="delta" :class="deltaClass">
          <span class="delta__arrow">{{ deltaSymbol }}</span>
          <span class="delta__val">{{ Math.abs(deltaSpeed) }}</span>
          <span class="delta__u">km/h/s</span>
        </div>
      </div>
    </div>

    <!-- ═══ 底部 telemetry ═══ -->
    <div class="telemetry">
      <div class="tel">
        <div class="tel__k">MAX</div>
        <div class="tel__v">{{ maxSpeed }}</div>
        <div class="tel__u">km/h</div>
      </div>
      <div class="tel">
        <div class="tel__k">AVG</div>
        <div class="tel__v">{{ avgSpeed }}</div>
        <div class="tel__u">km/h</div>
      </div>
      <div class="tel">
        <div class="tel__k">DIST</div>
        <div class="tel__v">{{ distText }}</div>
        <div class="tel__u">total</div>
      </div>
      <div class="tel">
        <div class="tel__k">TIME</div>
        <div class="tel__v">{{ tripTimeText }}</div>
        <div class="tel__u">trip</div>
      </div>
    </div>

    <!-- ═══ 底 signal footer ═══ -->
    <div class="footer">
      <div class="signal" :class="{ 'signal--on': isGpsActive }">
        <span class="signal__dot"></span>
        <span class="signal__t">GPS LIVE</span>
      </div>
      <div class="checker"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$panel-bg: #0b0d10;
$panel-border: rgba(255, 255, 255, 0.08);

.race {
  position: absolute;
  inset: 0;
  padding: 14px 14px 130px;
  background:
    radial-gradient(circle at 50% 0%, rgba(255, 42, 77, 0.06), transparent 60%),
    linear-gradient(180deg, #0a0c10 0%, #05070a 100%);
  color: #f2f5f7;
  font-family: 'Tektur', 'Orbitron', system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
}
.race__carbon {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.015) 0 2px, transparent 2px 4px),
    repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.015) 0 2px, transparent 2px 4px);
  pointer-events: none;
}

/* ═══════════ 頂部 ═══════════ */
.topbar {
  display: flex;
  gap: 10px;
  align-items: stretch;
}
.rpm-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid $panel-border;
  border-radius: 3px;
  min-width: 0;
}
.rpm-label {
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.25em;
  color: rgba(242, 245, 247, 0.5);
}
.rpm {
  flex: 1;
  display: flex;
  gap: 3px;
  height: 14px;
  &__led {
    flex: 1;
    border-radius: 1px;
    background: rgba(255, 255, 255, 0.06);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.6);
    transition: background 0.06s;
    &--green { background: #22e07a; box-shadow: 0 0 6px #22e07a; }
    &--yellow { background: #ffb020; box-shadow: 0 0 6px #ffb020; }
    &--red { background: #ff2a4d; box-shadow: 0 0 8px #ff2a4d; }
  }
}
.gear-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3px 12px;
  min-width: 68px;
  border: 2px solid;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.55);
  transition: color 0.15s, border-color 0.15s, box-shadow 0.15s;
  &__k {
    font-family: 'Share Tech Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    opacity: 0.75;
    line-height: 1;
  }
  &__v {
    font-family: 'Orbitron', monospace;
    font-weight: 900;
    font-size: 26px;
    line-height: 1;
    letter-spacing: -0.03em;
  }
}

/* ═══════════ Hero ═══════════ */
.hero {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 14px;
  position: relative;
}

.boost {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  &__label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    color: rgba(242, 245, 247, 0.4);
    writing-mode: vertical-rl;
  }
  &__track {
    flex: 1;
    width: 14px;
    background: rgba(0, 0, 0, 0.55);
    border: 1px solid $panel-border;
    border-radius: 2px;
    position: relative;
    overflow: hidden;
  }
  &__fill {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, #22e07a 0%, #22e07a 55%, #ffb020 75%, #ff2a4d 90%);
    transition: height 0.15s;
    box-shadow: 0 0 6px rgba(255, 42, 77, 0.4);
  }
  &__redline {
    position: absolute;
    top: 15%;
    left: -3px;
    right: -3px;
    height: 2px;
    background: #ff2a4d;
    box-shadow: 0 0 4px #ff2a4d;
  }
  &__pct {
    font-family: 'Share Tech Mono', monospace;
    font-size: 10px;
    color: rgba(242, 245, 247, 0.5);
  }
}

.speed {
  min-width: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 4px;

  &__num {
    font-family: 'Orbitron', 'Tektur', monospace;
    font-weight: 900;
    font-size: clamp(6.5rem, 34vw, 13rem);
    line-height: 0.82;
    letter-spacing: -0.055em;
    font-variant-numeric: tabular-nums;
    transition: color 0.2s;
    max-width: 100%;
    filter: drop-shadow(0 6px 20px rgba(255, 42, 77, 0.15));
  }
  &__unit {
    display: flex;
    align-items: baseline;
    gap: 4px;
    margin-top: 10px;
    font-family: 'Tektur', sans-serif;
    color: rgba(242, 245, 247, 0.6);
    letter-spacing: 0.12em;
    .unit__km { font-size: 26px; font-weight: 700; }
    .unit__slash { font-size: 26px; opacity: 0.35; }
    .unit__h { font-size: 26px; font-weight: 700; }
  }
  .delta {
    margin-top: 12px;
    display: inline-flex;
    align-items: baseline;
    gap: 5px;
    padding: 4px 12px;
    background: rgba(0, 0, 0, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 3px;
    color: rgba(242, 245, 247, 0.55);
    font-family: 'Share Tech Mono', monospace;
    font-size: 13px;
    letter-spacing: 0.12em;
    &__arrow { font-size: 13px; opacity: 0.7; }
    &__val { font-weight: 700; }
    &__u { font-size: 9px; opacity: 0.55; }
    &--up { color: #22e07a; border-color: rgba(34, 224, 122, 0.4); }
    &--down { color: #ff8080; border-color: rgba(255, 128, 128, 0.4); }
  }
}

/* ═══════════ Telemetry 4-col ═══════════ */
.telemetry {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}
.tel {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid $panel-border;
  border-left: 3px solid #ff2a4d;
  border-radius: 3px;
  padding: 5px 8px;
  min-width: 0;
  &__k {
    font-family: 'Share Tech Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.25em;
    color: rgba(242, 245, 247, 0.5);
    margin-bottom: 2px;
  }
  &__v {
    font-family: 'Orbitron', monospace;
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    color: #f2f5f7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &__u {
    font-family: 'Share Tech Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.15em;
    color: rgba(242, 245, 247, 0.35);
    margin-top: 1px;
  }
}

/* ═══════════ Signal footer ═══════════ */
.footer {
  display: flex;
  gap: 10px;
  align-items: center;
  height: 22px;
}
.signal {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid $panel-border;
  border-radius: 2px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.25em;
  color: rgba(242, 245, 247, 0.4);
  &__dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #444;
  }
  &--on {
    color: #22e07a;
    border-color: rgba(34, 224, 122, 0.4);
    .signal__dot { background: #22e07a; box-shadow: 0 0 6px #22e07a; }
  }
}
.checker {
  flex: 1;
  height: 14px;
  background:
    repeating-conic-gradient(
      #f2f5f7 0% 25%,
      #0b0d10 0% 50%
    ) 0 0 / 8px 8px;
  opacity: 0.6;
  border-radius: 2px;
}

/* ═══════════ Responsive ═══════════ */
@media (max-width: 380px) {
  .speed__num { font-size: clamp(5.5rem, 32vw, 10rem); }
  .speed__unit { .unit__km, .unit__slash, .unit__h { font-size: 22px; } }
  .tel__v { font-size: 16px; }
}
@media (orientation: landscape) {
  .hero { grid-template-columns: 42px minmax(0, 1fr); }
  .speed__num { font-size: clamp(7rem, 32vh, 15rem); }
}
</style>
