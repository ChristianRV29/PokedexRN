import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigator from '~src/navigation/StackNavigator';
import SearchScreen from '~src/screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D5',
        tabBarStyle: {
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          borderWidth: 0,
          elevation: 0,
          height: 60,
          paddingBottom: 10,
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon color={color} size={20} name="home-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon color={color} size={20} name="search-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
