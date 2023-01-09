import { FoodShape, ListFoodsPerDay } from "src/interfaces/foodInterface";
import { getListFoods } from "./getListFoods";
import { findFoods } from "./findFoods";

export const listFoodsRemoveForIncludesNew = async (wantedFood: FoodShape) => {
    try {
        const foodsGetInStorage = await getListFoods();
        const foodRemoveByDateForIncludeNew = foodsGetInStorage.filter((food: ListFoodsPerDay) => food.date !== wantedFood.date);
        return foodRemoveByDateForIncludeNew;
    } catch (error) {
        throw error;
    }
}