import AsyncStorage from '@react-native-async-storage/async-storage';
import { FoodShape } from 'src/interfaces/foodInterface';
import { ALL_FOODS } from '../storageConfig';
import { getAllFoods } from './getAllFoods';
import sort from "shortid";

export const setAllFoods = async (food: FoodShape) => {
    try {
        const foodsGetInStorage = await getAllFoods();
        await AsyncStorage.setItem(ALL_FOODS, JSON.stringify([...foodsGetInStorage, food]));
    } catch (error) {
        throw error;
    }
}
