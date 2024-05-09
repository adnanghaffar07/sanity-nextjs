"use client";
import { useState } from "react";
import { useFormik } from "formik";
import { contactSchema } from "../../schemas/index";

const initialValues = {
  name: "",
  contact_number: "",
  looking: "",
  email: "",
  message: "",
};

const PartnershipForm = () => {
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [bgColor, setBgColor] = useState("bg-[#1D92FB]");
  const [messageSuccess, setMessageSuccess] = useState("w-[0%]");

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });

  const handleCombinedSubmit = async (event: any): Promise<void> => {
    handleSubmit(event);
    setMessage("");
    setBgColor("bg-[#1D92FB]");

    if (
      !values.name.length ||
      !values.email.length ||
      !values.contact_number.length ||
      !values.looking.length ||
      !values.message.length
    ) {
      return;
    }
    if (
      errors.name ||
      errors.message ||
      errors.contact_number ||
      errors.email ||
      errors.looking
    ) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("number", values.contact_number);
      formData.append("looking", values.looking);
      formData.append("message", values.message);
      setUploading(true);
      setMessage("Submitting form...");

      setMessageSuccess("w-[10%]");
      const response = await fetch("/api/projectdiscussionform", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setBgColor("bg-green-500");
        setMessage("Your Message has been successfully submitted!");
        setMessageSuccess("w-[100%]");
      } else {
        setBgColor("bg-red-500");
        setMessage("Message not submitted!");
        setMessageSuccess("w-[100%]");
      }
    } catch (error) {
      setBgColor("bg-red-500");
      setMessage("Message not submitted!");
      setMessageSuccess("w-[100%]");
      console.error("Error:", error);
    } finally {
      setUploading(false);
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="flex justify-center items-center px-16 py-12 lg:text-2xl md:text-xl text-lg font-light text-black bg-white shadow-lg shadow-slate-500 rounded-[36px] max-md:px-5 border border-slate-300">
      <div className="flex flex-col mt-3.5 w-full max-w-[746px] max-md:max-w-full">
        <div className="lg:text-4xl md:text-3xl text-l font-medium  text-center leading-[52px] max-md:max-w-full max-md:text-4xl w-[240px] sm:w-[420px] lg:w-[570px]">
          Become a Partner
        </div>
        <form onSubmit={handleCombinedSubmit}>
          <div className="mt-10">
            <input
              className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
              placeholder={"Full Name"}
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null}
          </div>
          <div className="mt-4">
            <select
              className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black pl-4"
              name="purpose"
              //   value={values.dropdown}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" disabled selected>
                Self/Company
              </option>
              <option value="self">Self</option>
              <option value="company">Company</option>
            </select>
            {/* {errors.dropdown && touched.dropdown ? (
      <p className="form-error">{errors.dropdown}</p>
    ) : null} */}
          </div>
          <div className="mt-4">
            <input
              className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
              placeholder={"Contact Number"}
              name="contact_number"
              value={values.contact_number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.contact_number && touched.contact_number ? (
              <p className="form-error">{errors.contact_number}</p>
            ) : null}
          </div>
          <div className="mt-4">
            <input
              className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
              placeholder={"Email"}
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>

          <div className="mt-4">
            <select
              className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
              name="country"
              //   value={values.dropdown}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" disabled selected>
                I am located in : Country
              </option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="newzealand">New Zealand</option>
              <option value="uk">UK</option>
              <option value="australia">Australia</option>
              <option value="other">Other</option>
            </select>
            {/* {errors.dropdown && touched.dropdown ? (
      <p className="form-error">{errors.dropdown}</p>
    ) : null} */}
          </div>

          <div className="mt-4">
            <select
              className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
              name="city"
              //   value={values.dropdown}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" disabled selected>
                City / State
              </option>
              <option value="self">Option 1</option>
              <option value="company">Option 2</option>
            </select>
            {/* {errors.dropdown && touched.dropdown ? (
      <p className="form-error">{errors.dropdown}</p>
    ) : null} */}
          </div>

          <div className="mt-4">
            <select
              className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
              name="program"
              //   value={values.dropdown}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" disabled selected>
                I am interested in
              </option>
              <option value="self">Reseller Program</option>
              <option value="self">Affiliate Program</option>
              <option value="self">White Label Program</option>
            </select>
            {/* {errors.dropdown && touched.dropdown ? (
      <p className="form-error">{errors.dropdown}</p>
    ) : null} */}
          </div>

          <button
            type="submit"
            disabled={uploading}
            className={`self-center mt-6 shadow-md text-base xl:text-1xl lg:text-xl text-center text-black max-md:mt-10 bg-[#F7E022] flex w-full justify-center rounded-xl py-2 ${
              uploading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            Submit
          </button>
        </form>
      </div>

      {message && (
        <div
          className={`fixed top-14  lg:top-5 right-5 ${bgColor} py-[10px] px-[20px] rounded-lg shadow-lg z-50 w-[270px] sm:w-[450px]`}
        >
          <div
            className={`h-1 bg-white mb-2 transition-all duration-500 ${messageSuccess}`}
          ></div>
          <p className="message text-xs sm:text-base">{message}</p>
        </div>
      )}
    </div>
  );
};

export default PartnershipForm;
