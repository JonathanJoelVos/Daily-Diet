import { Container  } from "./styles";
import { useTheme } from "styled-components/native";
import { Highlight } from "@components/Highlight";
import { ArrowUpRight } from "phosphor-react-native";
import { useState, useEffect, useCallback } from "react";
import { setPercentualDiet } from "@storage/percentual/setPercentualDiet";
import { TouchableOpacityProps } from "react-native";
import { calculatePercentualDiet } from "@storage/percentual/calculatePercentualDiet";
import { useFocusEffect } from "@react-navigation/native";

export function PercentualInformations({...rest}: TouchableOpacityProps){
    const [isOutOfDiet, setIsOutOfDiet] = useState(true);
    const [percentual, setPercentual] = useState('');
    const { COLORS } = useTheme()

    async function handleVerifyIfPercentualCalculateIsOutValue() {
        const percentualCalculate = await calculatePercentualDiet();
        if(percentualCalculate) {
            percentualCalculate < 50 ? setIsOutOfDiet(true) : setIsOutOfDiet(false);
        } else {
          setIsOutOfDiet(true);
        }
    }

    async function handlePercentualDiet() {
      const percentualCalculate = await calculatePercentualDiet();
        if(percentualCalculate) {
          setPercentualDiet(percentualCalculate)
          const percentual = percentualCalculate.toFixed(2)+ "%".replace('.', ',');
          setPercentual(percentual);
        } else {
          setPercentualDiet(0);
          setPercentual("0,00%");
        }
    }

    useFocusEffect(useCallback(() => {
        handlePercentualDiet();
        handleVerifyIfPercentualCalculateIsOutValue();
    }, []))

  return (
    <Container isOutOfDiet={isOutOfDiet} {...rest}>
        <ArrowUpRight 
            size={24} 
            color={
                isOutOfDiet ? 
                COLORS.RED_DARK : 
                COLORS.GREEN_DARK
            }
            style={{
              alignSelf: 'flex-end'
            }}
        />
        <Highlight 
          title={percentual} 
          subtitle="das refeições dentro da dieta" sizeTitle="xlarge"
          titleColor={COLORS.GRAY_1}
        />
    </Container>
  )
}