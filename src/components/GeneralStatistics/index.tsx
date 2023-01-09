import { BackgroundOptions } from "@components/BackgroundOptions";
import { ContainerInfos } from "@components/ContainerInfos";
import { MealsWithTheDiet } from "@components/MealsWithTheDiet";
import { useFocusEffect } from "@react-navigation/native";
import { bestSequenceStorage } from "@storage/foodStorage/bestSequenceStorage";
import { calculateTotalFoods } from "@storage/percentual/calculateTotalFoods";
import { calculateTotalMealsWithinTheDiet } from "@storage/percentual/calculateTotalMealsWithinTheDiet";
import { useCallback, useState } from "react";
import {  Title, WrapperInfos } from "./styles";

export function GeneralStatistics() {
    
    const [totalMeals, setTotalMeals] = useState("0");
    const [totalMealsWithinTheDiet, setTotalMealsWithinTheDiet] = useState("0");
    const [totalMealsOutTheDiet, setTotalMealsOutTheDiet] = useState("0");
    const [bestSequence, setBestSequence] = useState("0");

    async function calculateTotalMeals() {
        const totalMealsStorage = await calculateTotalFoods();
        setTotalMeals(totalMealsStorage.toString());
    }

    async function calculateTotalMealWithinTheDiet(){
        const totalMealsWhitinTheDiet = await calculateTotalMealsWithinTheDiet();
        setTotalMealsWithinTheDiet(totalMealsWhitinTheDiet.toString());
    }

    async function calculateTotalMealOutTheDiet(){
        const totalMealsStorage = await calculateTotalFoods();
        const totalMealsWhitinTheDiet = await calculateTotalMealsWithinTheDiet();
        const totalMealsOutTheDiet = (totalMealsStorage - totalMealsWhitinTheDiet);
        setTotalMealsOutTheDiet(totalMealsOutTheDiet.toString());
    }

    async function calculateBestSequence() {
        const bestSequenceNumber = await bestSequenceStorage();
        if(!bestSequenceNumber) return setBestSequence("0");
        setBestSequence(bestSequenceNumber);
      }

    useFocusEffect(useCallback(() => {
        calculateTotalMeals();
        calculateTotalMealWithinTheDiet();
        calculateTotalMealOutTheDiet();
        calculateBestSequence();
    }, []))

    return (
        <BackgroundOptions 
            style={{marginTop: -40}}
        >
            <Title>
                Estatisticas gerais
            </Title>
            <ContainerInfos
                title={bestSequence}
                subtitle="melhor sequência de pratos dentro da dieta"
                sizeTitle="xlarge"
            />
            <ContainerInfos
                title={totalMeals}
                subtitle="refeições registradas"
                sizeTitle="xlarge"
            />
            <WrapperInfos>
                <MealsWithTheDiet 
                    type="in"
                    title={totalMealsWithinTheDiet}
                />
                <MealsWithTheDiet 
                    type="out"
                    title={totalMealsOutTheDiet}
                />
            </WrapperInfos> 
        </BackgroundOptions>
    )
}