import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '~src/navigation/StackNavigator';

type PokemonScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'PokemonScreen'
>;

const PokemonScreen = (props: PokemonScreenProps) => {
  useEffect(() => {
    console.log('🐱 ~ PokemonProps: ', props);
  }, [props]);

  return (
    <View>
      <Text>Pokemon Screen</Text>
    </View>
  );
};

export default PokemonScreen;
