import ResumeTemplate from "lib/template/ResumeTemplate";
import ResumeTemplateProps from "lib/template/ResumeTemplateProps";
import { FunctionComponent } from "react";
import InputSection, { InputSectionProps } from "./components/input-section/InputSection";
import Previewer from "./components/previewer/Previewer";

const resumeData: ResumeTemplateProps = {
    data: {
        photo: {
            src: "https://picsum.photos/200",
            alt: ""
        },
        contact: {
            title: "Contacto",
            items: [
                {
                    title: `Email`,
                    text: "Lorem ipsum"
                },
                {
                    title: `Celular`,
                    text: "Lorem ipsum"
                },
                {
                    title: `Linkedin`,
                    text: "Lorem ipsum"
                },
                {
                    title: `Github`,
                    text: "Lorem ipsum"
                },
            ]
        },
        person: {
            name: "Sebastian Velo",
            professionalSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget auctor leo. Maecenas ullamcorper ultrices tortor, id porta lorem facilisis sed. Aenean tempus nec lectus ut blandit. Phasellus placerat neque et magna dictum volutpat. Quisque viverra dui eget ante elementum venenatis. "
        },
    },
    style: {
        primaryColor: "lightblue",
        width: 3,
        resume: {
            width: "800px",
            height: "1100px",
            border: "1px solid black",
            fontFamily: `ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`
        },
        leftColumn: {
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                background: "purple"
            }
        },
        rightColumn: {
            style: {
                padding: "16px",
                background: "white"
            },
            span: 2
        },
        photo: {
            borderRadius: "50%",
            paddingBottom: "10px"
        },
        name: {
            fontSize: "60px"
        }
    }
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
