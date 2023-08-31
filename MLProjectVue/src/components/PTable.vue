<script setup>
import { ref } from "vue";
import ptableData from "@/assets/ptable.json";

const PTablePreview = ref({
    "Background": '#fff',
    "Value": '',
    "Name": '',
    "FullName": ''
});

const PTypeIndex = ref(1);

</script>

<template>
  <div class="p-table-div">
    <!-- class div1 to div122 -->
    <div 
        v-for="(key,index) in ptableData" 
        :title="key.fullName" 
        :key="index" :style="'background:'+key.background" 
        class="p-btn"
        :class="'div'+(index+1)"
        @mouseover="PTablePreview.Background=key.background;PTablePreview.Value=key.value;PTablePreview.Name=key.name;PTablePreview.FullName=key.fullName"
        @mouseout="PTablePreview.Background='';PTablePreview.Value='';PTablePreview.Name='';PTablePreview.FullName=''"
        >
        {{key.name}}
    </div>
    <div class="div121" v-if="PTablePreview" :style="'background:'+PTablePreview.Background">
        <span class="value">{{PTablePreview.Value}}</span>
        <span class="name">{{PTablePreview.Name}}</span>
        <span class="full-name">{{PTablePreview.FullName}}</span>
    </div>
    <div class="div122 p-btn" v-if="PTypeIndex==1 || PTypeIndex==3">*</div>
    <div class="div123" v-if="PTypeIndex==1">
        Select elements to search for materials with only these elements
    </div>
    <div class="div123" v-if="PTypeIndex==2">
        Select elements to search for materials with at least these elements
    </div>
    <div class="div123 type3" style="border:0" v-if="PTypeIndex==3">
        <div class="p-btn">0</div>
        <div class="p-btn">1</div>
        <div class="p-btn">2</div>
        <div class="p-btn">3</div>
        <div class="p-btn">4</div>
        <div class="p-btn">5</div>
        <div class="p-btn">6</div>
        <div class="p-btn">7</div>
        <div class="p-btn">8</div>
        <div class="p-btn">9</div>
        <div class="p-btn">(</div>
        <div class="p-btn">)</div>
    </div>
    <div class="div124">
        <div :class="PTypeIndex == 1?'active':''" @click="PTypeIndex=1">Only Elements</div>
        <div :class="PTypeIndex == 2?'active':''" @click="PTypeIndex=2">At Least Elements</div>
        <div :class="PTypeIndex == 3?'active':''" @click="PTypeIndex=3">Formula</div>
    </div>


    
    
  </div>
</template>

