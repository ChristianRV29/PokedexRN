import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  Platform,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '~src/navigation/StackNavigator';
import { globalStyles } from '~src/theme/styles';
import { usePokemonPaginated } from '~src/hooks/usePokemonPaginated';
import { PokemonCard } from '~src/components/PokemonCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type HomeScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  const { top } = useSafeAreaInsets();

  const showHeaderComponent = () => (
    <Text
      style={{
        ...globalStyles.title,
        ...globalStyles.globalMargin,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
      }}>
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
