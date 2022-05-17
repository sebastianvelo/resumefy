import HandlebarsWrapper from "./common/HandlebarsWrapper";
import TemplateTransformer from "./common/TemplateTransformer";
import TemplateDTO from "./model/template/TemplateDTO";

export const initHelpers = HandlebarsWrapper.initHelpers;

export const getHTML = (templateDTO: TemplateDTO) => {
    const template = TemplateTransformer.transform(templateDTO);
    const compiledTemplate = HandlebarsWrapper.getHTMLFromTemplate(template);
    return compiledTemplate;
};

export const downloadHTMLAsPDF = (html: string) => {
    const printWindow = window.open('Resume', '_blank', 'height=400,width=800');
    printWindow?.document.write(html);
    printWindow?.document.close();
    setTimeout(() => {
        printWindow?.print();
    }, 2000);
}