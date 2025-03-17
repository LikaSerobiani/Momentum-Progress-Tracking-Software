import React, { useEffect } from "react";
import useTaskStore from "../stores/useTaskStore";
import TaskList from "./tasks/TaskList";
import Statuses from "../components/specific/task/TaskStatuses/Statuses";

export default function Home() {
  const { tasks, fetchTasks } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div>
      <h2 className="font-firaGo font-bold text-[34px] leading-[100%] text-gray-headline mb-[25px]">
        დავალებების გვერდი
      </h2>
      <Statuses />
      <TaskList tasks={tasks} />
    </div>
  );
}
