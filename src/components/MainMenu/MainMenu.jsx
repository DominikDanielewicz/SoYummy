import { StyledMainMenu, MainMenuItem, MainMenuList } from './MainMenu.styled';
import { StyledNavLink } from './MainMenu.styled';
import { Icon } from './../Icon/Icon';

const MainMenu = () => {
  return (
    <StyledMainMenu>
      <MainMenuList>
        <MainMenuItem>
          <StyledNavLink to="/categories">Categories</StyledNavLink>
        </MainMenuItem>
        <MainMenuItem>
          <StyledNavLink to="/add-recipes">Add recipes</StyledNavLink>
        </MainMenuItem>
        <MainMenuItem>
          <StyledNavLink to="/my-recipes">My recipes</StyledNavLink>
        </MainMenuItem>
        <MainMenuItem>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </MainMenuItem>
        <MainMenuItem>
          <StyledNavLink to="/shopping-list">Shopping list</StyledNavLink>
        </MainMenuItem>
        <MainMenuItem>
          <StyledNavLink to="/search">
            <Icon icon="icon-magnifier" />
          </StyledNavLink>
        </MainMenuItem>
      </MainMenuList>
    </StyledMainMenu>
  );
};

export default MainMenu;
