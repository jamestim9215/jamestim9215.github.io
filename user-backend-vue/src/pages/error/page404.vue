<script setup>

</script>

<template>
  <div class="page404">
    <div>
        <h1>404</h1>
        <p>Page not found</p>
    </div>
    <div>
        <img src="@/assets/images/404.webp" alt="">
    </div>
    <div>
        <a>Homepage</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page404 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1{
            font-size: 77px;
            font-weight: 700;
            color: var(--bs-primary);
            padding: 0;
            margin: 60px 0 0 0;
        }
        p{
            font-size: 38px;
            font-weight: 700;
            color: var(--bs-black);
            padding: 0;
            margin: 0;
        }
        img{
            width: calc(100% - 40px);
            max-width: 482px;
            margin: 60px 0;
        }
        a{
            color: var(--bs-primary);
            font-size: 13px;
            font-weight: 700;
            background: #f0effb;
            border-radius: 3px;
            padding: 13px 39px;
            &:hover{
                color: var(--bs-white);
                background: var(--bs-primary);
            }
        }
    }
}
@media (max-width: 767px) {
    .page404 {
        div{
            h1,
            img{
                margin:0
            }
        }
    }
}
</style>