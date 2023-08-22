import './App.css';
import Button from './components/Button/Button';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './styles/themes';
import { useSelector } from 'react-redux';
import { selectTheme } from './redux/theme/selectors';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

const App = () => {
  const themeType = useSelector(selectTheme);
  const theme = themeType === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>SoYummy</h1>
      <Button>Search</Button>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default App;
