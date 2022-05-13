<template>
  <div class="categoria">{{categoria}}</div>
</template>

<script>
export default {
    props: ["categoria"],
}
</script>

<style lang="scss" scoped>
.categoria{
    text-transform: uppercase;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: 1%;
    display: inline-block;
    @apply bg-P9 text-P5 px-2 py-[2px];

}
</style>