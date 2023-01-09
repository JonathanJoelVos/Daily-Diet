import { Avatar, Container, Logo } from "./styles";
import logoImg from '../../assets/logo.png';
import AvatarImg from '../../assets/Ellipse.png';

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
      <Avatar source={AvatarImg} />
    </Container>
  )
}