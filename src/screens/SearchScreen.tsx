/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  Platform,
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SimplePokemon } from '~src/@types/interfaces/pokemon';
import { Loading } from '~src/components/Loading';
import { PokemonCard } from '~src/components/PokemonCard';

import { SearchInput } from '~src/components/SearchInput';
import { usePokemonSearch } from '~src/hooks/usePokemonSearch';
import { globalStyles } from '~src/theme/styles';

const SearchScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const { top } = useSafeAreaInsets();

  const { isFetching, simplePokemonList } = usePokemonSearch();

  const [pokemonFiltered, setPokemonFiltered] = useState([] as SimplePokemon[]);
  const [term, setTerm] = useState<string>('');

  useEffect(() => {
    if (term.length === 0) {
      setPokemonFiltered([]);
    }

    setPokemonFiltered(
      simplePokemonList.filter(({ name }) =>
        name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
      ),
    );
  }, [term]);

  const showHeaderComponent = () => (
    <Text
      style={{
        ...globalStyles.title,
        ...globalStyles.globalMargin,
        marginTop: Platform.OS === 'ios' ? 100 : 60,
      }}>
      {term}
    </Text>
  );

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View>
      <SearchInput
        onTermChange={setTerm}
        style={{
          ...styles.searchInput,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 10,
        }}
      />
      <FlatList
        data={pokemonFiltered}
        keyExtractor={pokemon => pokemon.id}
        ListHeaderComponent={showHeaderComponent}
        numColumns={2}
        onEndReachedThreshold={0.4}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    position: 'absolute',
    zIndex: 99,
  },
  searchWrapper: {
    flex: 1,
    marginHorizontal: 20,
  },
});

export default SearchScreen;
