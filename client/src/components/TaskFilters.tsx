import React, { useState, useEffect } from "react";
import { EditableText } from "./shared/EditableText";

interface TaskFiltersProps {
  titleOrDescription?: string;
  completed?: string;
  setParams: (
    newParams: Partial<{ titleOrDescription: string; completed: string }>
  ) => void;
}

const TaskFilters: React.FC<TaskFiltersProps> = ({
  titleOrDescription,
  completed,
  setParams,
}) => {
  const [status, setStatus] = useState(
    completed === "true"
      ? "Виконані"
      : completed === "false"
      ? "Невиконані"
      : "Усі"
  );

  const handleOnEdit = (newDescription: string): void => {
    setParams({ titleOrDescription: newDescription });
  };

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const status = e.target.value;
    setStatus(status);

    setParams({
      completed:
        status === "Усі" ? undefined : status === "Виконані" ? "true" : "false",
    });
  };

  useEffect(() => {
    setStatus(
      completed === "true"
        ? "Виконані"
        : completed === "false"
        ? "Невиконані"
        : "Усі"
    );
  }, [titleOrDescription, completed]);

  return (
    <div className="flex gap-4 justify-between w-full max-w-[800px] mx-auto">
      <EditableText
        value={titleOrDescription || ""}
        onEdit={handleOnEdit}
        className="w-full max-w-[800px] text-[16px] text-[#353639] px-[20px] py-[12px] rounded-md shadow-sm bg-[#fff] max-md:text-[14px]"
        inputClassName="w-full outline-none"
        placeholder="Введіть назву або опис"
      />

      <div className="pr-[30px] text-[16px] bg-[#fff] shadow-sm rounded-md overflow-hidden max-md:text-[14px] min-w-[120px]">
        <select
          value={status}
          onChange={handleStatusChange}
          className="px-[10px] h-full outline-none"
        >
          <option value="Усі">Усі</option>
          <option value="Виконані">Виконані</option>
          <option value="Невиконані">Невиконані</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilters;
