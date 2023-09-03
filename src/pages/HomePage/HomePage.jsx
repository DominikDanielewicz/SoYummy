import Button from './../../components/Button/Button.styled';
import ThemeSwitcher from './../../components/ThemeSwitcher/ThemeSwitcher';
import SearchInput from './../../components/SearchInput/SearchInput';
import { Icon } from './../../components/Icon/Icon';
import Logo from './../../components/Logo/Logo';
import MainTitle from './../../components/MainTitle/MainTitle';
import Search from './../../components/Search/Search';
import Socials from './../../components/Socials/Socials';
import MainMenu from './../../components/MainMenu/MainMenu';

const HomePage = () => {
  return (
    <>
      <h1>Homepage</h1>
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
    </>
  );
};

export default HomePage;
