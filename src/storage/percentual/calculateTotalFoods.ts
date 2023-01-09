import AsyncStorage from "@react-native-async-storage/async-storage";
import { getListFoods } from "@storage/foodStorage/getListFoods";
import { ListFoodsPerDay } from "src/interfaces/foodInterface";

export const calculateTotalFoods = async () => {
    let totalFoods: number = 0;
    const listFoodsStorage = await getListFoods();
    listFoodsStorage.forEach((food: ListFoodsPerDay) => { 
        totalFoods += food.infos.length;
    });
    return totalFoods;
}