import styled from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 33px 0;
    width: 100%;
`;

export const Logo = styled.Image`
    height: 37px;
    width: 82px;
`;

export const Avatar = styled.Image`
    height: 40px;
    width: 40px;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_1 };
    border-radius: 18.5px;
`;