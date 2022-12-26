import React, { createContext, useState } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { darkTheme } from './dark-theme';
import { lightTheme } from './light-theme';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}
const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type ThemeInterface = typeof DefaultTheme;

export interface StyleProps {
  theme: ThemeInterface;
}


export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => { },
});
export const ThemeProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.light);

  function toggleTheme() {
    if (theme === ThemeType.light) {
      setTheme(ThemeType.dark);
    } else {
      setTheme(ThemeType.light);
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <PaperProvider theme={themes[theme]}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
};
