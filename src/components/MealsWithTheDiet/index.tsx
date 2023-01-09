import { Highlight } from "@components/Highlight";
import { Container } from "./styles";

type MealsWithTheDietProps = {
    title: string;
    type: 'in' | 'out';
}

export function MealsWithTheDiet({type, title}: MealsWithTheDietProps) {
    return (
        <Container type={type}>
            <Highlight
                sizeTitle="xlarge"
                title={title}
                subtitle={type === 'in' ? "refeições dentro da dieta" : "refeições fora da dieta"}
            />
        </Container>
    )


}