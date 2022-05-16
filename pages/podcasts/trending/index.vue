<template>
  <div>
    <h2>Lo más escuchado</h2>
    <div class="podcasts">
      <div class="podcast" v-for="(podcast, i) in podcasts" :key="i">
        <nuxt-link :to="`/podcasts/${podcast.id}`">
          <card-vertical
            :tipo="'programa'"
            :texto1="`${podcast.nombre}`"
            :texto2="`${podcast.autor.join(', ')}`"
          />
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
