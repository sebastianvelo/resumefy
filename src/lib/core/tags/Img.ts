import Component from "../components/Component";
import ComponentAttributes from "../components/ComponentAttributes";

import StyleableProps from "../components/props/StyleableProps";

export interface ImgProps extends StyleableProps {
  src: string;
  alt: string;
}

const getAttributes = (props: ImgProps): ComponentAttributes => [
  ["src", props.src],
  ["alt", props.alt]
]

const Img = (props: ImgProps) =>
  Component("img", props, getAttributes(props));

export default Img;
