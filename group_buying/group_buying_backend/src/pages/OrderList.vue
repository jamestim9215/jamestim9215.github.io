<script setup>
import { ref, nextTick } from "vue";

import Header from "@/components/Header.vue";
import Boxing from "@/components/boxing.vue";
import Tabs from "@/components/Tabs.vue";
import { showLoading, hideLoading } from "@/common/common";
import "@/assets/style/search.css";
</script>

<template>
  <Header></Header>
  <div class="container-fluid">
    <div class="content-div">
      <Tabs :tab-index="0" />
      <div class="content-list-div">
        <div class="title">訂單管理列表</div>
        <div class="search-div">
          <div class="input-div">
            <label for="">日期區間</label>
            <input type="date" />
            <span>~</span>
            <input type="date" />
          </div>
          <div class="input-div">
            <label for="">產品</label>
            <select name="" id="">
              <option value="">--請選擇--</option>
              <option value="">原味烤饅頭</option>
              <option value="">花生烤饅頭</option>
            </select>
            <font-awesome-icon icon="fa-solid fa-caret-down" />
          </div>
          <div class="input-div">
            <label for="">訂單狀態</label>
            <select name="" id="">
              <option value="">--請選擇--</option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <font-awesome-icon icon="fa-solid fa-caret-down" />
          </div>
        </div>
        <div class="table-div">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>操作</th>
                <th>訂單編號</th>
                <th>訂單狀態</th>
                <th>項目</th>
                <th></th>
                <th></th>
                <th></th>
                <th>訂單金額</th>
                <th>商品</th>
                <th>運送方式</th>
                <th>付款方式</th>
                <th>訂單日期</th>
                <th>完成日期</th>
                <th>交貨日期</th>
                <th>歷史紀錄</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button class="btn btn-table-yellow">關閉</button>
                </td>
                <td>
                  <button class="btn btn-table-yellow">確認款項</button>
                  <button class="btn btn-table-red">取消訂單</button>
                </td>
                <td>T000005</td>
                <td>待確認匯款</td>
                <td>原味烤饅頭 (5入) x 10組</td>
                <td></td>
                <td></td>
                <td></td>
                <td>72,000</td>
                <td>2</td>
                <td>自取/宅配</td>
                <td>匯款</td>
                <td>2022/10/31</td>
                <td></td>
                <td></td>
                <td>查看</td>
              </tr>
              <tr class="child">
                <td></td>
                <td></td>
                <td></td>
                <td>-</td>
                <td>原味烤饅頭 (5入) x 10組</td>
                <td>360</td>
                <td>x</td>
                <td>100</td>
                <td>36,000</td>
                <td></td>
                <td>自取</td>
                <td>匯款</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="child">
                <td></td>
                <td></td>
                <td></td>
                <td>-</td>
                <td>原味烤饅頭 (5入) x 10組</td>
                <td>360</td>
                <td>x</td>
                <td>100</td>
                <td>36,000</td>
                <td></td>
                <td>宅配</td>
                <td>匯款</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <button class="btn btn-table-yellow">展開</button>
                </td>
                <td></td>
                <td>T000005</td>
                <td>已完成</td>
                <td>原味烤饅頭 (5入) x 10組</td>
                <td></td>
                <td></td>
                <td></td>
                <td>72,000</td>
                <td>2</td>
                <td>自取/宅配</td>
                <td>匯款</td>
                <td>2022/10/31</td>
                <td></td>
                <td></td>
                <td>查看</td>
              </tr>
              <tr>
                <td><button class="btn btn-table-yellow">關閉</button></td>
                <td></td>
                <td>T000005</td>
                <td>待出貨</td>
                <td>原味烤饅頭 (5入) x 10組</td>
                <td></td>
                <td></td>
                <td></td>
                <td>72,000</td>
                <td>2</td>
                <td>自取/宅配</td>
                <td>綠界支付</td>
                <td>2022/10/31</td>
                <td></td>
                <td></td>
                <td>查看</td>
              </tr>
              <tr class="child">
                <td></td>
                <td>
                  <button class="btn btn-table-yellow-50">已經取貨</button>
                </td>
                <td></td>
                <td>待取貨</td>
                <td>原味烤饅頭 (5入) x 10組</td>
                <td>360</td>
                <td>x</td>
                <td>100</td>
                <td>36,000</td>
                <td></td>
                <td>自取</td>
                <td>綠界支付</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="child">
                <td></td>
                <td>
                  <button class="btn btn-table-yellow-50">出貨通知</button>
                </td>
                <td></td>
                <td>待出貨</td>
                <td>原味烤饅頭 (5入) x 10組</td>
                <td>360</td>
                <td>x</td>
                <td>100</td>
                <td>36,000</td>
                <td></td>
                <td>宅配</td>
                <td>綠界支付</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><button class="btn btn-table-yellow">展開</button></td>
                <td>
                  <button class="btn btn-table-red">取消訂單</button>
                </td>
                <td>T000005</td>
                <td>待付款</td>
                <td>原味烤饅頭 (5入) x 10組</td>
                <td></td>
                <td></td>
                <td></td>
                <td>72,000</td>
                <td>2</td>
                <td>自取</td>
                <td>綠界支付</td>
                <td>2022/10/31</td>
                <td></td>
                <td></td>
                <td>查看</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-button-div"></div>
      </div>
    </div>
  </div>
  <Boxing />
</template>

<style scoped>
.content-div {
  position: relative;
  /* display: flex; */
  padding: 15px 15px;
  /* justify-content: space-between; */
}

.title {
  font-size: 24px;
  font-weight: 400;
}

@media (max-width: 767px) {
}

@media (max-width: 390px) {
}
</style>
