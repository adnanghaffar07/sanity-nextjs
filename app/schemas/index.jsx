import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string()
    .test("len", "Please enter a valid name", (val) => {
      if (val && val.length >= 3) {
        return true;
      }
      return false;
    })
    .required("Please enter your name"),
  contact_number: Yup.string()
    .test("len", "Please enter a valid contact number", (val) => {
      if (val && val.length >= 5) {
        return true;
      }
      return false;
    })
    .required("Please enter your number"),
  looking: Yup.string().required("Please fill the required field"),
  email: Yup.string().email().required("Please enter your email"),
  message: Yup.string()
    .test("len", "Please enter a valid message", (val) => {
      if (val && val.length >= 4) {
        return true;
      }
      return false;
    })
    .required("Please enter your message"),
});
