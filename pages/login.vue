<template>
  <div>
    <h2>Iniciar sesión</h2>
    <p>Introduce tu usuario y contraseña</p>
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
        <input type="text" v-model="existentUser.usuario">
        <input type="text" v-model="existentUser.contraseña">

        <boton @click="checkUser()" :tipo="'primario'" :tamaño="'mediano'">
          Iniciar sesión
        </boton>
      </form>
    </div>
    <p>¿No tienes cuenta? <nuxt-link to="/signup">Regístrate</nuxt-link></p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  layout: "auth",
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
  },
  data() {
    return {
      existentUser: {
        usuario: "",
        contraseña: "",
      },
    };
  },
  methods: {
    ...mapMutations({
      checkUser_: "checkUser",
    }),
    checkUser() {
      this.checkUser_(this.existentUser);
    },
  },
};
</script>

<style></style>
