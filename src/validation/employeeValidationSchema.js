import * as Yup from "yup";

export const employeeValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("სახელი სავალდებულოა")
    .min(2, "მინიმუმ 2 სიმბოლო")
    .max(255, "მაქსიმუმ 255 სიმბოლო")
    .matches(/^[a-zA-Zა-ჰ]+$/, " მხოლოდ ლათინური და ქართული სიმბოლოები "),
  surname: Yup.string()
    .required("გვარი სავალდებულოა")
    .min(2, "მინიმუმ 2 სიმბოლო")
    .max(255, "მაქსიმუმ 255 სიმბოლო")
    .matches(/^[a-zA-Zა-ჰ]+$/, " მხოლოდ ლათინური და ქართული სიმბოლოები "),
  avatar: Yup.mixed()
    .required("ავატარი სავალდებულოა")
    .test(
      "fileType",
      "ავატარი უნდა იყოს სურათის ტიპის",
      (value) => value && value.type.startsWith("image/")
    )
    .test(
      "fileSize",
      "მაქსიმუმ 600KB",
      (value) => value && value.size <= 600000
    ),
});
