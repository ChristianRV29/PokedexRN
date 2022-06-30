import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '~src/screens/HomeScreen';
import PokemonScreen from '~src/screens/PokemonScreen';
import { SimplePokemon } from '~src/@types/interfaces/pokemon';

export type RootStackParamList = {
  HomeScreen: undefined;
  PokemonScreen: {
    pokemonInfo: SimplePokemon;
    pokemonColor: string;
  };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="PokemonScreen" component={PokemonScreen} />
    </Navigator>
  );
};

export default StackNavigator;
