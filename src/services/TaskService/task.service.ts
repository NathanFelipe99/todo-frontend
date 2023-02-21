import { ITaskProps } from "../../components/Task";
import { API } from "../api.config";

export async function getTask(): Promise<ITaskProps[]> {
    const tasks = await API.get("/tasks");
    return tasks.data;
}