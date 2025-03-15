import React, { useState } from "react";
import { Formik, Form } from "formik";
import Button from "../Button";
import FileUploader from "../FileUploader";
import Modal from "../Modals/Modal";
import Input from "../Input";
import CloseIcon from "../Icons/Close";
import useEmployeeStore from "../../../stores/UseEmployeeStore";
import SuccessModal from "./Success";
import { employeeValidationSchema } from "../../../validation/employeeValidationSchema";

export default function CreateEmployee({ showModal, handleClose }) {
  const { addEmployee } = useEmployeeStore();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await addEmployee(values);
      resetForm();
      setShowSuccessModal(true);

      setTimeout(() => {
        setShowSuccessModal(false);
        handleClose();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);
  };

  return (
    <>
      <SuccessModal
        title="თანამშრომელი წარმატებულად დაემატა"
        showModal={showSuccessModal}
        handleClose={() => setShowSuccessModal(false)}
      />
      <Modal isModalOpen={showModal} onClose={handleClose} padding="50px">
        <div className="flex justify-end mb-[37px] cursor-pointer">
          <button onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col gap-[45px]">
          <h2 className="font-firaGo font-bold text-[32px] leading-[38.4px] text-gray-headline text-center">
            თანამშრომლის დამატება
          </h2>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              avatar: null,
            }}
            validationSchema={employeeValidationSchema}
            onSubmit={handleSubmit}
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
              <Form className="flex flex-col gap-[45px]">
                <div className="flex justify-between">
                  <Input
                    label="სახელი"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name}
                    touched={touched.name}
                    minLengthValidationText="მინიმუმ 2 სიმბოლო"
                    maxLengthValidationText="მაქსიმუმ 255 სიმბოლო"
                    width="w-[384px]"
                  />
                  <Input
                    label="გვარი"
                    id="surname"
                    name="surname"
                    value={values.surname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.surname}
                    touched={touched.surname}
                    minLengthValidationText="მინიმუმ 2 სიმბოლო"
                    maxLengthValidationText="მაქსიმუმ 255 სიმბოლო"
                    width="w-[384px]"
                  />
                </div>
                <FileUploader
                  onFileChange={(file) => setFieldValue("avatar", file)}
                  error={touched.avatar && errors.avatar}
                />
                <div className="flex justify-end gap-[15px]">
                  <Button
                    variant="secondary"
                    title="გაუქმება"
                    onClick={handleClose}
                  />

                  <Button
                    variant="primary"
                    title="დაამატე თანამშრომელი"
                    type="submit"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
}
