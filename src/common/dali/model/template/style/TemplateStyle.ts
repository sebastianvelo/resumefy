import Theme from "../../theme/Theme";

export type TemplateStyle = {
    [key: string]: string;
}

type TemplateStyleBuilder = (theme: Theme) => TemplateStyle;

export default TemplateStyleBuilder;