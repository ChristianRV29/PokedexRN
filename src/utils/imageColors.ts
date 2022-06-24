/* eslint-disable no-fallthrough */
import ImageColors from 'react-native-image-colors';

interface ColorsProps {
  primary?: string;
  secondary?: string;
}

export const getImageColors = async (uri: string) => {
  const colors: ColorsProps = {};
  const result = await ImageColors.getColors(uri, { fallback: 'grey' });

  switch (result.platform) {
    case 'android':
      colors.primary = result.dominant;
      colors.secondary = result.average;
      break;
    case 'ios':
      colors.primary = result.primary;
      colors.secondary = result.secondary;
    default:
      throw new Error('🐞 ~ Unexpected error while trying to get colors');
  }

  return colors;
};
