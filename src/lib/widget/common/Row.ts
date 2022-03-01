import ComponentStyle from "lib/core/components/ComponentStyle";
import Wrapper, { WrapperProps } from "lib/core/tags/Wrapper";

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