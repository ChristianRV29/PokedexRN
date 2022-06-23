import React from 'react';
import { ActivityIndicator, FlatList, Image, Text } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '~src/navigation/StackNavigator';
import { globalStyles } from '~src/theme/styles';
import { usePokemonPaginated } from '~src/hooks/usePokemonPaginated';
import { PokemonCard } from '~src/components/PokemonCard';

type HomeScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  const showHeaderComponent = () => (
    <Text style={{ ...globalStyles.title, ...globalStyles.globalMargin }}>
      Pokedex
    </Text>
  );

  return (
    <>
      <Image
        source={require('~src/assets/pokebola.png')}
        style={globalStyles.pokeballBG}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        ListHeaderComponent={showHeaderComponent}
        numColumns={2}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<ActivityIndicator size={20} color={'red'} />}
      />
    </>
  );
};

export default HomeScreen;
