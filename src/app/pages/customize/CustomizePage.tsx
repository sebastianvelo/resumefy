/* eslint-disable */ 
import Template1 from "app/templates/Template1";
import ResumeTemplateData from "lib/template/ResumeTemplateData";
import ResumeTemplateStyle from "lib/template/ResumeTemplateStyle";
import { FunctionComponent, useState } from "react";
import CustomizeForm from "./customize-form/CustomizeForm";
import PreviewerWrapper from "./previewer-wrapper/PreviewerWrapper";

const mock: {
    data: ResumeTemplateData,
    style: ResumeTemplateStyle,
} = {
    data: {
        firstName: "Edelmiro",
        lastName: "Sanchiznho",
        professionalSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet nec diam in vulputate. Etiam hendrerit iaculis leo elementum euismod. Fusce ipsum mauris, tristique in enim vel, dictum eleifend metus. Cras facilisis dignissim elit, sed blandit nisi vestibulum id. Etiam vestibulum ornare tincidunt. ",
        wantedJobTitle: "Analista Programadorinho",
        image: "https://picsum.photos/200",
        contact: [
            ["Email", "edelmiro.sanch@shemale.cum"],
            ["Github", "/sanchezinho"],
            ["Linkedin", "/in/edelmiro-sanchezinho-334"],
        ]
    },
    style: {
        primaryColor: "lightblue"

    }
}

interface CustomizePageProps {

}

const CustomizePage: FunctionComponent<CustomizePageProps> = () => {
    const [data, setData] = useState<ResumeTemplateData>(mock.data);
    const [style, setStyle] = useState<ResumeTemplateStyle>(mock.style);

    return (
        <div className="flex justify-between w-screen">
            <CustomizeForm />
            <PreviewerWrapper template={Template1} style={style} data={data} />
        </div>
    )
}

export default CustomizePage;