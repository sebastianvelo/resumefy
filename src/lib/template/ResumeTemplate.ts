import Wrapper from "lib/core/tags/Wrapper";
import DummyResumeTemplate from "lib/DummyResumeTemplate";
import Column from "lib/widget/Column";
import ResumeTemplateProps from "./ResumeTemplateProps";
import Contact from "./widgets/Contact";
import Name from "./widgets/Name";
import Photo from "./widgets/Photo";
import ProfessionalSummary from "./widgets/ProfessionalSummary";

const ResumeTemplate = (props: ResumeTemplateProps) => DummyResumeTemplate({
    size: props.style.width,
    columns: [
        Column({
            span: props.style.leftColumn.span,
            children: [
                Photo(props.data.photo, props.style.photo),
                Contact(props.data.contact)
            ],
            style: props.style.leftColumn.style
        }),
        Column({
            span: props.style.rightColumn.span,
            children: [
                Wrapper({
                    children: [
                        Name(props.data.person.name, props.style.name),
                        ProfessionalSummary(props.data.person.professionalSummary)
                    ]
                }),
            ],
            style: props.style.rightColumn.style
        })
    ],
    style: props.style.resume
});

export default ResumeTemplate;