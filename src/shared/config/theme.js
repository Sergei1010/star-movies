import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: { main: '#6C38A4' }, // cosmic violet
    secondary: { main: '#00C8FF' }, // neon blue
    success: { main: '#00FFC3' }, // mint
    warning: { main: '#FFD700' }, // gold
    error: { main: '#FF1744' },

    background: {
      default: '#F2F2F2',
      paper: '#FFFFFF',
    },

    text: {
      primary: '#0B0F2A',
      secondary: '#6C38A4',
    },
  },

  typography: {
    fontFamily: 'Inter, sans-serif',
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '--bg-main': '#F2F2F2',
          '--bg-card': '#FFFFFF',
          '--text-main': '#0B0F2A',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: { main: '#7F00FF' }, // primary violet
    secondary: { main: '#00C8FF' }, // neon blue
    success: { main: '#00FFC3' }, // mint green
    warning: { main: '#FFD700' }, // gold
    error: { main: '#FF1744' },

    background: {
      default: '#0B0F2A', // dark cosmic blue
      paper: 'rgba(108, 56, 164, 0.18)', // cosmic glass
    },

    text: {
      primary: '#F2F2F2',
      secondary: 'rgba(242,242,242,0.7)',
    },
  },

  typography: {
    fontFamily: 'Inter, sans-serif',
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '--bg-main': '#0B0F2A',
          '--bg-card': 'rgba(108, 56, 164, 0.18)',
          '--text-main': '#F2F2F2',
          background: 'linear-gradient(135deg, #6C38A4 0%, #2D0B5B 100%)',
        },
      },
    },
  },
});
