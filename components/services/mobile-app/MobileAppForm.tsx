'use client';

import { useFormik } from "formik";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from 'next/navigation';
import { submitForm } from "@/lib/forms/client/submitForm";
import { useTurnstile, CAPTCHA_MISSING_MESSAGE } from "@/components/forms/useTurnstile";


export default function MobileAppForm() {
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const captcha = useTurnstile();
  const [errorCaptcha, setErrorCaptcha] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      contact_number: "",
      email: "",
      looking: "",
      message: "",
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.contact_number) errors.contact_number = "Phone number is required";
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      if (!captcha.token) {
        setErrorCaptcha(CAPTCHA_MISSING_MESSAGE);
        return;
      }
      setErrorCaptcha("");

      setUploading(true);
      try {
        await submitForm("mobile-service-hero", {
          fields: {
            name: values.name,
            email: values.email,
            phone: values.contact_number,
            lookingFor: values.looking,
            message: values.message,
          },
          captchaToken: captcha.token,
        });
        resetForm();
        router.push("/thank-you-mobile-app");
      } catch (error) {
        console.error(error);
        setErrorCaptcha("Submission failed. Please complete the verification again and resubmit.");
      } finally {
        captcha.reset();
        setUploading(false);
      }
    },
  });

  return (
    <div className="flex justify-center items-center max-w-[400px] mx-auto bg-[#001E6B] shadow-lg rounded-2xl border border-gray-300">
      <div className="w-full max-w-md mx-auto px-4 py-6 sm:px-6">
        <h2 className="text-2xl font-semibold text-white mb-1">Start Your Project</h2>
        <p className="text-sm text-gray-200 mb-6">Request a Free Quote</p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            className="border-2 px-4 py-2 rounded-lg w-full text-black text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <PhoneInput
            country={"us"}
            value={formik.values.contact_number}
            onChange={(value) => formik.setFieldValue("contact_number", value)}
            inputClass="!w-full border-2 px-4 py-2 rounded-lg !text-black !text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            containerClass="!w-full"
            buttonClass="!bg-white !border-gray-300"
            placeholder="Phone Number"
          />
          {formik.touched.contact_number && formik.errors.contact_number && (
            <p className="text-red-500 text-sm">{formik.errors.contact_number}</p>
          )}

          <input
            className="border-2 px-4 py-2 rounded-lg w-full text-black text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />

          <input
            className="border-2 px-4 py-2 rounded-lg w-full text-black text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            placeholder="What are you looking for?"
            name="looking"
            value={formik.values.looking}
            onChange={formik.handleChange}
            required
          />

          <textarea
            className="border-2 px-4 py-2 rounded-lg w-full text-black text-sm resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            placeholder="Your Message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            rows={4}
          />

          <div className="flex flex-col items-center w-full">
            {captcha.widget}
            {errorCaptcha && <p className="text-red-400 mt-2 text-sm text-center">{errorCaptcha}</p>}
          </div>

          <button
            type="submit"
            disabled={uploading}
            className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-xl text-lg font-semibold shadow-md transition ${
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