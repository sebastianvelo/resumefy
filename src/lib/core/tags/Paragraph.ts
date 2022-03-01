import StyleableProps from "../components/props/StyleableProps";
import TextProps from "../components/props/TextProps";
import Component from "../components/Component";
import ComponentStyle from "../components/ComponentStyle";

const defaultStyle = {
  marginBlock: "unset"
}

const getTag = () => "p";

const getStyle = (style?: ComponentStyle) => ({
  ...defaultStyle,
  ...style,
});

interface ParagraphProps extends StyleableProps, TextProps { }

const Paragraph = (props: ParagraphProps) =>
  Component(getTag(), {
    ...props,
    style: getStyle(props.style),
  });

export default Paragraph;
