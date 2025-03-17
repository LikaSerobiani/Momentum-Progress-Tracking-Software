import React from "react";
import Card from "../../Card";
import Status from "../Status";

const statusColors = [
  { id: 1, color: "#F7BC30" },
  { id: 2, color: "#FB5607" },
  { id: 3, color: "#FF006E" },
  { id: 4, color: "#3A86FF" },
];

export default function Statuses({ statuses, tasks }) {
  return (
    <div className="flex flex-wrap gap-[52px]">
      {statuses.map((status) => {
        const filteredTasks = tasks.filter(
          (task) => task.status.id === status.id
        );
        const borderColor =
          statusColors.find((c) => c.id === status.id)?.color || "#ccc";

        return (
          <div key={status.id} className="w-[381px]">
            <Status status={status} />

            <div className="space-y-[30px] mt-[30px]">
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                  <Card
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    description={task.description}
                    due_date={task.due_date}
                    department={task.department}
                    employee={task.employee}
                    priority={task.priority}
                    borderColor={borderColor}
                  />
                ))
              ) : (
                <p className="text-gray-500 text-sm">No tasks available</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
