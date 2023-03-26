import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          '& label.Mui-focused': {
            color: '#7E7E7E',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#D0CFCF',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'r#D0CFCF',
            },
            '&:hover fieldset': {
              borderColor: '#D0CFCF',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#D0CFCF',
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#D0CFCF',
          padding: '5px',
          marginRight: '7px',
          '&.Mui-checked': {
            color: '#00BDD3',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: 'absolute',
          bottom: '-23px',
          left: '0',
        },
      },
    },
  },
});
