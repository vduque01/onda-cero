<template>
  <div>
      <img src="" alt="">
      <p>{{texto1}}</p>
      <p v-if="isLista()">{{texto2}}</p>

  </div>
</template>

<script>
export default {
  props: ["tipo", "texto1", "texto2"],
  methods: {
      isLista() {
          const isLista = this.tipo == "lista";
          console.log(isLista)
          return !isLista;
      }
  }
};
</script>

<style>

</style>