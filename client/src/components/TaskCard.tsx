import React from "react";
import { Task } from "../types/task";
import { ReactComponent as TrashIcon } from "../assets/svg/trash.svg";
import { ReactComponent as CheckIcon } from "../assets/svg/circle-check.svg";
import { EditableText } from "./shared/EditableText";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete, onEdit }) => {
  const handleDelete = (): void => {
    onDelete(task.id);
  };

  const hadnleChangeStatus = (): void => {
    onEdit({ ...task, completed: !task.completed });
  };

  const handleEditTitle = (newTitle: string): void => {
    onEdit({ ...task, title: newTitle });
  };

  const handleEditDescription = (newDescription: string): void => {
    onEdit({ ...task, description: newDescription });
  };

  return (
    <div className="px-[20px] py-[16px] rounded-md bg-white font-arial flex flex-col gap-[20px] shadow-sm">
      <div className="flex justify-between items-center">
        <div
          className={`flex items-center gap-2 py-[8px] text-[14px] cursor-pointer ${
            task.completed ? "text-[#29AB87]" : "text-[#A4A5AB]"
          }`}
          onClick={hadnleChangeStatus}
        >
          <CheckIcon
            className={`w-[32px] h-[32px] ${
              task.completed
                ? "[&>path]:stroke-[#3CAA32]"
                : "[&>path]:stroke-[#A4A5AB]"
            }`}
          />
          {task.completed ? "Виконано" : "Не виконано"}
        </div>
        <div
          className="cursor-pointer p-2 bg-[#f7f7f7] rounded-lg shadow-sm transition-all duration-300 hover:bg-[#f0f0f0]"
          onClick={handleDelete}
        >
          <TrashIcon className="w-[23px] h-[23px]" />
        </div>
      </div>

      <EditableText
        value={task.title}
        onEdit={handleEditTitle}
        className="text-[20px] font-semibold text-[#353639] max-md:text-[16px]"
        inputClassName="text-[20px] rounded-md focus:outline focus:outline-2 focus:outline-[#2274A5] px-2 py-1 w-full"
      />

      <EditableText
        value={task.description}
        onEdit={handleEditDescription}
        className="text-[14px] text-[#6D6E72] max-md:text-[12px]"
        inputClassName="text-[14px] rounded-md focus:outline focus:outline-2 focus:outline-[#2274A5] px-2 py-1 w-full"
        multiline
      />
    </div>
  );
};

export default TaskCard;
