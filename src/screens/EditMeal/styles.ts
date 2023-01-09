import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface EditMealStyleProps {
    isOutOfDiet: boolean;
}

export const Container = styled.View<EditMealStyleProps>`
    background-color: ${({ theme, isOutOfDiet }) => isOutOfDiet ? theme.COLORS.RED_LIGHT :  theme.COLORS.GREEN_LIGHT };
    height: 100%;
`;

export const Header = styled(SafeAreaView)`
    height: 132px;
    justify-content: center;
`;

export const ButtonsContainer = styled.View`
    flex: 1;
    justify-content: flex-end;
`;