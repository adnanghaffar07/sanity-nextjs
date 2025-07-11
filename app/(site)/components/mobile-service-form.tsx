"use client";

import { useFormik } from "formik";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import dynamic from "next/dynamic";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from 'next/navigation';


// ✅ Dynamic import for reCAPTCHA
const DynamicRecaptcha = dynamic(() => import("./RecaptchaComponent"), {
  ssr: false,
});

export default function MobileForm() {
  const [uploading, setUploading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [errorRecaptcha, setErrorRecaptcha] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [isRecaptchaVisible] = useState(true);
  const router = useRouter();
  const onRecaptchaChange = (value: string | null) => {
    if (!value) {
      setErrorRecaptcha("Please verify the reCAPTCHA.");
    } else {
      setRecaptchaValue(value);
      setErrorRecaptcha("");
    }
  };

  const onRecaptchaExpired = () => {
    setRecaptchaValue("");
    setErrorRecaptcha("Please verify the reCAPTCHA again.");
  };

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

      if (!values.contact_number) {
        errors.contact_number = "Phone number is required";
      }

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      if (!recaptchaValue) {
        setErrorRecaptcha("Please complete the reCAPTCHA.");
        return;
      }

      setUploading(true);
      try {
        const res = await fetch("/api/send-mobile-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values }),
        });

        if (res.ok) {
          router.push("/thank-you-mobile-app");
        } else {
          const error = await res.json();
          console.error("Submission failed:", error);
          alert("Something went wrong. Please try again.");
        }

        resetForm();
        setRecaptchaValue("");
        recaptchaRef.current?.reset();
      } catch (error) {
        alert("Submission failed.");
        console.error(error);
      } finally {
        setUploading(false);
      }
    }

  });

  return (
    <div className="flex justify-center items-center max-w-[400px] mx-auto bg-[#001E6B] shadow-lg rounded-[18px] border border-slate-300">
      <div className="w-full max-w-md mx-auto px-3 py-6 shadow-lg rounded-2xl sm:px-4">
        <p className="text-2xl font-medium text-white">Let&apos;s Start your Project</p>
        <p className="text-lg font-medium text-white mb-2">Drop us a line!</p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            className="border-2 px-4 py-1 rounded-lg shadow-sm w-full text-sm text-black"
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <div>
            <PhoneInput
              country={"us"}
              value={formik.values.contact_number}
              onChange={(value) => formik.setFieldValue("contact_number", value)}
              onBlur={() => formik.setFieldTouched("contact_number", true)}
              inputClass="!w-full border-2 px-4 !py-1 !rounded-lg !shadow-sm !text-black !text-sm"
              containerClass="!w-full"
              buttonClass="!bg-white !border-gray-300"
              placeholder="Enter your phone number"
            />
            {formik.touched.contact_number && formik.errors.contact_number && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.contact_number}</p>
            )}
          </div>

          <input
            className="border-2 px-4 py-1 rounded-lg shadow-sm w-full text-sm text-black"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <input
            className="border-2 px-4 py-1 rounded-lg shadow-sm w-full text-sm text-black"
            placeholder="What are you looking for?"
            name="looking"
            value={formik.values.looking}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <textarea
            className="border-2 px-4 py-1 rounded-lg shadow-sm w-full text-sm text-black resize-none"
            placeholder="Your Message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={4}
          />

          {isRecaptchaVisible && (
            <DynamicRecaptcha
              recaptchaRef={recaptchaRef}
              onChange={onRecaptchaChange}
              onExpired={onRecaptchaExpired}
            />
          )}
          {errorRecaptcha && <p className="text-red-500 text-sm">{errorRecaptcha}</p>}

          <button
            type="submit"
            disabled={uploading}
            className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-xl text-lg font-semibold shadow-md ${uploading ? "cursor-not-allowed opacity-70" : ""
              }`}
          >
            {uploading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
