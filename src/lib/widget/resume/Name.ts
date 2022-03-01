import StyleableProps from "lib/core/components/props/StyleableProps";
import Title from "lib/core/tags/Title";

interface NameProps extends StyleableProps {
    name: string;
}

const Name = (props: NameProps) => Title({
    text: props.name,
    style: props.style,
    importance: 5,
});

export default Name;