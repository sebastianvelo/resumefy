import ResumeTemplate, { ResumeTemplateProps } from "lib/template/ResumeTemplate";
import { FunctionComponent } from "react";

interface PreviewerProps {
    data: ResumeTemplateProps;
}

const Previewer: FunctionComponent<PreviewerProps> = (props: PreviewerProps) => (
    <div dangerouslySetInnerHTML={{ __html: ResumeTemplate(props.data).outerHTML }} />
);

export default Previewer;