<template>
  <div class="navigation">
    <div class="player" v-if="reproduciendo()">
      <div class="toggle">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 10.5L8 5.5L13 10.5"
            stroke="white"
            stroke-width="1.8"
            stroke-linecap="square"
          />
        </svg>
      </div>
      <div class="player_info">
        <div class="player_img">
          <img :src="`/${podcasts[1].src}`" alt="" />
        </div>
        <div class="player_name">
          <p class="bold">{{ podcasts[1].episodios[1].nombre }}</p>
          <p class="pequeño bold">{{ podcasts[1].nombre }}</p>
        </div>
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
    </div>
    <div class="botones">
      <boton
        class="boton"
        id="boton1"
        :tipo="'primario'"
        :tamaño="'solo_icono_medio'"
      >
        <nuxt-link to="/home">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 19.0005V27.0003H27V14L16 4.00049L5 14.0005V27.0003L13 27.0005V19.0005H19Z"
              fill="#325340"
              stroke="#325340"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
        </nuxt-link>
      </boton>
      <boton
        class="boton"
        id="boton2"
        :tipo="'primario'"
        :tamaño="'solo_icono_medio'"
        disabled
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z"
            stroke="#3F6850"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.925 21.9248L28 27.9998"
            stroke="#3F6850"
            stroke-width="1.8"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </boton>
      <boton
        class="boton"
        id="boton3"
        :tipo="'primario'"
        :tamaño="'solo_icono_medio'"
        disabled
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
            stroke="#3F6850"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z"
            stroke="#3F6850"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.9751 24.9248C8.72749 23.4428 9.87555 22.1981 11.292 21.3287C12.7085 20.4592 14.3381 19.999 16.0001 19.999C17.6621 19.999 19.2917 20.4592 20.7082 21.3287C22.1246 22.1981 23.2727 23.4428 24.0251 24.9248"
            stroke="#3F6850"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </boton>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      isPlaying: (state) => state.isPlaying,
      podcasts: (state) => state.podcasts,
    }),
  },
  methods: {
    reproduciendo() {
      const Playing = this.isPlaying;
      console.log(Playing);
      return Playing;
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  @apply flex flex-col px-4 pb-4 bg-B2 fixed bottom-0 rounded-t-2xl;
  left: 50%;
  width: 368px;
  margin-left: -184px;
  .player {
    @apply flex flex-col mt-3;
    align-items: center;
    gap: 8px;
    .player_info {
      @apply flex w-full;
      align-items: center;
      gap: 12px;
      .player_img {
        img {
          width: 48px;
        }
      }
      .player_name {
        flex-grow: 1;
        p {
          width: 216px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pequeño {
          @apply text-G7;
        }
      }
    }
  }
  .botones {
    @apply flex flex-row mt-4;
    .boton {
      flex-grow: 1;
      display: flex;
      justify-content: center;
    }
    #boton1 {
      @apply rounded-r-none;
    }
    #boton2 {
      @apply rounded-none;
    }
    #boton3 {
      @apply rounded-l-none;
    }
  }
}
</style>
