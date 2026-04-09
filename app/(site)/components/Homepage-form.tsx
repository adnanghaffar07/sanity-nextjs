"use client";

import { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePathname, useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import dynamic from "next/dynamic";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const DynamicRecaptcha = dynamic(() => import("./RecaptchaComponent"), {
  ssr: false,
});

// Define the validation schema using Yup
const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  contact_number: Yup.string()
    .matches(/^[\d+\-\s]{7,20}$/, "Enter a valid contact number.")
    .required("Contact number is required"),
  email: Yup.string()
    .email("Email must be a valid email")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address."
    )
    .required("Email is required"),
  looking: Yup.string().required("Please specify what you are looking for"),
  message: Yup.string(),
});

const initialValues = {
  name: "",
  contact_number: "",
  looking: "",
  email: "",
  message: "",
};

export default function HomePageForm() {
  const router = useRouter();
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [errorRecaptcha, setErrorRecaptcha] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [isRecaptchaVisible, setIsRecaptchaVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [bgColor, setBgColor] = useState("bg-[#1D92FB]");
  const [messageSuccess, setMessageSuccess] = useState("w-[0%]");
  const [showJobModal, setShowJobModal] = useState(false);

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    resetForm,
    setFieldValue, // ✅ Add this
    setFieldTouched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: (values, action) => {
      //action.resetForm();
    },
  });

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

  const currentPath = usePathname();
  const pageName = currentPath ? currentPath.split("/").pop() || "home" : "home";

  const handleCombinedSubmit = async (event: any): Promise<void> => {
    event.preventDefault();
    handleSubmit(event);
    setMessage("");
    setBgColor("bg-[#1D92FB]");

    // Check for job/internship keywords
    const isJobRelated = checkForJobKeywords(values.looking) || checkForJobKeywords(values.message);

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

    if (!values.name.length || !values.email.length || !values.contact_number.length || !values.looking.length) {
      setUploading(false);
      return;
    }

    if (errors.name || errors.contact_number || errors.email || errors.looking) {
      setUploading(false);
      return;
    }

    const actuallPageName =
      pageName === ""
        ? "Home"
        : pageName
          ?.split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

    if (!Yup.string().email().isValidSync(values.email)) {
      setBgColor("bg-red-500");
      setMessage("Please enter a valid email address.");
      setMessageSuccess("w-[100%]");
      setUploading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("number", values.contact_number);
      formData.append("looking", values.looking);
      formData.append("message", values.message);
      formData.append("pagename", actuallPageName || "Home");
      setUploading(true);
      setMessage("Submitting form...");
      setMessageSuccess("w-[10%]");

      const emailResponse = await fetch("/api/projectdiscussionform", {
        method: "POST",
        body: formData,
      });

      if (!emailResponse.ok) {
        throw new Error("Failed to send email.");
      }

      const sanityResponse = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          contact_number: values.contact_number,
          looking: values.looking,
          message: values.message,
          recaptcha_value: recaptchaValue,

        }),
      });

      const data = await sanityResponse.json();

      // Send lead to GoHighLevel CRM
      try {
        const ghlResponse = await fetch("/api/lead", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.contact_number,
            what_are_you_looking_for: values.looking,
            message: values.message,
          }),
        });

        const ghlData = await ghlResponse.json();

        if (ghlResponse.ok) {
          console.log("Lead successfully sent to GoHighLevel:", ghlData);
        } else {
          console.warn("GoHighLevel API warning:", ghlData);
          // Don't fail the entire form submission if GHL fails
        }
      } catch (ghlError) {
        console.warn("GoHighLevel submission warning:", ghlError);
        // Don't fail the entire form submission if GHL has issues
      }

      if (sanityResponse.ok) {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "formSubmission",
          form: "contactForm",
        });

        // Open meeting page in a new tab for real clients
        window.open("https://calendly.com/adnanghaffar", "_blank");

        resetForm();
        recaptchaRef?.current?.reset();
        setRecaptchaValue("");
        setErrorRecaptcha("");
        setMessage("Form submitted successfully!");
        setMessageSuccess("w-[100%]");
      } else {
        setMessage("Message not submitted!");
        setMessageSuccess("w-[100%]");
        setBgColor("bg-red-500");
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
      }, 8000);
    }
  };


  useEffect(() => {
    const formElement = document.getElementById("contact-box");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRecaptchaVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (formElement) {
      observer.observe(formElement);
    }

    return () => {
      if (formElement) {
        observer.unobserve(formElement);
      }
    };
  }, []);

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
              className="border-2 justify-center items-start px-4 py-3 whitespace-nowrap rounded-lg shadow-sm  w-full text-black text-sm placeholder-black"
              placeholder={"Name"}
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
              value={values.contact_number}
              onChange={(value) => setFieldValue('contact_number', value)}
              onBlur={() => setFieldTouched('contact_number', true)} // ✅ manually mark as touched
              inputClass="!w-full border-2 px-4 !py-3 !rounded-lg !shadow-sm !text-black !text-sm !placeholder-black"
              containerClass="!w-full"
              buttonClass="!bg-white !border-gray-300"
              specialLabel=""
              placeholder="Enter your phone number"

            />
            {errors.contact_number && touched.contact_number ? (
              <p className="form-error">{errors.contact_number}</p>
            ) : null}
          </div>
          <div className="mt-4">
            <input
              className="border-2 justify-center items-start px-4 py-3 whitespace-nowrap rounded-lg shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black"
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
            <input
              className="border-2 justify-center items-start px-4 py-3 whitespace-nowrap rounded-lg shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black"
              placeholder={"What are you looking for?"}
              name="looking"
              value={values.looking}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.looking && touched.looking ? (
              <p className="form-error">{errors.looking}</p>
            ) : null}
          </div>
          <div className="mt-4">
            <textarea
              className="border-2 justify-center items-start px-4 py-3 rounded-lg shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black resize-none  break-words"
              placeholder={"Your Message"}
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={4}
              cols={4}
            />
          </div>

          {isRecaptchaVisible && (
            <DynamicRecaptcha
              recaptchaRef={recaptchaRef}
              onChange={onRecaptchaChange}
              onExpired={onRecaptchaExpired}
            />
          )}
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

      {/* // Replace your current modal implementation with this: */}
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