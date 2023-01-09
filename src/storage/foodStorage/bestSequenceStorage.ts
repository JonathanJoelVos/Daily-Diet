import { FoodShape } from "src/interfaces/foodInterface";
import { getAllFoods } from "./getAllFoods";

export const bestSequenceStorage = async () => {
    const foodsGetInStorage = await getAllFoods();
    let acountBestSequence = 0;
    let bestSequence = 0;
    foodsGetInStorage.forEach((food: FoodShape) => {
        if(!food.isOutOfDiet) {
            acountBestSequence++;
            if(acountBestSequence > bestSequence) {
                bestSequence = acountBestSequence;
            }
        } else {
            acountBestSequence = 0;
        }
    });
    return bestSequence.toString();
};