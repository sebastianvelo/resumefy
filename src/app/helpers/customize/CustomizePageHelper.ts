import { CustomizeDataFormProps } from "app/pages/customize/customize-form/CustomizeDataForm";
import CustomizeDataFormHelper from "./CustomizeDataFormHelper";

interface ICustomizePageHelper {
    dataForm: CustomizeDataFormProps;
}

const CustomizePageHelper: ICustomizePageHelper = {
    dataForm: CustomizeDataFormHelper
};

export default CustomizePageHelper;