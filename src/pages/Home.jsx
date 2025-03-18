import React, { useEffect } from "react";
import useTaskStore from "../stores/TaskStore";
import useStatusStore from "../stores/StatusStore";
import TaskList from "./tasks/TaskList";

export default function Home() {
  const { tasks, fetchTasks } = useTaskStore();
  const { statuses, fetchStatuses } = useStatusStore();

  useEffect(() => {
    fetchTasks();
    fetchStatuses();
  }, [fetchTasks, fetchStatuses]);

  return (
    <div>
      <TaskList tasks={tasks} statuses={statuses} />
    </div>
  );
}
