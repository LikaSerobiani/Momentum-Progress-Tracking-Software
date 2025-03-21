import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDueDateWithWeekday } from "../../utils/dateUtils";

import PriorityTag from "../../components/specific/task/PriorityTag";
import DepartmentTag from "../../components/specific/task/DepartmentTag";
import Loading from "../../components/common/Loading";
import Selector from "../../components/common/Selector";
import useTaskStore from "../../stores/TaskStore";
import useStatusStore from "../../stores/StatusStore";
import UserIcon from "../../components/common/icons/User";
import CalendarIcon from "../../components/common/Icons/Calendar";
import PieChartIcon from "../../components/common/Icons/PieChart";
import CommentSection from "../../components/specific/task/CommentSection";

export default function TaskDetails() {
  const { id } = useParams();

  const { currentTask, fetchCurrentTask, fetchTasks, updateTaskStatus } =
    useTaskStore();
  const { statuses, fetchStatuses } = useStatusStore();

  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    if (id) {
      fetchCurrentTask(id);
    }
  }, [id, fetchCurrentTask]);

  useEffect(() => {
    fetchTasks();
    fetchStatuses();
  }, [fetchTasks, fetchStatuses]);

  useEffect(() => {
    if (currentTask && currentTask.status) {
      setSelectedStatus(currentTask.status);
    }
  }, [currentTask]);

  const handleStatusChange = async (newStatus) => {
    if (!newStatus?.id) return;

    try {
      await updateTaskStatus(id, newStatus.id);
      fetchCurrentTask(id);
      setSelectedStatus(newStatus.id);
    } catch (error) {
      console.error("Failed to update task status:", error.message);
    }
  };

  if (!currentTask) return <Loading />;

  const { name, description, due_date, priority, employee } = currentTask;
  const { avatar, name: employeeName, surname, department } = employee || {};

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-[63px]">
        {/* description */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-[18px]">
            <PriorityTag
              label={priority?.name}
              icon={priority?.icon}
              textSize="text-[16px]"
            />
            {department && (
              <DepartmentTag label={department.name} textSize="text-[16px]" />
            )}
          </div>
          <div className="flex flex-col gap-[26px]">
            <p className="text-[34px] font-semibold text-firaGo text-gray-headline">
              {name}
            </p>
            <p className="text-[18px] font-normal text-black text-firaGo w-[715px]">
              {description}
            </p>
          </div>
        </div>

        {/* details */}
        <div className="flex flex-col gap-[18px]">
          <p className="text-[24px] text-firaGo font-semibold">
            დავალების დეტალები
          </p>
          <div className="flex flex-col gap-7">
            {/* status */}
            <div className="flex items-center gap-[70px]">
              <div className="flex items-center gap-[6px] w-[164px]">
                <PieChartIcon />
                <span className="text-[16px] text-firaGo leading-[150%]">
                  სტატუსი
                </span>
              </div>
              <Selector
                name="status_id"
                id="status_id"
                options={statuses.map((status) => status)}
                selectedOption={selectedStatus}
                onSelect={handleStatusChange}
                width="w-[259px]"
              />
            </div>

            {/* assigned employee */}
            {employee && (
              <div className="flex items-center gap-[70px]">
                <div className="flex items-center gap-[6px] w-[164px]">
                  <UserIcon />
                  <span className="text-[16px] text-firaGo leading-[150%] font-normal">
                    თანამშრომელი
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <img
                    src={avatar}
                    alt={`${employeeName} ${surname}`}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-200 text-firaGo text-[11px] leading-[100%]">
                      {department?.name}
                    </p>
                    <p className="text-gray-blackish text-[14px] text-firaGo font-normal leading-[150%]">
                      {employeeName} {surname}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* due date */}
            {due_date && (
              <div className="flex items-center gap-[70px]">
                <div className="flex items-center gap-[6px] w-[164px]">
                  <CalendarIcon />
                  <span className="text-[16px] text-firaGo leading-[150%] font-normal">
                    დავალების ვადა
                  </span>
                </div>
                <span className="text-gray-blackish text-[14px] text-firaGo leading-[150%]">
                  {formatDueDateWithWeekday(due_date)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <CommentSection taskId={id} />
    </div>
  );
}
