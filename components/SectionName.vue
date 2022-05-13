<template>
  <div class="seccion_name">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.seccion_name{
    @apply bg-G7 px-3;
    display: inline-block;
    // ¿Por qué no se aplica?
    @apply text-B4;
}
</style>