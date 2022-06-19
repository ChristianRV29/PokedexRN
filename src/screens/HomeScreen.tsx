import React, { useEffect } from 'react';
import { Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '~src/navigation/StackNavigator';
import { globalStyles } from '~src/theme/styles';
import { usePokemonPaginated } from '~src/hooks/usePokemonPaginated';

type HomeScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const HomeScreen = () => {
  const { simplePokemonList } = usePokemonPaginated();

  console.log('📦🦊 ~ PokemonList: ', simplePokemonList);

  const { top } = useSafeAreaInsets();
  return (
    <>
      <Image
        source={require('~src/assets/pokebola.png')}
        style={globalStyles.pokeballBG}
      />
      <Text style={{ ...globalStyles.title, top: top + 20 }}>Pokedex</Text>
    </>
  );
};

export default HomeScreen;
