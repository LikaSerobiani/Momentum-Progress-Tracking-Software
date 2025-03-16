import * as Yup from "yup";

export const taskValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("სათაური სავალდებულოა")
    .min(3, "მინიმუმ 3 სიმბოლო")
    .max(255, "მაქსიმუმ 255 სიმბოლო"),
  description: Yup.string()
    .min(4, "მინიმუმ 4 სიმბოლო")
    .max(255, "მაქსიმუმ 255 სიმბოლო"),
  department_id: Yup.string().required("დეპარტამენტის არჩევა სავალდებულოა"),
  status_id: Yup.string().required("სტატუსის არჩევა სავალდებულოა"),
});
