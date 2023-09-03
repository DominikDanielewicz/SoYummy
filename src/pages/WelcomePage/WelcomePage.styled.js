import styled from 'styled-components';
import { colors } from '../../styles/themes';
import WelcomeBackgroundDesktop from '../../assets/images/welcome-desktop.jpg';

export const WelcomePageSection = styled.section`
  width: 100%;
  height: 100vh;
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
`;
