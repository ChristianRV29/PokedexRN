import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

import { PokemonDetails as Pokemon } from '~src/@types/interfaces/pokemon';

interface Props {
  pokemon: Pokemon;
}

export const PokemonDetails: React.FC<Props> = props => {
  const { pokemon } = props;

  useEffect(() => {
    if (pokemon) {
      console.log('🐱 ~ PokemonData: ', pokemon);
    }
  }, [pokemon]);

  return (
    <ScrollView style={{ ...StyleSheet.absoluteFillObject }}>
      <View style={styles.container}>
        <Text style={styles.title}>Type</Text>
        <View style={styles.typesWrapper}>
          {/* <Text>{pokemon.types[0].type}</Text> */}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 370,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  typesWrapper: {
    flexDirection: 'row',
  },
  typeText: {
    marginRight: 10,
    fontSize: 17,
  },
});
