import styled from 'styled-components';
import { colors } from '../../styles/themes';

export const StyledMainTitle = styled.h1`
  color: ${colors.brand};
  font-size: ${props => props.theme.size.colossal};
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.05rem;
`;

export const MainTitlePart = styled.span`
  color: ${props => props.theme.color.mainTitle.primary};
`;
