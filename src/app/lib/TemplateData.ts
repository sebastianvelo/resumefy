type TemplateData = {
    firstName: string;
    lastName: string;
    wantedJobTitle: string;
    professionalSummary: string;
    image: string;
    contact?: { type: string, value: string }[];
    skills?: { type: string, level: string }[];
}

export default TemplateData;