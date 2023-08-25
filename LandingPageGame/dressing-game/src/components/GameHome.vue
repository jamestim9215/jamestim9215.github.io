<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue'

const props = defineProps({
    stepStatus: {
        type: Number,
        default: 1
    },
})

const emit = defineEmits(['setStepStatus'])

const setStep = (stepStatus) => {
    let _data = {
        stepStatus : stepStatus
    }
    emit('setStepStatus', _data)
}

let timer = setTimeout(() => {
    setStep(1);
    clearTimeout(timer);
}, 1000);

</script>
<template>
    <div class="home-div">
        <!-- <img src="@/assets/logo.png" alt="">

        <button @click="setStep(1);">try to make</button> -->
    </div>
</template>
<style lang="scss" scoped>
    .home-div{
        position: relative;
        text-align: center;
    }
    button{
        position: relative;
        margin-top: 30px;
        border: 0;
        width: calc(80% + 4px);
        height: 50px;
        background: #ff6400;
        color: #fff;
        font-size: 20px;
    }
</style>