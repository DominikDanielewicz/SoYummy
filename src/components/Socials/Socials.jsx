import { Icon } from './../Icon/Icon';
import { SocialsList, SocialsElement } from './Socials.styled';

const Socials = () => {
  return (
    <SocialsList>
      <SocialsElement>
        <Icon icon="icon-facebook" />
      </SocialsElement>
      <SocialsElement>
        <Icon icon="icon-youtube" />
      </SocialsElement>
      <SocialsElement>
        <Icon icon="icon-twitter" />
      </SocialsElement>
      <SocialsElement>
        <Icon icon="icon-instagram" />
      </SocialsElement>
    </SocialsList>
  );
};

export default Socials;
