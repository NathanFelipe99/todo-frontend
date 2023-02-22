import { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { createTask, getTask } from "../../services/TaskService/task.service";
import { ActionButton } from "../Button";
import { ITaskProps, Task } from "../Task";

export default function MainToDoApp() {
    const [tasks, setTasks] = useState<ITaskProps[]>([]);
    const [newTask, setNewTask] = useState<string>("");
    
    async function getAllTasks() {
        await getTask().then((res) => {
            setTasks(res);
        });
    }

    async function createNewTask() {
        const createdTask = await createTask(newTask);
        if (createdTask.status === 201) {
            await getAllTasks();
            document.querySelector("input")!.value = "";
        }
    }

    useEffect(() => {
        getAllTasks();
    }, []);

    return (
        <div className="bg-violet-900 flex h-screen justify-center items-center">
            <div className="bg-white p-20 w-10/12 rounded-xl">
                <div className="font-display text-4xl font-bold text-center text-violet-700 uppercase flex justify-between">
                    LISTA DE TAREFAS
                </div>
                <div className="tasks flex justify-center flex-col mt-5 text-lg mh-96 overflow-y-auto">
                    {tasks.length && tasks.map((task) => {
                        return <Task key={task.id} id={task.id} name={task.name} />
                    })}
                </div>
                <div className="flex text-white mt-5 justify-between">
                    <input id="new-task-input" name="new-task-input" type="text" className="p-3 border-2 border-slate-400 rounded-lg w-5/6 text-violet-700 font-bold" onChange={(e) => setNewTask(e.target.value)} />
                    
                    <button onClick={createNewTask} className="bg-slate-500 mx-2 p-2 rounded flex flex-col hover:bg-blue-800 w-1/6 justify-center items-center"><MdAdd fontSize="2rem"/></button>
                </div>
            </div>
        </div>
    );
}   