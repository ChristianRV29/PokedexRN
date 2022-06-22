/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable handle-callback-err */
import React, { useState } from 'react';
import {
  StyleProp,
  ImageStyle,
  ActivityIndicator,
  View,
  Animated,
  NativeSyntheticEvent,
  ImageErrorEventData,
} from 'react-native';

import { useAnimation } from '~src/hooks/useAnimation';
import { StyleSheet } from 'react-native';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style = {} }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) =>
    setIsLoading(false);

  return (
    <View>
      {isLoading && (
        <ActivityIndicator style={styles.indicator} size={100} color={'red'} />
      )}
      <Animated.Image
        source={{ uri }}
        onError={onError}
        onLoad={finishLoading}
        style={{ ...(style as any), opacity }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
  },
});
