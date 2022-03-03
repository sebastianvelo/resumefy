import InputSection, { InputSectionProps } from "app/components/input-section/InputSection";
import { FunctionComponent } from "react";

const sections: InputSectionProps[] = [
    {
        title: "Personal details",
        inputs: [
            {
                label: "Wanted Job TItle",
                id: "wantedJob"
            },
            {
                label: "First Name",
                id: "firstName"
            },
            {
                label: "Last Name",
                id: "lastName"
            },
            {
                label: "Email",
                id: "email"
            },
            {
                label: "Phone",
                id: "phone"
            },
        ],
        bodyClassName: "grid grid-cols-2 gap-x-8 gap-y-2"
    },
    {
        title: "Professional Summary",
        inputs: [
            {
                id: "professionalSummary",
                type: "textarea"
            },
        ],
        bodyClassName: ""
    },
]

interface CustomizeFormProps {

}

const CustomizeForm: FunctionComponent<CustomizeFormProps> = () => (
    <div className="bg-gray-900 text-white px-10 space-y-4 py-2 overflow-y-auto max-h-screen w-1/2">
        <h1 className="text-4xl font-black text-center">Customize your resume</h1>
        <div className="space-y-8">
            {sections.map((section) => <InputSection {...section} />)}
        </div>
    </div>
);
export default CustomizeForm;