import { Pokemon } from "@/types";
import create from "zustand";

interface IPokemonState {
  pokemon: Pokemon[];
  setPokemon: (pokemon: Pokemon[]) => void;
  filteredPokemon: Pokemon[];
  filter: string;
  setFilter: (filter: string) => void;
}

export const usePokemonStore = create<IPokemonState>((set) => ({
  pokemon: [],
  filteredPokemon: [],
  filter: "",
  setPokemon: (pokemon: Pokemon[]) => set({ pokemon, filteredPokemon: pokemon }),
  setFilter: (filter: string) =>
    set((state) => ({
      filter,
      filteredPokemon: state.pokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(filter.toLowerCase())),
    })),
}));
