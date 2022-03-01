import Paragraph from "lib/core/tags/Paragraph";
import Title from "lib/core/tags/Title";
import Wrapper from "lib/core/tags/Wrapper";

export interface ArticleProps {
    title: string;
    text: string;
}

const Article = (props: ArticleProps) => Wrapper({
    style: {
        width: "100%",
        paddingBottom: "10px"
    },
    children: [
        Title({
            text: props.title,
            importance: 4,
            style: {
                fontSize: '18px',
                fontWeight: "bold"
            }
        }),
        Paragraph({
            text: props.text,
        })
    ]
});


export default Article;