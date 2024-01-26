<script setup>
import { ref,watch  } from 'vue';
import SearchBox from "@/components/search_box.vue";
import NotificationBox from '@/components/notifications_box.vue';

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

const emit = defineEmits(['update:isShowMobileMenu'])
const isShowMobile = ref(props.isShowMobileMenu);

const isNotificationsDot = ref(true);
const isNotificationsBoxOpen = ref(false);

const isSearchBoxOpen = ref(false);
const searchInput = ref('');

const getHeaderWidth = () => {
    let width = window.innerWidth;
    if(width < 768){
        return 'width:100%'
    }else{
        console.log(props.isMinMenu);
        if(props.isMinMenu==true){
            return 'width:calc(100% - 60px)'
        }
    }
    return isShowMobile.value ? 'width:calc(100% - 60px)' : 'width:calc(100% - 195px)'
}

watch(() =>  props.isShowMobileMenu, (val) => {
    val ? isShowMobile.value = true : isShowMobile.value = false
})

watch(() =>  isShowMobile.value, (val) => {
    console.log("????");
  emit('update:isShowMobileMenu', isShowMobile.value)

})

watch(() =>  searchInput.value, (val) => {
    if(val.length > 0){
        isSearchBoxOpen.value = true;
    }else{
        // isSearchBoxOpen.value = false;
    }
})

</script>

<template>
    <div class="header-div" :style="getHeaderWidth()">
        <div>
            <button class="btn btn-only-icon btn-lg mobile-show">
                <span class="material-icons-outlined" @click="isShowMobile=true">
                last_page
                </span>
            </button>
                <div class="search-div">
                    <span class="material-icons-outlined">
                    search
                    </span>
                    <input type="text" v-model="searchInput" placeholder="Search...">
                </div>
        </div>
        <div>
            <!-- <button class="btn btn-only-icon btn-lg mobile-show">
                <span class="material-icons-outlined">
                last_page
                </span>
            </button> -->
            <div class="notifications-div" @click="isNotificationsBoxOpen=true">
                <span class="material-icons-outlined">
                    notifications
                </span>
                <div class="dot" v-if="isNotificationsDot"></div>
            </div>
        </div>
    </div>
    <SearchBox v-model:value="isSearchBoxOpen" v-model:search-input="searchInput" />
    <NotificationBox v-model:value="isNotificationsBoxOpen" />
</template>

<style lang="scss" scoped>
.header-div{
    position: fixed;
    top: 0;
    z-index: 99;
    width: calc(100% - 195px);
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

.notifications-div{
    position: relative;
    >.dot{
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--bs-danger);
        animation: dot 1.5s infinite;
    }
}

.search-div{
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >input{
        width: 100%;

        height: 30px;
        border: none;
        border-radius: 3px;
        padding: 0 10px 0 40px;
        outline: none;
        background: transparent;
        box-shadow: none;
        font-size: 14px;
        font-weight: 700;
        &:active{
            border: none;
        }
        &:focus{
            border: none;
        }
    }
    >span{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        font-size: 24px;
        color: var(--bs-primary);
    }
}

@keyframes dot {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
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