<template>
  <div>
    <h2>{{ playlists[playlistNumber].nombre }}</h2>
    <p class="pequeño bold">Hecha por {{ playlists[playlistNumber].autor }}</p>
    <p class="pequeño">{{ playlists[playlistNumber].duracion }}</p>
    <p>{{ playlists[playlistNumber].descripcion }}</p>
    <boton :tipo="'primario'" :tamaño="'pequeño'">
      PLAY
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 2.5L13.5 9L3 15.5V2.5Z"
          stroke="#325340"
          stroke-width="1.8"
          stroke-linecap="round"
        />
      </svg>
    </boton>
    <boton :tipo="'secundario'" :tamaño="'solo_icono_pequeño'">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 16.875C10 16.875 2.1875 12.5 2.1875 7.18751C2.1875 6.24836 2.51289 5.33821 3.1083 4.61193C3.70371 3.88564 4.53236 3.38808 5.45328 3.2039C6.37419 3.01971 7.33047 3.16029 8.15943 3.6017C8.98838 4.04311 9.63879 4.7581 10 5.62501C10.3612 4.7581 11.0116 4.04311 11.8406 3.6017C12.6695 3.16029 13.6258 3.01971 14.5467 3.2039C15.4676 3.38808 16.2963 3.88564 16.8917 4.61193C17.4871 5.33821 17.8125 6.24836 17.8125 7.18751C17.8125 12.5 10 16.875 10 16.875Z"
          stroke="#A976FF"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </boton>
    <p class="grande bold">Todos los episodios</p>
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 11L23 6L28 11"
        stroke="white"
        stroke-width="2"
        stroke-linecap="square"
      />
      <path
        d="M23 18V8"
        stroke="white"
        stroke-width="2"
        stroke-linecap="square"
      />
      <path
        d="M6 16H15"
        stroke="white"
        stroke-width="2"
        stroke-linecap="square"
      />
      <path
        d="M6 8H13"
        stroke="white"
        stroke-width="2"
        stroke-linecap="square"
      />
      <path
        d="M6 24H23"
        stroke="white"
        stroke-width="2"
        stroke-linecap="square"
      />
    </svg>
    <div class="episodios">
      <div class="episodio" v-for="(episodio, i) in returnEpisodios()" :key="i">
        <nuxt-link :to="`/podcasts/${episodio.idPrograma}/${episodio.id}`">
          <card-horizontal>
            <p>{{ episodio.nombre }}</p>
            <p>{{ episodio.programa }}</p>
          </card-horizontal>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardHorizontal from "../../../components/CardHorizontal.vue";
export default {
  components: { CardHorizontal },
  data: function () {
    return {
      playlistNumber: this.$route.params.playlist,
    };
  },
  computed: {
    ...mapState({
      podcasts: (state) => state.main.podcasts,
      playlists: (state) => state.main.playlists,
    }),
  },
  methods: {
    returnEpisodios() {
      const arrayEpisodiosLista = [];
      const podcastsLista = this.playlists[this.playlistNumber].podcastsLista;
      for (let i = 0; i < podcastsLista.length; i++) {
        const podcastLista = podcastsLista[i];
        arrayEpisodiosLista.push(...podcastLista.episodios);
      }
      return arrayEpisodiosLista;
    },
  },
};
</script>

<style></style>
