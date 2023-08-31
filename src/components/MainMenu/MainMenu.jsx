import { StyledMainMenu, MainMenuItem, MainMenuList } from './MainMenu.styled';
import { NavLink } from 'react-router-dom';
import { Icon } from './../Icon/Icon';

const MainMenu = () => {
  return (
    <StyledMainMenu>
      <MainMenuList>
        <MainMenuItem>
          <NavLink to="/categories">Categories</NavLink>
        </MainMenuItem>
        <MainMenuItem>
          <NavLink to="/add-recipes">Add recipes</NavLink>
        </MainMenuItem>
        <MainMenuItem>
          <NavLink to="/my-recipes">My recipes</NavLink>
        </MainMenuItem>
        <MainMenuItem>
          <NavLink to="/favorites">Favorites</NavLink>
        </MainMenuItem>
        <MainMenuItem>
          <NavLink to="/shopping-list">Shopping list</NavLink>
        </MainMenuItem>
        <MainMenuItem>
          <NavLink to="/search">
            <Icon icon="icon-magnifier" />
          </NavLink>
        </MainMenuItem>
      </MainMenuList>
    </StyledMainMenu>
  );
};

export default MainMenu;
