import React from 'react';
import { Text, View } from 'react-native';

import { SimplePokemon } from '~src/@types/interfaces/pokemon';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  );
};
