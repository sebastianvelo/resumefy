import TemplateStructure from "app/lib/TemplateStructure";

const structure: TemplateStructure = `
<div style="{{style.resume}}">
    <section style="{{style.leftColumn}}">
        <img src="{{image}}" style="{{style.photo}}" />
        {{#with sections}}

        {{#with contact}}
        {{#if this}}
        <div style="{{../../style.section}}">
            <h2 style="{{../../style.sectionTitle}}">{{this.title}}</h2>
            <div>
                {{#each this.body}}
                <div style="{{../../../style.sectionItem}}">
                    <p style="{{../../../style.sectionItemTitle}}">{{this.type}}</p>
                    <p style="{{../../../style.sectionItemValue}}">{{this.value}}</p>
                </div>
                {{/each}}
            </div>
        </div>
        {{/if}}
        {{/with}}

        {{#with skills}}
        {{#if this}}
        <div style="{{../../style.section}}">
            <h2 style="{{../../style.sectionTitle}}">{{this.title}}</h2>
            <div>
                {{#each this.body}}
                <div style="{{../../../style.sectionItem}}">
                    <p style="{{../../../style.sectionItemTitle}}">{{this.type}}</p>
                    <p style="{{../../../style.sectionItemValue}}">{{this.level}}</p>
                </div>
                {{/each}}
            </div>
        </div>
        {{/if}}
        {{/with}}

        {{/with}}
    </section>

    <section style="{{style.rightColumn}}">
        <div>
            <h1 style="{{style.name}}">{{firstName}} {{lastName}}</h1>
            <h2 style="{{style.wantedJobTitle}}">{{wantedJobTitle}}</h2>
        </div>
        <div>
            {{#with sections}}

            {{#with professionalSummary}}
            {{#if this}}
            <div style="{{../../style.section}}">
                <h2 style="{{../../style.sectionTitle}}">{{this.title}}</h2>
                <div style="{{../../style.professionalSummary}}">
                    <p>{{this.body}}</p>
                </div>
            </div>
            {{/if}}
            {{/with}}

            {{#with workExperience}}
            {{#if this}}
            <div style="{{../../style.section}}">
                <h2 style="{{../../style.sectionTitle}}">{{this.title}}</h2>
                <div>
                    {{#each this.body}}
                    <div style="{{../../../style.sectionItem}}">
                        <p style="{{../../../style.sectionItemTitle}}">{{this.position}}</p>
                        <p>
                            <span style="{{../../../style.sectionItemValue}}">{{this.companyName}}, </span>
                            <span>
                                {{this.term.start}} -
                                {{#if this.term.end}} {{this.term.end}}
                                {{else}} currently
                                {{/if}}
                            </span>
                        </p>
                        <p style="{{../../../style.sectionItemValue}}">{{this.description}}</p>
                    </div>
                    {{/each}}
                </div>
            </div>
            {{/if}}
            {{/with}}

            {{#with education}}
            {{#if this}}
            <div style="{{../../style.section}}">
                <h2 style="{{../../style.sectionTitle}}">{{this.title}}</h2>
                <div>
                    {{#each this.body}}
                    <div style="{{../../../style.sectionItem}}">
                        <p style="{{../../../style.sectionItemTitle}}">{{this.title}}</p>
                        <p>
                            <span style="{{../../../style.sectionItemValue}}">{{this.name}}, </span>
                            <span>
                                {{this.term.start}} -
                                {{#if this.term.end}} {{this.term.end}}
                                {{else}} currently
                                {{/if}}
                            </span>
                        </p>
                        <p style="{{../../../style.sectionItemValue}}">{{this.description}}</p>
                    </div>
                    {{/each}}
                </div>
            </div>
            {{/if}}
            {{/with}}

            {{/with}}
        </div>
    </section>
</div>
`;

export default structure;