import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  contact_number: Yup.string().required("Please enter your number"),
  looking: Yup.string().required("Please fill the required field"),
  email: Yup.string().email().required("Please enter your email"),
  message: Yup.string(),
});

export const partnershipSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  purpose: Yup.string().required("Please select a value"),
  contact_number: Yup.string().required("Please enter your number"),
  email: Yup.string().email().required("Please enter your email"),
  country: Yup.string().required("Please select a country"),
  city: Yup.string().required("Please select a city"),
  program: Yup.string().required("Please select a partnership program"),
});
