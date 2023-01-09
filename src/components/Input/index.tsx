import { FieldError } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Container, ContainerTeste, Error, InputStyle, Label } from "./styles";

export interface InputProps extends TextInputProps {
    width?: number | string;
    height?: number;
    label: string;
    error?: FieldError;

}

export function Input({width = "100%", height, label,error, ...rest}: InputProps) {
    return (
        <ContainerTeste>
            <Container 
                width={width}
                height={height}
            >
                <Label>{label}</Label>
                <InputStyle 
                    {...rest}
                />
            </Container> 
            {error && <Error>{error.message}</Error>}
        </ContainerTeste>
    )
}