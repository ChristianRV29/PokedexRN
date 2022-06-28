import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '~src/navigation/StackNavigator';

type PokemonScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PokemonScreen'
>;

const PokemonScreen = ({ navigation, route }: PokemonScreenProps) => {
  useEffect(() => {
    console.log('🐱 ~ PokemonInfo: ', route.params.pokemonInfo);
  }, [route]);

  return (
    <View>
      <Text>Pokemon Screen</Text>
    </View>
  );
};

export default PokemonScreen;
