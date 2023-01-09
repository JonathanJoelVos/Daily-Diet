import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 40px 24px;
    width: 100%;
`;

export const Wrapper = styled(SafeAreaView)`
    flex: 1;
`;