import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin-top: 32px;
`;

export const Date = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size: ${theme.FONT_SIZES.XM}px;
        color: ${theme.COLORS.GRAY_1};
    `}
`;