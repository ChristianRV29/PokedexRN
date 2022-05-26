import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { globalStyles } from '~src/theme/styles';

const App = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <Text style={globalStyles.text}>PokedexApp</Text>
      <Icon name={'book-outline'} color={'red'} size={30} />
    </View>
  );
};

export default App;
