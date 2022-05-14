<template>
  <button
    :class="{
      primario: tipo == 'primario',
      secundario: tipo == 'secundario',
      'primario-oscuro': tipo == 'primario-oscuro',
      compacto: tamaño == 'compacto',
      pequeño: tamaño == 'pequeño',
      mediano: tamaño == 'mediano',
      grande: tamaño == 'grande',
      solo_icono_medio: tamaño == 'solo_icono_medio',
      solo_icono_compacto: tamaño == 'solo_icono_compacto',
      solo_icono_pequeño: tamaño == 'solo_icono_pequeño'
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: ["tipo", "tamaño"],
};
</script>

<style lang="scss" scoped>
button {
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  &.primario {
    @apply bg-G7 text-B2;
    // preguntar como cambiar color de los svg de dentro de los botones, aqui y en los inputs
    &:hover {
      @apply bg-G6 text-B1;
    }
    &:disabled {
      @apply bg-B5 text-B1;
    }
    &:active {
      @apply bg-G8 text-B3;
    }
    // Esta clase es para añadirle cuando hagamos un evento de dar clic al boton de suscribir, cambiará su estilo haciendo remove y add
    &.activado {
      @apply bg-B1 text-G7;
    }
  }
  &.primario-oscuro {
    @apply bg-B2 text-G7;
    &:hover {
      @apply bg-B1 text-G7;
    }
    &:disabled {
      @apply bg-B5 text-B1;
    }
    &:active {
      @apply bg-B7 text-G8;
    }
    // Esta clase es para añadirle cuando hagamos un evento de dar clic al boton de suscribir, cambiará su estilo haciendo remove y add
    &.activado {
      @apply bg-B6 text-G7;
    }
  }
  &.secundario {
    @apply border border-2 border-P6  text-P6;
    &:hover {
      @apply border-P5  text-P5;
    }
    &:disabled {
      @apply border-B2  text-B2;
    }
    &:active {
      @apply border-P8  text-P8;
    }
  }
  &.compacto {
    font-size: 13px;
    line-height: 150%;
    @apply py-[6px] px-3;
  }
  &.pequeño {
    font-size: 13px;
    line-height: 150%;
    @apply py-[10px] px-4;
  }
  &.mediano {
    font-size: 16px;
    line-height: 150%;
    @apply py-3 px-5;
  }
  &.solo_icono_compacto {
    @apply p-2;
  }
  &.solo_icono_medio {
    @apply p-2;
  }
  &.solo_icono_pequeño {
    @apply p-[10px];
  }
}
</style>
