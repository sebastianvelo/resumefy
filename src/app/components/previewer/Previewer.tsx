import { FunctionComponent } from "react";

interface PreviewerProps {
    template: string;
}

const Previewer: FunctionComponent<PreviewerProps> = (props: PreviewerProps) => (
    <div dangerouslySetInnerHTML={{ __html: props.template }} />
);

export default Previewer;