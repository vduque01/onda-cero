<template>
  <div class="card">
    <boton
      class="boton"
      v-show="!isLista()"
      :tipo="'primario-oscuro'"
      :tamaño="'solo_icono_compacto'"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 8H13.5"
          stroke="#DAFF01"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M8 2.5V13.5"
          stroke="#DAFF01"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
    </boton>
    <boton
      class="boton"
      v-show="isLista()"
      :tipo="'primario-oscuro'"
      :tamaño="'solo_icono_compacto'"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 13.5C8 13.5 1.75 10 1.75 5.75001C1.75 4.99868 2.01031 4.27057 2.48664 3.68954C2.96297 3.10851 3.62589 2.71046 4.36262 2.56312C5.09935 2.41577 5.86438 2.52823 6.52754 2.88136C7.1907 3.23449 7.71103 3.80648 8 4.50001C8.28897 3.80648 8.8093 3.23449 9.47246 2.88136C10.1356 2.52823 10.9006 2.41577 11.6374 2.56312C12.3741 2.71046 13.037 3.10851 13.5134 3.68954C13.9897 4.27057 14.25 4.99868 14.25 5.75001C14.25 10 8 13.5 8 13.5Z"
          stroke="#DAFF01"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </boton>
    <div class="card_img">
      <img :src="`${src}`" alt="" />
    </div>
    <div class="card_info">
      <div class="texto1">
        <p class="bold">{{ texto1 }}</p>
      </div>
      <div class="texto2" v-if="!isLista()">
        <p class="pequeño">{{ texto2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tipo", "texto1", "texto2", "src"],
  methods: {
    isLista() {
      const isLista = this.tipo == "lista";
      return isLista;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply relative;
  width: 160px;
  .boton {
    @apply absolute left-2 top-2;
  }
  .card_img {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
    img {
      width: 160px;
      z-index: -1;
      display: block;
      position: relative;
    }
  }
  .card_info {
    max-width: 160px;
    height: 56px;
    .texto1 {
      @apply bg-G7  py-1 px-3;
      width: 160px;
      p {
        @apply text-B1;
        width: 136px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .texto2 {
      @apply bg-P4 py-[2px] px-3;
      display: inline-block;
      p {
        @apply text-P9;
        max-width: 136px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
