import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getPercentualDiet() {
    try {
        const percentualStorage = await AsyncStorage.getItem("@daily-diet: percentual") 
        return percentualStorage ? JSON.parse(percentualStorage) : 0
    } catch (error) {
        throw error;
    }
   
}