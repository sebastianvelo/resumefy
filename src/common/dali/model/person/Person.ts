type Section<T> = {
    title?: string;
    body: T;
};

type Contact = {
    type: string;
    value: string;
}

type Skill = {
    type: string;
    level: string;
}

type Job = {
    position: string;
    companyName: string;
    term: {
        start: string;
        end?: string;
    };
    location?: string;
    description?: string;   
}

type Education = {
    title: string;
    name: string;
    term: {
        start: string;
        end?: string;
    };
    location?: string;
    description?: string;   
}

type Person = {
    firstName?: string;
    lastName?: string;
    image?: string;
    wantedJobTitle?: string;
    sections?: {
        professionalSummary?: Section<string>;
        contact?: Section<Contact[]>;
        skills?: Section<Skill[]>;
        workExperience?: Section<Job[]>;
        education?: Section<Education[]>
    }
}

export default Person;