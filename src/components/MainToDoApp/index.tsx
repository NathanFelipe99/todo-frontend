import { useEffect, useState } from "react";
import { getTask } from "../../services/TaskService/task.service";
import { ActionButton } from "../Button";
import { ITaskProps, Task } from "../Task";

export default function MainToDoApp() {
    const [tasks, setTasks] = useState<ITaskProps[]>([]);

    useEffect(() => {
        getTask().then((res) => {
            setTasks(res);
        });
    }, []);

    return (
        <div className="bg-violet-900 flex h-screen justify-center items-center">
            <div className="bg-white p-20 w-10/12 rounded-xl">
                <div className="font-display text-4xl font-bold text-center text-violet-700 uppercase flex justify-between">
                    LISTA DE TAREFAS
                    <div className="text-white">
                        <ActionButton type="add" />
                    </div>
                </div>
                <div className="tasks flex justify-center flex-col mt-5 text-lg">
                    {tasks.length && tasks.map((task) => {
                        return <Task key={task.id} id={task.id} name={task.name} />
                    })}
                </div>
            </div>
        </div>
    );
}