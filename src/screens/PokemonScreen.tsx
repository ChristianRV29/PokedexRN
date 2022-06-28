import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParamList } from '~src/navigation/StackNavigator';
import { FadeInImage } from '~src/components/FadeInImage';
import { usePokemon } from '~src/hooks/usePokemon';

type PokemonScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PokemonScreen'
>;

const PokemonScreen = ({ navigation, route }: PokemonScreenProps) => {
  const { pokemonInfo, pokemonColor } = route.params;
  const { top: topDevice } = useSafeAreaInsets();

  const { pokemon: pokemonDetails } = usePokemon(pokemonInfo.id);

  console.log('🐱 ~ PokemonData: ', pokemonDetails);

  return (
    <View>
      <View
        style={{
          ...styles.headerContainer,
          backgroundColor: pokemonColor,
        }}>
        <TouchableOpacity
          style={{ ...styles.backButton, top: topDevice + 5 }}
          onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" color="white" size={30} />
        </TouchableOpacity>
        <Text style={{ ...styles.pokemonName, top: topDevice + 40 }}>
          {pokemonInfo.name}
        </Text>
        <Image
          source={require('~src/assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />
        <FadeInImage uri={pokemonInfo.picture} style={styles.pokemonPicture} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    height: 370,
    zIndex: 999,
  },
  backButton: {
    left: 20,
    position: 'absolute',
  },
  pokemonName: {
    alignSelf: 'flex-start',
    color: 'white',
    left: 20,
    fontSize: 40,
  },
  pokeball: {
    bottom: -60,
    height: 250,
    opacity: 0.5,
    width: 250,
  },
  pokemonPicture: {
    bottom: 150,
    height: 250,
    width: 250,
  },
});

export default PokemonScreen;
