import React, { useEffect, useState } from "react";
import Card from "../../components/specific/task/Card";
import Loading from "../../components/common/Loading";

export default function TaskList({ tasks }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tasks && tasks.length > 0) {
      setLoading(false);
    }
  }, [tasks]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-wrap gap-[52px]">
      {tasks.map((task) => (
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
      ))}
    </div>
  );
}
