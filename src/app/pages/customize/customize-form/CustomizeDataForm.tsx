import InputSection, { InputSectionProps } from "app/components/input-section/InputSection";
import { FunctionComponent } from "react";

export interface CustomizeDataFormProps {
    title: string;
    sections: InputSectionProps[];
}

const CustomizeDataForm: FunctionComponent<CustomizeDataFormProps> = (props: CustomizeDataFormProps) => (
    <div className="bg-gray-900 text-white px-10 space-y-4 py-2 overflow-y-auto max-h-screen w-2/3">
        <h1 className="text-4xl font-black text-center">{props.title}</h1>
        <div className="space-y-8">
            {props.sections.map(InputSection)}
        </div>
    </div>
);
export default CustomizeDataForm;