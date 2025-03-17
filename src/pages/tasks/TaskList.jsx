import React, { useEffect, useState } from "react";
import Loading from "../../components/common/Loading";
import Statuses from "../../components/specific/task/TaskStatuses/Statuses";

export default function TaskList({ tasks, statuses }) {
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
    <div>
      <h2 className="font-firaGo font-bold text-[34px] leading-[100%] text-gray-headline mb-[25px]">
        დავალებების გვერდი
      </h2>

      <Statuses statuses={statuses} tasks={tasks} />
    </div>
  );
}
