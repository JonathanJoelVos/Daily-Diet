import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    align-items: center;
    justify-content: center;
`;

export const LoadIndicator = styled(ActivityIndicator).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_1,
    size: 50,
}))``;