import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export let theme = createTheme({
  typography: {
    fontFamily: 'Heebo, sans-serif',
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
      light: '#EDF7FA'
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#21243D'
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',
          '@media (min-width: 600px)': {
            maxWidth: '680px',
          }
        },
        maxWidthMd: {
          maxWidth: '860px',
          '@media (min-width: 900px)': {
            maxWidth: '860px',
          }
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'none'
      },
      styleOverrides: {
        root: {
          color: 'black',
          '&.active': {
            color: 'green',
          },
          '&:hover': {
            color: '#FF6464',
          },
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'contained',
            color: 'primary'
          },
          style: {
            color: 'white'
          }
        }
      ]
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingInline: 2,
        }
      },
      variants: [
        {
          props: { color: 'secondary' },
          style: {
            backgroundColor: '#142850',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
          }
        }
      ]
    }
  }
})

// will be auto set up from h1-h6
theme = responsiveFontSizes(theme)
