<script setup>
/**
 * Speedometer 09 — ICU Multi-channel Monitor
 * 全面 panel 化：4 角括號 + 嵌入式 label + 網格背景，速度 HERO 主導視覺
 */
import { ref, computed, watch, onMounted, onUnmounted, inject } from 'vue'
import { useThemeColor } from '../../composables/useThemeColor'

const props = defineProps({
  speed: { type: Number, default: 0 },
})

const gps = inject('gps')
const { maxSpeed, avgSpeed, tripDistance, tripTime, isGpsActive, accuracy } = gps
const { themeColor, changeColor } = useThemeColor(4)

// ─── 取樣參數 ───
const SAMPLE_COUNT = 120
const SAMPLE_INTERVAL = 120 // ms
const SPD_MAX = 200 // km/h
const ACC_RANGE = 30 // ±km/h/s

// ─── 速度歷史 ───
const history = ref(new Array(SAMPLE_COUNT).fill(0))
let sampleTimer = null

onMounted(() => {
  sampleTimer = window.setInterval(() => {
    history.value.push(props.speed)
    if (history.value.length > SAMPLE_COUNT) history.value.shift()
  }, SAMPLE_INTERVAL)
})
onUnmounted(() => {
  if (sampleTimer !== null) window.clearInterval(sampleTimer)
})

// ─── 加速度：從速度歷史導出 ───
const dtS = SAMPLE_INTERVAL / 1000
const acceleration = computed(() => {
  const h = history.value
  const out = new Array(h.length).fill(0)
  for (let i = 1; i < h.length; i++) {
    out[i] = (h[i] - h[i - 1]) / dtS
  }
  return out
})
const currentAcc = computed(() => {
  const a = acceleration.value
  return a[a.length - 1] || 0
})

// ─── SVG polyline ───
const W = 1000
const speedPoints = computed(() => {
  const H = 200
  return history.value
    .map((v, i) => {
      const x = (i / (SAMPLE_COUNT - 1)) * W
      const y = H - (Math.min(v, SPD_MAX) / SPD_MAX) * H
      return `${x.toFixed(0)},${y.toFixed(1)}`
    })
    .join(' ')
})
const accPoints = computed(() => {
  const H = 100
  return acceleration.value
    .map((v, i) => {
      const x = (i / (SAMPLE_COUNT - 1)) * W
      const clamped = Math.max(-ACC_RANGE, Math.min(ACC_RANGE, v))
      const y = H / 2 - (clamped / ACC_RANGE) * (H / 2)
      return `${x.toFixed(0)},${y.toFixed(1)}`
    })
    .join(' ')
})
const cursorI = computed(() => {
  const H = 200
  const n = history.value.length
  const v = history.value[n - 1] || 0
  return {
    x: ((n - 1) / (SAMPLE_COUNT - 1)) * W,
    y: H - (Math.min(v, SPD_MAX) / SPD_MAX) * H,
  }
})
const cursorII = computed(() => {
  const H = 100
  const n = acceleration.value.length
  const v = acceleration.value[n - 1] || 0
  const clamped = Math.max(-ACC_RANGE, Math.min(ACC_RANGE, v))
  return {
    x: ((n - 1) / (SAMPLE_COUNT - 1)) * W,
    y: H / 2 - (clamped / ACC_RANGE) * (H / 2),
  }
})

// ─── LED 進度條格數 (20 格) ───
const filledLeds = computed(() => Math.round(Math.min(props.speed / SPD_MAX, 1) * 20))
const speedPct = computed(() => Math.round((Math.min(props.speed, SPD_MAX) / SPD_MAX) * 100))

// ─── 大字 blip ───
const blip = ref(false)
watch(
  () => props.speed,
  () => {
    blip.value = true
    setTimeout(() => { blip.value = false }, 200)
  }
)

// ─── REC 閃燈 ───
const recBlink = ref(true)
let recTimer = null
onMounted(() => {
  recTimer = window.setInterval(() => { recBlink.value = !recBlink.value }, 900)
})
onUnmounted(() => {
  if (recTimer !== null) window.clearInterval(recTimer)
})

