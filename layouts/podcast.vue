<template>
  <div class="reticula">
    <upper-menu class="bg-black bg-opacity-20">
      <div class="block1">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 26L11 16L21 6"
            stroke="white"
            stroke-width="1.8"
            stroke-linecap="square"
          />
        </svg>
      </div>

      <div class="block2">
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
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 20C10.2091 20 12 18.2091 12 16C12 13.7909 10.2091 12 8 12C5.79086 12 4 13.7909 4 16C4 18.2091 5.79086 20 8 20Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 29C24.2091 29 26 27.2091 26 25C26 22.7909 24.2091 21 22 21C19.7909 21 18 22.7909 18 25C18 27.2091 19.7909 29 22 29Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 11C24.2091 11 26 9.20914 26 7C26 4.79086 24.2091 3 22 3C19.7909 3 18 4.79086 18 7C18 9.20914 19.7909 11 22 11Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.6373 9.16211L11.3623 13.8371"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.3623 18.1621L18.6373 22.8371"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
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
            d="M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
            stroke="white"
            stroke-width="1.8"
            stroke-miterlimit="10"
          />
          <path
            d="M16 9C17.6569 9 19 7.65685 19 6C19 4.34315 17.6569 3 16 3C14.3431 3 13 4.34315 13 6C13 7.65685 14.3431 9 16 9Z"
            stroke="white"
            stroke-width="1.8"
            stroke-miterlimit="10"
          />
          <path
            d="M16 29C17.6569 29 19 27.6569 19 26C19 24.3431 17.6569 23 16 23C14.3431 23 13 24.3431 13 26C13 27.6569 14.3431 29 16 29Z"
            stroke="white"
            stroke-width="1.8"
            stroke-miterlimit="10"
          />
        </svg>
      </div>
    </upper-menu>
    <Nuxt />
    <floating-menu />
  </div>
</template>

<script>
import UpperMenu from "../components/UpperMenu.vue";
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
  padding-bottom: 184px;
  div {
    grid-column: 1/5;
  }
  .block2{
    @apply flex gap-4;
  }
}
</style>
