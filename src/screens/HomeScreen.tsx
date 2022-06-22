import React from 'react';
import { FlatList, Image, Text } from 'react-native';
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
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  const { top } = useSafeAreaInsets();
  return (
    <>
      <Image
        source={require('~src/assets/pokebola.png')}
        style={globalStyles.pokeballBG}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
      />
    </>
  );
};

export default HomeScreen;
