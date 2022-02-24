import React, { useEffect } from 'react';
import GoogleFontLoader from 'react-google-font-loader';

import { darkTheme } from './themes/dark-theme';
import { lightTheme } from './themes/light-theme';
import { Colors } from './types/colors';

type ThemeOptions = 'light' | 'dark';

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme: ThemeOptions;
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  useEffect(() => {
    const themes: Record<ThemeOptions, Colors> = {
      light: lightTheme,
      dark: darkTheme,
    };

    const colors = themes[theme];

    Object.keys(colors).forEach(key => {
      document.documentElement.style.setProperty(`--${key}`, colors[key as keyof Colors]);
    });
  });

  return (
    <>
      <GoogleFontLoader
        fonts={[
          { font: 'Roboto Condensed', weights: [400, 700] },
          { font: 'Roboto', weights: [400, 700] },
        ]}
        subsets={['latin']}
      />
      {children}
    </>
  );
};
