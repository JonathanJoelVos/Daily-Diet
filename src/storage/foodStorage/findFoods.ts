import { FoodShape, ListFoodsPerDay } from "src/interfaces/foodInterface";
import { getListFoods } from "./getListFoods";

export const findFoods = async (wantedFood: FoodShape) => {
    try {
        const foodsGetInStorage = await getListFoods();
        const foundFood = foodsGetInStorage.find((food: ListFoodsPerDay) => {
            return food.date === wantedFood.date
        });
        console.log("findFoods --> foundFood", foundFood)
        if (!foundFood) return false;
        return foundFood;
    } catch (error) {
        throw error;
    }
}