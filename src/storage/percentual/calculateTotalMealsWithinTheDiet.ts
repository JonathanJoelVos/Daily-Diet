import { getListFoods } from "@storage/foodStorage/getListFoods";
import { ListFoodsPerDay } from "src/interfaces/foodInterface";


export const calculateTotalMealsWithinTheDiet = async () => {
    let amountOfFoodsInTheDiet: number = 0;
    const foodsGetInStorage = await getListFoods();
    if(foodsGetInStorage){
        foodsGetInStorage.forEach((food: ListFoodsPerDay) => {
            food.infos.forEach(food => {
                if(!food.isOutOfDiet){
                    amountOfFoodsInTheDiet += 1;
                }            
            })
        })
    }
    return amountOfFoodsInTheDiet;
}