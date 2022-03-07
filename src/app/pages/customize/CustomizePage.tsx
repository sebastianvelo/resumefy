/* eslint-disable */
import TemplateData from "app/lib/TemplateData";
import TemplateStructure from "app/lib/TemplateStructure";
import TemplateStyle from "app/lib/TemplateStyle";
import mock from "app/mock/mock";
import { FunctionComponent, useState } from "react";
import CustomizeDataForm from "./customize-form/CustomizeDataForm";
import PreviewerWrapper from "./previewer-wrapper/PreviewerWrapper";
import CustomizePageHelper from "app/helpers/customize/CustomizePageHelper";

interface CustomizePageProps {

}

const CustomizePage: FunctionComponent<CustomizePageProps> = () => {
    const [data, setData] = useState<TemplateData>(mock.data);
    const [style, setStyle] = useState<TemplateStyle>(mock.template.styles[0]);
    const [structure, setStructure] = useState<TemplateStructure>(mock.template.structure);

    return (
        <div className="flex justify-between w-screen h-screen">
            <CustomizeDataForm {...CustomizePageHelper.dataForm} />
            <PreviewerWrapper data={data} structure={structure} style={style} />
        </div>
    )
}

export default CustomizePage;