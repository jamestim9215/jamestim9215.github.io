<template>
  <div
    v-if="totalPage"
    class="hq-pagination row text-right"
    :class="'text-' + align"
  >
    <div class="col-12">
      <button
        class="btn btn-sm btn-outline-primary"
        :disabled="currentPage === 1"
        @click="changeHandler(1)"
      >
        <i class="fas fa-angle-double-left" />
      </button>
      <button
        class="btn btn-sm btn-outline-primary"
        :disabled="currentPage === 1"
        @click="preHandler()"
      >
        <i class="fas fa-angle-left" />
      </button>
      <button
        v-for="n in totalPage"
        v-show="(group - 1) * 10 + (isPhone ? 6 : 11) > n && n > (group - 1) * 10"
        :key="n"
        class="btn btn-sm btn-outline-primary"
        :class="{ active: currentPage === n }"
        @click="changeHandler(n)"
      >
        {{ n }}
      </button>
      <button
        class="btn btn-sm btn-outline-primary"
        :disabled="currentPage === totalPage"
        @click="nextHandler()"
      >
        <i class="fas fa-angle-right" />
      </button>
      <button
        class="btn btn-sm btn-outline-primary"
        :disabled="currentPage === totalPage"
        @click="changeHandler(totalPage)"
      >
        <i class="fas fa-angle-double-right" />
      </button>
    </div>
  </div>
</template>

<script>
import { isPhone } from "@/module/common";
export default {
  props: {
    showList: {
      type: Number,
      default: 1,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      default: 10,
    },
    align: {
      type: String,
      default: "right",
    },
  },
  data() {
    return {
      isPhone: isPhone(),
      group: 1,
    };
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
  },
  watch: {
    currentPage() {
      this.group = Math.ceil(this.currentPage / 10);
    },
  },
  methods: {
    changeHandler(n) {
      this.$emit("update:currentPage", n);
    },
    preHandler() {
      if (this.currentPage <= 1) return;
      this.$emit("update:currentPage", this.currentPage - 1);
    },
    nextHandler() {
      if (this.currentPage >= this.totalPage) return;
      this.$emit("update:currentPage", this.currentPage + 1);
    },
  },
};
</script>