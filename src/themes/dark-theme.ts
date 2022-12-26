import { DefaultTheme } from 'react-native-paper';
import { Dimensions } from 'react-native';

export const darkTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, primary: '#777' },
  metrics: {
    basePadding: 10,
    baseMargin: 10,
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
  },
  dark: true,
};
