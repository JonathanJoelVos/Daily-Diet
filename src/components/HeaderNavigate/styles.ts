import styled, { css } from "styled-components/native";

type HeaderProps = {
    text?: string;
}

export const Container = styled.View<HeaderProps>`
    padding: 0 24px;
    height: 24px;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;


export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size: ${theme.FONT_SIZES.XM}px;
        color: ${theme.COLORS.GRAY_1};
    `}
    flex: 1;
    text-align:center;
`;
