import Handlebars from "handlebars";
import TemplateResponse from "../model/template/TemplateResponse";

class HandlebarsWrapper {
    public static initHelpers = () => {
        Handlebars.registerHelper("show-term", (term: { start: string, end?: string }) =>
            `${term.start} - ${term.end ?? 'Actualidad'}`
        );

        Handlebars.registerHelper("show-section", (section, options) =>
            section && section.body.length ? options.fn(section) : ''
        );

        Handlebars.registerHelper("resume", (options) =>
            `<div style="{{style.resume}}">
                ${options.fn(this)}
            </div>`
        );
    }

    public static getHTMLFromTemplate = (template: TemplateResponse) =>
        Handlebars.compile(template.structure)({ ...template.data, style: template.style });

}

export default HandlebarsWrapper;