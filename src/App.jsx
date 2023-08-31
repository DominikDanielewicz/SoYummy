import Button from './components/Button/Button.styled';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './styles/themes';
import { useSelector } from 'react-redux';
import { selectTheme } from './redux/theme/selectors';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import SearchInput from './components/SearchInput/SearchInput';
import { Icon } from './components/Icon/Icon';
import Logo from './components/Logo/Logo';
import MainTitle from './components/MainTitle/MainTitle';
import Search from './components/Search/Search';
import Socials from './components/Socials/Socials';
import MainMenu from './components/MainMenu/MainMenu';

const App = () => {
  const themeType = useSelector(selectTheme);
  const theme = themeType === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeSwitcher />
      <Button>Search</Button>
      <Button $variant="roundedSmall">See recipe/Add</Button>
      <Button $variant="category">Other categories</Button>
      <Button $variant="logout">Log out</Button>
      <Button $variant="signin">Sign in</Button>
      <Button $variant="register">Registration</Button>
      <Button $variant="square">Square</Button>
      <Button $variant="squareSmall">squareSmall</Button>
      <Button $variant="squareGray">squareGray</Button>
      <SearchInput placeholder="Enter the text" type="text" />
      <Icon icon="icon-error" />
      <Logo />
      <Logo $secondary />
      <MainTitle />
      <Search />
      <Socials />
      <MainMenu />
    </ThemeProvider>
  );
};

export default App;
