import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

type StatisticsStyleProps = {
    isOutOfDiet: boolean;
}

export const Container = styled.View<StatisticsStyleProps>`
    flex: 1;
    background-color: ${({ theme, isOutOfDiet }) => isOutOfDiet ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};
`;

export const PercentualDescription = styled.View`
    height: 132px;
    align-items: center;
`;

export const SafeArea = styled(SafeAreaView)`
`;


