import { Highlight } from "@components/Highlight";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import {  Container, PercentualDescription, SafeArea } from "./styles";
import { GeneralStatistics } from "@components/GeneralStatistics";
import { HeaderNavigate } from "@components/HeaderNavigate";
import { calculatePercentualDiet } from "@storage/percentual/calculatePercentualDiet";
import { bestSequenceStorage } from "@storage/foodStorage/bestSequenceStorage";
import { useFocusEffect } from "@react-navigation/native";


export function Statistics () {
  const { COLORS } = useTheme()
  const [percentual, setPercentual] = useState("");
  const [isOutOfDiet, setIsOutOfDiet] = useState(true);
  
  async function getPercentualDietInStorage() {
    const percentualCalculate = await calculatePercentualDiet();
    if(!percentualCalculate) return setPercentual("0,00%")
    const percentual = percentualCalculate.toFixed(2)+ "%"
    setPercentual(percentual.replace(".", ","));
  }

  async function handleVerifyIfPercentualCalculateIsOutValue() {
    const percentualCalculate = await calculatePercentualDiet();
    if(percentualCalculate) {
        percentualCalculate < 50 ? setIsOutOfDiet(true) : setIsOutOfDiet(false);
    }
  }

  useFocusEffect(useCallback(() => {
    getPercentualDietInStorage();
    handleVerifyIfPercentualCalculateIsOutValue();
  }, []))
  return (
    <Container
    isOutOfDiet={isOutOfDiet}
    >
      <SafeArea>
        <PercentualDescription >
            <HeaderNavigate
              color={
                isOutOfDiet ?
                "red" :
                "green"
              }
            />
            <Highlight 
              titleColor={COLORS.GRAY_1}
              title={percentual}
              subtitle="das refeicoes dentro da dieta"
              sizeTitle="xlarge"
              sizeSubtitle="small"
            />
        </PercentualDescription>
      </SafeArea>
      <GeneralStatistics 
      />
    </Container>
  )
}