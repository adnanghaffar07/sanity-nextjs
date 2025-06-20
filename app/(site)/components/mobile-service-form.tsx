"use client";

import { useFormik } from "formik";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function MobileForm() {
  const [uploading, setUploading] = useState(false);

  const { values, handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched } = useFormik({
    initialValues: {
      name: "",
      contact_number: "",
      email: "",
      looking: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      setUploading(true);
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("number", values.contact_number);
        formData.append("looking", values.looking);
        formData.append("message", values.message);

        // Send email
        await fetch("/api/projectdiscussionform", {
          method: "POST",
          body: formData,
        });

        // Save in Sanity
        await fetch("/api/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        resetForm();
        alert("Form submitted!");
      } catch (error) {
        alert("Submission failed.");
        console.error(error);
      } finally {
        setUploading(false);
      }
    },
  });

  return (
    <div className="flex justify-center items-center px-6 pt-6 pb-6 bg-[#001E6B] shadow-lg rounded-[24px] border border-slate-300">
      <div className="flex flex-col w-full max-w-[700px]">
        <p className="text-2xl font-medium text-white">Need a Consultation?</p>
        <p className="text-lg font-medium text-white mb-2">
          Drop us a line!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="border-2 px-4 py-3 rounded-lg shadow-sm w-full text-sm text-black"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <PhoneInput
            country={"us"}
            value={values.contact_number}
            onChange={(value) => setFieldValue("contact_number", value)}
            onBlur={() => setFieldTouched("contact_number", true)}
            inputClass="!w-full border-2 px-4 !py-3 !rounded-lg !shadow-sm !text-black !text-sm"
            containerClass="!w-full"
            buttonClass="!bg-white !border-gray-300"
            placeholder="Enter your phone number"
          />

          <input
            className="border-2 px-4 py-3 rounded-lg shadow-sm w-full text-sm text-black"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <input
            className="border-2 px-4 py-3 rounded-lg shadow-sm w-full text-sm text-black"
            placeholder="What are you looking for?"
            name="looking"
            value={values.looking}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <textarea
            className="border-2 px-4 py-3 rounded-lg shadow-sm w-full text-sm text-black resize-none"
            placeholder="Your Message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
          />

          <button
            type="submit"
            disabled={uploading}
            className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-xl text-lg font-semibold shadow-md ${
              uploading ? "cursor-not-allowed opacity-70" : ""
            }`}
          >
            {uploading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
