import { useEffect, useRef } from 'react';

import { pokeApi } from '~src/api/PokeApi';

export const usePokemonPaginated = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    const resp = await pokeApi.get(nextPageUrl.current);

    console.log(resp.data);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {};
};
