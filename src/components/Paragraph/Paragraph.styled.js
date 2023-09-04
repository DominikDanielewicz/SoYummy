import styled, { css } from 'styled-components';
import { colors } from '../../styles/themes';

const StyledParagraph = styled.p`
  color: ${props => props.theme.color.paragraph.primary};
  font-size: 1.8rem;
  line-height: 1.33;
  letter-spacing: -0.36px;

  ${props =>
    props.$variant === 'welcome' &&
    css`
      text-align: center;
      color: ${colors.mainLight};
    `}
`;

export default StyledParagraph;
