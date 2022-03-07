import { CustomizeDataFormProps } from "app/pages/customize/customize-form/CustomizeDataForm";

const CustomizeDataFormHelper: CustomizeDataFormProps = {
    title: "Customize your resume",
    sections: [
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
};

export default CustomizeDataFormHelper;