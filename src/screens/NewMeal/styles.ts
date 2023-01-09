import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Header = styled.View`
    height: 132px;
    justify-content: center;
`;

export const BackTeste = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const WrapperButton = styled.View`
    flex: 1;
    justify-content: flex-end;
`;