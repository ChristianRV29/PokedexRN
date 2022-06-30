import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabsNavigator from '~src/navigation/TabsNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default App;
