import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../theme/styles/index';

const HomeScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <Text style={globalStyles.text}>HomeScreen</Text>
      <Icon name={'home-outline'} size={25} color={'gray'} />
    </View>
  );
};

export default HomeScreen;
