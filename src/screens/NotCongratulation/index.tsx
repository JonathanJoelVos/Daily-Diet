import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight"
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import ImageNotCongratuation from "../../assets/Illustration-2.png";
import {Container, Image} from "@screens/Congratuations/styles"

export const NotCongratulation = () => {
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    return (
        <Container>
               <Highlight
                title="Que pena!"
                subtitle="Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
                titleColor= {COLORS.RED_DARK}
                sizeTitle="medium"
                sizeSubtitle="medium"
            />
            <Image
                source={ImageNotCongratuation}
            />
            <Button 
                title="Ir para a pagina inicial"
                onPress={() => navigation.navigate("home")}
                style={{width: 181}}
            />
        </Container>
    )
}