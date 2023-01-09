import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    margin-top: -32px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 32px 24px;
    width: 100%;
    height: 100%;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size: ${theme.FONT_SIZES.SD}px;
        color: ${theme.COLORS.GRAY_1};
    `} 
    text-align: center;
    margin-bottom: 23px;
`;

export const WrapperInfos = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

