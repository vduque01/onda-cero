<template>
  <div>
    <h2>Registro</h2>
    <p>Introduce tus datos</p>
    <div class="loginForm">
      <form action="" @submit.prevent="addUser()">
        <input-form v-model="newUser.email" :placeholder="'Email'" :hasNoIcons="true"></input-form>
        <input-form v-model="newUser.usuario" :placeholder="'Usuario'" :hasNoIcons="true"></input-form>
        <input-form v-model="newUser.contraseña" :placeholder="'Contraseña'" :hasNoIcons="true"></input-form>
        <!-- <input type="text" v-model="newUser.email">
        <input type="text" v-model="newUser.usuario">
        <input type="text" v-model="newUser.contraseña"> -->
        <boton @click="addUser()" :tipo="'primario'" :tamaño="'mediano'">Registrarse</boton>
      </form>
    </div>
    <p>¿Ya tienes cuenta? <nuxt-link to="/login">Inicia sesion</nuxt-link></p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default { 
  layout: "auth",
  data(){
    return{
      newUser: {
        email: "",
        usuario: "",
        contraseña: ""
      }
    }
  },
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
  },
  methods: {
    ...mapMutations({
      addUser_: "addUser",
    }),
    addUser() {
      this.addUser_(this.newUser)
    }

  },
};
</script>

<style></style>
