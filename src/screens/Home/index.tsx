import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { ListFoodInformationForDate } from "@components/ListFoodInformationForDate";
import { PercentualInformations } from "@components/PercentualInformations";
import { FlatList, ListRenderItemInfo } from "react-native";
import { Container, LottieContainer, Text } from "./styles";
import React, { useCallback, useState } from "react";
import { useRef } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import LottieView from 'lottie-react-native';
import { ListFoodsPerDay } from "src/interfaces/foodInterface";
import { getListFoods } from "@storage/foodStorage/getListFoods";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ALL_FOODS, FOOD_COLLECTION } from "@storage/storageConfig";
import { calculatePercentualDiet } from "@storage/percentual/calculatePercentualDiet";

export function Home() {
  const [displayConfetti, setDisplayConfetti] = useState(true);
  const [storageListGetInAsyncStorage, setStorageListGetInAsyncStorage] = useState<ListFoodsPerDay[]>();
  const animation = useRef<LottieView>(null)
  const navigate = useNavigation(); 

  function renderItem({item}:ListRenderItemInfo<ListFoodsPerDay>) {
    return (
      <ListFoodInformationForDate 
          foodsTheDay={item} 
      />
    )
  }

  function handleFinishedAnimationAndChangeStateDisplayConfetti() {
    setDisplayConfetti(false);
  } 

  async function VerifyIfPercentualEqualHundred(){
      const percentualGetStorage = await calculatePercentualDiet();
      percentualGetStorage === 100 ? setDisplayConfetti(true) : setDisplayConfetti(false);
  } 
 
  async function fetchAllFoods() {
    const listAsyncStorage = await getListFoods();
    setStorageListGetInAsyncStorage(listAsyncStorage);
  }

  useFocusEffect(useCallback(() => {
    fetchAllFoods();
    VerifyIfPercentualEqualHundred();
    animation.current && displayConfetti && animation.current.play(0, 90);
  }, []))

  return (
    <Container >
        <LottieContainer 
            source={require('../../assets/99552-confetti.json')}
            displayConfetti={displayConfetti}
            onAnimationFinish={handleFinishedAnimationAndChangeStateDisplayConfetti}
            ref={animation}
        />
        <FlatList 
            ListHeaderComponent={
              <>
                <Header />
                <PercentualInformations 
                  onPress={() => (navigate. navigate("statistics"))}
                /> 
                <Text>Refeições</Text>
                <ButtonIcon 
                  title="Nova refeição" 
                  icon="add"
                  onPress={() => (navigate.navigate("newMeal", {
                    typeEdit: false
                  }))} 
                />
              </>
            }
            data={storageListGetInAsyncStorage}
            keyExtractor={item => item.id + item.date}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
        />
    </Container>
  )
}