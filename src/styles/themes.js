import { createGlobalStyle } from 'styled-components';
const styled = { createGlobalStyle };

const media = {
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    maxDesktop: '1400px',
  },
};

const typography = {
  family: 'Poppins',
  weight: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  size: {
    tiny: '0.8rem',
    mini: '1rem',
    small: '1.2rem',
    normal: '1.4rem',
    regular: '1.6rem',
    moderate: '1.8rem',
    fair: '2rem',
    average: '2.4rem',
    substantial: '2.8rem',
    medium: '3.2rem',
    great: '4.4rem',
    // extensive: '4.6rem',
    big: '6rem',
    large: '7.2rem',
    colossal: '10rem',
    // huge: '11rem',
  },
};

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  brand: '#8BAA36',
  brandVariant: '#EBF3D4',
  mainLight: '#FAFAFA',
  mainDark: '#1E1F28',
  mainDarkContrast: '#2A2C36',
  mainNeutral: '#D9D9D9',
  mainAccent: '#22252A',
  primaryDark: '#001833',
  secondaryDark: '#23262A',
  tertiaryDark: '#3E4462',
  primaryAccent: '#7d7d7d',
  secondaryAccent: '#8c8d91',
  tertiaryAccent: '#BDBDBD',
  danger: '#E74A3B',
  success: '#3CBC81',
  warning: '#F6C23E',
  copyright: '#8e8f92',
  inputNormalColor: '#d0d1d3',
  inputNormalBorder: '#23262a4d',
  switchbg: '#efefef',
  switchbtn: '#f4f5f5',
  searchBorder: '#f0f0f0',
};

//FAFAFA 0.1 #fafafa1a
//FAFAFA 0.2 #fafafa33
//FAFAFA 0.3 #fafafa4d
//FAFAFA 0.4 #fafafa66
//FAFAFA 0.5 #fafafa80
//FAFAFA 0.6 #fafafa99
//FAFAFA 0.7 #fafafab3
//FAFAFA 0.8 #fafafacc
//FAFAFA 0.9 #fafafae6

const lightTheme = {
  color: {
    background: {
      primary: colors.mainLight,
    },
    button: {
      primary: colors.mainAccent,
      secondary: colors.brand,
      tertiary: colors.brand,
      accent: colors.mainAccent,
    },
    search: {
      primary: colors.searchBorder,
      secondary: colors.tertiaryAccent,
      tertiary: colors.secondaryDark,
      accent: colors.white,
    },
    mainTitle: {
      primary: colors.mainAccent,
    },
  },

  ...media,
  ...typography,
};

const darkTheme = {
  color: {
    background: {
      primary: colors.mainDark,
    },
    button: {
      primary: colors.brand,
      secondary: colors.mainAccent,
      tertiary: colors.mainAccent,
      accent: colors.mainLight,
    },
    search: {
      primary: colors.secondaryAccent,
      secondary: colors.secondaryAccent,
      tertiary: colors.mainLight,
      accent: colors.transparent,
    },
    mainTitle: {
      primary: colors.mainLight,
    },
  },

  ...media,
  ...typography,
};

const GlobalStyles = styled.createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${props => props.theme.color.background.primary};
    transition: background-color 250ms;
    min-height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-family: 'poppins';
    font-weight: ${typography.weight.regular};
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${colors.placeholder};
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root,
  #__next {
    isolation: isolate;
  }
`;

export { GlobalStyles, lightTheme, darkTheme, colors };
