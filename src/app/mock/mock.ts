import TemplateBuilder from "app/lib/TemplateBuilder";
import TemplateStructure1 from "app/templates/1/structure";
import style from "app/templates/1/style";

const mock: TemplateBuilder = {
    data: {
        firstName: "Edelmiro",
        lastName: "Sanchiznho",
        professionalSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet nec diam in vulputate. Etiam hendrerit iaculis leo elementum euismod. Fusce ipsum mauris, tristique in enim vel, dictum eleifend metus. Cras facilisis dignissim elit, sed blandit nisi vestibulum id. Etiam vestibulum ornare tincidunt. ",
        wantedJobTitle: "Analista Programadorinho",
        image: "https://picsum.photos/500",
        contact: [
            {
                type: "Email",
                value: "edelmiro.sanch@shemale.cum",
            },
            {
                type: "Github",
                value: "/sanchezinho",
            },
            {
                type: "Linkedin",
                value: "/in/edelmiro-sanchezinho-334",
            },
        ],
        skills: [
            { type: "Java", level: "Avanzado" },
            { type: "Javascipt", level: "Avanzado" },
            { type: "Python", level: "Experto" },
            { type: "CSS", level: "Basico" },
        ]
    },
    style,
    template: TemplateStructure1
}

export default mock;