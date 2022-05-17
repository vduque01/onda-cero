<template>
  <div class="main_holder">
    <!-- <SplashPage :isLoading="isLoading" /> -->

    <div class="holder">
      <div class="main">
        <div class="greet">
          <section-name>
            <h1 @click="nuevosEpisodios">Inicio</h1>
          </section-name>
          <p class="grande">Bienvenido, Víctor</p>
        </div>
        <deslizador/>

        <div class="trending">
          <div class="section_header">
            <h3>Lo más escuchado</h3>
            <nuxt-link to="/podcasts/trending">
              <boton :tipo="'secundario'" :tamaño="'solo_icono_compacto'">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="#A976FF"
                    stroke-width="1.8"
                    stroke-linecap="square"
                  />
                </svg>
              </boton>
            </nuxt-link>
          </div>

          <div class="podcasts">
            <div class="podcast" v-for="(podcast, i) in podcasts" :key="i">
              <!-- ¿Cómo se puede quitar aquí _podcast? -->
              <nuxt-link :to="`/podcasts/${podcast.id}`">
                <card-vertical
                  :src="`${podcast.src}`"
                  :tipo="'programa'"
                  :texto1="`${podcast.nombre}`"
                  :texto2="`${podcast.autor.join(', ')}`"
                />
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="new_episodes">
          <div class="section_header">
            <h3>Episodios nuevos</h3>
            <nuxt-link to="/podcasts/episodios/nuevos">
              <boton :tipo="'secundario'" :tamaño="'solo_icono_compacto'">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="#A976FF"
                    stroke-width="1.8"
                    stroke-linecap="square"
                  />
                </svg>
              </boton>
            </nuxt-link>
          </div>
          <div class="episodios">
            <div class="episodio" v-for="(podcast, i) in podcasts" :key="i">
              <nuxt-link
                :to="`/podcasts/${podcast.id}/${
                  podcast.episodios[podcast.episodios.length - 1].id
                }`"
              >
                <card-horizontal :src="podcast.src" :texto1="podcast.episodios[podcast.episodios.length - 1].nombre" :texto2=" podcast.nombre" />
                  <!-- <p>
                    {{ podcast.episodios[podcast.episodios.length - 1].nombre }}
                  </p>
                  <p>{{ podcast.nombre }}</p>
                </card-horizontal> -->
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="popular_playlists">
          <div class="section_header">
            <h3>Listas populares</h3>
            <nuxt-link to="/playlists/humor">
              <boton :tipo="'secundario'" :tamaño="'solo_icono_compacto'">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="#A976FF"
                    stroke-width="1.8"
                    stroke-linecap="square"
                  />
                </svg>
              </boton>
            </nuxt-link>
          </div>
          <div class="listas">
            <div class="lista" v-for="(playlist, i) in playlists" :key="i">
              <nuxt-link :to="`/playlists/${playlist.id}`">
                <card-vertical :src="`${playlist.src}`" :tipo="'lista'" :texto1="`${playlist.nombre}`" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardVertical from "../components/CardVertical.vue";
import Carousel from "../components/Deslizador.vue";
import Deslizador from "../components/Deslizador.vue";
export default {
  data() {
    return {
      isLoggedIn: true,
      // isLoading: true
      // isPlaying: true,
    };
  },
  name: "IndexPage",
  computed: {
    ...mapState({
      podcasts: (state) => state.podcasts,
      playlists: (state) => state.playlists,
    }),
  },
  mounted() {
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 3000);
  },
  methods: {
    // Función que coge todos los últimos episodios de cada podcast
    // nuevosEpisodios() {
    //   const nuevosEpisodios = [];
    //   for (let i = 0; i < this.podcasts.length; i++) {
    //     const episodios = this.podcasts[i].episodios;
    //     const lastEpisode = episodios[episodios.length - 1];
    //     nuevosEpisodios.push(lastEpisode);
    //   }
    //   return nuevosEpisodios;
    // },
    nuevosEpisodios() {
      for (let i = 0; i < this.podcasts.length; i++) {
        const episodios = this.podcasts[i].episodios;
        const lastEpisode = episodios[episodios.length - 1];
        return lastEpisode;
      }
    },
  },
  components: { CardVertical, Carousel, Deslizador },
};
</script>
