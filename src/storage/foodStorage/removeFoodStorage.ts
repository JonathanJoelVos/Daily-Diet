import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "@storage/storageConfig";
import { FoodShape, ListFoodsPerDay } from "src/interfaces/foodInterface";
import { getListFoods } from "./getListFoods";

export const removeFoodStorage = async (foodRemove: FoodShape) => {
    try {
        const foodsGetInStorage = await getListFoods();
        const foodsGetByDate = foodsGetInStorage.find((food: ListFoodsPerDay) => food.date === foodRemove.date);
        const foodRemoveByDateForIncludeNew = foodsGetInStorage.filter((food: ListFoodsPerDay) => food.date !== foodRemove.date);
        const newFood = {
            date: foodsGetByDate.date,
            id: foodsGetByDate.id,
            infos: foodsGetByDate.infos.filter((food: FoodShape) => food.id !== foodRemove.id)
        }
        if(newFood.infos.length === 0) {
            return await AsyncStorage.setItem(FOOD_COLLECTION, JSON.stringify(foodRemoveByDateForIncludeNew))
        }
        await AsyncStorage.setItem(FOOD_COLLECTION, JSON.stringify([...foodRemoveByDateForIncludeNew, newFood]))
    } catch (error) {
        throw error;
    }
}