import styled from 'styled-components';

export const StyledMainMenu = styled.nav``;

export const MainMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-items: flex-start;
  flex-wrap: nowrap;
`;

export const MainMenuItem = styled.li`
  color: ${props => props.theme.color.mainMenu.primary};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6;
  display: flex;
`;
