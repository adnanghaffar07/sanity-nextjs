import * as Yup from "yup"

export const contactSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    contact_number: Yup.string().min(2).max(25).required("Please enter your number"),
    looking: Yup.string().required("Please fill the required field"),
    email: Yup.string().email().required("Please enter your email"),
    message: Yup.string().min(2).required("Please enter message")
})