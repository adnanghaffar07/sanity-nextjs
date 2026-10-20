"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import dynamic from "next/dynamic";
import { submitForm } from "@/lib/forms/client/submitForm";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const DynamicRecaptcha = dynamic(() => import("@/components/forms/TurnstileWidget"), {
  ssr: false,
});

const initialValues = {
  name: "",
  phone: "",
  what_are_you_looking_for: "",
  email: "",
  message: "",
};

export default function ConsultationForm() {
  const router = useRouter();
  const recaptchaRef = useRef<TurnstileInstance | undefined>(undefined);
  const [errorRecaptcha, setErrorRecaptcha] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [bgColor, setBgColor] = useState("bg-[#1D92FB]");
  const [messageSuccess, setMessageSuccess] = useState("w-[0%]");
  const [showJobModal, setShowJobModal] = useState(false);
  
  // Form state
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validation functions
  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (phone: string): string => {
    const phoneRegex = /^[\d+\-\s]{7,20}$/;
    if (!phone) return "Contact number is required";
    if (!phoneRegex.test(phone)) return "Enter a valid contact number";
    return "";
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return !value ? "Name is required" : "";
      case "email":
        return validateEmail(value);
      case "phone":
        return validatePhone(value);
      case "what_are_you_looking_for":
        return !value ? "Please specify what you are looking for" : "";
      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.keys(values).forEach(key => {
      if (key !== 'message') { // message is optional
        const error = validateField(key, values[key as keyof typeof values]);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handlePhoneChange = (value: string) => {
    setValues(prev => ({ ...prev, phone: value }));
    if (touched.phone) {
      const error = validatePhone(value);
      setErrors(prev => ({ ...prev, phone: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handlePhoneBlur = () => {
    setTouched(prev => ({ ...prev, phone: true }));
    const error = validatePhone(values.phone);
    setErrors(prev => ({ ...prev, phone: error }));
  };

  const checkForJobKeywords = (text: string): boolean => {
    if (!text) return false;
    const jobKeywords = ["job", "jobs", "career", "careers", "internship", "intern", "employment", "hire", "hiring", "position"];
    return jobKeywords.some(keyword =>
      text.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const onRecaptchaChange = (value: any) => {
    if (!value) {
      setErrorRecaptcha("Please verify the above checkbox");
    } else {
      setRecaptchaValue(value);
      setErrorRecaptcha("");
    }
  };

  const onRecaptchaExpired = () => {
    setRecaptchaValue("");
    setErrorRecaptcha("Please verify again the above checkbox.");
  };

  const handleCombinedSubmit = async (event: any): Promise<void> => {
    event.preventDefault();
    setMessage("");
    setBgColor("bg-[#1D92FB]");

    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    // Validate form
    const isValid = validateForm();

    // Check for job/internship keywords
    const isJobRelated = checkForJobKeywords(values.what_are_you_looking_for) || checkForJobKeywords(values.message);

    if (isJobRelated) {
      setShowJobModal(true);
      setUploading(false);
      return;
    }

    setUploading(true);

    if (!recaptchaValue) {
      setErrorRecaptcha("Please verify the above checkbox");
      setUploading(false);
      return;
    }

    if (!isValid) {
      setUploading(false);
      return;
    }

    try {
      setMessage("Submitting form...");
      setMessageSuccess("w-[10%]");

      await submitForm(
        "contact-form",
        {
          details: { "Form position": "Home page section" },
          fields: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            lookingFor: values.what_are_you_looking_for,
            message: values.message,
          },
          captchaToken: recaptchaValue,
        },
        { trackConversion: true }
      );

      window.open("https://calendly.com/adnanghaffar", "_blank");

      setValues(initialValues);
      setTouched({});
      setErrors({});
      recaptchaRef?.current?.reset();
      setRecaptchaValue("");
      setErrorRecaptcha("");
      setMessage("Form submitted successfully!");
      setMessageSuccess("w-[100%]");
    } catch (error) {
      setBgColor("bg-red-500");
      setMessage("Message not submitted!");
      setMessageSuccess("w-[100%]");
      console.error("Error:", error);
    } finally {
      setUploading(false);
      setTimeout(() => {
        setMessage("");
      }, 8000);
    }
  };

  return (
    <div
      className="flex justify-center items-center px-10 pt-6 pb-12 lg:text-2xl md:text-xl text-lg font-light text-black bg-white shadow-lg shadow-slate-500 rounded-[24px] max-md:px-5 border border-slate-300"
      id="contact-box"
    >
      <div className="flex flex-col mt-2 w-full max-w-[700px] max-md:max-w-full">
        <p className="md:text-2xl text-2xl text-left font-medium leading-[52px] max-md:max-w-full text-[#3C3C3C]">
          Need a Consultation?
        </p>
        <p className="text-lg font-medium text-left text-[#3C3C3C] mb-2 leading-[32px] max-md:max-w-full ">
          Drop us a line! We are here to answer your query 24/7.
        </p>
        <form onSubmit={handleCombinedSubmit}>
          <div className="">
            <input
              className="border-2 justify-center items-start px-4 py-3 whitespace-nowrap rounded-lg shadow-sm w-full text-black text-sm placeholder-black"
              placeholder={"Name"}
              aria-label="Name"
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
            <PhoneInput
              country={'us'}
              value={values.phone}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              inputClass="!w-full border-2 px-4 !py-3 !rounded-lg !shadow-sm !text-black !text-sm !placeholder-black"
              containerClass="!w-full"
              buttonClass="!bg-white !border-gray-300"
              specialLabel=""
              placeholder="Enter your phone number"
              inputProps={{ "aria-label": "Phone number" }}
            />
            {errors.phone && touched.phone ? (
              <p className="form-error">{errors.phone}</p>
            ) : null}
          </div>
          <div className="mt-4">
            <input
              className="border-2 justify-center items-start px-4 py-3 whitespace-nowrap rounded-lg shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black"
              placeholder={"Email"}
              aria-label="Email"
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
            <input
              className="border-2 justify-center items-start px-4 py-3 whitespace-nowrap rounded-lg shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black"
              placeholder={"What are you looking for?"}
              aria-label="What are you looking for?"
              name="what_are_you_looking_for"
              value={values.what_are_you_looking_for}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.what_are_you_looking_for && touched.what_are_you_looking_for ? (
              <p className="form-error">{errors.what_are_you_looking_for}</p>
            ) : null}
          </div>
          <div className="mt-4">
            <textarea
              className="border-2 justify-center items-start px-4 py-3 rounded-lg shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black resize-none break-words"
              placeholder={"Your Message"}
              aria-label="Your Message"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={4}
              cols={4}
            />
          </div>

          <DynamicRecaptcha
            recaptchaRef={recaptchaRef}
            onChange={onRecaptchaChange}
            onExpired={onRecaptchaExpired}
          />
          {errorRecaptcha && <p className="form-error">{errorRecaptcha}</p>}

          <button
            type="submit"
            disabled={uploading}
            className={`self-center mt-6 shadow-md text-base font-medium xl:text-1xl lg:text-xl text-center text-black max-md:mt-10 bg-[#F7E022] flex w-full justify-center items-center rounded-xl py-2 ${uploading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
          >
            {uploading ? (
              <span className="loader"></span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      {/* Job/Internship Modal */}
      {showJobModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Background overlay */}
          <div
            className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowJobModal(false)}
          />

          {/* Modal container */}
          <div className="fixed inset-0 z-[9999] overflow-y-auto flex items-center justify-center p-4 text-center">
            {/* Modal content */}
            <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl transition-all">
              <button
                onClick={() => setShowJobModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center space-y-4">
                <h3 className="text-2xl font-extrabold text-gray-800">
                  🚀 Looking for Career Opportunities?
                </h3>
                <p className="text-gray-600 text-xl">
                  We noticed you might be interested in job or internship opportunities.
                  We&apos;d love to have you on our team! Visit our Careers page to submit your resume and explore openings.
                </p>

                <div className="mt-6 flex justify-center gap-4">
                  <button
                    onClick={() => {
                      router.push("/career");
                      setShowJobModal(false);
                    }}
                    className="px-5 py-2.5 bg-[#1d92fb] text-white font-semibold text-lg rounded-lg shadow-md hover:from-blue-600 transition-transform transform hover:scale-105"
                  >
                    Go to Careers Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}