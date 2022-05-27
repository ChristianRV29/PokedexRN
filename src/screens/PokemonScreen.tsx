import React from 'react';
import { Text, View } from 'react-native';

import { globalStyles } from '~src/theme/styles';

const PokemonScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <Text style={globalStyles.text}>Pokemon screen</Text>
    </View>
  );
};

export default PokemonScreen;
