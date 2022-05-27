import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '~src/screens/HomeScreen';
import PokemonScreen from '~src/screens/PokemonScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  PokemonScreen: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="HomeScreen" component={HomeScreen} />
        <Screen name="PokemonScreen" component={PokemonScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
