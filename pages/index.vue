<template>
  <div>

    <p>Bienvenidos a onda cero</p>
    <nuxt-link :to="'/home'"><p>Ir al home</p></nuxt-link>
    <div v-if="!isLoggedIn"></div>
    <div v-if="isLoggedIn"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SplashPage from '../components/SplashPage.vue';
export default {
  components: { SplashPage },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.isLoggedIn,
    }),
  },
  data(){
    return {  };
  },
  layout: "auth",
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push("/login");
    }
  },
  methods: {

  },
};
</script>

<style></style>
