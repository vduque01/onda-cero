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
  };
};

export const getters = {};

//
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
    // const isLoginCorrect = state.users.includes({
    //   usuario: existentUser.usuario,
    //   contraseña: existentUser.contraseña,
    // });

    const isLoginCorrect = state.users.some(
      (user) =>
        ((user.usuario === existentUser.usuario) &&
        (user.contraseña === existentUser.contraseña))
    );

    console.log(existentUser);
    
    if (isLoginCorrect) {
      // Poner lo que pasa si es correcto
      this.$router.push("/home");
    } else {
      // Poner lo que pasa si es incorrecto
    }
    console.log(isLoginCorrect);

    // state.isLoggedIn = true;
  },
  reproducir(state) {
    state.isPlaying = true;
    console.log(state.isPlaying)
  }

};

export const actions = {};
