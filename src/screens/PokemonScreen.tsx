import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParamList } from '~src/navigation/StackNavigator';

type PokemonScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PokemonScreen'
>;

const PokemonScreen = ({ navigation, route }: PokemonScreenProps) => {
  const { pokemonInfo, pokemonColor } = route.params;
  const { top: topDevice } = useSafeAreaInsets();

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
});

export default PokemonScreen;
