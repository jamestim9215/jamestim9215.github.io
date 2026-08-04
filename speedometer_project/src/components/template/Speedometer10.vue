<script setup>
/**
 * Speedometer 10 — Trip Computer
 * 設計：中央大速度 + 環繞的資訊卡片：航向（羅盤）、海拔、trip 距離、trip 時間、平均、最高
 * 適合：長途行程總覽（機車環島、汽車長途）
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
  accuracy,
  maxSpeed,
  avgSpeed,
  tripDistance,
  tripTime,
  isGpsActive,
} = gps

const { themeColor, changeColor } = useThemeColor(1)

const compass = computed(() => {
  const h = heading.value
  if (h === null || h === undefined) return '—'
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  return dirs[Math.round(h / 45) % 8]
})

const headingDeg = computed(() =>
  heading.value === null ? '—' : Math.round(heading.value) + '°'
)

const altText = computed(() =>
  altitude.value === null ? '—' : Math.round(altitude.value)
)

const accText = computed(() =>
  accuracy.value === null ? '—' : Math.round(accuracy.value)
)

const distanceText = computed(() => {
  const m = tripDistance.value
  return m < 1000 ? `${Math.round(m)}` : (m / 1000).toFixed(2)
})
const distanceUnit = computed(() => (tripDistance.value < 1000 ? 'm' : 'km'))

const timeText = computed(() => {
  const s = tripTime.value
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  const pad = (n) => String(n).padStart(2, '0')
  return `${pad(h)}:${pad(m)}:${pad(sec)}`
})

const themeVar = computed(() => `var(--meter-color-${themeColor.value})`)
</script>

<template>
  <div class="trip" :style="{ '--accent': themeVar }" @click="changeColor">
    <!-- 中央速度 -->
    <div class="trip__hero">
      <div class="hero__label">
        <span class="dot" :class="{ 'dot--active': isGpsActive }" />
        <span>{{ isGpsActive ? 'GPS · LIVE' : 'GPS · WAIT' }}</span>
      </div>
      <div class="hero__speed">{{ speed }}</div>
      <div class="hero__unit">km/h</div>
    </div>

    <!-- 卡片網格 -->
    <div class="trip__grid">
      <!-- 羅盤 -->
      <div class="card card--compass">
        <div class="card__label">HEADING</div>
        <div class="compass">
          <div class="compass__ring">
            <div
              class="compass__needle"
              :style="{ transform: `rotate(${heading || 0}deg)` }"
            />
            <span class="tick tick--n">N</span>
            <span class="tick tick--e">E</span>
            <span class="tick tick--s">S</span>
            <span class="tick tick--w">W</span>
          </div>
        </div>
        <div class="card__meta">{{ compass }} · {{ headingDeg }}</div>
      </div>

      <!-- 海拔 -->
      <div class="card">
        <div class="card__label">ALTITUDE</div>
        <div class="card__value">
          {{ altText }}<small>m</small>
        </div>
        <div class="card__meta">±{{ accText }}m</div>
      </div>

      <!-- Trip 距離 -->
      <div class="card">
        <div class="card__label">DISTANCE</div>
        <div class="card__value">
          {{ distanceText }}<small>{{ distanceUnit }}</small>
        </div>
        <div class="card__meta">this trip</div>
      </div>

      <!-- Trip 時間 -->
      <div class="card">
        <div class="card__label">TIME</div>
        <div class="card__value card__value--mono">{{ timeText }}</div>
        <div class="card__meta">since start</div>
      </div>

      <!-- 平均 -->
      <div class="card">
        <div class="card__label">AVG</div>
        <div class="card__value">
          {{ avgSpeed }}<small>km/h</small>
        </div>
        <div class="card__meta">moving avg</div>
      </div>

      <!-- 最高 -->
      <div class="card card--accent">
        <div class="card__label">MAX</div>
        <div class="card__value">
          {{ maxSpeed }}<small>km/h</small>
        </div>
        <div class="card__meta">record</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trip {
  position: absolute;
  inset: 0;
  padding: 40px 12px 130px;
  background:
    radial-gradient(1200px 400px at 50% 30%, rgba(255,255,255,0.03), transparent),
    #0d0d0d;
  color: #eee;
  font-family: 'Tektur', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__hero {
    text-align: center;
    line-height: 0.85;

    .hero__label {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'Share Tech Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.3em;
      opacity: 0.6;
      margin-bottom: 12px;
      .dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #ffb020;
        &--active {
          background: #22e07a;
          box-shadow: 0 0 8px #22e07a;
        }
      }
    }
    .hero__speed {
      font-family: 'Orbitron', sans-serif;
      font-weight: 900;
      font-size: clamp(5rem, 26vw, 14rem);
      color: var(--accent);
      text-shadow: 0 0 30px var(--accent);
      letter-spacing: -0.05em;
      transition: color 0.3s, text-shadow 0.3s;
      font-variant-numeric: tabular-nums;
    }
    .hero__unit {
      font-size: 12px;
      opacity: 0.55;
      letter-spacing: 0.3em;
      margin-top: 6px;
    }
  }

  &__grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    align-content: end;
  }
}

.card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-variant-numeric: tabular-nums;

  &__label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.25em;
    opacity: 0.5;
  }
  &__value {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: baseline;
    gap: 3px;
    small {
      font-size: 11px;
      opacity: 0.55;
      font-weight: 400;
    }
    &--mono {
      font-family: 'Share Tech Mono', monospace;
      font-size: 20px;
    }
  }
  &__meta {
    font-size: 10px;
    opacity: 0.45;
    letter-spacing: 0.15em;
    margin-top: auto;
  }

  &--accent {
    border-color: color-mix(in oklab, var(--accent) 40%, transparent);
    background: linear-gradient(180deg, color-mix(in oklab, var(--accent) 8%, transparent), rgba(255,255,255,0.02));
    .card__value { color: var(--accent); }
  }

  &--compass {
    grid-column: span 3;
    align-items: center;

    .compass {
      display: flex;
      align-items: center;
      justify-content: center;
      &__ring {
        position: relative;
        width: 110px;
        height: 110px;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &__needle {
        width: 4px;
        height: 45%;
        background: linear-gradient(to bottom, var(--accent) 50%, #444 50%);
        border-radius: 2px;
        transform-origin: center 100%;
        position: absolute;
        top: 5%;
        transition: transform 0.4s ease-out;
        box-shadow: 0 0 6px var(--accent);
      }
      .tick {
        position: absolute;
        font-family: 'Share Tech Mono', monospace;
        font-size: 11px;
        opacity: 0.7;
        &--n { top: 2px; color: #fff; font-weight: 700; }
        &--e { right: 4px; }
        &--s { bottom: 2px; }
        &--w { left: 4px; }
      }
    }
  }
}

@media (orientation: landscape) {
  .trip {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 16px;
    padding: 20px 20px 100px;

    &__hero {
      align-self: center;
      .hero__speed { font-size: clamp(6rem, 45vh, 18rem); }
    }
    &__grid { grid-template-columns: repeat(2, 1fr); align-content: center; }
  }
  .card--compass { grid-column: span 2; }
}
</style>
