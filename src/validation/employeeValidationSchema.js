import * as Yup from "yup";

export const employeeValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("სახელი სავალდებულოა")
    .min(2, "მინიმუმ 2 სიმბოლო")
    .max(255, "მაქსიმუმ 255 სიმბოლო"),
  surname: Yup.string()
    .required("გვარი სავალდებულოა")
    .min(2, "მინიმუმ 2 სიმბოლო")
    .max(255, "მაქსიმუმ 255 სიმბოლო"),
  avatar: Yup.mixed()
    .required("ავატარი სავალდებულოა")
    .test(
      "fileType",
      "ავატარი უნდა იყოს სურათის ტიპის",
      (value) => value && value.type.startsWith("image/")
    ),
});
