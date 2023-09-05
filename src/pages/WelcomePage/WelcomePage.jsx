import { WelcomePageSection } from './WelcomePage.styled';
import Logo from './../../components/Logo/Logo';
import { ButtonsWrapper } from './WelcomePage.styled';
import Button from './../../components/Button/Button.styled';
import Paragraph from './../../components/Paragraph/Paragraph.styled';
import { useNavigate } from 'react-router-dom';
import Heading from './../../components/Heading/Heading.styled';
import { TextWrapper } from './WelcomePage.styled';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <WelcomePageSection>
      <Logo />
      <TextWrapper>
        <Heading as="h3">Welcome to the app!</Heading>
        <Paragraph $variant="welcome">
          This app offers more than just a collection of recipes - it is designed to be your very
          own digital cookbook. You can easily save and retrieve your own recipes at any time.
        </Paragraph>
      </TextWrapper>
      <ButtonsWrapper>
        <Button $variant="register" onClick={() => navigate('/register')}>
          Registration
        </Button>
        <Button $variant="signin" onClick={() => navigate('/login')}>
          Sign in
        </Button>
      </ButtonsWrapper>
    </WelcomePageSection>
  );
};

export default WelcomePage;
