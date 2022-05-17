<template>
  <div>
    <h2>Iniciar sesión</h2>
    <p class="text-G7">Introduce tu usuario y contraseña</p>
    <div class="loginForm">
      <form action="" @submit.prevent="checkUser()">
        <!-- En estos inputs no funciona -->
        <input-form
          v-model="existentUser.usuario"
          :isPassword="false"
          :hasLeftIcon="true"
          :hasRightIcon="false"
          :placeholder="''"
        >
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
        <input-form
          v-model="existentUser.contraseña"
          :isPassword="true"
          :hasIcons="true"
          :hasLeftIcon="true"
          :hasRightIcon="true"
          :placeholder="''"
        >
          <!-- Aqui el icono -->
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15.5C13.0355 15.5 13.875 14.6605 13.875 13.625C13.875 12.5895 13.0355 11.75 12 11.75C10.9645 11.75 10.125 12.5895 10.125 13.625C10.125 14.6605 10.9645 15.5 12 15.5Z"
              stroke="#AECC01"
              stroke-width="1.8"
              stroke-linecap="square"
            />
            <path
              d="M12 15.5V17.75"
              stroke="#AECC01"
              stroke-width="1.8"
              stroke-linecap="square"
            />
            <path
              d="M20.25 8.75H3.75V20.75H20.25V8.75Z"
              stroke="#AECC01"
              stroke-width="1.8"
              stroke-linecap="square"
            />
            <path
              d="M8.625 8.75V5.375C8.625 4.47989 8.98058 3.62145 9.61351 2.98851C10.2465 2.35558 11.1049 2 12 2C12.8951 2 13.7535 2.35558 14.3865 2.98851C15.0194 3.62145 15.375 4.47989 15.375 5.375V8.75"
              stroke="#AECC01"
              stroke-width="1.8"
              stroke-linecap="square"
            />
          </svg>
        </input-form>
        <!-- En estos inputs si funciona -->
        <input type="text" v-model="existentUser.usuario" />
        <input type="text" v-model="existentUser.contraseña" />

        <boton @click="checkUser()" :tipo="'primario'" :tamaño="'mediano'">
          Iniciar sesión
        </boton>
        <boton :tipo="'secundario'" :tamaño="'solo_icono_pequeño'">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10.5001H16.875C16.8767 12.0928 16.3259 13.6368 15.3166 14.8689C14.3074 16.101 12.902 16.9449 11.3402 17.2569C9.7783 17.5688 8.1566 17.3294 6.75149 16.5795C5.34637 15.8296 4.24482 14.6156 3.6346 13.1444C3.02437 11.6732 2.94324 10.036 3.40504 8.51169C3.86684 6.98741 4.84298 5.67045 6.16707 4.78531C7.49116 3.90017 9.08125 3.50162 10.6663 3.65761C12.2513 3.8136 13.7332 4.51447 14.8594 5.64075"
              stroke="#A976FF"
              stroke-width="2"
              stroke-linecap="square"
            />
          </svg>
        </boton>
        <boton :tipo="'secundario'" :tamaño="'solo_icono_pequeño'">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 18C14.1421 18 17.5 14.6421 17.5 10.5C17.5 6.35786 14.1421 3 10 3C5.85786 3 2.5 6.35786 2.5 10.5C2.5 14.6421 5.85786 18 10 18Z"
              stroke="#A976FF"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M13.125 7.37502H11.875C11.6285 7.37398 11.3842 7.42178 11.1563 7.51564C10.9283 7.6095 10.7212 7.74757 10.5469 7.92189C10.3726 8.0962 10.2345 8.30331 10.1406 8.53126C10.0468 8.75922 9.99898 9.0035 10 9.25002V18"
              stroke="#A976FF"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 11.75H12.5"
              stroke="#A976FF"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </boton>
        <boton :tipo="'secundario'" :tamaño="'solo_icono_pequeño'">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7891 3.03906C10.9708 2.56719 11.2913 2.16152 11.7084 1.87559C12.1254 1.58965 12.6193 1.4369 13.125 1.4375"
              stroke="#A976FF"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M17.0703 13.2269C16.0859 15.6332 14.3047 17.3754 12.8125 17.3754H7.1875C5 17.3754 2.1875 13.6254 2.1875 9.56288C2.18782 8.65814 2.44997 7.77282 2.9423 7.01376C3.43463 6.2547 4.13612 5.65434 4.9621 5.28513C5.78808 4.91591 6.70326 4.79362 7.5972 4.93302C8.49114 5.07241 9.32564 5.46753 10 6.07069C10.4773 5.64305 11.0373 5.31783 11.6453 5.11513C12.2533 4.91244 12.8964 4.83657 13.5348 4.89221C14.1733 4.94786 14.7936 5.13384 15.3573 5.43866C15.9211 5.74348 16.4163 6.16067 16.8125 6.66444C16.2383 7.01116 15.7676 7.50553 15.4495 8.09604C15.1314 8.68655 14.9774 9.35158 15.0038 10.0218C15.0301 10.692 15.2357 11.343 15.5992 11.9067C15.9627 12.4704 16.4707 12.9263 17.0703 13.2269Z"
              stroke="#A976FF"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </boton>
      </form>
    </div>
    <div class="remember_me">
      <switch-button
        :estado="estadoSwitch"
        @click.native="changeEstadoSwitch()"
      />
      <p>Recuérdame</p>
    </div>
    <p class="warning" v-show="returnVisibility()">
      Usuario o contraseña incorrectos
    </p>
    <p>¿No tienes cuenta? <nuxt-link to="/signup">Regístrate</nuxt-link></p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import SwitchButton from "../components/SwitchButton.vue";
export default {
  components: { SwitchButton },
  layout: "auth",
  computed: {
    ...mapState({
      users: (state) => state.users,
      isAlertMessageVisible: (state) => state.isAlertMessageVisible,
    }),
  },
  data() {
    return {
      existentUser: {
        usuario: "",
        contraseña: "",
      },
      estadoSwitch: "desactivado",
    };
  },
  methods: {
    ...mapMutations({
      checkUser_: "checkUser",
    }),
    checkUser() {
      this.checkUser_(this.existentUser);
    },
    returnVisibility() {
      const isVisible = this.isAlertMessageVisible;
      return isVisible;
    },
    changeEstadoSwitch() {
      if (this.estadoSwitch == "desactivado") {
        this.estadoSwitch = "activado";
      } else {
        this.estadoSwitch = "desactivado";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.warning {
  color: red;
}
</style>
