import { Container, Wrapper } from "./styles";

interface BackgroundOptionsProps {
    children: React.ReactNode;
    style?: object;
}

export function BackgroundOptions({children, style} : BackgroundOptionsProps) {
    return (
        <Container style={style}>
                {children}
        </Container>
    )
}