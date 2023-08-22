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
  size: {},
};

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  mainLight: '#FAFAFA',
  mainDark: '#1E1F28',
  titleLight: '#001833',
  headingLight: '#3E4462',
  brand: '#8BAA36',
  buttonDark: '#22252A',
  placeholder: '#bdbdbd',
};

const lightTheme = {
  color: {
    background: {
      primary: colors.mainLight,
    },
    button: {
      primary: colors.buttonDark,
      secondary: colors.brand,
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
      secondary: colors.buttonDark,
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

  body {
    background-color: ${props => props.theme.color.background.primary};
    min-height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-family: 'poppins';
    font-weight: ${typography.weight.regular};
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
  canvas,
  svg {
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
