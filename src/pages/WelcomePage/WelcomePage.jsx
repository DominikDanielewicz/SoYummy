import { WelcomePageSection } from './WelcomePage.styled';
import Logo from './../../components/Logo/Logo';
import { ButtonsWrapper } from './WelcomePage.styled';
import Button from './../../components/Button/Button.styled';
import Paragraph from './../../components/Paragraph/Paragraph.styled';

const WelcomePage = () => {
  return (
    <WelcomePageSection>
      <Logo />
      <h2>Welcome to the app!</h2>
      <Paragraph $variant="welcome">
        This app offers more than just a collection of recipes - it is designed to be your very own
        digital cookbook. You can easily save and retrieve your own recipes at any time.
      </Paragraph>
      <ButtonsWrapper>
        <Button $variant="register">Registration</Button>
        <Button $variant="signin">Sign in</Button>
      </ButtonsWrapper>
    </WelcomePageSection>
  );
};

export default WelcomePage;
