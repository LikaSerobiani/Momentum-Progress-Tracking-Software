import React, { useEffect } from "react";
import useStatusStore from "../../../../../stores/UseStatusStore";
import Status from "../Status";

const statusColors = ["#F7BC30", "#FB5607", "#FF006E", "#3A86FF"];

export default function Statuses() {
  const { statuses, fetchStatuses } = useStatusStore();

  useEffect(() => {
    fetchStatuses();
  }, [fetchStatuses]);

  return (
    <div className="flex flex-wrap gap-[52px]">
      {statuses.map((status, index) => (
        <Status
          key={status.id}
          label={status.name}
          color={statusColors[index % statusColors.length]}
        />
      ))}
    </div>
  );
}
