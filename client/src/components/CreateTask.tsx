import React, { useState } from "react";
import { CreateTaskDto } from "../services/task/taskTypes";
import { ReactComponent as CheckIcon } from "../assets/svg/circle-check.svg";
import { ReactComponent as PlusIcon } from "../assets/svg/plus.svg";
import { Button } from "./shared/Button";

interface CreateTaskProps {
  createTask: (newTask: CreateTaskDto) => Promise<void>;
}

const CreateTask: React.FC<CreateTaskProps> = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  const hadnleChangeStatus = () => setCompleted((p) => !p);

  const handleSubmit = async () => {
    try {
      if (title.trim() === "" || description.trim() === "") return;

      const newTask: CreateTaskDto = {
        title,
        description,
        completed,
      };

      setLoading(true);
      await createTask(newTask);
      setTitle("");
      setDescription("");
      setCompleted(false);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-[20px] py-[16px] rounded-md bg-[rgb(255,255,255,0.4)] flex flex-col gap-[12px] shadow-sm font-arial">
      <div
        className={`w-fit flex items-center gap-2 py-[8px] text-[14px] cursor-pointer ${
          completed ? "text-[#29AB87]" : "text-[#A4A5AB]"
        }`}
        onClick={hadnleChangeStatus}
      >
        <CheckIcon
          className={`w-[32px] h-[32px] ${
            completed
              ? "[&>path]:stroke-[#3CAA32]"
              : "[&>path]:stroke-[#A4A5AB]"
          }`}
        />
        {completed ? "Виконано" : "Не виконано"}
      </div>

      <input
        type="text"
        placeholder="Назва завдання"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-[20px] text-[#353639] max-md:text-[16px] rounded-md focus:outline focus:outline-2 focus:outline-[#2274A5] px-2 py-1 w-full"
      />

      <textarea
        placeholder="Опис завдання"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="text-[14px] max-md:text-[12px] rounded-md focus:outline focus:outline-2 focus:outline-[#2274A5] px-2 py-1 w-full outline-none"
        rows={3}
      />

      <Button
        onClick={handleSubmit}
        loading={loading}
        className="self-start w-[100px] py-2 bg-[#2274A5] text-white text-sm rounded-lg hover:bg-[#1c5d85] transition"
      >
        <PlusIcon className="w-[13px] h-[13px] fill-[#fff] mr-2" />
        Додати
      </Button>
    </div>
  );
};

export default CreateTask;
