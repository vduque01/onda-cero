<template>
  <div>
    <Category>
      {{ podcasts[podcastNumber].categoria }}
    </Category>

    <h2>{{ podcasts[podcastNumber].nombre }}</h2>
    <boton :tipo="'primario'" :tamaño="'mediano'">
      suscribirse
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 8H13.5"
          stroke="#325340"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M8 2.5V13.5"
          stroke="#325340"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
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
          d="M3.75 1.875L16.875 10L3.75 18.125V1.875Z"
          stroke="#A976FF"
          stroke-width="1.8"
          stroke-linecap="round"
        />
      </svg>
    </boton>
    <p>{{ podcasts[podcastNumber].descripcion }}</p>
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 11L16 21L6 11"
        stroke="white"
        stroke-width="1.8"
        stroke-linecap="square"
      />
    </svg>

    <p class="grande bold">Todos los episodios</p>
    <div class="episodios">
      <div
        class="episodio"
        v-for="(episodio, i) in podcasts[podcastNumber].episodios"
        :key="i"
      >
        <nuxt-link :to="`/podcasts/${podcasts[podcastNumber].id}/${episodio.id}`">
          <CardHorizontal>
            <p>{{ podcasts[podcastNumber].episodios[i].nombre }}</p>
            <p>{{ podcasts[podcastNumber].episodios[i].duracion }}</p>
          </CardHorizontal>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: function () {
    return {
      podcastNumber: this.$route.params.podcast,
    };
  },
  computed: {
    ...mapState({
      podcasts: (state) => state.main.podcasts,
    }),
  },
};
</script>

<style></style>
