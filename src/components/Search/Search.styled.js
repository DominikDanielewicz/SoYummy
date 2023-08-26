import styled from 'styled-components';
import StyledButton from '../Button/Button.styled';

export const StyledSearch = styled.form`
  position: relative;
  max-width: 510px;

  ${StyledButton} {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
