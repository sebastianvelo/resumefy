import { ResumeTemplateProps } from "./ResumeTemplate";
import ResumeTemplateData from "./ResumeTemplateData";
import ResumeTemplateStyle from "./ResumeTemplateStyle";

type ResumeTemplateStructure = (data: ResumeTemplateData, style: ResumeTemplateStyle) => ResumeTemplateProps;

export default ResumeTemplateStructure;