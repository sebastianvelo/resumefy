import { FunctionComponent } from "react";

interface PreviewerProps {
    template: (props: any) => HTMLElement;
    data: any;
}

const Previewer: FunctionComponent<PreviewerProps> = (props: PreviewerProps) => (
    <div dangerouslySetInnerHTML={{ __html: props.template(props.data).outerHTML }} />
);

export default Previewer;