import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';

import { SimplePokemon } from '~src/@types/interfaces/pokemon';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const { width: windowWidth } = Dimensions.get('window');

  const [defaultBGColor, setDefaultBGColor] = useState<string>('gray');
  const { name, id, picture } = pokemon;

  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: defaultBGColor,
        }}>
        <View>
          <Text style={styles.name}>
            {name}
            {'\n#' + id}
          </Text>
        </View>
        <View style={styles.pokeballContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokeball}
          />
        </View>
        <FadeInImage uri={picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    height: 120,
    marginBottom: 25,
    marginHorizontal: 20,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    left: 10,
    top: 20,
  },
  pokeballContainer: {
    bottom: 0,
    height: 100,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    width: 100,
  },
  pokeball: {
    bottom: -20,
    height: 100,
    opacity: 0.5,
    position: 'absolute',
    right: -20,
    width: 100,
  },
  pokemonImage: {
    height: 120,
    position: 'absolute',
    right: -20,
    top: -30,
    width: 120,
  },
});
