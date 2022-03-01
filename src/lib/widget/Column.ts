import ComponentStyle from "../core/components/ComponentStyle";
import Wrapper, { WrapperProps } from "../core/tags/Wrapper";

interface ColumnProps extends WrapperProps {
    span?: number;
}

const defaultStyle = (props: ColumnProps): ComponentStyle => ({
    gridColumn: props.span ? `span ${props.span}` : null
});

const getStyle = (props: ColumnProps) => ({
    ...defaultStyle(props),
    ...props.style,
});

const Column = (props: ColumnProps) => Wrapper({
    ...props,
    style: getStyle(props)
});

export default Column;