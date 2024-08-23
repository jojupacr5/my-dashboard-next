import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const getInitialState = (): PokemonsState => {
  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") ?? "{}"
  );
  return favorites;
};

const initialState: PokemonsState = {
  ...getInitialState(),
  // "1": { id: "1", name: "bulbasaur" },
  // "3": { id: "3", name: "Venusaur" },
  // "6": { id: "6", name: "Charizard" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (state[id] !== undefined) {
        delete state[id];
        // return;
      } else {
        state[id] = pokemon;
      }

      //Todo: no se debe de hacer en redux
      localStorage.setItem("favorite-pokemons", JSON.stringify(state));
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
