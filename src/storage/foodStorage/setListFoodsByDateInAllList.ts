import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "@storage/storageConfig";
import { FoodShape, ListFoodsPerDay } from "src/interfaces/foodInterface";
import { findFoods } from "./findFoods";
import { getListFoods } from "./getListFoods";
import { addFood } from "./addFood";
import { setAllFoods } from "./setAllFoods";
import sort from "shortid";

export const setListFoodsByDateInAllList = async (food: FoodShape) => {
    try {
        
        const foodsGetInStorage = await getListFoods();
        const foundFoodsInDate = await findFoods(food);
        const newFood = {
            ...food,
            id: sort()
        }
        if(foundFoodsInDate) {
            addFood(newFood);
            return;
        }
            const newDateWithNewFood: ListFoodsPerDay = {
                id: sort(),
                date: food.date,
                infos: [
                    newFood
                ]}
            await setAllFoods(newFood);
            console.log("setListFoodsByDateInAllList/ food -->",newFood);
            return await AsyncStorage.setItem(FOOD_COLLECTION, JSON.stringify([...foodsGetInStorage,newDateWithNewFood]))
    } catch (error) {
        throw error;
    }
}
