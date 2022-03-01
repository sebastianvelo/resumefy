import { FunctionComponent } from "react";

export interface InputProps {
    id: string;
    label?: string;
    type?: string;
}

const GetInput = (props: InputProps) => {
    const className = "bg-gray-200 text-black p-3 outline-none rounded-md";
    switch (props.type) {
        case "textarea":
            return <textarea className={className} id={props.id} />
        default:
            return <input className={className} id={props.id} type={props.id ?? "text"} />;
    }
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => (
    <div className="flex flex-col space-y-2">
        <label className="font-bold opacity-90" htmlFor={props.id}>{props.label}</label>
        <GetInput {...props} />
    </div>
);

export default Input;