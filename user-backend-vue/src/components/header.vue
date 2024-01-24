<script setup>
import { ref,watch  } from 'vue';

const props = defineProps({
  isShowMobileMenu: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:isShowMobileMenu'])
const isShowMobile = ref(props.isShowMobileMenu);

watch(() =>  props.isShowMobileMenu, (val) => {
    val ? isShowMobile.value = true : isShowMobile.value = false
})

watch(() =>  isShowMobile.value, (val) => {
    console.log("????");
  emit('update:isShowMobileMenu', isShowMobile.value)

})


</script>

<template>
    <div class="header-div">
        <div>
            <button class="btn btn-only-icon btn-lg mobile-show">
                <span class="material-icons-outlined" @click="isShowMobile=true">
                last_page
                </span>
            </button>
            <div>
                Header Title
            </div>
        </div>
        <div>
            <!-- <button class="btn btn-only-icon btn-lg mobile-show">
                <span class="material-icons-outlined">
                last_page
                </span>
            </button> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-div{
    position: fixed;
    top: 0;
    z-index: 99;
    width: calc(100% - 60px);
    height: 60px;
    background: #fff;
    -webkit-backdrop-filter: blur(.3rem);
    backdrop-filter: blur(.3rem);
    will-change: backdrop-filter;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    

    .btn-only-icon {
        padding: 10px 0;
        position: relative;
        color: #1f2128;
        background: #E7EEF8;
        width: 40px;
        height: 40px;
        border-radius: 3px;
        line-height: 40px;
        text-align: center;
        >span{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    >div{
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--bs-gray);
        font-size: 13px;
        font-weight: 400;
    }
}
.mobile-show{
    display: none;
}

@media (max-width: 768px) {
    
    .header-div{
        position: absolute;
        padding: 0 10px;
        width: 100%;

        >div>div{
            margin-left: 10px;
        }
    }
    .mobile-show{
        display: inline;
    }
}
</style>