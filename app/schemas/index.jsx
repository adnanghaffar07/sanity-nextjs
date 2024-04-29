import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  contact_number: Yup.string().required("Please enter your number"),
  looking: Yup.string().required("Please fill the required field"),
  email: Yup.string().email().required("Please enter your email"),
  message: Yup.string(),
});
