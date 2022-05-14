<template>
    <div>
      <h3>{{podcasts[podcastNumber].episodios[episodeNumber].nombre }}</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data(){
        return{
            episodeNumber: this.$route.params.episodio,
            podcastNumber: this.$route.params.podcast,
        }
    },
      computed: {
    ...mapState({
      podcasts: (state) => state.main.podcasts,
    }),
  },
    
}
</script>

<style>

</style>
