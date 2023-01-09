import AsyncStorage from "@react-native-async-storage/async-storage"

export async function setPercentualDiet(percentual: number) {
    try {
        await AsyncStorage.setItem('@daily-diet: percentual', JSON.stringify(percentual))
    } catch (error) {
        throw error;
    }
}

