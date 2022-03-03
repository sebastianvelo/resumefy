import Previewer from "app/components/previewer/Previewer";
import ResumeTemplateData from "lib/template/ResumeTemplateData";
import ResumeTemplateStructure from "lib/template/ResumeTemplateStructure";
import ResumeTemplateStyle from "lib/template/ResumeTemplateStyle";
import { FunctionComponent } from "react";

interface PreviewerWrapperProps {
    template: ResumeTemplateStructure;
    data: ResumeTemplateData;
    style: ResumeTemplateStyle
}

const PreviewerWrapper: FunctionComponent<PreviewerWrapperProps> = (props: PreviewerWrapperProps) => (
    <div className="overflow-auto max-h-screen flex justify-center w-1/2 bg-gray-800">
        <Previewer data={props.template(props.data, props.style)} />
    </div>
);

export default PreviewerWrapper;