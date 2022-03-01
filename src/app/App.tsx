import ResumeTemplate, { ResumeTemplateProps } from "lib/template/ResumeTemplate";
import { FunctionComponent } from "react";
import InputSection, { InputSectionProps } from "./components/input-section/InputSection";
import Previewer from "./components/previewer/Previewer";

const resumeData: ResumeTemplateProps = {
    style: {
        width: "800px",
        height: "1100px",
        border: "1px solid black",
        fontFamily: `ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`
    },
    columns: 3,
    body: [
        {
            type: "column",
            props: {
                style: {
                    background: "steelblue",
                    display: "flex",
                    justifyContent: "center",
                    padding: "16px"
                }
            },
            children: [
                {
                    type: "photo",
                    props: {
                        src: "https://picsum.photos/200",
                        style: {
                            height: "250px",
                            borderRadius: "50%"
                        }
                    }
                },
            ],
        },
        {
            type: "column",
            props: {
                span: 2,
                style: {
                    background: "white"
                }
            }
        },
    ]
};

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

const App: FunctionComponent = () => (
    <div className="flex justify-between w-screen">
        <div className="bg-gray-900 text-white px-10 space-y-4 py-2 overflow-y-auto max-h-screen w-1/2">
            <h1 className="text-4xl font-black text-center">Customize your resume</h1>
            <div className="space-y-8">
                {sections.map((section) => <InputSection {...section} />)}
            </div>
        </div>
        <div className="overflow-auto max-h-screen flex justify-center w-1/2 bg-gray-800">
            <Previewer template={ResumeTemplate} data={resumeData} />
        </div>
    </div>
);

export default App;
