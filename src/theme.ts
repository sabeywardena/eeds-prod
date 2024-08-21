'use client';
import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const inter = Inter({
  weight: ['300', '400', '500', '800'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 900,
  },
  palette: {
    text: {
      primary: '#919191',
      secondary: "#fff"
    },
    common: {
      white: '#fff',
      black: '#000'
    }
  },
});

export default theme;