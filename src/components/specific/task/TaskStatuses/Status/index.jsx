import React from "react";

const statusColors = [
  { id: 1, color: "#F7BC30" },
  { id: 2, color: "#FB5607" },
  { id: 3, color: "#FF006E" },
  { id: 4, color: "#3A86FF" },
];

export default function Status({ status }) {
  const statusColor =
    statusColors.find((c) => c.id === status.id)?.color || "#ccc";

  return (
    <div
      className="w-full max-w-[381px] text-white text-[20px] font-medium leading-[100%] flex items-center justify-center py-4  rounded-[10px] text-firaGo"
      style={{ backgroundColor: statusColor }}
    >
      {status.name}
    </div>
  );
}
