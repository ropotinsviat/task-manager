import React from "react";
import { Task } from "../types/task";
import TaskCard from "./TaskCard";
import { withLoading } from "../hocs/withLoadingAndError";
import CreateTask from "./CreateTask";
import { CreateTaskDto } from "../services/task/taskTypes";

interface TaskListProps {
  tasks: Task[];
  createTask: (newTask: CreateTaskDto) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  onEdit: (task: Task) => Promise<void>;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  createTask,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="grid grid-cols-3 gap-[30px] max-lg:grid-cols-2 max-sm:grid-cols-1">
      <CreateTask createTask={createTask} />

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default withLoading(TaskList);
