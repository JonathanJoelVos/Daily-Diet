import AsyncStorage from "@react-native-async-storage/async-storage";
import { ALL_FOODS } from "@storage/storageConfig";
import { FoodShape } from "src/interfaces/foodInterface";
import { getAllFoods } from "./getAllFoods";

export const removeAllFoods = async (foodRemove: FoodShape) => {
    try {  
        const foodsGetInStorage = await getAllFoods()
        if(!foodsGetInStorage) return [];
        const newListAllFoods = foodsGetInStorage.filter((food: FoodShape) => {
            return food.id !== foodRemove.id
        });
        await AsyncStorage.setItem(ALL_FOODS, JSON.stringify(newListAllFoods));
    } catch (error) {
        throw error;
    }
}