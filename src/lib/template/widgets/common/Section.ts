import Title from "lib/core/tags/Title";
import Wrapper from "lib/core/tags/Wrapper";

export interface SectionProps {
    title: string;
    body: HTMLElement;
}

const Section = (props: SectionProps) => Wrapper({
    children: [
        Title({
            text: props.title,
            importance: 4,
            style: {
                fontSize: '35px'
            }
        }),
        props.body
    ],
    style: {
        width: "100%"
    }
});

export default Section;