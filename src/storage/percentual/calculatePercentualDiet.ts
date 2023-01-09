import { calculateTotalFoods } from "./calculateTotalFoods";
import { calculateTotalMealsWithinTheDiet } from "./calculateTotalMealsWithinTheDiet";



export const calculatePercentualDiet = async () => {
    let amountOfFoodsInTheDiet: number = await calculateTotalMealsWithinTheDiet();
    let totalFoodsInDiet = await calculateTotalFoods();
    return (amountOfFoodsInTheDiet / totalFoodsInDiet) * 100;
}
