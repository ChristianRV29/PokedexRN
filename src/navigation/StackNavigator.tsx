import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '~src/screens/HomeScreen';

export type StackNavigatorProps = {
  HomeScreen: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<StackNavigatorProps>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="HomeScreen" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
