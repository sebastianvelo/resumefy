const structure = `
<div style="{{style.resume}}">
    <section style="{{style.leftColumn}}">
        <img src="{{image}}" style="{{style.photo}}" />
        {{#with sections}}

        {{#show-section contact}}
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
        {{/show-section}}

        {{#show-section skills}}
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
        {{/show-section}}

        {{/with}}
    </section>

    <section style="{{style.rightColumn}}">
        <div>
            <h1 style="{{style.name}}">{{firstName}} {{lastName}}</h1>
            <h2 style="{{style.wantedJobTitle}}">{{wantedJobTitle}}</h2>
        </div>
        <div>
            {{#with sections}}

            {{#show-section professionalSummary}}
            <div style="{{../../style.section}}">
                <h2 style="{{../../style.sectionTitle}}">{{this.title}}</h2>
                <div style="{{../../style.professionalSummary}}">
                    <p>{{this.body}}</p>
                </div>
            </div>
            {{/show-section}}

            {{#show-section workExperience}}
            <div style="{{../../style.section}}">
                <h2 style="{{../../style.sectionTitle}}">{{this.title}}</h2>
                <div>
                    {{#each this.body}}
                    <div style="{{../../../style.sectionItem}}">
                        <p style="{{../../../style.sectionItemTitle}}">{{this.position}}</p>
                        <p>
                            <span style="{{../../../style.sectionItemValue}}">{{this.companyName}}, </span>
                            <span>{{show-term this.term}}</span>
                        </p>
                        <p style="{{../../../style.sectionItemValue}}">{{this.description}}</p>
                    </div>
                    {{/each}}
                </div>
            </div>
            {{/show-section}}

            {{#show-section education}}
            <div style="{{../../style.section}}">
                <h2 style="{{../../style.sectionTitle}}">{{this.title}}</h2>
                <div>
                    {{#each this.body}}
                    <div style="{{../../../style.sectionItem}}">
                        <p style="{{../../../style.sectionItemTitle}}">{{this.title}}</p>
                        <p>
                            <span style="{{../../../style.sectionItemValue}}">{{this.name}}, </span>
                            <span>{{show-term this.term}}</span>
                        </p>
                        <p style="{{../../../style.sectionItemValue}}">{{this.description}}</p>
                    </div>
                    {{/each}}
                </div>
            </div>
            {{/show-section}}

            {{/with}}
        </div>
    </section>
</div>
`;

export default structure;