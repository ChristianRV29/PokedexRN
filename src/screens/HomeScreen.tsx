import React from 'react';
import { ActivityIndicator, FlatList, Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '~src/navigation/StackNavigator';
import { globalStyles } from '~src/theme/styles';
import { usePokemonPaginated } from '~src/hooks/usePokemonPaginated';

type HomeScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
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
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.picture }}
            style={{ width: 100, height: 100 }}
          />
        )}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{ height: 100 }} size={20} color={'red'} />
        }
      />
    </>
  );
};

export default HomeScreen;
