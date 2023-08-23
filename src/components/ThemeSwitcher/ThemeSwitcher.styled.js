import styled from 'styled-components';
import { colors } from '../../styles/themes';

export const Switch = styled.div`
  position: relative;
  width: 6.1rem;
  height: 2.7rem;
  border-radius: 20px;
  background-color: ${props => (props.value ? colors.brand : colors.switchbg)};
  box-shadow: 0rem 0.6rem 0.8rem 0.3rem rgba(0, 0, 0, 0.1) inset;
  cursor: pointer;
  transition: background-color 250ms;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${props => (props.value ? '77%' : '23%')};
    transform: translate(-50%, -50%);
    background-color: ${colors.switchbtn};
    border-radius: 2rem;
    width: 2.1rem;
    height: 2.1rem;
    box-shadow: ${props =>
      props.value ? '-2px 1px 3px 1px rgba(0, 0, 0, 0.2)' : '1px 2px 3px 1px rgba(0, 0, 0, 0.3)'};
    transition: left 250ms, box-shadow 250ms;
  }
`;
