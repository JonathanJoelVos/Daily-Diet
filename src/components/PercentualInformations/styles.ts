import { FoodInformationStyleProps } from "@components/FoodInformation/styles";
import styled from "styled-components/native";



export const Container = styled.TouchableOpacity<FoodInformationStyleProps>`
    width: 100%;
    height: 102px;
    background-color: ${({ theme, isOutOfDiet }) => 
    isOutOfDiet ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT };
    border-radius: 8px;
    justify-content: center;
    padding: 8px 8px 20px 8px;
    margin-bottom: 42px;
`;
