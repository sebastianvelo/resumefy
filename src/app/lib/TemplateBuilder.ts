import TemplateData from "./TemplateData";
import TemplateStructure from "./TemplateStructure";
import TemplateStyle from "./TemplateStyle";

type TemplateBuilder = {
    data: TemplateData;
    style: TemplateStyle;
    template: TemplateStructure;
};

export default TemplateBuilder;