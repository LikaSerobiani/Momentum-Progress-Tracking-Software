import React from "react";
import { useNavigate } from "react-router-dom";

import { formatDueDate } from "../../../../utils/dateUtils";
import DepartmentTag from "../DepartmentTag";
import PriorityTag from "../PriorityTag";
import CommentIcon from "../../../common/Icons/Comment";

export default function Card({
  id,
  name,
  description,
  due_date,
  department,
  employee,
  priority,
  borderColor,
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/tasks/${id}`);
  };

  return (
    <div
      className="bg-white w-[381px] border rounded-2xl p-[20px] flex gap-7 flex-col cursor-pointer"
      onClick={handleCardClick}
      style={{ borderColor: borderColor }}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-[10px]">
          <PriorityTag label={priority.name} icon={priority.icon} />
          <DepartmentTag label={department.name} />
        </div>
        <div className="text-[12px] text-gray-headline text-firaGo font-normal">
          {formatDueDate(due_date)}
        </div>
      </div>

      <div className="flex flex-col gap-3 p-3">
        <h3 className="text-[15px] font-bold leading-[100%] text-firaGo text-gray-headline">
          {name}
        </h3>
        <p className="text-[14px] text-firaGo text-gray-subheadline">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <img
          src={employee.avatar}
          alt={`${employee.name} ${employee.surname}`}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex gap-1 items-center">
          <CommentIcon />
          <span className="text-sm leading-[100%] text-firaGo font-normal text-gray-headline">
            8
          </span>
        </div>
      </div>
    </div>
  );
}
