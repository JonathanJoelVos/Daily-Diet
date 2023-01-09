import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Container, Header, WrapperButton } from "./styles";
import { HeaderNavigate } from "@components/HeaderNavigate";
import { FoodShape } from "src/interfaces/foodInterface";
import { setListFoodsByDateInAllList } from "@storage/foodStorage/setListFoodsByDateInAllList";
import { updateFood } from "@storage/foodStorage/updateFood";
import { setAllFoods } from "@storage/foodStorage/setAllFoods";
import { removeAllFoods } from "@storage/foodStorage/removeAllFoods";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { BackgroundOptions } from "@components/BackgroundOptions";
import { WrapperRow } from "@components/WrapperRow";
import { ButtonMealtIsInDiet } from "@components/ButtonMealtIsInDiet";
import { Button } from "@components/Button";
import { ControlledInput } from "@components/ControlledInput";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type RoutesParams = {
    food?: FoodShape;
    typeEdit?: boolean;
}

export function NewMeal() {
    const schema = Yup.object({
        name: Yup.string().required("Nome é obrigatório"),
        description: Yup.string(),
        date: Yup.string().required("Data é obrigatório").matches(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/, "Data inválida"),
        hour: Yup.string().required("Hora é obrigatório").min(5, "Hora inválida").matches(/^[0-9]{2}:[0-9]{2}$/, "Hora inválida")
    })
    

    const routes = useRoute();

    const [optionIsOutDiet, setOptionIsOutDiet] = useState<boolean>(false);
    const [foodUpdated, setFoodUpdated] = useState<FoodShape>({       
    } as FoodShape)
    const [keyboardAvoidingView, setKeyboardAvoidingView] = useState(false);

    const {food, typeEdit} = routes.params as RoutesParams;
    const navigator = useNavigation();

    const {control, handleSubmit, formState: { errors },setValue } = useForm<FoodShape>({
        resolver: yupResolver(schema)
    });

    async function handleUserRegister(data: FoodShape) { 
        const newFood = {
            ...data,
            isOutOfDiet: optionIsOutDiet
        }
        if(typeEdit){
            return await handleUpdateFood(newFood)
        } else {
            return await handleCreateFood(newFood)
        }
    }

    async function handleNavigateToCongratulation() {
        optionIsOutDiet ?  navigator.navigate("notCongratulations") : navigator.navigate("congratulations")
    }

    async function handleCreateFood(foodRegister: FoodShape) {
        await setListFoodsByDateInAllList(foodRegister);
        handleNavigateToCongratulation();
    }

    async function handleUpdateFood(foodRegister: FoodShape) {
        await removeAllFoods(foodUpdated);
        await setAllFoods(foodRegister);
        await updateFood(foodUpdated, foodRegister)
        handleNavigateToCongratulation();
    }

    useFocusEffect(useCallback(() => {
        if (typeEdit && food) {
            setOptionIsOutDiet(food.isOutOfDiet)
            setFoodUpdated(food)
            setValue("name", food.name)
            setValue("description", food.description)
            setValue("date", food.date)
            setValue("hour", food.hour)
        }
    }, []))

    return (
        <TouchableWithoutFeedback 
            onPress={() => {
                Keyboard.dismiss();
                setKeyboardAvoidingView(false)
            }}
        >
            <KeyboardAvoidingView
                behavior="position"
                enabled={keyboardAvoidingView}
                style={{
                    flex: 1,
                }}
            >
                <Container>
                    <Header>
                        <HeaderNavigate
                            color="gray"
                            title="Nova Refeição"
                        />
                    </Header>
                    <BackgroundOptions
                        style={{
                            marginTop: -24,
                        }}
                    >
                    <ControlledInput 
                        name="name"
                        control={control}
                        label="Nome"
                        height={70}
                        error={errors.name}
                    />
                    <ControlledInput
                        label="Descrição"
                        height={142}
                        multiline={true}
                        name="description"
                        control={control}
                        error={errors.description}
                    />
                    <WrapperRow
                        style={{justifyContent: 'space-between'}}
                    >
                        <ControlledInput 
                            name="date"
                            control={control}
                            keyboardType="numeric"
                            label="Data"
                            height={70}
                            width={153}
                            onFocus={() => setKeyboardAvoidingView(true)}
                            onBlur={() => setKeyboardAvoidingView(false)}
                            error={errors.date}
                        />
                        <ControlledInput 
                            name="hour"
                            control={control}
                            keyboardType="numeric"
                            label="Hora"
                            height={70}
                            width={153}
                            onFocus={() => setKeyboardAvoidingView(true)}
                            onBlur={() => setKeyboardAvoidingView(false)}
                            error={errors.hour}
                        />
                    </WrapperRow>
                    <WrapperRow 
                        label="Incluir na dieta?"
                    >
                        <ButtonMealtIsInDiet 
                            buttonType="add"
                            placeholder="Sim"
                            isActive={!optionIsOutDiet}
                            onPress={() => setOptionIsOutDiet(false)}
                            style={{marginRight: 8}}
                        />
                        <ButtonMealtIsInDiet 
                            buttonType="remove"
                            placeholder="Não"
                            onPress={() => setOptionIsOutDiet(true)}
                            isActive={optionIsOutDiet}
                        />
                    </WrapperRow>
                    <WrapperButton>
                        <Button
                            title={
                                typeEdit ? "Salvar alteracoes" : "Cadastrar refeição"
                            }
                            type="primary"
                            onPress={handleSubmit(handleUserRegister)}
                        />
                            </WrapperButton> 
                    </BackgroundOptions> 
                </Container>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        
    )
}
