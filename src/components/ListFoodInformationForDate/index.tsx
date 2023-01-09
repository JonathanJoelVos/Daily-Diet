import { FoodInformation } from "@components/FoodInformation";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ListRenderItemInfo, TouchableOpacityProps } from "react-native";
import { ListFoodsPerDay, FoodShape } from "src/interfaces/foodInterface";
import { Container, Date } from "./styles";


export interface ListFoodInformationForDateProps 
extends TouchableOpacityProps {
  foodsTheDay: ListFoodsPerDay;
}


export function ListFoodInformationForDate({foodsTheDay,...rest}: ListFoodInformationForDateProps) {

    const navgation = useNavigation();

    function renderItem({item}:  ListRenderItemInfo<FoodShape>) {
      return (
          <FoodInformation
              onPress={() => navgation.navigate('editMeal', {food: item})}
              food={item}
          />
      )
    }   
    return (
    <Container>
        <Date>
            {foodsTheDay.date}
        </Date>
        <FlatList 
            data={foodsTheDay.infos}
            keyExtractor={item => item.id + item.name }
            renderItem={renderItem}
            scrollEnabled={false}
        />
    </Container>
  );
}