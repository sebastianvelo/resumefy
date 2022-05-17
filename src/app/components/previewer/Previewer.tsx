import { FunctionComponent } from "react";
import { downloadHTMLAsPDF } from "common/dali/Dali";

interface PreviewerProps {
    template: string;
}

const Previewer: FunctionComponent<PreviewerProps> = (props: PreviewerProps) =>
    <div onClick={() => downloadHTMLAsPDF(props.template)} className="transform scale-75 origin-top-left" dangerouslySetInnerHTML={{ __html: props.template }} />;

export default Previewer;