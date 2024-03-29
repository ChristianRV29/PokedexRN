/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '~src/hooks/useDebounceValue';

interface SearchInputProps {
  style?: StyleProp<ViewStyle>;
  onTermChange: (value: string) => void;
}

export const SearchInput = ({ style, onTermChange }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const devouncedValue = useDebouncedValue(inputValue);

  useEffect(() => {
    onTermChange(devouncedValue);
  }, [devouncedValue]);

  return (
    <View style={{ ...styles.container, ...(style as any) }}>
      <View style={styles.inputWrapper}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search pokemon"
          placeholderTextColor="grey"
          style={{ ...styles.textInput, top: Platform.OS === 'ios' ? 0 : 2 }}
          value={inputValue}
          onChangeText={e => setInputValue(e)}
        />
        <Icon name="search-outline" size={30} color="grey" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginHorizontal: 20,
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
