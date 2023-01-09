import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Statistics } from "@screens/Statistics";
import { Home } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";
import { Congratuations } from "@screens/Congratuations";
import { NotCongratulation } from "@screens/NotCongratulation";
import { EditMeal } from "@screens/EditMeal";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false, gestureDirection: "vertical"}}>
            <Screen name="home" component={Home} />
            <Screen name="statistics" component={Statistics} />
            <Screen name="newMeal" component={NewMeal} />
            <Screen name="congratulations" component={Congratuations} />
            <Screen 
                name="editMeal" 
                component={EditMeal} 
            />
            <Screen name="notCongratulations" component={NotCongratulation} />
        </Navigator>
    )
}