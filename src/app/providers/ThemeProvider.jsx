import React from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';

import { lightTheme, darkTheme } from '../../shared/config/theme';

export const ThemeProvider = ({ children }) => {
  const themeMode = useSelector((state) => state.settings.theme);

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
