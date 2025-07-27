import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    colors: {
      black: '#000000',
      darkBlue: '#14213D',
      primary: 'rgb(220, 252, 231)',
      secondary: 'rgb(22, 101, 52)',
      tertiary: 'rgb(22, 163, 74)', 
      white: '#FFFFFF',
      grey: '#E5E5E5' //rgb(229, 229, 229)
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
