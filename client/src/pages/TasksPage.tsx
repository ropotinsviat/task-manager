import React from "react";
import TaskList from "../components/TaskList";
import { useTasks } from "../hooks/useTasks";
import TaskFilters from "../components/TaskFilters";
import { useQueryParams } from "../hooks/useQueryParams";

const TasksPage: React.FC = () => {
  const { getParams, setParams } = useQueryParams<{
    titleOrDescription?: string;
    completed?: string;
  }>();

  const { titleOrDescription, completed } = getParams();

  const { tasks, loading, createTask, editTask, deleteTask } = useTasks({
    titleOrDescription,
    completed:
      completed === "true" ? true : completed === "false" ? false : undefined,
  });

  return (
    <div className="w-full max-w-[1200px] mx-auto px-[10px] flex flex-col my-[50px] gap-[30px]">
      <h1 className="text-[24px] font-semibold font-arial text-center text-[#353639]">
        Менеджер задач
      </h1>
      <TaskFilters
        titleOrDescription={titleOrDescription}
        completed={completed}
        setParams={setParams}
      />

      <TaskList
        tasks={tasks}
        createTask={createTask}
        onDelete={deleteTask}
        onEdit={editTask}
        loading={loading}
      />
    </div>
  );
};

export default TasksPage;
