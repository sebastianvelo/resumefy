import Template from "../model/template/Template";
import TemplateDTO from "../model/template/TemplateDTO";
import TemplateResponse from "../model/template/TemplateResponse";
import london from "../templates/london/template";
import paris from "../templates/paris/template";
import ThemeService from "./ThemeService";

class TemplateTransformer {
    static templates: { [name: string]: Template } = {
        london, paris
    };

    static transform(templateDTO: TemplateDTO): TemplateResponse {
        const template = TemplateTransformer.templates[templateDTO.type];
        const theme = ThemeService.getTheme(templateDTO.theme);
        return {
            structure: template.structure,
            data: templateDTO.data,
            style: template.style(theme),
        }
    }
}

export default TemplateTransformer;