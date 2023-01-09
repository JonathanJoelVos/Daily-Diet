import { useNavigation } from "@react-navigation/native";
import { TouchableOpacityProps } from "react-native";
import { BackIcon, Container } from "./styles";

interface BackIconButtonProps extends TouchableOpacityProps{
  color: string;
};

export function BackButtonIcon({ color, ...rest}: BackIconButtonProps) {
  const navigation = useNavigation();

  function goHome() {
    navigation.navigate("home");
  }

  return (
    <Container 
      {...rest}
      onPress={goHome}
    >
      <BackIcon 
        color={color}
      />
    </Container>
  );
}