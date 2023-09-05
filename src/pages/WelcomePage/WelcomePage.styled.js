import styled from 'styled-components';
import { colors } from '../../styles/themes';
import { StyledLogo } from './../../components/Logo/Logo.styled';
import StyledParagraph from './../../components/Paragraph/Paragraph.styled';

import WelcomeBackgroundDesktop from '../../assets/images/welcome-desktop.jpg';
import WelcomeBackgroundDesktop2x from '../../assets/images/welcome-desktop@2x.jpg';
import WelcomeBackgroundMobile from '../../assets/images/welcome-mobile.jpg';
import WelcomeBackgroundMobile2x from '../../assets/images/welcome-mobile@2x.jpg';
import WelcomeBackgroundTablet from '../../assets/images/welcome-tablet.jpg';
import WelcomeBackgroundTablet2x from '../../assets/images/welcome-tablet@2x.jpg';

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
    url(${WelcomeBackgroundMobile});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: linear-gradient(
        180deg,
        ${colors.welcomeGradientFirst} 58.58%,
        ${colors.welcomeGradientSecond} 78.98%,
        ${colors.transparent} 100%
      ),
      url(${WelcomeBackgroundMobile2x});
  }

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        180deg,
        ${colors.welcomeGradientFirst} 58.58%,
        ${colors.welcomeGradientSecond} 78.98%,
        ${colors.transparent} 100%
      ),
      url(${WelcomeBackgroundTablet});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: linear-gradient(
        180deg,
        ${colors.welcomeGradientFirst} 58.58%,
        ${colors.welcomeGradientSecond} 78.98%,
        ${colors.transparent} 100%
      ),
      url(${WelcomeBackgroundTablet2x});
  }

  @media screen and (min-width: 1200px) {
    background-image: linear-gradient(
        180deg,
        ${colors.welcomeGradientFirst} 58.58%,
        ${colors.welcomeGradientSecond} 78.98%,
        ${colors.transparent} 100%
      ),
      url(${WelcomeBackgroundDesktop});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1200px),
    screen and (min-resolution: 192dpi) and (min-width: 1200px),
    screen and (min-resolution: 2dppx) and (min-width: 1200px),
    screen and (min-width: 2560px) {
    background-image: linear-gradient(
        180deg,
        ${colors.welcomeGradientFirst} 58.58%,
        ${colors.welcomeGradientSecond} 78.98%,
        ${colors.transparent} 100%
      ),
      url(${WelcomeBackgroundDesktop2x});
  }

  ${StyledLogo} {
    width: 6.8rem;
    height: 6.8rem;
    padding: 1.4rem;
  }

  ${StyledParagraph} {
    max-width: 540px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1.8rem;
`;
