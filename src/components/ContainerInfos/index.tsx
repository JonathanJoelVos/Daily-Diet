import { Highlight, HighlightProps } from "@components/Highlight";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export function ContainerInfos({title, subtitle, sizeTitle = "medium", sizeSubtitle = "small"}: HighlightProps) {
    
    const {COLORS} = useTheme();

    return (
        <Container>
                <Highlight 
                    title={title}
                    subtitle={subtitle}
                    sizeTitle={sizeTitle}
                    sizeSubtitle={sizeSubtitle}
                    titleColor={COLORS.GRAY_1}
                />
        </Container>
    )
}