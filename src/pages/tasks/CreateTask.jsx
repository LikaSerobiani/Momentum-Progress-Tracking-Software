import React, { useState, useEffect } from "react";
import TextArea from "../../components/common/TextArea";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Formik, Form } from "formik";
import { taskValidationSchema } from "../../validation/taskValidationSchema";
import Selector from "../../components/common/Selector";
import useDepartmentStore from "../../stores/UseDepartmentStore";
import useStatusStore from "../../stores/UseStatusStore";

export default function CreateTask() {
  const { departments, fetchDepartments } = useDepartmentStore();
  const { statuses, fetchStatuses } = useStatusStore();

  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetchStatuses();
        fetchDepartments();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchDepartments, fetchStatuses]);

  useEffect(() => {
    if (statuses.length > 0 && !selectedStatus) {
      const defaultStatus = statuses.find(
        (status) => status.name === "დასაწყები"
      );
      setSelectedStatus(defaultStatus);
    }
  }, [statuses, selectedStatus]);

  return (
    <div className="flex flex-col">
      <h2 className="font-firaGo font-bold text-[34px] leading-[100%] text-gray-headline mb-[25px]">
        შექმენი ახალი დავალება
      </h2>

      <div className="bg-[#FBF9FFA6]  border-[0.3px] border-[#DDD2FF] rounded-[4px] py-16 px-14">
        <Formik
          initialValues={{
            name: "",
            description: "",
            department_id: "",
            status_id: selectedStatus ? selectedStatus.id : "",
          }}
          validationSchema={taskValidationSchema}
          // onSubmit={handleSubmit}
          validateOnChange={true}
          validateOnBlur={true}
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
              <div className="flex gap-8 flex-col">
                <Selector
                  label="დეპარტამენტი"
                  name="department_id"
                  id="department_id"
                  options={departments.map((department) => department.name)}
                  selectedOption={
                    selectedDepartment ? selectedDepartment.name : ""
                  }
                  onSelect={(name) => {
                    const selected = departments.find(
                      (department) => department.name === name
                    );
                    setSelectedDepartment(selected);
                    setFieldValue("department_id", selected?.id);
                  }}
                  error={touched.department_id && errors.department_id}
                  width="w-[550px]"
                />
                <Selector
                  label="სტატუსი"
                  name="status_id"
                  id="status_id"
                  options={statuses.map((status) => status.name)}
                  selectedOption={selectedStatus ? selectedStatus.name : ""}
                  onSelect={(name) => {
                    const selected = statuses.find(
                      (status) => status.name === name
                    );
                    setSelectedStatus(selected);
                    setFieldValue("status_id", selected?.id);
                  }}
                  error={touched.status_id && errors.status_id}
                  width="w-[259px]"
                />
                <Input
                  label="სათაური"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name}
                  touched={touched.name}
                  minLengthValidationText="მინიმუმ 2 სიმბოლო"
                  maxLengthValidationText="მაქსიმუმ 255 სიმბოლო"
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
                />
              </div>
              <Button
                variant="primary"
                title="დავალების შექმნა"
                type="submit"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
