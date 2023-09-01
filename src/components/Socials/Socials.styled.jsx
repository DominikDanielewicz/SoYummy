import styled from 'styled-components';
import { StyledIcon } from './../Icon/Icon.styled';

export const SocialsList = styled.ul`
  display: flex;
  gap: 18px;
`;

export const SocialsElement = styled.li`
  display: flex;
  cursor: pointer;

  ${StyledIcon} {
    width: 2rem;
    height: 2rem;
    fill: ${props => props.theme.color.social.primary};
    transition: fill 150ms;

    &:hover,
    &:focus,
    &:active {
      fill: ${props => props.theme.color.social.secondary};
    }
  }
`;
