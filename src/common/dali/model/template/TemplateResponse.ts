import Person from "../person/Person";
import { TemplateStyle } from "./style/TemplateStyle";

interface TemplateResponse {
    structure: string;
    style: TemplateStyle;
    data: Person;
}

export default TemplateResponse;