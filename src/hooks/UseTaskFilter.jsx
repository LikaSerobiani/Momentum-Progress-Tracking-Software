import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useTaskFilter = ({
  tasks,
  selectedDepartments,
  selectedPriorities,
  selectedEmployees,
}) => {
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedDepartments.length > 0) {
      params.set("departments", selectedDepartments.join(","));
    }
    if (selectedPriorities.length > 0) {
      params.set("priorities", selectedPriorities.join(","));
    }
    if (selectedEmployees.length > 0) {
      params.set("employees", selectedEmployees.join(","));
    }

    setSearchParams(params);

    const filtered = tasks.filter((task) => {
      const matchesDepartment =
        selectedDepartments.length === 0 ||
        selectedDepartments.includes(task.department.id);
      const matchesPriority =
        selectedPriorities.length === 0 ||
        selectedPriorities.includes(task.priority.id);
      const matchesEmployee =
        selectedEmployees.length === 0 ||
        selectedEmployees.includes(task.employee.id);

      return matchesDepartment && matchesPriority && matchesEmployee;
    });

    setFilteredTasks(filtered);
  }, [
    selectedDepartments,
    selectedPriorities,
    selectedEmployees,
    tasks,
    setSearchParams,
  ]);

  return filteredTasks;
};

export default useTaskFilter;
