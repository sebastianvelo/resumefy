import ComponentStyle from "lib/core/components/ComponentStyle";
import Title from "lib/core/tags/Title";

const Name = (name: string, style: ComponentStyle) => Title({
    text: name,
    importance: 5,
    style
});

export default Name;