import Previewer from "app/components/previewer/Previewer";
import TemplateData from "app/lib/TemplateData";
import TemplateStructure from "app/lib/TemplateStructure";
import TemplateStyle from "app/lib/TemplateStyle";
import Handlebars from "handlebars";
import { FunctionComponent } from "react";

interface PreviewerWrapperProps {
    data: TemplateData;
    structure: TemplateStructure;
    style: TemplateStyle;
}

const PreviewerWrapper: FunctionComponent<PreviewerWrapperProps> = (props: PreviewerWrapperProps) => (
    <div className="overflow-x-auto max-h-screen w-1/2 flex bg-gray-800">
        <div className="transform scale-75 origin-top-left">
            <Previewer template={Handlebars.compile(props.structure)({ style: props.style, ...props.data })} />
        </div>
    </div>
);

export default PreviewerWrapper;