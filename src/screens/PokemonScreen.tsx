import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '~src/navigation/StackNavigator';

type PokemonScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PokemonScreen'
>;

const PokemonScreen = ({ route }: PokemonScreenProps) => {
  const { pokemonInfo, pokemonColor } = route.params;

  return (
    <View>
      <View
        style={{
          ...styles.headerContainer,
          backgroundColor: pokemonColor,
        }}>
        <Text>{pokemonInfo.name}</Text>
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
});

export default PokemonScreen;
