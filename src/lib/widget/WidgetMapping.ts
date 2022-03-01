import Article from "./common/Article";
import Column from "./common/Column";
import Grid from "./common/Grid";
import Row from "./common/Row";
import Section from "./common/Section";
import Contact from "./resume/Contact";
import Name from "./resume/Name";
import Photo from "./resume/Photo";
import ProfessionalSummary from "./resume/ProfessionalSummary";

interface IMapping {
    [key: string]: (props: any) => HTMLElement
}

const WidgetMapping: IMapping = {
    grid: Grid,
    row: Row,
    article: Article,
    column: Column,
    section: Section,
    contact: Contact,
    name: Name,
    photo: Photo,
    professionalSummary: ProfessionalSummary
};

export default (key: string) => WidgetMapping[key];