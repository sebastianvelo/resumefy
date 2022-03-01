import StyleableProps from "lib/core/components/props/StyleableProps";
import Grid from "lib/widget/common/Grid";
import Widget from "lib/widget/Widget";
import WidgetMapping from "lib/widget/WidgetMapping";

const getElementFromWidget = (widget: Widget<any>): HTMLElement => WidgetMapping(widget.type)({
    ...widget.props,
    children: widget.children?.map((child) => getElementFromWidget(child))
})

export interface ResumeTemplateProps extends StyleableProps {
    columns: number;
    body: Widget<any>[];
}

const ResumeTemplate = (props: ResumeTemplateProps) => Grid({
    ...props,
    columns: props.columns ?? props.body.length,
    children: props.body.map((widget) => getElementFromWidget(widget)),
});

export default ResumeTemplate;