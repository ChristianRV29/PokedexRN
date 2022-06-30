import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigator from '~src/navigation/StackNavigator';
import SearchScreen from '~src/screens/SearchScreen';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="StackNavigator" component={StackNavigator} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
