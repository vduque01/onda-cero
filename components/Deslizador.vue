<template>
  <main>
    <vue-horizontal
      ref="horizontal"
      class="horizontal"
      :button="false"
      @scroll-debounce="onScrollDebounce"
    >
      <div class="item" v-for="(podcast, i) in podcasts.slice(-3)" :key="i">
        <img :src="`${podcast.src}`" alt="" />
      </div>
    </vue-horizontal>

    <div class="pagination">
      <div
        class="dot"
        :class="{ current: i - 1 === index }"
        v-for="i in pages"
        :key="i"
        @click="onPageClick(i - 1)"
      >
        <div></div>
      </div>
    </div>
  </main>
</template>

<script>
import VueHorizontal from "vue-horizontal";
import { mapState } from "vuex";
export default {
  components: { VueHorizontal },
  data() {
    return {
      width: 0,
      index: 0,
      pages: 0,
    };
  },
  computed: {
    ...mapState({
      podcasts: (state) => state.podcasts,
      playlists: (state) => state.playlists,
      isLoggedIn: (state) => state.isLoggedIn,
    }),
  },
  methods: {
    onScrollDebounce({ scrollWidth, width, left }) {
      this.width = width;
      this.index = Math.round(left / width);
      this.pages = Math.round(scrollWidth / width);
    },
    onPageClick(i) {
      this.$refs.horizontal.scrollToLeft(i * this.width);
    },
  },
};
</script>

<!-- Content Design -->
<style scoped>
.horizontal >>> .v-hl-container {
  scroll-padding-left: 16px;
  scroll-padding-right: 16px;
}

main {
  transform: translateX(-16px);
  left: -16px;
  width: 368px;
  padding-top: 32px;
  padding-bottom: 12px;
}
.item {
  height: 225px;
  width: calc(100% - (16px + 16px));
  box-sizing: content-box;
}
.item:first-child {
  width: calc(100% - (16px));
  padding-left: 16px;
}

.item:last-child {
  width: calc(100% - (16px));
  padding-right: 16px;
}

img {
  object-fit: cover;
}

.content {
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  padding-top: 60%;
}

.title {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}
</style>

<!-- Pagination CSS -->
<style scoped>
.pagination {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 6px;
}

.dot {
  cursor: pointer;
}

.dot > div {
  border-radius: 10px;
  width: 12px;
  height: 12px;
  border: 3px solid white;
}

.dot:hover > div {
  background: white;
}

.dot.current > div {
  border: 3px solid white;
  background-color: white;
}
</style>
