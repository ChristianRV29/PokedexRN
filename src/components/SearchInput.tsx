/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SearchInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search pokemon"
          placeholderTextColor="grey"
          style={{ ...styles.textInput, top: Platform.OS === 'ios' ? 0 : 2 }}
        />
        <Icon name="search-outline" size={30} color="grey" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  inputWrapper: {
    alignItems: 'center',
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    elevation: 5,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    top: 2,
  },
});
