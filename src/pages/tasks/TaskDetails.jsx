import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PriorityTag from "../../components/specific/task/PriorityTag";
import DepartmentTag from "../../components/specific/task/DepartmentTag";
import Loading from "../../components/common/Loading";

import useTaskStore from "../../stores/UseTaskStore";

import User from "../../components/common/Icons/User";
import Calendar from "../../components/common/Icons/Calendar";
import PieChart from "../../components/common/Icons/PieChart";

export default function TaskDetails() {
  const { id } = useParams();

  const { currentTask, fetchCurrentTask, fetchTasks } = useTaskStore();

  useEffect(() => {
    if (id) {
      fetchCurrentTask(id);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id, fetchCurrentTask]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  if (!currentTask) {
    return <Loading />;
  }

  const {
    name: taskName,
    description,
    due_date,
    priority,
    employee: { avatar, name: employeeName, surname, department } = {},
  } = currentTask;

  console.log(currentTask);
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-[63px]">
        {/* description */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-[18px]">
            <PriorityTag label={priority.name} icon={priority.icon} />
            <DepartmentTag label={department.name} />
          </div>
          <div className="flex flex-col gap-[26px]">
            <p className="text-[34px] font-semibold text-firaGo text-gray-headline">
              {taskName}
            </p>
            <p className="text-[18px] font-normal text-black text-firaGo">
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
              <div className="flex items-center gap-[6px]">
                <PieChart />
                <span className="text-[16px] text-firaGo ">სტატუსი</span>
              </div>
            </div>
            {/* user */}
            <div className="flex items-center gap-[70px]">
              <div className="flex items-center gap-[6px]">
                <User />
                <span className="text-[16px] text-firaGo">თანამშრომელი</span>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src={avatar}
                  alt={`${employeeName} ${surname}`}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-200 text-firaGo text-xs">
                    {department.name}
                  </p>
                  <p className="text-gray-blackish text-[14px] text-firaGo font-normal">
                    <span>{employeeName}</span> <span>{surname}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* due date */}
            <div className="flex items-center gap-[70px]">
              <div className="flex items-center gap-[6px]">
                <Calendar />
                <span className="text-[16px] text-firaGo">დავალების ვადა</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
