<template>
  <div class="reticula">
    <upper-menu />
    <Nuxt />
    <floating-menu />
  </div>
</template>

<script>
import UpperMenu from '../components/UpperMenu.vue';
export default {
  components: { UpperMenu },
};
</script>

<style lang="scss">
.reticula {
  display: grid;
  grid-template-columns: repeat(4, 72px);
  grid-column-gap: 16px;
    position: relative;
  div {

      grid-column: 1/5;

  }
}
</style>
