import TemplateDTO from "common/dali/model/template/TemplateDTO";

const mock: TemplateDTO = {
    type: "paris",
    theme: "primary",
    data: {
        firstName: "Edelmir",
        lastName: "Sanchiznho",
        wantedJobTitle: "Software Engineer",
        image: "https://picsum.photos/500",
        sections: {
            professionalSummary: {
                title: "About me",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet nec diam in vulputate. Etiam hendrerit iaculis leo elementum euismod. Fusce ipsum mauris, tristique in enim vel, dictum eleifend metus. Cras facilisis dignissim elit, sed blandit nisi vestibulum id. Etiam vestibulum ornare tincidunt. ",
            },
            contact: {
                title: "Contact",
                body: [
                    { type: "Email", value: "edelmiro.sanch@shemale.cum", },
                    { type: "Github", value: "/sanchezinho", },
                    { type: "Linkedin", value: "/in/edelmiro-sanchezinho-334", },
                ]
            },
            skills: {
                title: "Skills",
                body: [
                    { type: "Python", level: "Expert" },
                    { type: "Java", level: "Advanced" },
                    { type: "Javascipt", level: "Advanced" },
                    { type: "CSS", level: "Basic" },
                ]
            },
            workExperience: {
                title: "Work experience",
                body: [
                    {
                        companyName: "Google",
                        position: "Sr Software Engineer",
                        term: {
                            start: "2022"
                        },
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet nec diam in vulputate. Etiam hendrerit iaculis leo elementum euismod. "
                    },
                    {
                        companyName: "Netflix",
                        position: "Mid Software Engineer",
                        term: {
                            start: "2021",
                            end: "2022"
                        },
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet nec diam in vulputate. Etiam hendrerit iaculis leo elementum euismod. "
                    },
                    {
                        companyName: "Don Satur",
                        position: "Jr Software Developer",
                        term: {
                            start: "2017",
                            end: "2020"
                        },
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet nec diam in vulputate. Etiam hendrerit iaculis leo elementum euismod. "
                    },
                ]
            },
            education: {
                title: "Education",
                body: [
                    {
                        name: "MIT",
                        title: "Bachelor of Computer Science",
                        term: {
                            start: "2009"
                        },
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet nec diam in vulputate. Etiam hendrerit iaculis leo elementum euismod. "
                    },
                    {
                        name: "Universidad Nacional de Lanús",
                        title: "Carpentry",
                        term: {
                            start: "2005",
                            end: "2009"
                        },
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet nec diam in vulputate. Etiam hendrerit iaculis leo elementum euismod. "
                    },
                    {
                        name: "Harvard University",
                        title: "Bachelor of Arts",
                        term: {
                            start: "2000",
                            end: "2005"
                        },
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet nec diam in vulputate. Etiam hendrerit iaculis leo elementum euismod. "
                    },
                ]
            }
        }
    }
}

export default mock;