<template>
  <div v-if="status.success" class="wrapper-pokemon">
    <img :src="pokemon.sprites.front_default" />
    <h1>{{ pokemon.name }}</h1>
  </div>

  <div v-if="status.loading">
    <h2>Loading..</h2>
  </div>

  <div v-if="status.error">
    <h2>Error retrieving</h2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ApiService from '@/utils/services';

interface IPokeData {
  name: string;
}

@Options({
  props: {
    src: String,
  },
})
export default class PokeCard extends Vue {
  status = {
    loading: true,
    error: false,
    success: false,
  };

  src!: string;

  pokemon?: IPokeData = undefined;

  async mounted(): Promise<void> {
    if (!this.src) return;

    try {
      const pokeData = await ApiService(this.src).GetUri();
      console.log('this message:', pokeData);

      if (pokeData) {
        this.pokemon = pokeData;
        this.status.loading = false;
        this.status.success = true;
        return;
      }
    } catch (ex) {
      this.status.loading = false;
      this.status.error = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper-pokemon {
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
}
</style>
