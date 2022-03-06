/* eslint-disable */
import TemplateData from "app/lib/TemplateData";
import TemplateStructure from "app/lib/TemplateStructure";
import TemplateStyle from "app/lib/TemplateStyle";
import mock from "app/mock/mock";
import { FunctionComponent, useState } from "react";
import CustomizeForm from "./customize-form/CustomizeForm";
import PreviewerWrapper from "./previewer-wrapper/PreviewerWrapper";

interface CustomizePageProps {

}

const CustomizePage: FunctionComponent<CustomizePageProps> = () => {
    const [data, setData] = useState<TemplateData>(mock.data);
    const [style, setStyle] = useState<TemplateStyle>(mock.style);
    const [template, setTemplate] = useState<TemplateStructure>(mock.template);

    return (
        <div className="flex justify-between w-screen h-screen">
            <CustomizeForm />
            <PreviewerWrapper builder={{ style, template, data }} />
        </div>
    )
}

export default CustomizePage;