// ─── 時鐘 ───
const now = ref(new Date())
let clockTimer = null
onMounted(() => {
  clockTimer = window.setInterval(() => { now.value = new Date() }, 1000)
})
onUnmounted(() => {
  if (clockTimer !== null) window.clearInterval(clockTimer)
})
const pad = (n) => String(n).padStart(2, '0')
const clockText = computed(() => {
  const d = now.value
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
})
const tripTimeText = computed(() => {
  const s = tripTime.value
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`
})
const distText = computed(() => {
  const m = tripDistance.value
  return m < 1000 ? Math.round(m) + 'm' : (m / 1000).toFixed(2) + 'km'
})

const accSymbol = computed(() => (currentAcc.value > 0.5 ? '▲' : currentAcc.value < -0.5 ? '▼' : '·'))
const accClass = computed(() => ({
  'vital--up': currentAcc.value > 0.5,
  'vital--down': currentAcc.value < -0.5,
}))

const spdColor = computed(() => `var(--meter-color-${themeColor.value})`)
</script>

<template>
  <div class="mon" :style="{ '--spd': spdColor }" @click="changeColor">
    <div class="mon__scan"></div>

    <!-- ═══════════ 頂部監視器 header ═══════════ -->
    <header class="mon__header">
      <div class="brand">
        <span class="brand__pulse" :class="{ 'brand__pulse--on': isGpsActive }"></span>
        <span class="brand__name">SPD·MON</span>
        <span class="brand__serial">GPS-01</span>
      </div>
      <div class="meta">
        <span class="meta__k">CLK</span>
        <span class="meta__v">{{ clockText }}</span>
        <span class="meta__sep">│</span>
        <span class="meta__k">T+</span>
        <span class="meta__v">{{ tripTimeText }}</span>
        <span class="meta__sep">│</span>
        <span class="rec" :class="{ 'rec--on': recBlink }">
          <span class="rec__dot"></span>REC
        </span>
      </div>
    </header>

    <!-- ═══════════ 上排：SPD hero + 3 張 vitals ═══════════ -->
    <div class="vitals-row">
      <!-- HERO SPD panel -->
      <section class="panel panel--hero">
        <span class="panel__c panel__c--tl"></span>
        <span class="panel__c panel__c--tr"></span>
        <span class="panel__c panel__c--bl"></span>
        <span class="panel__c panel__c--br"></span>
        <div class="panel__title">
          <span class="dot"></span>SPD · km/h · 0—{{ SPD_MAX }}
        </div>

        <div class="hero-body">
          <div class="hero-num" :class="{ 'hero-num--blip': blip }">{{ speed }}</div>
          <div class="hero-unit">
            <span>km</span>
            <span class="slash">/</span>
            <span>h</span>
          </div>
        </div>

        <div class="hero-foot">
          <div class="leds">
            <div
              v-for="i in 20"
              :key="i"
              class="led"
              :class="{
                'led--on': i <= filledLeds,
                'led--warn': i > 12 && i <= filledLeds,
                'led--crit': i > 17 && i <= filledLeds,
              }"
            ></div>
          </div>
          <div class="pct">{{ speedPct }}<span>%</span></div>
        </div>
      </section>

      <!-- 右側 3 張 vitals -->
      <aside class="vitals-stack">
        <div class="panel panel--v">
          <span class="panel__c panel__c--tl"></span>
          <span class="panel__c panel__c--tr"></span>
          <span class="panel__c panel__c--bl"></span>
          <span class="panel__c panel__c--br"></span>
          <div class="panel__title panel__title--sm"><span class="dot"></span>MAX</div>
          <div class="v-body">
            <div class="v-num">{{ maxSpeed }}</div>
            <div class="v-unit">km/h</div>
          </div>
        </div>

        <div class="panel panel--v">
          <span class="panel__c panel__c--tl"></span>
          <span class="panel__c panel__c--tr"></span>
          <span class="panel__c panel__c--bl"></span>
          <span class="panel__c panel__c--br"></span>
          <div class="panel__title panel__title--sm"><span class="dot"></span>AVG</div>
          <div class="v-body">
            <div class="v-num">{{ avgSpeed }}</div>
            <div class="v-unit">km/h</div>
          </div>
        </div>

        <div class="panel panel--v panel--acc" :class="accClass">
          <span class="panel__c panel__c--tl"></span>
          <span class="panel__c panel__c--tr"></span>
          <span class="panel__c panel__c--bl"></span>
          <span class="panel__c panel__c--br"></span>
          <div class="panel__title panel__title--sm"><span class="dot"></span>ACC</div>
          <div class="v-body">
            <div class="v-num">
              <span class="acc-sym">{{ accSymbol }}</span>{{ Math.abs(currentAcc).toFixed(1) }}
            </div>
            <div class="v-unit">km/h/s</div>
          </div>
        </div>
      </aside>
    </div>

    <!-- ═══════════ CH I 波形 panel ═══════════ -->
    <section class="panel panel--wave panel--wave-main">
      <span class="panel__c panel__c--tl"></span>
      <span class="panel__c panel__c--tr"></span>
      <span class="panel__c panel__c--bl"></span>
      <span class="panel__c panel__c--br"></span>
      <div class="panel__title">
        <span class="ch-tag ch-tag--i">I</span>SPD · WAVEFORM
      </div>

      <div class="wave-box">
        <svg viewBox="0 0 1000 200" preserveAspectRatio="none">
          <line x1="0" y1="100" x2="1000" y2="100" stroke="rgba(0,255,100,0.15)" stroke-dasharray="4 4" />
          <line x1="0" y1="20" x2="1000" y2="20" stroke="rgba(255,42,77,0.35)" stroke-dasharray="2 4" />
          <line x1="0" y1="180" x2="1000" y2="180" stroke="rgba(255,42,77,0.15)" stroke-dasharray="2 4" />
          <polyline
            :points="speedPoints"
            fill="none"
            :stroke="spdColor"
            stroke-width="2.4"
            stroke-linejoin="round"
            stroke-linecap="round"
            class="wave"
          />
          <circle :cx="cursorI.x" :cy="cursorI.y" r="12" :fill="spdColor" opacity="0.2" class="halo" />
          <circle :cx="cursorI.x" :cy="cursorI.y" r="4" :fill="spdColor" />
        </svg>
        <div class="ticks">
          <span>{{ SPD_MAX }}</span>
          <span>{{ SPD_MAX / 2 }}</span>
          <span>0</span>
        </div>
      </div>
    </section>

    <!-- ═══════════ CH II 波形 panel ═══════════ -->
    <section class="panel panel--wave panel--wave-sub">
      <span class="panel__c panel__c--tl"></span>
      <span class="panel__c panel__c--tr"></span>
      <span class="panel__c panel__c--bl"></span>
      <span class="panel__c panel__c--br"></span>
      <div class="panel__title">
        <span class="ch-tag ch-tag--ii">II</span>ACC · WAVEFORM · ±{{ ACC_RANGE }}
      </div>

      <div class="wave-box wave-box--sub">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
          <line x1="0" y1="50" x2="1000" y2="50" stroke="rgba(255,176,32,0.35)" stroke-dasharray="4 4" />
          <polyline
            :points="accPoints"
            fill="none"
            stroke="#ffb020"
            stroke-width="1.8"
            stroke-linejoin="round"
            class="wave"
          />
          <circle :cx="cursorII.x" :cy="cursorII.y" r="9" fill="#ffb020" opacity="0.2" class="halo" />
          <circle :cx="cursorII.x" :cy="cursorII.y" r="3" fill="#ffb020" />
        </svg>
        <div class="ticks">
          <span>+{{ ACC_RANGE }}</span>
          <span>0</span>
          <span>-{{ ACC_RANGE }}</span>
        </div>
      </div>
    </section>

    <!-- ═══════════ 底部設定列 ═══════════ -->
    <footer class="mon__footer">
      <span class="cfg"><span class="cfg__k">SWP</span>{{ SAMPLE_INTERVAL }}ms</span>
      <span class="cfg"><span class="cfg__k">GAIN</span>1.0×</span>
      <span class="cfg"><span class="cfg__k">N</span>{{ SAMPLE_COUNT }}</span>
      <span class="cfg"><span class="cfg__k">DIST</span>{{ distText }}</span>
      <span class="cfg" v-if="accuracy !== null"><span class="cfg__k">±</span>{{ Math.round(accuracy) }}m</span>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
$bg: #030a04;
$phos: #cfeed6;
$panel-bg: rgba(0, 15, 5, 0.55);
$panel-border: rgba(0, 255, 100, 0.28);

.mon {
  position: absolute;
  inset: 0;
  padding: 22px 10px 128px;
  background:
    radial-gradient(ellipse at 50% 30%, rgba(0, 255, 100, 0.04) 0%, transparent 60%),
    radial-gradient(ellipse at 50% 100%, #0a1a0a 0%, #020402 80%);
  color: $phos;
  font-family: 'Share Tech Mono', monospace;
  display: grid;
  grid-template-rows: auto auto 1.4fr 0.9fr auto;
  gap: 10px;
  overflow: hidden;
}
.mon__scan {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 3px,
    rgba(0, 255, 100, 0.035) 3px,
    rgba(0, 255, 100, 0.035) 4px
  );
  pointer-events: none;
  z-index: 5;
}

/* ═══════════ 通用 panel 樣式 ═══════════ */
.panel {
  position: relative;
  border: 1px solid $panel-border;
  border-radius: 3px;
  background:
    linear-gradient(90deg, rgba(0, 255, 100, 0.06) 1px, transparent 1px) 0 0 / 20px 20px,
    linear-gradient(rgba(0, 255, 100, 0.06) 1px, transparent 1px) 0 0 / 20px 20px,
    linear-gradient(90deg, rgba(0, 255, 100, 0.15) 1px, transparent 1px) 0 0 / 100px 60px,
    linear-gradient(rgba(0, 255, 100, 0.15) 1px, transparent 1px) 0 0 / 100px 60px,
    $panel-bg;
  padding: 14px 12px 10px;
  min-width: 0;
  min-height: 0;

  &__c {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid var(--spd);
    pointer-events: none;
    &--tl { top: -2px; left: -2px; border-right: 0; border-bottom: 0; }
    &--tr { top: -2px; right: -2px; border-left: 0; border-bottom: 0; }
    &--bl { bottom: -2px; left: -2px; border-right: 0; border-top: 0; }
    &--br { bottom: -2px; right: -2px; border-left: 0; border-top: 0; }
  }

  &__title {
    position: absolute;
    top: -8px;
    left: 12px;
    background: #030603;
    padding: 1px 8px;
    font-size: 10px;
    letter-spacing: 0.25em;
    color: var(--spd);
    text-shadow: 0 0 4px var(--spd);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
    max-width: calc(100% - 24px);
    overflow: hidden;
    text-overflow: ellipsis;

    &--sm { font-size: 9px; letter-spacing: 0.2em; }

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--spd);
      box-shadow: 0 0 5px var(--spd);
    }
    .ch-tag {
      font-family: 'Orbitron', monospace;
      font-weight: 900;
      padding: 0 5px;
      border: 1px solid;
      border-radius: 2px;
      line-height: 1.3;
      &--i { color: var(--spd); border-color: var(--spd); }
      &--ii { color: #ffb020; border-color: #ffb020; text-shadow: 0 0 4px #ffb020; }
    }
  }
}

/* ═══════════ Header ═══════════ */
.mon__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 12px;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid $panel-border;
  border-radius: 3px;
  font-size: 11px;
  letter-spacing: 0.18em;
  flex-wrap: wrap;
  gap: 6px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--spd);
  font-weight: 700;
  text-shadow: 0 0 6px var(--spd);
  &__pulse {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #444;
    &--on {
      background: var(--spd);
      box-shadow: 0 0 8px var(--spd);
      animation: pulse 1.4s infinite;
    }
  }
  &__name { font-size: 13px; }
  &__serial {
    color: rgba(207, 238, 214, 0.4);
    font-size: 10px;
    padding: 1px 6px;
    border: 1px solid rgba(207, 238, 214, 0.2);
    border-radius: 2px;
  }
}
.meta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: rgba(207, 238, 214, 0.6);
  &__k { opacity: 0.45; }
  &__v { color: var(--spd); text-shadow: 0 0 4px var(--spd); }
  &__sep { opacity: 0.3; }
}
.rec {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #ff3040;
  font-weight: 700;
  opacity: 0.3;
  transition: opacity 0.2s;
  &--on { opacity: 1; }
  &__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ff3040;
    box-shadow: 0 0 8px #ff3040;
  }
}

/* ═══════════ Vitals row（上排） ═══════════ */
.vitals-row {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: 10px;
  min-height: 0;
}

/* HERO SPD */
.panel--hero {
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 8px;
  padding: 18px 14px 12px;
}
.hero-body {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 0;
  overflow: hidden;
}
.hero-num {
  font-family: 'Orbitron', monospace;
  font-weight: 900;
  font-size: clamp(4rem, 22vw, 8.5rem);
  line-height: 0.85;
  color: var(--spd);
  text-shadow:
    0 0 6px var(--spd),
    0 0 22px var(--spd),
    0 0 40px rgba(0, 255, 100, 0.3);
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
  transition: transform 0.15s;
  &--blip { transform: scale(1.03); }
}
.hero-unit {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: rgba(207, 238, 214, 0.55);
  font-size: 13px;
  letter-spacing: 0.15em;
  line-height: 1.4;
  .slash { opacity: 0.3; }
}
.hero-foot {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 10px;
}
.leds {
  display: flex;
  gap: 2px;
}
.led {
  flex: 1;
  height: 8px;
  border-radius: 1px;
  background: rgba(0, 255, 100, 0.08);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.6);
  &--on { background: var(--spd); box-shadow: 0 0 4px var(--spd); }
  &--warn { background: #ffb020; box-shadow: 0 0 4px #ffb020; }
  &--crit { background: #ff2a4d; box-shadow: 0 0 5px #ff2a4d; }
}
.pct {
  font-family: 'Orbitron', monospace;
  font-weight: 700;
  font-size: 15px;
  color: var(--spd);
  text-shadow: 0 0 4px var(--spd);
  font-variant-numeric: tabular-nums;
  span { font-size: 9px; opacity: 0.6; margin-left: 1px; }
}

/* 右側 3 張 vitals */
.vitals-stack {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  min-height: 0;
}
.panel--v {
  padding: 12px 10px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-body {
  text-align: right;
  font-variant-numeric: tabular-nums;
  width: 100%;
}
.v-num {
  font-family: 'Orbitron', monospace;
  font-weight: 800;
  font-size: clamp(1.4rem, 6vw, 2rem);
  line-height: 1;
  color: var(--spd);
  text-shadow: 0 0 5px var(--spd);
  .acc-sym { font-size: 0.75em; margin-right: 3px; }
}
.v-unit {
  margin-top: 3px;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: rgba(207, 238, 214, 0.4);
}
.panel--acc {
  &.vital--up {
    .panel__c { border-color: #22e07a; }
    .panel__title { color: #22e07a; text-shadow: 0 0 4px #22e07a;
      .dot { background: #22e07a; box-shadow: 0 0 5px #22e07a; }
    }
    .v-num { color: #22e07a; text-shadow: 0 0 5px #22e07a; }
  }
  &.vital--down {
    .panel__c { border-color: #ff8080; }
    .panel__title { color: #ff8080; text-shadow: 0 0 4px #ff8080;
      .dot { background: #ff8080; box-shadow: 0 0 5px #ff8080; }
    }
    .v-num { color: #ff8080; text-shadow: 0 0 5px #ff8080; }
  }
}

/* ═══════════ 波形 panels ═══════════ */
.panel--wave {
  padding: 14px 10px 6px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}
.wave-box {
  position: relative;
  flex: 1;
  min-height: 0;
  padding-right: 22px;
  svg {
    width: 100%;
    height: 100%;
    display: block;
    overflow: visible;
  }
  .wave { filter: drop-shadow(0 0 3px currentColor); }
  .ticks {
    position: absolute;
    right: 2px;
    top: 4px;
    bottom: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 9px;
    color: rgba(207, 238, 214, 0.5);
    text-align: right;
    pointer-events: none;
  }
  &--sub .ticks span:nth-child(1) { color: rgba(255,176,32,0.7); }
  &--sub .ticks span:nth-child(3) { color: rgba(255,176,32,0.55); }
}
.panel--wave-sub {
  .panel__c { border-color: #ffb020; }
}

.halo { animation: halo 1.2s infinite; }

/* ═══════════ Footer ═══════════ */
.mon__footer {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 5px 12px;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid $panel-border;
  border-radius: 3px;
  font-size: 10px;
  letter-spacing: 0.15em;
  color: rgba(207, 238, 214, 0.6);
  flex-wrap: wrap;
  .cfg {
    display: inline-flex;
    gap: 4px;
    align-items: baseline;
    &__k { color: rgba(207, 238, 214, 0.35); font-size: 9px; }
  }
}

/* ═══════════ Animations ═══════════ */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
@keyframes halo {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 0.05; }
}

/* ═══════════ Responsive ═══════════ */
@media (max-width: 380px) {
  .vitals-row { grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr); }
  .hero-num { font-size: clamp(3.5rem, 20vw, 6rem); }
  .v-num { font-size: 1.4rem; }
  .panel__title { font-size: 9px; letter-spacing: 0.2em; }
}
@media (orientation: landscape) {
  .mon { grid-template-rows: auto 1.2fr 1fr 0.6fr auto; }
  .hero-num { font-size: clamp(4rem, 14vw, 9rem); }
}
</style>
