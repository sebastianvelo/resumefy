import TemplateStructure from "app/lib/TemplateStructure";

const TemplateStructure1: TemplateStructure = `
    <div style="{{style.resume}}">
        <section style="{{style.leftColumn}}">
            <div>
                <img src="{{image}}" style="{{style.photo}}"/>
            </div>

            {{#if contact}}
                <div style="{{style.section}}">
                    <h2 style="{{style.sectionTitle}}">Contacto</h2>
                    <div>
                        {{#each contact}}
                            <div style="{{../style.sectionItem}}">
                                <p style="{{../style.sectionItemTitle}}">{{this.type}}</p>
                                <p>{{this.value}}</p>
                            </div>
                        {{/each}}
                    </div>
                </div>
            {{/if}}
            
            {{#if skills}}
                <div style="{{style.section}}">
                    <h2 style="{{style.sectionTitle}}">Habilidades</h2>
                    <div>
                        {{#each skills}}
                            <div style="{{../style.sectionItem}}">
                                <p style="{{../style.sectionItemTitle}}">{{this.type}}</p>
                                <p>{{this.level}}</p>
                            </div>
                        {{/each}}
                    </div>
                </div>
            {{/if}}
        </section>

        <section style="{{style.rightColumn}}">
            <div>
                <h1 style="{{style.name}}">{{firstName}} {{lastName}}</h1>
                <h2 style="{{style.wantedJobTitle}}">{{wantedJobTitle}}</h2>
            </div>
            <div>
                <p style="{{style.professionalSummary}}">{{professionalSummary}}</p>
            </div>
        </section>
    </div>
`;

export default TemplateStructure1;