<template>
  <div class="overflow-auto">
    <table
      border="1"
      :style="{ 'min-width': minWidth }"
    >
      <colgroup>
        <col
          v-for="(col, key) in columns"
          :key="key"
          :width="col.width"
        >
      </colgroup>
      <thead>
        <tr>
          <th
            v-for="col in columns"
            v-show="!col.hide"
            :key="col.key"
            :style="[
              { 'text-align': col.thAlign },
              { 'width': col.width },
            ]"
          >
            <!-- <i
            v-if="col.sort"
            class="fas fa-sort ml-1"
            @click="sortHandler(col)"
          /> -->
            <div
              class="d-flex justify-content-between align-items-center"
              :style="{minWidth: col.all ? '55px' : 'auto'}"
            >
              <div v-html="col.title" />
              <input
                v-if="col.all"
                :id="`allSelected${id}`"
                type="checkbox"
                class="cursor"
                @click="$emit('selectAll', $event)"
              >
            </div>
          </th>
        </tr>
      </thead>
      <tbody v-if="showData.length">
        <template v-for="(row, index) in showData" :key="row.id">
          <tr>
            <td
              v-for="col in columns"
              v-show="!col.hide"
              :key="col.col"
              class="p-0"
              :style="[
                { 'text-align': col.tdAlign },
                { 'width': col.width },
              ]"
            >
              <template v-if="col.slot">
                <slot
                  :name="col.slot"
                  :row="row"
                  :col="col"
                  :index="index"
                />
              </template>
              <template v-else>
                <span>
                  {{
                    row[col.key] != null && row[col.key].toString() != ""
                      ? row[col.key] 
                      : isNullStr
                        ? isNullStr 
                        : ""
                  }}</span>
              </template>
            </td>
          </tr>
          
        </template>
      </tbody>
      <tbody v-else>
        <tr>
          <td
            :colspan="columns.length"
            class="text-center"
          >
            {{ isloading ? "loading..." : "not found" }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
//static
//dynamic
export default {
  name: "PTable",
  props: {
    id: {
      type: String,
      default: "",
    },
    isloading: {
      type: Boolean,
      default: false,
    },
    isNullStr: {
      type: String,
      default: "",
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    showList: {
      type: Number,
      default: 1,
    },
    type: {
      type: String,
      default: "",
    },
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    listData: {
      type: Array,
      default() {
        return [];
      },
    },
    minWidth: {
      type: String,
      default: "100%",
    },
  },
  data() {
    return {
      sort: "DESC",
    };
  },

  computed: {
    showData() {
      if (this.type === "static") {
        return this.listData.slice(
          (this.currentPage - 1) * this.showList,
          (this.currentPage - 1) * this.showList + this.showList
        );
      }
      return this.listData;
    },
  },

  methods: {
    sortHandler(data) {
      let newArr = JSON.parse(JSON.stringify(this.listData));
      let newData = [];
      if (this.sort == "DESC") {
        if (data.sort === "numSort") {
          newData = newArr.sort((a, b) => {
            a = a[data.key] ? a[data.key].replace(/,/g, "") : 0;
            b = b[data.key] ? b[data.key].replace(/,/g, "") : 0;
            return Number(a) > Number(b) ? 1 : Number(a) < Number(b) ? -1 : 0;
          });
        } else {
          newData = newArr.sort((a, b) => {
            a = a[data.key] ? a[data.key] : "";
            b = b[data.key] ? b[data.key] : "";
            return a > b ? 1 : a < b ? -1 : 0;
          });
        }
        this.sort = "ASC";
      } else {
        if (data.sort === "numSort") {
          newData = newArr.sort((a, b) => {
            a = a[data.key] ? a[data.key].replace(/,/g, "") : 0;
            b = a[data.key] ? b[data.key].replace(/,/g, "") : 0;
            return Number(a) > Number(b) ? -1 : Number(a) < Number(b) ? 1 : 0;
          });
        } else {
          newData = newArr.sort((a, b) => {
            a = a[data.key] ? a[data.key] : "";
            b = b[data.key] ? b[data.key] : "";
            return a > b ? -1 : a < b ? 1 : 0;
          });
        }
        this.sort = "DESC";
      }
      this.$emit("update:listData", newData);
    },
  },
};
</script>

<style lang="scss" scoped>
table{
  position: relative;
  min-width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
}
table td,
table th {
  padding: 4px !important ;
  white-space: nowrap;
  overflow: auto;
  max-width: 300px;
  > span{
    max-width: 300px;
    display: block;
    overflow: auto;
  }
}

table td,
table th,
tbody {
  word-break: break-all;
  border: 1px solid var(--theme-color-2-05);;

}
table th{
  background: var(--theme-color-2-02);
  color: var(--theme-color-2);
}
table td{
  color: var(--theme-color-2);
}
input{
  height: auto;
}
.bg-disabel {
  background-color: #00abd667;
}
</style>
<style lang="scss" scoped>
@media print {
  .overflow-auto {
    overflow: inherit !important;
  }
  table {
    min-width: initial !important;
  }
  table td,
  table th,
  tbody {
    word-break: break-all !important;
    max-width: 200px !important;
    border: 1px solid #000 !important;

  }
  table td,
  table th {
  white-space: normal !important;
  }
  .table-bordered {
    border: none !important;
    margin-bottom: 0px !important;
  }
}
</style>
