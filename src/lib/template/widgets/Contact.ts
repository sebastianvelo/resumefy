import Wrapper from "lib/core/tags/Wrapper";
import Article, { ArticleProps } from "./common/Article";
import Section from "./common/Section";

export interface ContactProps {
    title: string;
    items: ArticleProps[];
}

const Contact = (props: ContactProps) => Section({
    title: props.title,
    body: Wrapper({
        children: props.items.map(Article)
    })
});

export default Contact;