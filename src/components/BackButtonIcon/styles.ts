import styled from "styled-components/native";
import {ArrowLeft} from "phosphor-react-native";

type BackIconStyleProps = {
    color: string;
}


export const Container = styled.TouchableOpacity`
`;

export const BackIcon = styled(ArrowLeft).attrs<BackIconStyleProps>(({ color }) => ({
    color: color,
    size: 24,
}))`
`;