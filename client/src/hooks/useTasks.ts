import { useEffect, useState, useCallback } from "react";
import { Task } from "../types/task";
import { taskService } from "../services/task/taskService";
import { CreateTaskDto, TaskFilters } from "../services/task/taskTypes";

export const useTasks = (filters?: TaskFilters) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      const fetchedTasks = await taskService.get(filters || {});
      setTasks(fetchedTasks);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(filters)]);

  const createTask = async (newTask: CreateTaskDto): Promise<void> => {
    try {
      const createdTask = await taskService.create(newTask);
      setTasks((prevTasks) => [createdTask, ...prevTasks]);
    } catch (err) {
      console.error(err);
    }
  };

  const editTask = async (updatedTask: Task): Promise<void> => {
    try {
      const updated = await taskService.update(updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === updated.id ? updated : task))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id: number): Promise<void> => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      await taskService.delete(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return { tasks, loading, createTask, editTask, deleteTask };
};
