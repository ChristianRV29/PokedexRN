import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import { SimplePokemon } from '~src/@types/interfaces/pokemon';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const { width: windowWidth } = Dimensions.get('window');

  const { name, id } = pokemon;

  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={{ ...styles.cardContainer, width: windowWidth * 0.4 }}>
        <View>
          <Text style={styles.name}>
            {name}
            {'\n#' + id}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: 120,
    marginBottom: 25,
    marginHorizontal: 20,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
});
