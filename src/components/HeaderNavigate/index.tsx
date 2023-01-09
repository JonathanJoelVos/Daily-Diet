import { BackButtonIcon } from "@components/BackButtonIcon";
import { useTheme } from "styled-components/native";
import { Container, Title } from "./styles";

type HeaderNavigateProps = {
    title?: string;
    color: "red" | "green" | "gray";
}

export function HeaderNavigate(
    {title, color}: HeaderNavigateProps
) {
    const { COLORS } = useTheme();

    function handleColor(color: string): string {
        switch(color) {
            case "red":
                return COLORS.RED_DARK;
            case "green":
                return COLORS.GREEN_DARK;
            case "gray":
                return COLORS.GRAY_1;
            default:
                return COLORS.GREEN_DARK;
        }
    }

    return (
        <Container>    
                <BackButtonIcon
                    color= {handleColor(color)}
                />
                {
                    title && <Title>{title}</Title>
                }                
        </Container>
    )
}