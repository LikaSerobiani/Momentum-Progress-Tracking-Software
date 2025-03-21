import { useState, useEffect } from "react";
import FilterMenu from "./FilterMenu";
import Dropdown from "../../common/Dropdown";
import Button from "../../common/Button";
import XIcon from "../../common/icons/XIcon";

const FilterComponent = ({
  onFilter,
  departments,
  priorities,
  employees,
  selectedDepartments,
  selectedPriorities,
  selectedEmployees,
}) => {
  const [localSelectedDepartments, setLocalSelectedDepartments] = useState(
    selectedDepartments || []
  );
  const [localSelectedPriorities, setLocalSelectedPriorities] = useState(
    selectedPriorities || []
  );
  const [localSelectedEmployees, setLocalSelectedEmployees] = useState(
    selectedEmployees || []
  );

  useEffect(() => {
    onFilter({
      selectedDepartments: localSelectedDepartments,
      selectedPriorities: localSelectedPriorities,
      selectedEmployees: localSelectedEmployees,
    });
  }, [
    localSelectedDepartments,
    localSelectedPriorities,
    localSelectedEmployees,
    onFilter,
  ]);

  const handleRemoveFilter = (filterType, id) => {
    switch (filterType) {
      case "department":
        setLocalSelectedDepartments((prev) =>
          prev.filter((departmentId) => departmentId !== id)
        );
        break;
      case "priority":
        setLocalSelectedPriorities((prev) =>
          prev.filter((priorityId) => priorityId !== id)
        );
        break;
      case "employee":
        setLocalSelectedEmployees((prev) =>
          prev.filter((employeeId) => employeeId !== id)
        );
        break;
      default:
        break;
    }
  };

  const handleClearAllFilters = () => {
    setLocalSelectedDepartments([]);
    setLocalSelectedPriorities([]);
    setLocalSelectedEmployees([]);
  };

  const renderSelectedFilters = () => {
    const selectedFilters = [];

    if (localSelectedDepartments.length > 0) {
      localSelectedDepartments.forEach((departmentId) => {
        const departmentName = departments.find(
          (department) => department.id === departmentId
        )?.name;

        selectedFilters.push(
          <button
            key={`department-${departmentId}`}
            className="px-3 py-1 rounded-[43px] border-solid border-[#DBDBDB] border flex items-center font-firaGo gap-1"
            onClick={() => handleRemoveFilter("department", departmentId)}
          >
            {departmentName}
            <XIcon />
          </button>
        );
      });
    }

    if (localSelectedPriorities.length > 0) {
      localSelectedPriorities.forEach((priorityId) => {
        const priorityName = priorities.find(
          (priority) => priority.id === priorityId
        )?.name;

        selectedFilters.push(
          <button
            key={`priority-${priorityId}`}
            className="px-3 py-1 rounded-[43px] border-solid border-borderGray border flex items-center font-firaGo gap-1"
            onClick={() => handleRemoveFilter("priority", priorityId)}
          >
            {priorityName}
            <XIcon />
          </button>
        );
      });
    }

    if (localSelectedEmployees.length > 0) {
      localSelectedEmployees.forEach((employeeId) => {
        const employeeName = employees.find(
          (employee) => employee.id === employeeId
        )?.name;

        selectedFilters.push(
          <button
            key={`employee-${employeeId}`}
            className="px-3 py-1 rounded-[43px] border-solid border-[#DBDBDB] border flex items-center font-firaGo gap-1 text-[14px]"
            onClick={() => handleRemoveFilter("employee", employeeId)}
          >
            {employeeName}
            <XIcon />
          </button>
        );
      });
    }

    return selectedFilters.length > 0 ? (
      <div className="flex flex-wrap gap-2">
        {selectedFilters}
        <button onClick={handleClearAllFilters} className="text-sm font-medium">
          გასუფთავება
        </button>
      </div>
    ) : null;
  };

  const applyButtonComponent = (closeDropdown) => (
    <Button
      title="არჩევა"
      variant="roundedFull"
      onClick={() => closeDropdown()}
    />
  );

  return (
    <div className="flex flex-col gap-4 mb-10">
      <div className="flex items-center justify-between border border-solid border-borderGray rounded-[10px] w-[688px] p-[6px]">
        <Dropdown
          title="დეპარტამენტი"
          applyButtonComponent={applyButtonComponent}
        >
          <FilterMenu
            setData={setLocalSelectedDepartments}
            data={departments}
            selected={localSelectedDepartments}
          />
        </Dropdown>
        <Dropdown
          title="პრიორიტეტი"
          applyButtonComponent={applyButtonComponent}
        >
          <FilterMenu
            setData={setLocalSelectedPriorities}
            data={priorities}
            selected={localSelectedPriorities}
          />
        </Dropdown>
        <Dropdown
          title="თანამშრომელი"
          applyButtonComponent={applyButtonComponent}
        >
          <FilterMenu
            setData={setLocalSelectedEmployees}
            data={employees}
            selected={localSelectedEmployees}
          />
        </Dropdown>
      </div>
      <div className="gap-1 flex max-w-[90%]">{renderSelectedFilters()}</div>
    </div>
  );
};

export default FilterComponent;
