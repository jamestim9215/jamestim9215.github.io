<script setup>
import { ref  } from 'vue';

</script>

<template>
    <div class="copyright">
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