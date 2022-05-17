<template>
  <div class="holder">
    <div
      class="pantalla_negro"
      :class="{
        oculto: isAsideVisible == false,
        mostrar: isAsideVisible == true,
      }"
    ></div>
    <div
      class="menu_lateral"
      :class="{
        oculto: isAsideVisible == false,
        mostrar: isAsideVisible == true,
      }"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="updateStatus()"
      >
        <path
          d="M18.75 5.25L5.25 18.75"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M18.75 18.75L5.25 5.25"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
      <div class="categorias">
        <h3>Categorías</h3>
        <p>Humor</p>
        <p>Deportes</p>
        <p>Innovación</p>
        <p>Economía</p>
        <p>Sociedad</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["visible"],
  computed: {
    ...mapState({
      isAsideVisible: (state) => state.isAsideVisible,
    }),
  },
  methods: {
    ...mapMutations({
      updateStatus: "updateStatus",
    }),
  },
};
</script>

<style lang="scss" scoped>
.pantalla_negro {
  width: 100vw;
  height: 100vh;
  @apply bg-black fixed;
  z-index: 2;
  mix-blend-mode: multiply;
  opacity: 0.5;
  &.oculto{
    display: none;
  }
  &.mostrar{
    display: block
  }
}
.menu_lateral {
  @apply bg-B1 px-4 py-8 flex flex-col gap-8 rounded-r-2xl;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 3;
  width: 264px;
  transition: all 0.2s ease;
  &.oculto {
    transform: translateX(-280px);
  }
  &.mostrar {
    transform: translateX(-16px);
  }
  .categorias {
    @apply flex flex-col gap-2;
  }
}
</style>
