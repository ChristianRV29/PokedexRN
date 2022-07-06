import { useEffect, useRef, useState } from 'react';

import { pokeApi } from '~src/api/PokeApi';
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from '~src/@types/interfaces/pokemon';

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState<Boolean>(false);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );

  const loadPokemons = async () => {
    const resp = await pokeApi.get<PokemonPaginatedResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=1200',
    );

    handlePokemonData(resp.data.results);
  };

  const handlePokemonData = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return { id, name, picture };
    });

    if (newPokemonList.length > 0) {
      setSimplePokemonList(newPokemonList);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    loadPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isFetching, simplePokemonList, loadPokemons };
};
