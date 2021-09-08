import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// import gothamRegular from './fonts/GothamPro.woff2';
// import gothamBold from './fonts/GothamPro-Bold.woff2';
// import gothamLight from './fonts/GothamPro-Light.woff2';
// import gothamMedium from './fonts/GothamPro-Medium.woff2';

// const createFontObj = (
//   name: string,
//   font: number,
//   weight = 'normal',
//   style = 'normal'
// ) => ({
//   fontFamily: name,
//   fontStyle: style,
//   fontWeight: weight,
//   src: `
//       local('Raleway'),
//       local('Raleway-Regular'),
//       url(${font}) format('woff2')
//     `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// });

// const gothamRegularFont = createFontObj('GothamPro', 400, gothamRegular);
// const gothamBoldFont = createFontObj('GothamPro', 700, gothamBold);
// const gothamLightFont = createFontObj('GothamPro', 300, gothamLight);
// const gothamMediumFont = createFontObj('GothamPro', 500, gothamMedium);
// Надо поискать подключение !!!!!!

let theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    //secondary: purple,

    secondary: {
      main: '#8561c5',
      //main: '#673ab7',
      // #4ba0d7
    },
    text: {
      primary: '#fff',
      secondary: '#9575cd',
    },
    background: {
      paper: '#171d2a',
      default: '#101724',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  // status: {
  //   danger: 'orange',
  // },
});

theme = responsiveFontSizes(theme);
export default theme;
