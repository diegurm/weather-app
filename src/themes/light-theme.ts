import { DefaultTheme } from 'react-native-paper';
import { Dimensions } from 'react-native';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#002EBE',
    secundary: '#062DAA',
    accent: '#000',
  },
  metrics: {
    basePadding: 10,
    baseMargin: 10,
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
  },
};
