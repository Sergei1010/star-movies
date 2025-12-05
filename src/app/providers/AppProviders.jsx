import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from './ThemeProvider';
import { store } from '../store';

export const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Provider>
  );
};
