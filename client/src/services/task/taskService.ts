import { Task } from "../../types/task";
import api from "../api/api";
import { CreateTaskDto, TaskFilters } from "./taskTypes";

class TaskService {
  async get(filters: TaskFilters): Promise<Task[]> {
    const res = await api.get("tasks", { params: filters });
    return res.data;
  }

  async create(task: CreateTaskDto): Promise<Task> {
    const res = await api.post("tasks", task);
    return res.data;
  }

  async update(task: Task): Promise<Task> {
    const { id, ...taskData } = task;
    const res = await api.put(`tasks/${id}`, taskData);
    return res.data;
  }

  async delete(id: number): Promise<void> {
    await api.delete(`tasks/${id}`);
  }
}

export const taskService = new TaskService();
