
import { BackgroundOptions } from "@components/BackgroundOptions";
import { ButtonIcon } from "@components/ButtonIcon";
import { ButtonMealtIsInDiet } from "@components/ButtonMealtIsInDiet";
import { HeaderNavigate } from "@components/HeaderNavigate";
import { Highlight } from "@components/Highlight";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeArea } from "@screens/Statistics/styles";
import { removeAllFoods } from "@storage/foodStorage/removeAllFoods";
import { removeFoodStorage } from "@storage/foodStorage/removeFoodStorage";
import { Text, View } from "react-native";
import { FoodShape } from "src/interfaces/foodInterface";
import { useTheme } from "styled-components";
import { ButtonsContainer, Container, Header } from "./styles";

type RouteParams = {
    food: FoodShape;
}

export function EditMeal() {
    const { food } = useRoute().params as RouteParams;
    const { COLORS } = useTheme();
    const navigator = useNavigation();

    async function handleRemoveFood(food: FoodShape) {
        await removeAllFoods(food)
        await removeFoodStorage(food)
        navigator.navigate("home")
    }
  return (
    <Container
      isOutOfDiet={food.isOutOfDiet}
    >
        <Header>
          <HeaderNavigate
              color={
                food.isOutOfDiet ? "red" : "green"
              }
              title="Refeição"
          />
        </Header>
        <BackgroundOptions
          style={{marginTop: -28}}
        > 
          <Highlight
            title={food.name}
            subtitle={food.description}
            titleColor={COLORS.GRAY_1}
            sizeTitle="large"
            sizeSubtitle="medium"
            style={{alignItems: "flex-start"}}
          />
          <Highlight
              title="Data e hora"
              subtitle={`${food.date} as ${food.hour}`}
              titleColor={COLORS.GRAY_1}
              sizeTitle="small"
              sizeSubtitle="large"
              style={{alignItems: "flex-start",marginTop: 24, marginBottom: 24}}
          />
          <ButtonMealtIsInDiet
            placeholder={
              food.isOutOfDiet ? "fora da dieta" : "dentro da dieta"
            }
            buttonType={
              food.isOutOfDiet ? "remove" : "add"
            }
            style={{borderRadius: 1000}}
          />
          <ButtonsContainer>
            <ButtonIcon
              type="primary"
              title="Editar refeição"
              icon="edit"
              style={{marginBottom: 16, alignSelf: "center"}}
              onPress={() => {
                navigator.navigate("newMeal", {
                  typeEdit: true, 
                  food})
              }}
            />
            <ButtonIcon
              type="secondary"
              title="Excluir refeição"
              icon="delete"
              style={{marginBottom: 16}}
              onPress={() => handleRemoveFood(food)}
            />
          </ButtonsContainer>
          
        </BackgroundOptions>
    </Container>
  )
}