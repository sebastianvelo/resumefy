import Paragraph from "lib/core/tags/Paragraph";
import Title from "lib/core/tags/Title";
import ResumeTemplateStructure from "lib/template/ResumeTemplateStructure";
import ResumeTemplateData from "lib/template/ResumeTemplateData";
import ResumeTemplateStyle from "lib/template/ResumeTemplateStyle";
import Column from "lib/widget/common/Column";
import Contact from "lib/widget/resume/Contact";
import Photo from "lib/widget/resume/Photo";

const defaultStyle = {
    resume: {
        width: "800px",
        height: "1100px",
        border: "1px solid black",
        fontFamily: `ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`
    },
    leftColumn: (style: ResumeTemplateStyle) => ({
        background: style.primaryColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
    }),
    rightColumn: {
        background: "white",
        padding: "16px"
    },
    photo: {
        height: "200px",
        borderRadius: "50%"
    },
    name: {
        fontSize: "50px",
        textAlign: "center"
    },
    wantedJobTitle: {
        fontSize: "30px"
    },
    professionalSummary: {
        fontSize: "16px",
        textAlign: "justify"
    }
}

const Template1: ResumeTemplateStructure = (data: ResumeTemplateData, style: ResumeTemplateStyle) => ({
    body: [
        Column({
            style: defaultStyle.leftColumn(style),
            children: [
                Photo({
                    src: data.image,
                    alt: data.firstName,
                    style: defaultStyle.photo
                }),
                Contact({
                    title: "Contacto",
                    items: data.contact.map(([title, text]) => ({
                        title, text
                    }))
                })
            ]
        }),
        Column({
            span: 2,
            style: defaultStyle.rightColumn,
            children: [
                Title({
                    text: `${data.firstName} ${data.lastName}`,
                    importance: 5,
                    style: defaultStyle.name
                }),
                Title({
                    text: `${data.wantedJobTitle}`,
                    importance: 4,
                    style: defaultStyle.wantedJobTitle
                }),
                Paragraph({
                    text: data.professionalSummary,
                    style: defaultStyle.professionalSummary
                })
            ]
        }),
    ],
    columns: 3,
    style: defaultStyle.resume,
});

export default Template1;