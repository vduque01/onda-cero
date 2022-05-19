import { podcasts } from "../models/data";
import { playlists } from "../models/data";
import { users } from "../models/data";

export const state = () => {
  return {
    podcasts: podcasts,
    playlists: playlists,
    users: users,
    isLoggedIn: false,
    isPlaying: false,
    isAsideVisible: false,
    isAlertMessageVisible: false,
  };
};
      
export const getters = {};


export const mutations = {
  addUser(state, newUser) {
    state.users.push({
      // email: newUser.email,
      usuario: newUser.usuario,
      contraseña: newUser.contraseña,
    });
    this.$router.push("/home");
    state.isLoggedIn = true;
  },
  checkUser(state, existentUser) {
    const isLoginCorrect = state.users.some(
      (user) =>
        ((user.usuario === existentUser.usuario) &&
        (user.contraseña === existentUser.contraseña))
    );
    
    if (isLoginCorrect) {
      // Poner lo que pasa si es correcto
      this.$router.push("/home");
    } else {
      console.log("incorrecto")
      state.isAlertMessageVisible = true
    }

  },
  reproducir(state) {
    state.isPlaying = true;
    console.log(state.isPlaying)
  },
  updateStatus(state) {
    if (state.isAsideVisible == false) {
      state.isAsideVisible = true;
    } else {
      state.isAsideVisible = false;
    }
    console.log(state.isAsideVisible)
  },

};

export const actions = {};
