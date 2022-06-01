import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '~src/navigation/StackNavigator';
import { Image } from 'react-native';
import { globalStyles } from '~src/theme/styles';

type HomeScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const HomeScreen = () => {
  return (
    <>
      <Image
        source={require('~src/assets/pokebola.png')}
        style={globalStyles.pokeballBG}
      />
    </>
  );
};

export default HomeScreen;
