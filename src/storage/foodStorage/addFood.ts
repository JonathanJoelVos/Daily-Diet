import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "@storage/storageConfig";
import { FoodShape, ListFoodsPerDay } from "src/interfaces/foodInterface";
import { findFoods } from "./findFoods";
import { listFoodsRemoveForIncludesNew } from "./listFoodsRemoveForIncludesNew";
import sort from "shortid";
import { setAllFoods } from "./setAllFoods";

export const addFood = async (food: FoodShape) => {
    const foundFoods = await findFoods(food);
    const newFood = {
        ...food,
        id: sort()
    }
    const addNewFoodInfoods = {
        id: foundFoods.id,
        date: foundFoods.date,
        infos: [...foundFoods.infos, newFood]
    }
    const newListWithFoodRemoved = await listFoodsRemoveForIncludesNew(food);
    await setAllFoods(newFood);
    return await AsyncStorage.setItem(FOOD_COLLECTION, JSON.stringify([...newListWithFoodRemoved, addNewFoodInfoods]))
}