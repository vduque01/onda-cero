<template>
  <div>
    <h2>Episodios nuevos</h2>
    <div class="episodios">
      <div class="episodio" v-for="(podcast, i) in podcasts" :key="i">
        <nuxt-link
          :to="`/podcasts/${podcast.id}/${
            podcast.episodios[podcast.episodios.length - 1].id
          }`"
        >
          <card-horizontal>
            <p>
              {{
                podcasts[i].episodios[podcasts[i].episodios.length - 1].nombre
              }}
            </p>
            <p>{{ podcasts[i].nombre }}</p>
          </card-horizontal>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      podcasts: (state) => state.podcasts,
    }),
  },
};
</script>

<style></style>
