import React from 'react';
import {
  ActivityIndicator,
  Platform,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SearchInput } from '~src/components/SearchInput';
import { usePokemonSearch } from '~src/hooks/usePokemonSearch';

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();

  const { isFetching } = usePokemonSearch();

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
        ...styles.searchWrapper,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
      }}>
      <SearchInput />
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
});

export default SearchScreen;
