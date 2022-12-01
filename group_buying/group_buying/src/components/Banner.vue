<script>
  import {defineComponent,ref} from 'vue'
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  // Default theme
  import '@splidejs/vue-splide/css';

  export default defineComponent( {
    components: {
      Splide,
      SplideSlide,
    },
  } );
</script>

<template>
  <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide>
      <img src="@/assets/banner/banner.png" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/banner/banner.png" alt="Sample 2">
    </SplideSlide>
  </Splide>
</template>

<style scoped>

</style>
