<template>
  <div>
    <div class="player" v-show="isPlaying">
        <img src="" alt="thumbnail">
        <div class="podcast_data">
            <p>Nombre del episodio</p>
            <p>Nombre del podcast</p>
        </div>
        <button> Play button </button>
    </div>
    <div class="navigation">
      <nuxt-link to="/">Home</nuxt-link>
      <div>Explorar</div>
      <div>Perfil</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatingMenu",
  props: ["isPlaying"],
};
</script>

<style></style>
