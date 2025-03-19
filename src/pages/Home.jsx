import React, { useEffect } from "react";
import useTaskStore from "../stores/TaskStore";
import useStatusStore from "../stores/StatusStore";
import useDepartmentsStore from "../stores/DepartmentStore";
import usePriorityStore from "../stores/PriorityStore";
import useEmployeeStore from "../stores/EmployeeStore";
import TaskList from "./tasks/TaskList";

export default function Home() {
  const { tasks, fetchTasks } = useTaskStore();
  const { statuses, fetchStatuses } = useStatusStore();
  const { departments } = useDepartmentsStore();
  const { fetchPriorities, priorities } = usePriorityStore();
  const { employees, fetchEmployees } = useEmployeeStore();

  useEffect(() => {
    fetchTasks();
    fetchStatuses();
    fetchPriorities();
    fetchEmployees();
  }, [fetchTasks, fetchStatuses, fetchPriorities, fetchEmployees]);

  return (
    <div>
      <TaskList
        tasks={tasks}
        statuses={statuses}
        departments={departments}
        priorities={priorities}
        employees={employees}
      />
    </div>
  );
}
