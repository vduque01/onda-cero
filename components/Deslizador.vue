<template>
  <div class="deslizador">
    <div class="cards">
      <div
        class="card"
        v-for="(podcast, i) in podcasts.slice(
          podcasts.length - 4,
          podcasts.length - 1
        )"
        :key="i"
      >
        <img :src="`${podcast.src}`" alt="" />
      </div>
    </div>
    <div class="controller">
      <div class="control" @click="firstPosition()"></div>
      <div class="control" @click="secondPosition()"></div>
      <div class="control" @click="thirdPosition()"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      podcasts: (state) => state.podcasts,
    }),
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.deslizador {
  @apply flex flex-col items-center;
  .controller {
    @apply flex gap-1;
    .control {
      @apply rounded-full;
      width: 8px;
      height: 8px;
      border: 2px solid white;
      &.current {
        @apply bg-white;
      }
    }
  }
  .cards {
    .card {
      width: 336px;
      height: 252px;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
