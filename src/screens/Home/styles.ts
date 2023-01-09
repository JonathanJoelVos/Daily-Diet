import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from 'lottie-react-native';

type HomeStyleProps = {
    displayConfetti: boolean;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    padding: 0 24px;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.REGULAR};
        font-size: ${theme.FONT_SIZES.MD}px;
        color: ${theme.COLORS.GRAY_1};
    `}
    margin-bottom: 8px;
`  

export const LottieContainer = styled(LottieView).attrs<HomeStyleProps>(() => ({
    autoPlay: true,
    loop: false,
    resizeMode: 'cover',
    autoSize: true,
}))`
    position: absolute;
    width: 100%;
    height: 60%;
    z-index: -1;
    display: ${({ displayConfetti }: { displayConfetti: boolean }) => displayConfetti ? 'flex' : 'none'};
`;