<style lang="scss" scoped>
.p-table-div {
    position: relative;
    width: calc(100% - 60px);
    max-width: 1000px;
    height: auto;
    min-height: 100px;
    background: #fff;
    margin: 0 auto;
    border-radius: 10px;
    padding: 30px;

    display: grid;
    grid-template-columns: repeat(18, 1fr);
    grid-template-rows: repeat(9, 1fr);
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    >div{
        background: #efefef;
        text-align: center;
        line-height: 40px;
        border-radius: 5px;
        // aspect-ratio: 1 / 1;
        font-size: 14px;
        // &:hover{
        //     opacity: 0.7;
        // }
    }
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 18 / 2 / 19; }
.div3 { grid-area: 2 / 1 / 3 / 2; }
.div4 { grid-area: 2 / 2 / 3 / 3; }
.div5 { grid-area: 2 / 13 / 3 / 14; }
.div6 { grid-area: 2 / 14 / 3 / 15; }
.div7 { grid-area: 2 / 15 / 3 / 16; }
.div8 { grid-area: 2 / 16 / 3 / 17; }
.div9 { grid-area: 2 / 17 / 3 / 18; }
.div10 { grid-area: 2 / 18 / 3 / 19; }
.div11 { grid-area: 3 / 1 / 4 / 2; }
.div12 { grid-area: 3 / 2 / 4 / 3; }
.div13 { grid-area: 3 / 13 / 4 / 14; }
.div14 { grid-area: 3 / 14 / 4 / 15; }
.div15 { grid-area: 3 / 15 / 4 / 16; }
.div16 { grid-area: 3 / 16 / 4 / 17; }
.div17 { grid-area: 3 / 17 / 4 / 18; }
.div18 { grid-area: 3 / 18 / 4 / 19; }
.div19 { grid-area: 4 / 1 / 5 / 2; }
.div20 { grid-area: 4 / 2 / 5 / 3; }
.div21 { grid-area: 4 / 3 / 5 / 4; }
.div22 { grid-area: 4 / 4 / 5 / 5; }
.div23 { grid-area: 4 / 5 / 5 / 6; }
.div24 { grid-area: 4 / 6 / 5 / 7; }
.div25 { grid-area: 4 / 7 / 5 / 8; }
.div26 { grid-area: 4 / 8 / 5 / 9; }
.div27 { grid-area: 4 / 9 / 5 / 10; }
.div28 { grid-area: 4 / 10 / 5 / 11; }
.div29 { grid-area: 4 / 11 / 5 / 12; }
.div30 { grid-area: 4 / 12 / 5 / 13; }
.div31 { grid-area: 4 / 13 / 5 / 14; }
.div32 { grid-area: 4 / 14 / 5 / 15; }
.div33 { grid-area: 4 / 15 / 5 / 16; }
.div34 { grid-area: 4 / 16 / 5 / 17; }
.div35 { grid-area: 4 / 17 / 5 / 18; }
.div36 { grid-area: 4 / 18 / 5 / 19; }
.div37 { grid-area: 5 / 1 / 6 / 2; }
.div38 { grid-area: 5 / 2 / 6 / 3; }
.div39 { grid-area: 5 / 3 / 6 / 4; }
.div40 { grid-area: 5 / 4 / 6 / 5; }
.div41 { grid-area: 5 / 5 / 6 / 6; }
.div42 { grid-area: 5 / 6 / 6 / 7; }
.div43 { grid-area: 5 / 7 / 6 / 8; }
.div44 { grid-area: 5 / 8 / 6 / 9; }
.div45 { grid-area: 5 / 9 / 6 / 10; }
.div46 { grid-area: 5 / 10 / 6 / 11; }
.div47 { grid-area: 5 / 11 / 6 / 12; }
.div48 { grid-area: 5 / 12 / 6 / 13; }
.div49 { grid-area: 5 / 13 / 6 / 14; }
.div50 { grid-area: 5 / 14 / 6 / 15; }
.div51 { grid-area: 5 / 15 / 6 / 16; }
.div52 { grid-area: 5 / 16 / 6 / 17; }
.div53 { grid-area: 5 / 17 / 6 / 18; }
.div54 { grid-area: 5 / 18 / 6 / 19; }
.div55 { grid-area: 6 / 1 / 7 / 2; }
.div56 { grid-area: 6 / 2 / 7 / 3; }
.div57 { grid-area: 6 / 3 / 7 / 4; }
.div58 { grid-area: 6 / 4 / 7 / 5; }
.div59 { grid-area: 6 / 5 / 7 / 6; }
.div60 { grid-area: 6 / 6 / 7 / 7; }
.div61 { grid-area: 6 / 7 / 7 / 8; }
.div62 { grid-area: 6 / 8 / 7 / 9; }
.div63 { grid-area: 6 / 9 / 7 / 10; }
.div64 { grid-area: 6 / 10 / 7 / 11; }
.div65 { grid-area: 6 / 11 / 7 / 12; }
.div66 { grid-area: 6 / 12 / 7 / 13; }
.div67 { grid-area: 6 / 13 / 7 / 14; }
.div68 { grid-area: 6 / 14 / 7 / 15; }
.div69 { grid-area: 6 / 15 / 7 / 16; }
.div70 { grid-area: 6 / 16 / 7 / 17; }
.div71 { grid-area: 6 / 17 / 7 / 18; }
.div72 { grid-area: 6 / 18 / 7 / 19; }
.div73 { grid-area: 7 / 1 / 8 / 2; }
.div74 { grid-area: 7 / 2 / 8 / 3; }
.div75 { grid-area: 7 / 3 / 8 / 4; }
.div76 { grid-area: 7 / 4 / 8 / 5; }
.div77 { grid-area: 7 / 5 / 8 / 6; }
.div78 { grid-area: 7 / 6 / 8 / 7; }
.div79 { grid-area: 7 / 7 / 8 / 8; }
.div80 { grid-area: 7 / 8 / 8 / 9; }
.div81 { grid-area: 7 / 9 / 8 / 10; }
.div82 { grid-area: 7 / 10 / 8 / 11; }
.div83 { grid-area: 7 / 11 / 8 / 12; }
.div84 { grid-area: 7 / 12 / 8 / 13; }
.div85 { grid-area: 7 / 13 / 8 / 14; }
.div86 { grid-area: 7 / 14 / 8 / 15; }
.div87 { grid-area: 7 / 15 / 8 / 16; }
.div88 { grid-area: 7 / 16 / 8 / 17; }
.div89 { grid-area: 7 / 17 / 8 / 18; }
.div90 { grid-area: 7 / 18 / 8 / 19; }
.div91 { grid-area: 8 / 3 / 9 / 4; }
.div92 { grid-area: 8 / 4 / 9 / 5; }
.div93 { grid-area: 8 / 5 / 9 / 6; }
.div94 { grid-area: 8 / 6 / 9 / 7; }
.div95 { grid-area: 8 / 7 / 9 / 8; }
.div96 { grid-area: 8 / 8 / 9 / 9; }
.div97 { grid-area: 8 / 9 / 9 / 10; }
.div98 { grid-area: 8 / 10 / 9 / 11; }
.div99 { grid-area: 8 / 11 / 9 / 12; }
.div100 { grid-area: 8 / 12 / 9 / 13; }
.div101 { grid-area: 8 / 13 / 9 / 14; }
.div102 { grid-area: 8 / 14 / 9 / 15; }
.div103 { grid-area: 8 / 15 / 9 / 16; }
.div104 { grid-area: 8 / 16 / 9 / 17; }
.div105 { grid-area: 8 / 17 / 9 / 18; }
.div106 { grid-area: 9 / 3 / 10 / 4; }
.div107 { grid-area: 9 / 4 / 10 / 5; }
.div108 { grid-area: 9 / 5 / 10 / 6; }
.div109 { grid-area: 9 / 6 / 10 / 7; }
.div110 { grid-area: 9 / 7 / 10 / 8; }
.div111 { grid-area: 9 / 8 / 10 / 9; }
.div112 { grid-area: 9 / 9 / 10 / 10; }
.div113 { grid-area: 9 / 10 / 10 / 11; }
.div114 { grid-area: 9 / 11 / 10 / 12; }
.div115 { grid-area: 9 / 12 / 10 / 13; }
.div116 { grid-area: 9 / 13 / 10 / 14; }
.div117 { grid-area: 9 / 14 / 10 / 15; }
.div118 { grid-area: 9 / 15 / 10 / 16; }
.div119 { grid-area: 9 / 16 / 10 / 17; }
.div120 { grid-area: 9 / 17 / 10 / 18; }
.p-table-div>.div121 { 
    position: relative;
    grid-area: 2 / 3 / 4 / 5; 
    background: #fff;
        // border: 1px solid #ccc;
    >.value{
        position: absolute;
        top: -5px;
        left: 5px;
        font-size: 14px;
        color: #000;
    }
    >.name{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 20px;
        color: #000;
    }
    >.full-name{
        position: absolute;
        bottom: -5px;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        color: #000;
    }
}
.p-table-div>.div122 { 
    grid-area: 2 / 5 / 4 / 7; 
    background: #fff;
        border: 1px solid #ccc;
        line-height: 80px;
        font-size: 50px;
}
.p-table-div>.div123 { 
    grid-area: 2 / 7 / 4 / 13; 
    background: #fff;
    border: 1px solid #ccc;

    &.type3{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 2px;
        grid-row-gap: 2px;
        >div{
            display: inline-block;
            // grid-area: 1 1;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    }

    
}
.p-table-div>div.div124 { 
    grid-area: 1 / 6 / 2 / 14; 
    background: #fff;
        border: 1px solid #ccc;
    display: flex;
    border-radius: 25px;
    overflow: hidden;
    >div{
        flex: 1;
        height: 100%;
        border-right: 1px solid #ccc;
        cursor: pointer;
        &:hover{
            background: #ccc;
        }
        // border-radius: 25px;
        &:last-child{
            border-right: 0;
        }
        &.active{
            background: var(--theme-color-2);
            color: #fff;
            &:hover{
                background: var(--theme-color-2);
            }
        }
    }
}

.p-btn{
    transition: 0.1s ease-in-out;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
        transform: scale(1.05);
    }
}
</style>
