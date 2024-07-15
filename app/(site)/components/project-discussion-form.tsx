"use client";

import { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import { contactSchema } from "../../schemas/index";
import { usePathname } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import dynamic from "next/dynamic";
const DynamicRecaptcha = dynamic(() => import("./RecaptchaComponent"), {
  ssr: false,
});

const initialValues = {
  name: "",
  contact_number: "",
  looking: "",
  email: "",
  message: "",
};

export default function ProjectDiscussionContainer() {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [errorRecaptcha, setErrorRecaptcha] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [isRecaptchaVisible, setIsRecaptchaVisible] = useState(false);

  const currentPath = usePathname();
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
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
    validationSchema: contactSchema,
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

  const pageName = currentPath.split("/").pop();

  const handleCombinedSubmit = async (event: any): Promise<void> => {
    handleSubmit(event);
    setMessage("");
    setBgColor("bg-[#1D92FB]");

    if (!recaptchaValue) {
      setErrorRecaptcha("Please verify the above checkbox");
      return;
    }
    if (
      !values.name.length ||
      !values.email.length ||
      !values.contact_number.length ||
      !values.looking.length
    ) {
      return;
    }
    if (
      errors.name ||
      errors.contact_number ||
      errors.email ||
      errors.looking
    ) {
      return;
    }

    const actuallPageName =
      pageName === ""
        ? "Home"
        : pageName
          ?.split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

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
      const response = await fetch("/api/projectdiscussionform", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Push event to dataLayer for GTM
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "formSubmission",
          form: "contactForm",
        });

        setBgColor("bg-green-500");
        setMessage("Your Message has been successfully submitted!");
        setMessageSuccess("w-[100%]");
        resetForm();
        recaptchaRef?.current?.reset();
        setRecaptchaValue("");
        setErrorRecaptcha("");
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
    <div className="max-w-7xl mx-auto relative flex items-center justify-center">
      <img
        className="relative w-full h-full object-cover pl-20 hidden sm:block"
        src="Form.png"
        alt=""
      />

      <div className="absolute top-1/5 md:left-32 lg:left-40 z-20  hidden sm:block">
        <h3 className="lg:text-5xl md:text-3xl text-lg font-medium leading-[56px] text-white">
          Let's have a Project<br /> Discussion
        </h3>
        <div className="mt-10 text-white text-xl">
          Let&rsquo;s embark on a journey of innovation <br />
          and excellence together.
        </div>
      </div>

      <div className="absolute right-auto md:right-20  my-auto lg:bottom-16 md:-bottom-8 z-10 flex flex-row justify-end items-end px-8 pb-12 lg:text-2xl md:text-xl text-lg font-light text-black bg-white shadow-lg shadow-slate-500 rounded-[36px] max-md:px-5 border border-slate-300" id="contact-box">
        <div className="flex flex-col mt-3.5 w-[340px] h-full max-w-full">
          <h3 className="text-4xl text-center font-semibold leading-[46px] text-black block md:hidden">
            Let's have a Project Discussion
          </h3>

          <form onSubmit={handleCombinedSubmit}>
            <div className="mt-10">
              <input
                className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black"
                placeholder="Name"
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
                className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black"
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
                className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm  max-md:px-5 w-full text-black text-sm placeholder-black"
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
                className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black"
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
                className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm max-md:px-5 w-full text-black text-sm placeholder-black resize-none"
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
              className={`self-center mt-6 shadow-md text-base xl:text-1xl lg:text-xl text-center text-black max-md:mt-10 bg-[#F7E022] flex w-full justify-center rounded-xl py-2 ${uploading ? "cursor-not-allowed" : "cursor-pointer"
                }`}
            >
              Submit
            </button>
          </form>
        </div>

        {message && (
          <div
            className={`fixed top-14 lg:top-5 right-5 ${bgColor} py-[10px] px-[20px] rounded-lg shadow-lg z-50 w-[270px] sm:w-[450px]`}
          >
            <div
              className={`h-1 bg-white mb-2 transition-all duration-500 ${messageSuccess}`}
            ></div>
            <p className="message text-xs sm:text-base">{message}</p>
          </div>
        )}
      </div>
    </div>


  );
}
