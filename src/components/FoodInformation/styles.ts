import styled, { css } from "styled-components/native";

export type FoodInformationStyleProps = {
    isOutOfDiet: boolean;
}


export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 49px;
    background: ${({ theme}) => theme.COLORS.GRAY_7};
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    padding: 16px 12px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    margin-top: 8px;
`;

export const HourContainer = styled.View`
    width: 44px;
    height: 16px;
    border-right-width: 1px;
    border-right-color: ${({ theme }) => theme.COLORS.GRAY_4};
    margin-right: 12px;
`;

export const HourText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size: ${theme.FONT_SIZES.XS}px;
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const FoodDescription = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.REGULAR};
        font-size: ${theme.FONT_SIZES.MD}px;
        color: ${theme.COLORS.GRAY_1};
    `}
    justify-content: center;
    height:21px;
    flex: 1;
`;

export const DietIndicator = styled.View<FoodInformationStyleProps>`
    width: 14px;
    height: 14px;
    border-radius: 10000px;
    background: ${({ theme, isOutOfDiet }) => isOutOfDiet ? theme.COLORS.RED_MID :  theme.COLORS.GREEN_MID };
`;
