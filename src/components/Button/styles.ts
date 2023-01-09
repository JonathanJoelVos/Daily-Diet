import styled, { css } from "styled-components/native";

type ButtonStyleProps = { 
    type: "primary" | "secondary";
} 


export const Container = styled.TouchableOpacity<ButtonStyleProps>`
    background-color: ${({ theme,type }) => type === 'primary' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7 };
    width: 100%;
    height:  50px;
    border-radius: 6px;

    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_2 };
`;

export const TextInfoButton = styled.Text<ButtonStyleProps>`
    ${({theme, type}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size: ${theme.FONT_SIZES.SD}px;
        color: ${type === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1 };
    `}
`;
