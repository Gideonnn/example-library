import React from 'react';
declare type ThemeOptions = 'light' | 'dark';
export interface ThemeProviderProps {
    children: React.ReactNode;
    theme: ThemeOptions;
}
export declare const ThemeProvider: ({ children, theme }: ThemeProviderProps) => JSX.Element;
export {};
