import ComponentStyle from "lib/core/components/ComponentStyle";
import { ContactProps } from "./widgets/Contact";
import { PhotoProps } from "./widgets/Photo";

interface ColumnStyle {
    style: ComponentStyle,
    span?: number;
}

interface ResumeTemplateStyle {
    primaryColor: string;
    width: number;
    resume: ComponentStyle;
    leftColumn: ColumnStyle;
    rightColumn: ColumnStyle
    photo: ComponentStyle;
    name: ComponentStyle;
}

interface ResumeTemplateData {
    photo: PhotoProps;
    contact: ContactProps;
    person: {
        name: string;
        professionalSummary: string;
    };
}

interface ResumeTemplateProps {
    data: ResumeTemplateData;
    style: ResumeTemplateStyle;
}

export default ResumeTemplateProps;