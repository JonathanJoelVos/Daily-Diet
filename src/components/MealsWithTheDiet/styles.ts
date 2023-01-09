import styled from "styled-components/native";

type MealsWithTheDietPropsStyles = {
    type?: "in" | "out";
};

export const Container = styled.View<MealsWithTheDietPropsStyles>`
    background-color: ${({ theme, type }) => type === "in" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    height: 107px;
    width: 162px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    padding: 16px;
`;