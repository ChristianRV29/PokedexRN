/* eslint-disable no-fallthrough */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';

import { SimplePokemon } from '~src/@types/interfaces/pokemon';
import { FadeInImage } from './FadeInImage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '~src/navigation/StackNavigator';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const isMounted = useRef(true);
  const [defaultBGColor, setDefaultBGColor] = useState<string>('');

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { width: windowWidth } = Dimensions.get('window');
  const { name, id, picture } = pokemon;

  useEffect(() => {
    ImageColors.getColors(picture, { fallback: 'grey' }).then(result => {
      if (!isMounted.current) {
        return;
      }

      switch (result.platform) {
        case 'android':
          setDefaultBGColor(result.dominant || 'grey');
          break;
        case 'ios':
          setDefaultBGColor(result.background || 'grey');

        default:
          throw new Error(
            '🐞 An error has been ocurred while try to check the platform',
          );
      }
    });
  }, []);

  const onPressCard = () =>
    navigation.navigate('PokemonScreen', {
      pokemonInfo: pokemon,
      pokemonColor: defaultBGColor,
    });

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPressCard}>
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
    elevation: 8,
    height: 120,
    marginBottom: 25,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
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
