import StyleableProps from "./core/components/props/StyleableProps";
import Grid from "./widget/Grid";

interface DummyResumeTemplateProps extends StyleableProps {
    size?: number;
    columns: Node[];
}

const DummyResumeTemplate = (props: DummyResumeTemplateProps) => Grid({
    ...props,
    columns: props.size ?? props.columns.length,
    children: props.columns
});

export default DummyResumeTemplate;