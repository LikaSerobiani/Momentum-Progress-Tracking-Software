import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/images/Hourglass.png";
import Button from "../common/Button";
import Plus from "../common/icons/Plus";
import CreateEmployeeModal from "../common/Modals/CreateEmployee";

export default function Header() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleAddTask = () => {
    navigate("/tasks/create");
  };

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <header className="bg-white">
      <div className="flex items-center w-full max-w-[1680px] mx-auto py-[30px] justify-between">
        {/* logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <h1 className="font-fredokaOne text-[31px] text-[#8338EC] leading-[100%] ">
            Momentum
          </h1>
          <img src={Logo} alt="Header Logo" />
        </div>
        {/* buttons */}
        <div className="flex gap-[40px]">
          <Button
            title="თანამშრომლის შექმნა"
            variant="secondary"
            onClick={handleShow}
          />
          <Button
            title="შექმენი ახალი დავალება"
            variant="primary"
            onClick={handleAddTask}
          >
            <Plus color="#FFFFFF" />
          </Button>
        </div>
      </div>
      <CreateEmployeeModal showModal={showModal} handleClose={handleClose} />
    </header>
  );
}
