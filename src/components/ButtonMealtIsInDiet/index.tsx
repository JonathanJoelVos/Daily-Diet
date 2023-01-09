import { TouchableOpacityProps } from "react-native"
import { useTheme } from "styled-components/native";
import { Container, Icon, Placeholder } from "./styles"

interface ButtonMealtIsInDietProps extends TouchableOpacityProps {
    buttonType: 'add' | 'remove',
    placeholder: string,
    isActive?: boolean
}

export function ButtonMealtIsInDiet({buttonType, placeholder,isActive, ...rest}: ButtonMealtIsInDietProps) {

    const { COLORS } = useTheme();
    
    function buttonTypeIsAdd(): boolean {
        return buttonType === 'add' ? true : false
    }

    function chooseBorderColorByType(): string {
        if( buttonTypeIsAdd() ) {
            return COLORS.GREEN_DARK
        } else {
            return COLORS.RED_DARK
        }
    }

    function chooseBackgroundColorByType(): string{
        if( buttonTypeIsAdd() ) {
            return COLORS.GREEN_LIGHT
        } else {
            return COLORS.RED_LIGHT
        }
    }

    
    return (
        <Container 
            {...rest}
            isActive={isActive}
            colorBorder={chooseBorderColorByType}
            colorBackground={chooseBackgroundColorByType}
        >
            <Icon  
                buttonType={buttonType}
            />
            <Placeholder >
                {placeholder}
            </Placeholder>
        </Container>
    )
}