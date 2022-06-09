import { useEffect, useRef, useState } from 'react';

import { pokeApi } from '~src/api/PokeApi';
import { PokemonPaginatedResponse } from '~src/@types/interfaces/pokemon';

export const usePokemonPaginated = () => {
  const [simplePokemonList, setSimplePokemonList] = useState([]);

  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    const resp = await pokeApi.get<PokemonPaginatedResponse>(
      nextPageUrl.current,
    );
    nextPageUrl.current = resp.data.next;
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {};
};
