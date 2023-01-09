import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 0 32px;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: 224px;
    height: 288px;
    margin-top: 40px;
    margin-bottom: 32px;
`;

