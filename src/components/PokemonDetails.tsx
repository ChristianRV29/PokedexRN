import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

import { PokemonDetails as Pokemon } from '~src/@types/interfaces/pokemon';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: Pokemon;
}

export const PokemonDetails: React.FC<Props> = props => {
  const { pokemon } = props;

  return (
    <ScrollView
      style={{ ...StyleSheet.absoluteFillObject }}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Type</Text>
        <View style={styles.typesWrapper}>
          {pokemon.types.map(({ type }) => (
            <Text style={styles.typeText} key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Weight</Text>
        <Text>{pokemon.weight}Kg</Text>
        <Text style={styles.title}>Sprites</Text>
        <ScrollView horizontal>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.sprite}
          />
          <FadeInImage
            uri={pokemon.sprites.back_default}
            style={styles.sprite}
          />
          <FadeInImage
            uri={pokemon.sprites.front_shiny}
            style={styles.sprite}
          />
          <FadeInImage uri={pokemon.sprites.back_shiny} style={styles.sprite} />
        </ScrollView>
        <Text style={styles.title}>Basic abilities</Text>
        <View style={styles.typesWrapper}>
          {pokemon.abilities.map(({ ability }) => (
            <Text style={styles.typeText} key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Movements</Text>
        <View
          style={{
            ...styles.typesWrapper,
            flexWrap: 'wrap',
          }}>
          {pokemon.moves.map(({ move }) => (
            <Text style={styles.typeText} key={move.name}>
              {move.name}
            </Text>
          ))}
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
    marginTop: 20,
  },
  typesWrapper: {
    flexDirection: 'row',
  },
  typeText: {
    marginRight: 10,
    fontSize: 17,
  },
  sprite: {
    width: 100,
    height: 100,
  },
});
