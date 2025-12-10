import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  contact: yup
    .string()
    .required("Required")
    .test(
      "email-or-phone",
      "Enter a valid email or phone number",
      (value) =>
        /\S+@\S+\.\S+/.test(value || "") || /^[0-9]{10,15}$/.test(value || "")
    ),
  password: yup
    .string()
    .required("Required")
    .min(8, "Min 8 characters")
    .matches(/[A-Za-z]/, "Must contain letters")
    .matches(/[0-9]/, "Must contain numbers"),
});

// ################################################### //

export const signupSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  contact: yup
    .string()
    .required("Required")
    .test(
      "email-or-phone",
      "Enter a valid email or phone number",
      (value) =>
        /\S+@\S+\.\S+/.test(value || "") || /^[0-9]{10,15}$/.test(value || "")
    ),
  password: yup
    .string()
    .required("Required")
    .min(8, "Min 8 characters")
    .matches(/[A-Za-z]/, "Must contain letters")
    .matches(/[0-9]/, "Must contain numbers"),
});

//######################################################## //

export const paymentSchema = yup.object({
  firstName: yup.string().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email().required(),
  company: yup.string().optional(),
  apartment: yup.string().optional(),
});
