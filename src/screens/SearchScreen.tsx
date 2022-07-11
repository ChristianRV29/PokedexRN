import React from 'react';
import {
  ActivityIndicator,
  Platform,
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '~src/components/PokemonCard';

import { SearchInput } from '~src/components/SearchInput';
import { usePokemonSearch } from '~src/hooks/usePokemonSearch';
import { globalStyles } from '~src/theme/styles';

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();

  const { isFetching, simplePokemonList } = usePokemonSearch();

  const showHeaderComponent = () => (
    <Text
      style={{
        ...globalStyles.title,
        ...globalStyles.globalMargin,
        ...styles.searchText,
      }}>
      Pokedex
    </Text>
  );

  if (isFetching) {
    return (
      <View style={styles.activityWrapper}>
        <ActivityIndicator size={50} color="grey" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? top : top + 10,
      }}>
      <SearchInput />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        ListHeaderComponent={showHeaderComponent}
        numColumns={2}
        onEndReachedThreshold={0.4}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<ActivityIndicator size={20} color={'grey'} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activityWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  searchWrapper: {
    flex: 1,
    marginHorizontal: 20,
  },
  searchText: {
    marginTop: 15,
  },
});

export default SearchScreen;
