/* eslint-disable */
import CustomizePageHelper from "app/helpers/customize/CustomizePageHelper";
import mock from "app/mock/mock";
import Person from "common/dali/model/person/Person";
import { FunctionComponent, useState } from "react";
import CustomizeDataForm from "./customize-form/CustomizeDataForm";
import PreviewerWrapper from "./previewer-wrapper/PreviewerWrapper";

interface CustomizePageProps {

}

const CustomizePage: FunctionComponent<CustomizePageProps> = () => {
    const [firstName, setFirstName] = useState<string>();
    const [theme, setTheme] = useState<string>(mock.theme);
    const [type, setType] = useState<string>(mock.type);

    const getPerson = (): Person => ({
        firstName
    });

    return (
        <div className="flex justify-between w-screen h-screen">
            <CustomizeDataForm {...CustomizePageHelper.dataForm} />
            <PreviewerWrapper data={mock.data} type={type} theme={theme} />
        </div>
    )
}

export default CustomizePage;