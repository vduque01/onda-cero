<template>
  <div>
    <!-- <div class="player" v-show="isPlaying">
      <img src="" alt="thumbnail" />
      <div class="podcast_data">
        <p>Nombre del episodio</p>
        <p>Nombre del podcast</p>
      </div>
      <button>Play button</button>
    </div> -->
    <div class="navigation">
      <boton :tipo="'primario'" :tamaño="'solo_icono_medio'">
        <nuxt-link to="/">
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
      <boton :tipo="'primario'" :tamaño="'solo_icono_medio'" disabled>
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
      <boton :tipo="'primario'" :tamaño="'solo_icono_medio'" disabled>
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

</script>

<style>


</style>
