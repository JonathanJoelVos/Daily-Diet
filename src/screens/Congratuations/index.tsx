import { Highlight } from "@components/Highlight";
import { useTheme } from "styled-components/native";
import { Container, Image } from "./styles";
import ImageCongratuations from "../../assets/Illustration.png";

import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function Congratuations(){
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    return (
        <Container>
            <Highlight
                title="Continue assim!"
                subtitle="Você continua dentro da dieta. Muito bem!"
                titleColor= {COLORS.GREEN_DARK}
                sizeTitle="medium"
                sizeSubtitle="medium"
            />
            <Image
                source={ImageCongratuations}
            />
            <Button 
                title="Ir para a pagina inicial"
                onPress={() => navigation.navigate("home")}
                style={{width: 181}}
            />
        </Container>
    )
}