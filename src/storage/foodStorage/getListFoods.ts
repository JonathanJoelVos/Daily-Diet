import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "@storage/storageConfig";

export async function getListFoods() {
  try {
    const foodsGetInStorage = await AsyncStorage.getItem(FOOD_COLLECTION);
    return foodsGetInStorage ? JSON.parse(foodsGetInStorage) : [];
  } catch (error) {
    throw error;
  }
}