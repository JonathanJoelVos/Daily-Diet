
import { TouchableOpacityProps } from "react-native";
import { FoodShape } from "src/interfaces/foodInterface";
import { Container, DietIndicator, FoodDescription, HourContainer, HourText } from "./styles";

interface FoodInformationProps extends TouchableOpacityProps{
    food: FoodShape;
}



export function FoodInformation({food, ...rest}: FoodInformationProps) {
    const { hour, name, isOutOfDiet } = food;
  
    return (      
    <Container 
        {...rest}
    >
        <HourContainer>
            <HourText>
                {food.hour}
            </HourText>
        </HourContainer>
        <FoodDescription>
            {food.name}
        </FoodDescription>
        <DietIndicator 
            isOutOfDiet={food.isOutOfDiet}
        />
    </Container>
  )
}