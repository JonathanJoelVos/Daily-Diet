import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size: ${theme.FONT_SIZES.MD}px;
        color: ${theme.COLORS.GRAY_1};
    `}
    margin-bottom: 8px;
    margin-top: 24px;
`;