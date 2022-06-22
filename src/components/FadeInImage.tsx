import React from 'react';
import { StyleProp, ImageStyle } from 'react-native';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style = {} }: Props) => {};
