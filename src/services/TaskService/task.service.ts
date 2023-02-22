import { ITaskProps } from "../../components/Task";
import { API } from "../api.config";

export async function getTask(): Promise<ITaskProps[]> {
    const tasks = await API.get("/tasks");
    return tasks.data;
}

export async function createTask(name: string) {
    const obj = { name };
    return API.post("/tasks", obj);
}