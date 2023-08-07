<script setup>
import { ref,computed } from "vue";
import Header from "@/components/backend/Header.vue";
import BackendMenu from "@/components/backend/BackendMenu.vue";
import HomeSetting from "@/components/backend/Home.vue";
import AboutUsSetting from "@/components/backend/AboutUs.vue";
import BackendAccountSetting from "@/components/backend/AccountSetting.vue";
import IntroductionSetting from "@/components/backend/Introduction.vue";
import DemoCasesSetting from "@/components/backend/DemoCases.vue";
import MaterialInformaticsSetting from "@/components/backend/MaterialInformatics.vue";

import {useRouter,useRoute} from 'vue-router';

defineProps({});

const router = useRouter();
const route = useRoute();

const nowPageUrl = computed(() => {
  return route.fullPath
});
const menu = computed(() => {
  return route.params.menu
});
const item = computed(() => {
  return route.params.item
});

</script>
<template>
    <Header/>
    <div class="content-div">
        
        <BackendMenu/>
        <div class="backend-content">
            <div class="bread-crumbs-div" v-if="item">
                <!-- <span class="bread-crumbs">{{menu}}</span> -->
                <span class="bread-crumbs">{{item.replace(/-/g," ")}}</span>
                <span class="bread-crumbs" v-if="item.match(/home|about-us/)">Setting</span>
                <span class="bread-crumbs" v-if="item.match(/account|introduction|material-informatics|demo-cases/)">List</span>
            </div>
            <IntroductionSetting v-if="item=='introduction'"/>
            <MaterialInformaticsSetting v-if="item=='material-informatics'"/>
            <DemoCasesSetting v-if="item=='demo-cases'"/>

            <HomeSetting v-if="item=='home'"/>
            <AboutUsSetting v-if="item=='about-us'"/>
            <BackendAccountSetting v-if="item=='account'"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content-div{
    display: flex;
}

.bread-crumbs-div{
    position: relative;
    width: 100%;
    // margin-top: 10px;
    .bread-crumbs{
        display: inline-block;
        font-size: 24px;
        color: var(--theme-color-2);
        text-transform:capitalize;
        &::after{
            content: "/";
            color: #ccc;
            margin: 0 10px;
        }
        &:nth-last-child(1){
            color: #ccc;
            font-size: 20px;
            &::after{
                content: "";
                margin: 0;
            }
        }
    }
}

.backend-content{
    position: relative;
    display: block;
    vertical-align: top;
    width: calc(100% - 300px);
    height: calc(100vh - 40px);
    overflow-x: hidden;
    overflow-y: auto;
    background: #F1F3F2;
    padding: 0 10px;
}

@media (max-width: 768px) {

}
</style>
