import { TouchableOpacityProps } from "react-native";
import { Container, Icon, TextInfoButton } from "./styles";

interface ButtonProps extends TouchableOpacityProps{
    type?: "primary" | "secondary";
    title: string;
    icon?: string;
}


export function ButtonIcon({type = "primary", title, icon, ...rest} : ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Icon 
        name={icon} 
        type={type}
      />
      <TextInfoButton type={type}>
        {title}
      </TextInfoButton>
    </Container>
  )
}