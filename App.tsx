import React from 'react';
import { Text, View } from 'react-native';

import { globalStyles } from '~src/theme/styles';

const App = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <Text style={globalStyles.text}>PokedexApp</Text>
    </View>
  );
};

export default App;
