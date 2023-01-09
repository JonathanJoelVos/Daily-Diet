import { TouchableOpacityProps } from "react-native";
import { Container, TextInfoButton } from "./styles";

interface ButtonProps extends TouchableOpacityProps{
    type?: "primary" | "secondary";
    title: string;
}


export function Button({type = "primary", title, ...rest} : ButtonProps) {
  return (
    <Container type={type} {...rest}>
        <TextInfoButton type={type}>
            {title}
        </TextInfoButton>
    </Container>
  )
}