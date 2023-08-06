<template>
  <div class="row mb-3 hq-select">
    <div
      class="col-6"
    >
      <p>
        {{ (currentPage - 1) * showList + 1 }} -
        {{
          currentPage * showList > totalCount
            ? totalCount
            : currentPage * showList
        }}
        筆(items) / 共(Total) {{ totalCount ? totalCount : 0 }}
        筆(items)
      </p>
    </div>
    <div class="col-6 text-right">
      顯示(Displaying)
      <select
        id="dataCountSelect"
        name=""
        class="rounded border-border-light"
        @change="showListHandler"
        v-model="nowShowList"
      >
        <option :value="10">
          10
        </option>
        <option :value="20">
          20
        </option>
        <option :value="50">
          50
        </option>
        <option :value="100">
          100
        </option>
      </select>
      筆(items)
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showList: {
      type: Number,
      default: 0,
    },
    totalCount: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    showList(vN){
      console.log(vN);
      this.nowShowList = this.showList;
    }
  },
  created(){
    this.nowShowList = this.showList;
  },
  data() {
    return {
      nowShowList: 10
    };
  },
  methods: {
    showListHandler(e) {
      this.$emit("update:showList", Number(e.target.value));
      localStorage.removeItem('protalTodoListShowListcurrentPage');
    },
  },
};
</script>

<style scoped>
#dataCountSelect {
  width: auto;
  background: rgba(0, 0, 0, 0);
  border: 1px solid #777 !important;
  color: #999;
}
</style>
<style  lang="scss" scoped>
@import "@/assets/scss/_mixin.scss";
@include phone {
  .hq-select{
    font-size: 14px;
  }
}
</style>