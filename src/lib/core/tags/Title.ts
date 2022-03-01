import StyleableProps from "../components/props/StyleableProps";
import TextProps from "../components/props/TextProps";
import Component from "../components/Component";
import ComponentStyle from "../components/ComponentStyle";

const defaultStyle = {
  marginBlock: "unset"
}

const getTag = (importance?: number) => ["h6", "h5", "h4", "h3", "h2", "h1"][importance ?? 0];

const getStyle = (style?: ComponentStyle) => ({
  ...defaultStyle,
  ...style,
});

interface TitleProps extends StyleableProps, TextProps {
  importance?: 0 | 1 | 2 | 3 | 4 | 5;
}

const Title = (props: TitleProps) =>
  Component(getTag(props.importance), {
    ...props,
    style: getStyle(props.style),
  });

export default Title;
