import styled from 'styled-components';

const StyledButton = styled.button`
  width: 161px;
  height: 70px;
  background-color: ${props => props.theme.color.button.primary};
  color: #fff;
  border-radius: 24px 44px;
  border: 2px solid ${props => props.theme.color.button.primary};

  &:hover,
  &:focus,
  &:active {
    background-color: ${props => props.theme.color.button.secondary};
    border: 2px solid ${props => props.theme.color.button.secondary};
    transition: background-color 150ms, border 150ms;
    outline: none;
  }
`;

export default StyledButton;
