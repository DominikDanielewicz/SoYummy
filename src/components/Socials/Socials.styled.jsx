import styled from 'styled-components';
import { StyledIcon } from './../Icon/Icon.styled';

export const SocialsList = styled.ul`
  display: flex;
  gap: 18px;
`;

export const SocialsElement = styled.li`
  display: flex;

  ${StyledIcon} {
    width: 2rem;
    height: 2rem;
    fill: ${props => props.theme.color.social.primary};
    transition: fill 150ms;
  }

  &:hover,
  &:focus,
  &:active {
    svg {
      fill: ${props => props.theme.color.social.secondary};
    }
  }
`;
