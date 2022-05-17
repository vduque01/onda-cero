<template>
  <div class="upperMenu">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.upperMenu {
  @apply p-4 flex justify-between absolute top-0 ;
  left:50%;
  margin-left: -184px;
  width: 368px;
  align-items: center;
}
</style>
