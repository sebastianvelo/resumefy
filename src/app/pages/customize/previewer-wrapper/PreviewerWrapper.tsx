import Previewer from "app/components/previewer/Previewer";
import Person from "common/dali/model/person/Person";
import { FunctionComponent } from "react";
import * as Dali from "common/dali/Dali";

interface PreviewerWrapperProps {
    data: Person;
    type: string;
    theme: string;
}

const PreviewerWrapper: FunctionComponent<PreviewerWrapperProps> = (props: PreviewerWrapperProps) => (
    <div className="overflow-x-hidden max-h-screen flex bg-gray-800 w-3/4">
        <Previewer template={Dali.getHTML(props)} />
    </div>
);

export default PreviewerWrapper;