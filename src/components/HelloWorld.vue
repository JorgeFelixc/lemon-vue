<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="grid-3x">
      <div :key="index" v-for="(pokemon, index) in pokemons">
        <PokeCard :src="pokemon.url" />
      </div>
      <!-- <div v-for="pokemon in pokemons" :key="pokemon.name">
        {{ pokemon }}
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ApiService from '../utils/services/index';
import PokeCard from '@/components/PokeCard/PokeCard.vue';

@Options({
  props: {
    msg: String,
  },
  components: {
    PokeCard,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;

  pokemons: [] = [];

  async mounted(): Promise<void> {
    const pokemons = await ApiService('pokemon').Get();
    console.log('pokemons:', pokemons);
    this.pokemons = pokemons.results || [];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-3x{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
</style>
