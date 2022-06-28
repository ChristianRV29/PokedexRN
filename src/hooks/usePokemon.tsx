import { useEffect, useState } from 'react';
import { pokeApi } from '~src/api/PokeApi';
import { PokemonDetails } from '../@types/interfaces/pokemon';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState<PokemonDetails>({} as PokemonDetails);

  const getPokemonData = async (pokemonId: string) => {
    const resp = await pokeApi.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    );
    setPokemon(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonData(id);
  }, [id]);

  return { isLoading, pokemon };
};
