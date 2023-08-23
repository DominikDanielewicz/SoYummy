import styled from 'styled-components';
import { colors } from '../../styles/themes';

export const StyledSearchInput = styled.input`
  max-width: 51rem;
  width: 100%;
  min-width: 29.5rem;
  height: 7rem;
  border: 0.1rem solid ${props => props.theme.color.search.primary};
  border-radius: 2.4rem 4.4rem;
  background-color: ${props => props.theme.color.search.accent};
  color: ${props => props.theme.color.search.secondary};
  padding: 0 17rem 0 4.8rem;
  transition: background-color 250ms, color 250ms, border 250ms;

  &:hover,
  &:active,
  &:focus {
    color: ${props => props.theme.color.search.tertiary};
    border: 0.1rem solid ${colors.secondaryAccent};
  }

  &::placeholder {
    color: ${props => props.theme.color.search.secondary};
  }
`;
