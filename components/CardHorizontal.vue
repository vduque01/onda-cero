<template>
  <div class="card">
    <div class="card_img">
      <img :src="`${src}`" alt="" />
    </div>
    <!-- <slot /> -->
    <div class="card_body">
      <div class="card_info">
        <div class="texto1">
          <p class="bold">{{ texto1 }}</p>
        </div>
        <div class="texto2">
          <p class="pequeño">{{ texto2 }}</p>
        </div>
      </div>
      <Boton
        :tipo="'primario'"
        :tamaño="'solo_icono_medio'"
        @click.native="reproducir()"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 3L27 16L6 29V3Z"
            stroke="#325340"
            stroke-width="1.8"
            stroke-linecap="round"
          />
        </svg>
      </Boton>
    </div>
  </div>
</template>

<script>
import {mapMutations } from "vuex";
import Boton from "./Boton.vue";
export default {
  components: { Boton },
  props: ["src", "texto1", "texto2"],
  methods: {
    ...mapMutations({
      reproducir: "reproducir",
    }),
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply flex bg-B3;
  .card_img {
    img {
      width: 80px;
    }
  }
  .card_body {
    @apply flex p-4;
    align-items: center;
    gap: 16px;
    .card_info {
      @apply flex flex-col;
      .texto1 {
        width: 160px;
        p {
          width: 136px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .texto2 {
        @apply inline-block;
        p {
          max-width: 136px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          @apply text-G7;
        }
      }
    }
  }
}
</style>
