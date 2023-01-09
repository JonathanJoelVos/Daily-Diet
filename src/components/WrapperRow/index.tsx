import { ViewProps } from "react-native";
import { Container, Label } from "./styles";

interface WrapperRowProps extends ViewProps{ 
    children: React.ReactNode,
    label?: string,
}

export function WrapperRow({children, label, ...rest}: WrapperRowProps) {
    return (
        <>
            {
                label && (
                    <Label>
                        {label}
                    </Label>
                )
            }
            <Container {...rest}>
                
                {children}
            </Container>
        </>
    )
}