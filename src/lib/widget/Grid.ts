import ComponentStyle from "../core/components/ComponentStyle";
import Wrapper, { WrapperProps } from "../core/tags/Wrapper";

interface GridProps extends WrapperProps {
    columns?: number;
}

const defaultStyle = (props: GridProps): ComponentStyle => ({
    display: "grid",
    gridTemplateColumns: `repeat(${props.columns ?? 1}, 1fr)`
});

const getStyle = (props: GridProps) => ({
    ...defaultStyle(props),
    ...props.style,
});

const Grid = (props: GridProps) => Wrapper({
    ...props,
    style: getStyle(props)
});

export default Grid;