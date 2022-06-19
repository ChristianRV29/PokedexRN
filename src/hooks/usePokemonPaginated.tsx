import { useEffect, useRef, useState } from 'react';

import { pokeApi } from '~src/api/PokeApi';
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from '~src/@types/interfaces/pokemon';

export const usePokemonPaginated = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );

  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    const resp = await pokeApi.get<PokemonPaginatedResponse>(
      nextPageUrl.current,
    );
    nextPageUrl.current = resp.data.next;

    handlePokemonData(resp.data.results);
  };

  const handlePokemonData = (pokemonList: Result[]) => {
    (pokemonList || []).forEach(poke => {
      console.log('🐱 ~ Pokemon: ', poke.name);
    });
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {};
};
