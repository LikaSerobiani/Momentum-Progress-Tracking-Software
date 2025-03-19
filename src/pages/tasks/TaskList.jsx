import React, { useEffect, useState } from "react";
import Loading from "../../components/common/Loading";
import Statuses from "../../components/specific/task/TaskStatuses/Statuses";
import FilterComponent from "../../components/specific/filter";
import useTaskFilter from "../../hooks/UseTaskFilter";

export default function TaskList({
  tasks,
  statuses,
  priorities,
  departments,
  employees,
}) {
  const [loading, setLoading] = useState(true);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedPriorities, setSelectedPriorities] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const handleFilterChange = (filters) => {
    setSelectedDepartments(filters.selectedDepartments);
    setSelectedPriorities(filters.selectedPriorities);
    setSelectedEmployees(filters.selectedEmployees);
  };

  const filteredTasks = useTaskFilter({
    tasks,
    selectedDepartments,
    selectedPriorities,
    selectedEmployees,
  });

  useEffect(() => {
    if (tasks && tasks.length > 0) {
      setLoading(false);
    }
  }, [tasks]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="font-firaGo font-bold text-[34px] leading-[100%] text-gray-headline mb-[25px]">
        დავალებების გვერდი
      </h2>
      <FilterComponent
        departments={departments}
        priorities={priorities}
        employees={employees}
        selectedDepartments={selectedDepartments}
        selectedPriorities={selectedPriorities}
        selectedEmployees={selectedEmployees}
        onFilter={handleFilterChange}
      />

      <Statuses statuses={statuses} tasks={filteredTasks} />
    </div>
  );
}
