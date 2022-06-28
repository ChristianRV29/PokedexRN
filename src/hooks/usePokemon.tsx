/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { pokeApi } from '~src/api/PokeApi';
import { PokemonDetails } from '~src/@types/interfaces/pokemon';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState<PokemonDetails>({} as PokemonDetails);

  const getPokemonData = async () => {
    const resp = await pokeApi.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return { isLoading, pokemon };
};
