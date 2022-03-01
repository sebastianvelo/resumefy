import ComponentStyle from "../core/components/ComponentStyle";
import Wrapper, { WrapperProps } from "../core/tags/Wrapper";

interface RowProps extends WrapperProps {
    span?: number;
}

const defaultStyle = (): ComponentStyle => ({
    display: "flex"
});

const getStyle = (props: RowProps) => ({
    ...defaultStyle(),
    ...props.style,
});

const Row = (props: RowProps) => Wrapper({
    ...props,
    style: getStyle(props)
});

export default Row;