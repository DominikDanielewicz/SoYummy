import styled, { css } from 'styled-components';
import { colors } from '../../styles/themes';

const StyledButton = styled.button`
  min-width: 16.1rem;
  height: 7rem;
  background-color: ${props => props.theme.color.button.primary};
  color: ${colors.mainLight};
  border-radius: 2.4rem 4.4rem;
  border: none;
  transition: background-color 150ms;
  font-size: 1.6rem;
  line-height: 1.125;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: ${props => props.theme.color.button.secondary};
  }

  ${props =>
    props.$variant === 'roundedSmall' &&
    css`
      height: 5.5rem;
    `}

  ${props =>
    props.$variant === 'category' &&
    css`
      min-width: 23.8rem;
      height: 6.1rem;
      background-color: ${colors.transparent};
      border: 0.2rem solid ${colors.brand};
      color: ${props => props.theme.color.button.accent};
      transition: color 150ms;

      &:hover,
      &:focus,
      &:active {
        background-color: ${colors.brand};
        color: ${colors.mainLight};
      }
    `}

  ${props =>
    props.$variant === 'logout' &&
    css`
      min-width: 14.1rem;
      height: 4.3rem;
      background-color: ${colors.brand};
      border-radius: 2.4rem 4.4rem;
      font-size: 1.4rem;

      &:hover,
      &:focus,
      &:active {
        background-color: ${colors.mainAccent};
      }
    `}

  ${props =>
    props.$variant === 'signin' &&
    css`
      min-width: 14.1rem;
      height: 6.7rem;
      background-color: ${colors.transparent};
      border: 0.2rem solid ${colors.mainLight};
      transition: color 150ms, border 150ms;

      &:hover,
      &:focus,
      &:active {
        background-color: ${colors.transparent};
        border: 0.2rem solid ${colors.brand};
        color: ${colors.brand};
      }
    `}

    ${props =>
    props.$variant === 'register' &&
    css`
      min-width: 18.4rem;
      height: 6.7rem;
      background-color: ${colors.brand};

      &:hover,
      &:focus,
      &:active {
        background-color: ${colors.mainAccent};
      }
    `}

    ${props =>
    props.$variant === 'square' &&
    css`
      max-width: 40rem;
      width: 100%;
      min-width: 13.7rem;
      height: 6rem;
      border-radius: 0.6rem;
      background-color: ${props => props.theme.color.button.secondary};
      transition: color 150ms;

      &:hover,
      &:focus,
      &:active {
        color: ${props => props.theme.color.button.primary};
      }
    `}

    ${props =>
    props.$variant === 'squareSmall' &&
    css`
      max-width: 19.2rem;
      width: 19.2rem;
      min-width: 13.7rem;
      height: 6rem;
      border-radius: 0.6rem;
    `}

    ${props =>
    props.$variant === 'squareGray' &&
    css`
      max-width: 19.2rem;
      width: 19.2rem;
      min-width: 13.7rem;
      height: 6rem;
      border-radius: 0.6rem;
      border: 1px solid ${colors.mainNeutral};
      background-color: ${colors.mainNeutral};
      color: ${colors.secondaryDark};

      &:hover,
      &:focus,
      &:active {
        border: 1px solid ${colors.secondaryDark};
        background-color: ${colors.transparent};
      }
    `}
`;

export default StyledButton;
