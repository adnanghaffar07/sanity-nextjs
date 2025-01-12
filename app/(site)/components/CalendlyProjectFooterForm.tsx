"use client";

import { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { usePathname, useRouter } from "next/navigation"; // Import useRouter hook
import ReCAPTCHA from "react-google-recaptcha";
import dynamic from "next/dynamic";

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
  const router = useRouter(); // Initialize the useRouter hook
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [errorRecaptcha, setErrorRecaptcha] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [isRecaptchaVisible, setIsRecaptchaVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false); // State to manage the loading indicator
  const [bgColor, setBgColor] = useState("bg-[#1D92FB]");
  const [messageSuccess, setMessageSuccess] = useState("w-[0%]");

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema, // Apply the validation schema
    onSubmit: (values, action) => {
      // action.resetForm();
    },
  });

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

  // console.log("Current Path:", currentPath);
  // console.log("Page Name:", pageName);

  const handleCombinedSubmit = async (event: any): Promise<void> => {
    event.preventDefault(); // Prevent default form submission
    handleSubmit(event);
    setMessage("");
    setBgColor("bg-[#1D92FB]");
    setUploading(true); // Start loading state

    if (!recaptchaValue) {
      setErrorRecaptcha("Please verify the above checkbox");
      setUploading(false); // Stop loading state if there's an error
      return;
    }

    if (!values.name.length || !values.email.length || !values.contact_number.length || !values.looking.length) {
      setUploading(false); // Stop loading state if fields are empty
      return;
    }

    if (errors.name || errors.contact_number || errors.email || errors.looking) {
      setUploading(false); // Stop loading state if there are validation errors
      return;
    }

    const actuallPageName =
      pageName === ""
        ? "Home"
        : pageName
            ?.split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    // Revalidate the email before submitting
    if (!Yup.string().email().isValidSync(values.email)) {
      setBgColor("bg-red-500");
      setMessage("Please enter a valid email address.");
      setMessageSuccess("w-[100%]");
      setUploading(false); // Stop loading state
      return;
    }

    try {
      // Sending data to Email
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
      
      // First API call (Email Submission)
      const emailResponse = await fetch("/api/projectdiscussionform", {
        method: "POST",
        body: formData,
      });
    
      if (!emailResponse.ok) {
        throw new Error("Failed to send email.");
      }
    
      // Second API call (Sanity Submission)
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
          page_name: pageName,
        }),
      });
    
      const data = await sanityResponse.json();
      // console.log("Sanity API Response:", data);
    
      if (sanityResponse.ok) {
        // Push event to dataLayer for GTM
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "formSubmission",
          form: "contactForm",
        });
    
        // Redirect to Thank You page
        router.push("/thankyou");
    
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
      setUploading(false); // Stop loading state
      setTimeout(() => {
        setMessage("");
      }, 8000);
    }
  }
    

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
      className="flex justify-center items-center px-10 pt-6 pb-6 lg:text-2xl md:text-xl text-lg font-light text-black bg-white shadow-lg shadow-slate-500 rounded-[24px] max-md:px-5 border border-slate-300"
      id="contact-box"
    >
      <div className="flex flex-col mt-2 w-full max-w-[700px] max-md:max-w-full">
        <h3 className="text-2xl md:text-3xl text-left font-bold leading-[52px] mb-4 text-[#3C3C3C]">
          Ready to innovate your business?
        </h3>
        <p className="text-lg text-left text-[#3C3C3C] mb-10 leading-[32px] max-w-full">
          We are here! Let’s kick-off our journey to success!
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
            <input
              className="border-2 justify-center items-start px-4 py-3 whitespace-nowrap rounded-lg shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black"
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
            className={`self-center mt-6 shadow-md text-base xl:text-1xl lg:text-xl text-center text-black max-md:mt-10 bg-[#F7E022] flex w-full justify-center items-center rounded-xl py-2 ${uploading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
          >
            {uploading ? (
              <span className="loader"></span> // You can use a spinner class here
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
