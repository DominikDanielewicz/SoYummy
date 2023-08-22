import styled from 'styled-components';

export const Switch = styled.div`
  position: relative;
  width: 61px;
  height: 27px;
  border-radius: 20px;
  background-color: ${props => (props.value ? '#8BAA36' : '#efefef')};
  box-shadow: 0px 6px 8px 3px rgba(0, 0, 0, 0.1) inset;
  cursor: pointer;
  transition: background-color 250ms;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${props => (props.value ? '77%' : '23%')};
    transform: translate(-50%, -50%);
    background-color: #f4f5f5;
    border-radius: 20px;
    width: 21px;
    height: 21px;
    box-shadow: ${props =>
      props.value ? '-2px 1px 3px 1px rgba(0, 0, 0, 0.2)' : '1px 2px 3px 1px rgba(0, 0, 0, 0.3)'};
    transition: left 250ms, box-shadow 250ms;
  }
`;
