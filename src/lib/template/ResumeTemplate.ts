import StyleableProps from "lib/core/components/props/StyleableProps";
import Grid from "lib/widget/common/Grid";

export interface ResumeTemplateProps extends StyleableProps {
    columns?: number;
    body: HTMLElement[];
}

const ResumeTemplate = (props: ResumeTemplateProps) => Grid({
    ...props,
    columns: props.columns ?? props.body.length,
    children: props.body,
});

export default ResumeTemplate;