<template>
  <div class="main_holder">
    <!-- <SplashPage :isLoading="isLoading" /> -->
    <div v-if="!isLoggedIn"></div>
    <div class="holder" v-else>
      <div>Menú de arriba</div>
      <boton :tipo="'primario'" :tamaño="'mediano'"> Hola </boton>
      <boton :tipo="'primario-oscuro'" :tamaño="'pequeño'"> Hola </boton>
      <boton :tipo="'secundario'" :tamaño="'compacto'"> Hola </boton>
      <switch-button :estado="'desactivado'" />
      <switch-button :estado="'activado'" />
      <input-form :isPassword="true">
        <!-- Aqui el icono -->
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5Z"
            stroke="#AECC01"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 15.5C14.0711 15.5 15.75 13.8211 15.75 11.75C15.75 9.67893 14.0711 8 12 8C9.92893 8 8.25 9.67893 8.25 11.75C8.25 13.8211 9.92893 15.5 12 15.5Z"
            stroke="#AECC01"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.98145 19.1933C6.54574 18.0819 7.40678 17.1484 8.46914 16.4963C9.5315 15.8442 10.7537 15.499 12.0002 15.499C13.2467 15.499 14.4689 15.8442 15.5312 16.4963C16.5936 17.1484 17.4547 18.0819 18.0189 19.1933"
            stroke="#AECC01"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </input-form>
      <div class="main">
        <div class="greet">
          <section-name>
            <h1 @click="nuevosEpisodios">Inicio</h1>
          </section-name>

          <p>Bienvenido, Víctor</p>
        </div>
        <div class="carousel">Carousel</div>

        <div class="trending">
          <div class="section_header">
            <h3>Podcasts nuevos</h3>

            <nuxt-link to="/podcasts/nuevos">
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
                <img src="" alt="Imagen" />
                <p>{{ podcast.nombre }}</p>
                <p>{{ podcast.autor.join(", ") }}</p>
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
            <nuxt-link :to="`/podcasts/${podcast.id}/${podcast.episodios[podcast.episodios.length - 1].id}`">
                <card-horizontal>
                  <p>{{ podcasts[i].episodios[podcasts[i].episodios.length - 1].nombre }}</p>
                  <p>{{ podcasts[i].nombre }}</p>
                </card-horizontal>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="popular_playlists">
          <div class="section_header">
            <h3>Listas populares</h3>
            <button>Ver todos</button>
          </div>
          <div class="listas">
            <div class="lista">Lista</div>
            <div class="lista">Lista</div>
            <div class="lista">Lista</div>
            <div class="lista">Lista</div>
            <div class="lista">Lista</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
      podcasts: (state) => state.main.podcasts,
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
};
</script>
