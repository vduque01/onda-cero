<template>
  <div class="reticula">
    <menu-lateral/>
    <upper-menu>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="updateStatus()"
      >
        <path
          d="M12 8H27"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M12 16H27"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M12 24H27"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M5 8H7"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M5 16H7"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M5 24H7"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12V6H28V26H18"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="square"
        />
        <path
          d="M4 24C4.53043 24 5.03914 24.2107 5.41421 24.5858C5.78929 24.9609 6 25.4696 6 26"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M4 20C5.5913 20 7.11742 20.6321 8.24264 21.7574C9.36786 22.8826 10 24.4087 10 26"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M4 16C5.31322 16 6.61358 16.2587 7.82683 16.7612C9.04009 17.2638 10.1425 18.0003 11.0711 18.9289C11.9997 19.8575 12.7362 20.9599 13.2388 22.1732C13.7413 23.3864 14 24.6868 14 26"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
    </upper-menu>
    <Nuxt />
    <floating-menu />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {

    };
  },
  methods: {
    ...mapMutations({
      updateStatus: "updateStatus",
    }),
  },
};
</script>

<style lang="scss">
.reticula {
  display: grid;
  grid-template-columns: repeat(4, 72px);
  padding-top: 64px;
  grid-column-gap: 16px;
  position: relative;
  div {
    grid-column: 1/5;
  }
}
</style>
