import { Task } from "../../types/task";

export interface TaskFilters {
  titleOrDescription?: string;
  completed?: boolean;
}

export type CreateTaskDto = Omit<Task, "id">;
