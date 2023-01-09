import styled from "styled-components/native";

export const Container = styled.View`
    height: 89px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_6};
    border-radius: 8px;
    margin-bottom: 12px;
`;