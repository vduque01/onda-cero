<template>
  <div
    class="switch_holder"
    :class="{
      activado: estado == 'activado',
      desactivado: estado == 'desactivado',
    }"
  >
    <div class="switch_circle"></div>
  </div>
</template>

<script>
export default {
  props: ["estado"],
};
</script>

<style lang="scss" scoped>
.switch_holder {
  width: 32px;
  height: 16px;
  display: flex;
  transition: all 0.2s ease;
  &.desactivado {
    @apply bg-B3 rounded-full;
  }
  &.activado {
    @apply bg-P7 rounded-full;
    .switch_circle {
      transform: translate(16px);
    }
  }
  .switch_circle {
    transition: all 0.2s ease;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    @apply bg-B3 border border-[3px] border-G7 rounded-full;
  }
}
</style>
