import { TextProps } from "react-native";
import { Container, Subtitle, Title } from "./styles";

export type sizes = 'small' | 'medium' | 'large' | 'xlarge';

export interface HighlightProps extends TextProps {
    title: string;
    subtitle: string;
    sizeTitle?: sizes;
    sizeSubtitle?: sizes;
    titleColor?: string;
}

export function Highlight(
  {title, subtitle, sizeTitle = "medium", sizeSubtitle = "small" ,titleColor = "#1B1D1E", ...rest}: HighlightProps
  ) {
  
  return (
    <Container {...rest}>
      <Title 
        titleColor={titleColor} 
        sizeTitle={sizeTitle}
      >
        {title}
      </Title>
      <Subtitle
        sizeSubtitle={sizeSubtitle}
      >
        {subtitle}
      </Subtitle>
    </Container>
  )
}