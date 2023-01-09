import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface InputStyleProps {
    width?: number | string;
    height?: number;
}

export const Container = styled.View<InputStyleProps>`
    ${({ theme, width, height }) => css`
        width: ${typeof width === "number" ? `${width}px` : width};
        height: ${height}px;
    `}
    align-items: flex-start;
    margin-top: 24px;
`;

export const InputStyle = styled(TextInput).attrs(({ theme }) => ({
}))`
    ${({ theme }) => css`
        flex: 1;
        width: 100%;
        font-family: ${theme.FONTS.REGULAR};
        font-size: ${theme.FONT_SIZES.MD}px;
        color: ${theme.COLORS.GRAY_1};
    `}
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    padding: 14px 14px;
    border-radius: 6px;
`;
    

export const Label = styled.Text`   
    ${({ theme }) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size: ${theme.FONT_SIZES.SD}px;
        color: ${theme.COLORS.GRAY_2};
    `}
    margin-bottom: 4px;
    height: 18px;
`;
   
export const Error = styled.Text`
    color: ${({ theme }) => theme.COLORS.RED_DARK};
    margin: 3px 0 16px;
`;

export const ContainerTeste = styled.View`
    flex-direction: column;
`;
