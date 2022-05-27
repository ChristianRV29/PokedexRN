import React from 'react';
import { Button, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { globalStyles } from '~src/theme/styles/index';
import { RootStackParamList } from '~src/navigation/StackNavigator';

type HomeScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProps>();

  return (
    <View style={globalStyles.mainContainer}>
      <Text style={globalStyles.text}>HomeScreen</Text>
      <Icon name={'home-outline'} size={25} color={'gray'} />
      <Button
        title="Navigate to pokemonscreen"
        onPress={() => navigation.navigate('PokemonScreen')}
      />
    </View>
  );
};

export default HomeScreen;
