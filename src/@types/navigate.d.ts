import { InfoFoodContainer } from "src/interfaces/foodInterface";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            statistics: undefined;
            home: undefined;
            newMeal: {
                food?: InfoFoodContainer;
                typeEdit?: boolean
            };
            congratulations: undefined;
            notCongratulations: undefined;
            editMeal: {
                food: InfoFoodContainer;
            };
        }
    }
}