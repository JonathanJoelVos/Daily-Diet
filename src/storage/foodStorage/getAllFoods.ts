import AsyncStorage from "@react-native-async-storage/async-storage";
import { ALL_FOODS } from "@storage/storageConfig";

export const getAllFoods = async () => {
    try {
        const foodsGetInStorage = await await AsyncStorage.getItem(ALL_FOODS);
        return foodsGetInStorage ? JSON.parse(foodsGetInStorage) : [];
    } catch (error) {
        throw error;
    }
}
