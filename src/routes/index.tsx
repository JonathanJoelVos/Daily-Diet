import { AppRoutes } from "./app.routes";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

export function Router() {
    const { COLORS } = useTheme();
    return (
        <View style={{flex: 1, backgroundColor: COLORS.GRAY_7}}>
            <NavigationContainer>
                <AppRoutes />
            </NavigationContainer>
        </View>
    )
}
