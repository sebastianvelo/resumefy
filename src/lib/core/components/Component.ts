import ParentProps from "./props/ParentProps";
import StyleableProps from "./props/StyleableProps";
import TextProps from "./props/TextProps";
import ComponentAttributes from "./ComponentAttributes";

export interface ComponentProps extends StyleableProps, TextProps, ParentProps { }

const Component = (tag: string, props: ComponentProps, attributes?: ComponentAttributes) => {
  const component = document.createElement(tag);
  if (props.style) Object.entries(props.style).forEach((declaration: [any, any]) => component.style[declaration[0]] = declaration[1]);
  if (props.children) component.append(...props.children);
  if (props.text) component.append(props.text);
  attributes?.forEach((attr) => component.setAttribute(attr[0], attr[1]));
  return component;
};

export default Component;
