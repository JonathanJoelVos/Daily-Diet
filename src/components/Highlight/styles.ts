import styled, { css } from "styled-components/native";
import { sizes } from ".";

type HighlightPropsStyle = {
    sizeTitle?: sizes;
    sizeSubtitle?: sizes;
    titleColor?: string;
}

export const Container = styled.View`
    width: 100%;
`;

export const Title = styled.Text<HighlightPropsStyle>`
    text-align: center;
    height: 42px;
    margin-bottom: 8px;

    ${({theme, sizeTitle, titleColor}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size: ${ 
            sizeTitle === "small" && theme.FONT_SIZES.SD
            || sizeTitle === "medium" && theme.FONT_SIZES.LD
            || sizeTitle === "large" && theme.FONT_SIZES.XM 
            || sizeTitle === "xlarge" && theme.FONT_SIZES.XL
        }px;
        color: ${titleColor};
    `}
`;

export const Subtitle = styled.Text<HighlightPropsStyle>`
    text-align: center;

    ${({theme, sizeSubtitle}) => css`
        font-family: ${theme.FONTS.REGULAR};
        font-size: ${ 
            sizeSubtitle === "small" && theme.FONT_SIZES.SD
            || sizeSubtitle === "medium" && theme.FONT_SIZES.MD
            || sizeSubtitle === "large" && theme.FONT_SIZES.XM
        }px;
        color: ${theme.COLORS.GRAY_2};
    `}
`;
