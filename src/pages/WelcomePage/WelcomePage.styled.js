import styled from 'styled-components';
import { colors } from '../../styles/themes';
import WelcomeBackgroundDesktop from '../../assets/images/welcome-desktop.jpg';
import { StyledLogo } from './../../components/Logo/Logo.styled';
import StyledParagraph from './../../components/Paragraph/Paragraph.styled';

export const WelcomePageSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.2rem;
  background-image: linear-gradient(
      180deg,
      ${colors.welcomeGradientFirst} 58.58%,
      ${colors.welcomeGradientSecond} 78.98%,
      ${colors.transparent} 100%
    ),
    url(${WelcomeBackgroundDesktop});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  ${StyledLogo} {
    width: 6.8rem;
    height: 6.8rem;
    padding: 1.4rem;
  }

  ${StyledParagraph} {
    max-width: 540px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1.8rem;
`;
