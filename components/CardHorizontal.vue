<template>
  <div>
    <slot />
    <Boton :tipo="'primario'" :tamaño="'solo_icono_medio'">
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
</template>

<script>
import Boton from "./Boton.vue";
export default {
  components: { Boton },
};
</script>

<style></style>
