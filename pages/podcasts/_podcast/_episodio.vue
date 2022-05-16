<template>
  <div>
    <img :src="`/${podcasts[podcastNumber].src}`" alt="" />
    <p class="pequeño">
      {{ podcasts[podcastNumber].episodios[episodeNumber].duracion }}
    </p>
    <h3>{{ podcasts[podcastNumber].episodios[episodeNumber].nombre }}</h3>
    <boton :tipo="'primario'" :tamaño="'pequeño'" @click.native="reproducir()">
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
          d="M6.71875 8.59375L10 11.875L13.2812 8.59375"
          stroke="#A976FF"
          stroke-width="1.8"
          stroke-linecap="square"
        />
        <path
          d="M10 3.125V11.25"
          stroke="#A976FF"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M16.875 11.875V16.875H3.125V11.875"
          stroke="#A976FF"
          stroke-width="1.8"
          stroke-linecap="square"
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
          d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
          stroke="#A976FF"
          stroke-width="1.8"
          stroke-miterlimit="10"
        />
        <path
          d="M6.875 10H13.125"
          stroke="#A976FF"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M10 6.875V13.125"
          stroke="#A976FF"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
    </boton>
    <boton :tipo="'secundario'" :tamaño="'solo_icono_pequeño'">
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.125 5H16.875"
          stroke="#A976FF"
          stroke-width="1.8"
          stroke-linecap="square"
        />
        <path
          d="M3.125 10H10.625"
          stroke="#A976FF"
          stroke-width="1.8"
          stroke-linecap="square"
        />
        <path
          d="M3.125 15H10.625"
          stroke="#A976FF"
          stroke-width="1.8"
          stroke-linecap="square"
        />
        <path
          d="M18.75 12.5L13.75 15.625V9.375L18.75 12.5Z"
          stroke="#A976FF"
          stroke-width="1.8"
          stroke-linecap="square"
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
          d="M2.63146 8.60955C2.29079 10.4025 2.61628 12.2582 3.54684 13.8282L2.50006 17.5L6.17184 16.4532C7.74183 17.3837 9.5975 17.7092 11.3905 17.3686C13.1834 17.0279 14.7904 16.0445 15.9097 14.603C17.029 13.1614 17.5836 11.3609 17.4695 9.53945C17.3553 7.71797 16.5802 6.00079 15.2897 4.71029C13.9992 3.41978 12.2821 2.6447 10.4606 2.53055C8.6391 2.4164 6.83859 2.97103 5.39706 4.09032C3.95553 5.2096 2.97213 6.81658 2.63146 8.60955Z"
          stroke="#A976FF"
          stroke-width="1.8"
          stroke-linecap="round"
        />
      </svg>
    </boton>
    <p>{{ podcasts[podcastNumber].episodios[episodeNumber].descripcion }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  layout: "episodio",
  data() {
    return {
      episodeNumber: this.$route.params.episodio,
      podcastNumber: this.$route.params.podcast,
    };
  },
  computed: {
    ...mapState({
      podcasts: (state) => state.podcasts,
    }),
  },
  methods: {
    ...mapMutations({
      reproducir: "reproducir",
    }),
  },
};
</script>

<style></style>
