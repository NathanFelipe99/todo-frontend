import { ActionButton } from '../Button';

export type ITaskProps = {
    id: string;
    name: string;
}

const buttons = ["alt", "trash", "save", "finish"];

export function Task(props: ITaskProps) {
    return (
        <div id={props.id} className="flex bg-violet-500 p-4 my-2 rounded-md items-center justify-between shadow-lg text-white">
            <div className="w-full">
                {props.name}
            </div>
            <div className="actions flex w-full h-8 justify-end">
                {buttons.map((type, index) => {
                    return <ActionButton key={index + props.id} type={type} />
                })}
            </div>
        </div>
    );
}