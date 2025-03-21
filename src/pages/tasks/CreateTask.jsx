import React, { useState, useEffect } from "react";
import TextArea from "../../components/common/TextArea";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

import { taskValidationSchema } from "../../validation/taskValidationSchema";
import Selector from "../../components/common/Selector";
import useDepartmentStore from "../../stores/DepartmentStore";
import useStatusStore from "../../stores/StatusStore";
import usePriorityStore from "../../stores/PriorityStore";
import useEmployeeStore from "../../stores/EmployeeStore";
import CustomDatePicker from "../../components/common/DatePicker";
import useTaskStore from "../../stores/TaskStore";
import CreateEmployeeModal from "../../components/common/Modals/CreateEmployee";

export default function CreateTask() {
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    department_id: "",
    status_id: "",
    priority_id: "",
    employee_id: "",
    due_date: null,
  });

  const { addTask } = useTaskStore();
  const { departments, fetchDepartments } = useDepartmentStore();
  const { statuses, fetchStatuses } = useStatusStore();
  const { priorities, fetchPriorities } = usePriorityStore();
  const { employees, fetchEmployees } = useEmployeeStore();
  const navigate = useNavigate();

  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetchStatuses();
        fetchDepartments();
        fetchPriorities();
        fetchEmployees();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchDepartments, fetchStatuses, fetchPriorities, fetchEmployees]);

  useEffect(() => {
    if (statuses.length > 0 && !selectedStatus) {
      const defaultStatus = statuses.find(
        (status) => status.name === "დასაწყები"
      );
      setSelectedStatus(defaultStatus);

      setInitialValues((prev) => ({
        ...prev,
        status_id: defaultStatus ? defaultStatus.id : "",
      }));
    }
  }, [statuses, selectedStatus]);

  const filteredEmployees = selectedDepartment
    ? employees.filter(
        (employee) =>
          employee.department &&
          employee.department.id === selectedDepartment?.id
      )
    : [];

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await addTask(values);
      navigate("/");

      setSelectedDepartment(null);
      setSelectedStatus(null);
      setSelectedPriority(null);
      setSelectedEmployee(null);
      resetForm();
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
  };

  const filteredStatuses = statuses.filter((status) => status.id !== 4);

  return (
    <>
      {showModal && (
        <CreateEmployeeModal
          showModal={showModal}
          handleClose={() => setShowModal(false)}
        />
      )}
      <div className="flex flex-col">
        <h2 className="font-firaGo font-bold text-[34px] leading-[100%] text-gray-headline mb-[25px]">
          შექმენი ახალი დავალება
        </h2>

        <div className="bg-[#FBF9FFA6]  border-[0.3px] border-[#DDD2FF] rounded-[4px] py-16 px-14">
          <Formik
            initialValues={initialValues}
            validationSchema={taskValidationSchema}
            onSubmit={handleSubmit}
            validateOnChange={true}
            validateOnBlur={true}
            enableReinitialize={true}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              setFieldValue,
            }) => (
              <Form>
                <div>
                  <div className="flex flex-wrap gap-y-[55px] gap-x-[161px]">
                    <Input
                      label="სათაური"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.name && errors.name}
                      minLengthValidationText="მინიმუმ 2 სიმბოლო"
                      maxLengthValidationText="მაქსიმუმ 255 სიმბოლო"
                      width="w-[550px]"
                    />
                    <Selector
                      label="დეპარტამენტი"
                      name="department_id"
                      id="department_id"
                      options={departments}
                      selectedOption={selectedDepartment}
                      onSelect={(selected) => {
                        setSelectedDepartment(selected);
                        setFieldValue("department_id", selected?.id || "");

                        setSelectedEmployee(null);
                        setFieldValue("employee_id", "");
                      }}
                      error={touched.department_id && errors.department_id}
                      width="w-[550px]"
                    />
                    <TextArea
                      label="აღწერა"
                      id="description"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.description}
                      touched={touched.description}
                      minLengthValidationText="მინიმუმ 4 სიმბოლო"
                      maxLengthValidationText="მაქსიმუმ 255 სიმბოლო"
                      width="550px"
                    />

                    {selectedDepartment && (
                      <Selector
                        label="პასუხისმგებელი თანამშრომელი"
                        name="employee_id"
                        id="employee_id"
                        options={filteredEmployees}
                        selectedOption={selectedEmployee}
                        onSelect={(selected) => {
                          setSelectedEmployee(selected);
                          setFieldValue("employee_id", selected?.id || "");
                        }}
                        error={touched.employee_id && errors.employee_id}
                        width="w-[550px]"
                        showAddEmployeeOption={true}
                        onOpenModal={() => setShowModal(true)}
                      />
                    )}
                    <div className="flex gap-[161px] items-center">
                      <div className="flex gap-[32px]">
                        <Selector
                          label="პრიორიტეტი"
                          name="priority_id"
                          id="priority_id"
                          options={priorities}
                          selectedOption={selectedPriority}
                          onSelect={(selected) => {
                            setSelectedPriority(selected);
                            setFieldValue("priority_id", selected?.id);
                          }}
                          error={touched.priority_id && errors.priority_id}
                          width="w-[259px]"
                        />

                        <Selector
                          label="სტატუსი"
                          name="status_id"
                          id="status_id"
                          options={filteredStatuses}
                          selectedOption={selectedStatus}
                          onSelect={(selected) => {
                            setSelectedStatus(selected);
                            setFieldValue("status_id", selected?.id);
                          }}
                          error={touched.status_id && errors.status_id}
                          width="w-[259px]"
                        />
                      </div>
                      <CustomDatePicker
                        value={values.due_date}
                        onChange={(date) => setFieldValue("due_date", date)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end w-[1261px] mt-[145px]">
                    <Button
                      variant="primary"
                      title="დავალების შექმნა"
                      type="submit"
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
