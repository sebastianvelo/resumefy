import Paragraph from "lib/core/tags/Paragraph";
import Title from "lib/core/tags/Title";
import Wrapper from "lib/core/tags/Wrapper";
import Article from "./common/Article";
import Column from "./common/Column";
import Grid from "./common/Grid";
import Row from "./common/Row";
import Section from "./common/Section";
import Contact from "./resume/Contact";
import Photo from "./resume/Photo";
import Widget from "./Widget";

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
    photo: Photo,
    title: Title,
    text: Paragraph,
    wrapper: Wrapper
};

const mapping = (key: string) => WidgetMapping[key];

export const getElementFromWidget = (widget: Widget<any>): HTMLElement => mapping(widget.type)({
    ...widget.props,
    children: widget.children?.map((child) => getElementFromWidget(child))
})

export default mapping;