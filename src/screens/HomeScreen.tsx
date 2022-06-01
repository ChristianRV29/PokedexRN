import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '~src/navigation/StackNavigator';
import { Image, Text } from 'react-native';
import { globalStyles } from '~src/theme/styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type HomeScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <>
      <Image
        source={require('~src/assets/pokebola.png')}
        style={globalStyles.pokeballBG}
      />
      <Text style={{ ...globalStyles.title, top: top + 20 }}>Pokedex</Text>
    </>
  );
};

export default HomeScreen;
