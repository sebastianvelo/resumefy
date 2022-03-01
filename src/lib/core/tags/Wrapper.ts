import Component from "../components/Component";
import ParentProps from "../components/props/ParentProps";
import StyleableProps from "../components/props/StyleableProps";
import UniqueProps from "../components/props/UniqueProps";

export interface WrapperProps extends StyleableProps, ParentProps, UniqueProps {
  tag?: string;
}

const Wrapper = (props: WrapperProps) =>
  Component(props.tag ?? "div", props,
    props.id ? [
      ["id", props.id]
    ] : undefined
  );

export default Wrapper;
