import Previewer from "app/components/previewer/Previewer";
import TemplateBuilder from "app/lib/TemplateBuilder";
import Handlebars from "handlebars";
import { FunctionComponent } from "react";

interface PreviewerWrapperProps {
    builder: TemplateBuilder;
}

const PreviewerWrapper: FunctionComponent<PreviewerWrapperProps> = (props: PreviewerWrapperProps) => (
    <div className="overflow-auto max-h-screen flex w-1/2 bg-gray-800 relative">
        <Previewer template={Handlebars.compile(props.builder.template)({ style: props.builder.style, ...props.builder.data })} />
    </div>
);

export default PreviewerWrapper;