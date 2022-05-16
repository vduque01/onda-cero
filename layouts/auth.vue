<template>
    <div class="reticula">
    <Nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style  lang="scss">
.reticula {
  display: grid;
  grid-template-columns: repeat(4, 72px);
  grid-column-gap: 16px;
  div {
    &:first-child {
      grid-column: 1/5;
    }
  }
}
</style>