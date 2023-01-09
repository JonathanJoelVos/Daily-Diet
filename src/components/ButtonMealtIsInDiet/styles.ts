import styled, { css } from "styled-components/native";

type IconMealIsInDietStyleProps = {
    buttonType?: 'add' | 'remove',
}

interface ButtonMealtIsInDietStyleProps extends IconMealIsInDietStyleProps {
    colorBackground: () => string,
    colorBorder: () => string,
    isActive?: boolean,
}

export const Container = styled.TouchableOpacity<ButtonMealtIsInDietStyleProps>`
    ${({ theme, isActive, colorBackground, colorBorder }) => css`
        background-color: ${isActive ? colorBackground() : theme.COLORS.GRAY_6};
        border: 1px solid ${isActive ? colorBorder() : theme.COLORS.GRAY_6};
    `}

    width: 165px;
    height: 50px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Icon = styled.View<IconMealIsInDietStyleProps>`
    height: 8px;
    width: 8px;
    border-radius: 100px;
    background-color: ${({theme, buttonType}) => buttonType === 'add' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Placeholder = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size: ${theme.FONT_SIZES.MD}px;
        color: ${theme.COLORS.GRAY_1};
    `}
    margin-left: 8px;
`;