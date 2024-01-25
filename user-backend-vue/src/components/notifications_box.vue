<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  value: {
    type: Boolean,
    default: false
  },
})


const emit = defineEmits(['update:value'])



</script>

<template>
    <transition>
        <div class="notifications-box" :class="props.value?'active':''"  @click.self="$emit('update:value',false)">
            <div class="notifications-div">
                <div class="notifications-content-top">
                    <div>
                        Notifications
                    </div>
                    <div>
                        <span class="material-icons-outlined" @click="$emit('update:value',false)">
                        close
                        </span>
                    </div>
                </div>
                <div class="notifications-content">
                    <div class="notifications-item">
                        <span class="material-icons-outlined">
                            message
                        </span>
                        <div>
                            有新的訊息
                        </div>
                    </div>
                    <div class="notifications-item">
                        <span class="material-icons-outlined">
                            message
                        </span>
                        <div>
                            有新的訊息
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>

.notifications-box{
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100dvh;
    background: rgba(0,0,0,0.5);
    z-index: 100;
    opacity: 0;
    transition: 0.3s ease-in-out;
    -webkit-backdrop-filter: blur(.3rem);
    backdrop-filter: blur(.3rem);
    background-color: #05050b99;
    will-change: backdrop-filter;
    visibility: hidden;
    display: flex;
    justify-content: end;
    .notifications-div{
        width: 100%;
        max-width: 400px;
        height: 100dvh;
        background: var(--bs-white);
        padding: 0;
        border: 1px solid var(--bs-gray-200);

        transform: translateX(100%);
        transition: 0.3s ease-in-out;

        .notifications-content-top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 13px;
            font-size: 16px;
            font-weight: 500;
            .material-icons-outlined{
                cursor: pointer;
                vertical-align: middle;
            }
        }
        .notifications-content{
            padding: 13px;
            .notifications-item{
                display: flex;
                align-items: center;
                padding: 13px;
                border-radius: 3px;
                background: var(--badge-primary-bg);
                border: 1px solid var(--badge-primary-color);
                color: var(--badge-primary-color);
                margin: 13px 0px;
                font-size: 13px;
                .material-icons-outlined{
                    font-size: 24px;
                    margin-right: 10px;
                }
            }
        }
    }
    &.active{
        opacity: 1;
        visibility: visible;
        .notifications-div{
            transform: translateX(0px);
        }
    }
}

</style>
