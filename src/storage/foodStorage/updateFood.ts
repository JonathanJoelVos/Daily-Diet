import { FoodShape } from "src/interfaces/foodInterface";
import { addFood} from "./addFood";
import { getListFoods } from "./getListFoods";
import { removeFoodStorage } from "./removeFoodStorage";


export const updateFood = async (oldFood: FoodShape, newFood: FoodShape) => {
    try {
        const listStorage = await getListFoods();
        await addFood(newFood);
        await removeFoodStorage(oldFood);
        console.log(listStorage);
    } catch (error) {
        console.log(error);
    }
}