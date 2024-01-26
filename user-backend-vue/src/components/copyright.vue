<script setup>
import { ref ,watch } from 'vue';

const props = defineProps({
  isShowMobileMenu: {
    type: Boolean,
    default: false
  },
  isMinMenu: {
    type: Boolean,
    default: false
  }
})
const isShowMobile = ref(props.isShowMobileMenu);

const getWidthStyle = () => {
    let width = window.innerWidth;
    if(width < 768){
        return 'width:100%'
    }else{
        console.log(props.isMinMenu);
        if(props.isMinMenu==true){
            return 'width:calc(100% - 60px)'
        }
    }
    return isShowMobile.value ? 'width:calc(100% - 60px)' : 'width:calc(100%)'
}

watch(() =>  props.isShowMobileMenu, (val) => {
    val ? isShowMobile.value = true : isShowMobile.value = false
})

</script>

<template>
    <div class="copyright" :style="getWidthStyle()">
        <div>
            <span>© 2024 </span>
            <span>Powered by XXXXX</span>
        </div>
        <div></div>
    </div>
</template>

<style lang="scss" scoped>
    .copyright{
        position: absolute;
        z-index: 10;
        bottom: 0;
        right: 0;
        width: 100%;
        // height: 39px;
        padding: 10px;
        font-size: 13px;
        color: var(--bs-gray);
        display: flex;
        justify-content: space-between;
        align-items: center;
        // background-color: var(--bs-white);
        -webkit-backdrop-filter: blur(.3rem);
        backdrop-filter: blur(.3rem);
        will-change: backdrop-filter;
    }

</style>