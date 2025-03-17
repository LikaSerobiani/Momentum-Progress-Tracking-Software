import React, { useEffect } from "react";
import useTaskStore from "../stores/useTaskStore";
import TaskList from "./tasks/TaskList";

export default function Home() {
  const { tasks, fetchTasks } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
}
