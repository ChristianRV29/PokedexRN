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
    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return { id, name, picture };
    });

    if (newPokemonList.length > 0) {
      setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    }
  };

  useEffect(() => {
    loadPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { simplePokemonList };
};
