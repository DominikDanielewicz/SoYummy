import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../styles/themes';
import { StyledIcon } from '../Icon/Icon.styled';

export const StyledMainMenu = styled.nav``;

export const MainMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-items: flex-start;
  flex-wrap: nowrap;
`;

export const MainMenuItem = styled.li`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6;
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.color.mainMenu.primary};
  transition: color 150ms;

  &:hover {
    color: ${colors.brand};
  }

  &.active {
    color: ${colors.brand};

    ${StyledIcon} {
      fill: ${colors.brand};
    }
  }

  ${StyledIcon} {
    width: 2.2rem;
    height: 2.2rem;
    fill: ${props => props.theme.color.mainMenu.primary};
    transition: fill 150ms;

    &:hover {
      fill: ${colors.brand};
    }
  }
`;
