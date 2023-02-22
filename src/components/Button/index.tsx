import { MdDoneOutline, MdAdd } from 'react-icons/md';
import { FaRegEdit, FaRegTrashAlt, FaRegSave } from 'react-icons/fa';

interface IButtonProps {
    type: string;
    clickAction?: Function;
}

export function ActionButton(props: IButtonProps) {
    let buttonProps = "bg-slate-500 mx-2 p-2 rounded ",
        buttonIcon: JSX.Element | undefined,
        buttonClickAction: Function;
    const { type, clickAction } = props;
    
    switch (type.toLowerCase()) {
        case "add":
            buttonProps += "flex flex-col hover:bg-blue-800 w-1/6 justify-center items-center";
            buttonIcon = <MdAdd fontSize="2rem" />;
            break;
        case "trash":
            buttonProps += "hover:bg-red-600";
            buttonIcon = <FaRegTrashAlt />;
            break; 
        case "alt":
            buttonProps += "hover:bg-orange-500";
            buttonIcon = <FaRegEdit />;
            break;
        case "save":
            buttonProps += "hover:bg-green-500 hidden";
            buttonIcon = <FaRegSave />;
            break;
        case "finish":
            buttonProps += "hover:bg-indigo-700";
            buttonIcon = <MdDoneOutline />;
            break;
        default:
            buttonProps += "hover:bg-black";
            break;
    }

    return (
        <button onClick={clickAction && clickAction()} name={type} className={buttonProps}>{buttonIcon}</button>
    );
}