import React from "react";
import Card from "../../Card";
import Status from "../Status";

export default function Statuses({ statuses, tasks }) {
  return (
    <div className="flex flex-wrap gap-[52px]">
      {statuses.map((status) => {
        const filteredTasks = tasks.filter(
          (task) => task.status.id === status.id
        );

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
