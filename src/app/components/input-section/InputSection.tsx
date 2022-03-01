import { FunctionComponent } from "react";
import Input, { InputProps } from "../input/Input";

export interface InputSectionProps {
    title: string;
    bodyClassName: string;
    inputs: InputProps[];
}

const InputSection: FunctionComponent<InputSectionProps> = (props: InputSectionProps) => (
    <div className="space-y-4">
        <h2 className="font-bold text-3xl">{props.title}</h2>
        <div className={props.bodyClassName}>
            {props.inputs.map((input) => <Input {...input} />)}
        </div>
    </div>
)

export default InputSection;