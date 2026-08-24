"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import dynamic from "next/dynamic";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import PhoneInput from 'react-phone-input-2';
// @ts-ignore
import 'react-phone-input-2/lib/style.css';

const DynamicRecaptcha = dynamic(() => import("./RecaptchaComponent"), {
  ssr: false,
});

async function getPopupData() {
  try {
    const query = `*[_type == 'popup'] | order(_updatedAt desc)`;
    return await client.fetch(query) || [];
  } catch (error) {
    console.error("Error fetching popup data:", error);
    return [];
  }
}

interface FormValues {
  name: string;
  email: string;
  contact_number: string;
  looking: string;
  subscribe: boolean;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  contact_number: "",
  looking: "",
  subscribe: true,
};

const GreetingPopup: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [messageBgColor, setMessageBgColor] = useState("bg-[#1D92FB]");
  const [progressWidth, setProgressWidth] = useState("w-[0%]");
  const recaptchaRef = useRef<TurnstileInstance | undefined>(undefined);
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [errorRecaptcha, setErrorRecaptcha] = useState("");
  
  // Form state
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});

  const currentPath = usePathname();
  const pageName = currentPath.split("/").pop() || "Home";

  // Validation functions
  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validateContactNumber = (number: string): string => {
    if (!number) return "Contact number is required";
    // Remove the country code part for validation (after the + and country code)
    const numberWithoutCountry = number.replace(/^\+\d+\s*/, '');
    if (numberWithoutCountry.length < 5) return "Enter a valid contact number";
    return "";
  };

  const validateField = (name: keyof FormValues, value: any): string => {
    switch (name) {
      case "name":
        return !value ? "Name is required" : "";
      case "email":
        return validateEmail(value);
      case "contact_number":
        return validateContactNumber(value);
      case "looking":
        return !value ? "Please specify what you are looking for" : "";
      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormValues, string>> = {};
    let isValid = true;

    (["name", "email", "contact_number", "looking"] as Array<keyof FormValues>).forEach(field => {
      const error = validateField(field, values[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    
    setValues(prev => ({ ...prev, [name]: fieldValue }));
    
    if (touched[name as keyof FormValues]) {
      const error = validateField(name as keyof FormValues, fieldValue);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handlePhoneChange = (value: string, country: any) => {
    // value comes as "+1234567890" format
    setValues(prev => ({ ...prev, contact_number: value }));
    if (touched.contact_number) {
      const error = validateContactNumber(value);
      setErrors(prev => ({ ...prev, contact_number: error }));
    }
  };

  const handlePhoneBlur = () => {
    setTouched(prev => ({ ...prev, contact_number: true }));
    const error = validateContactNumber(values.contact_number);
    setErrors(prev => ({ ...prev, contact_number: error }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormValues, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const onRecaptchaChange = (value: string) => {
    if (!value) {
      setErrorRecaptcha("Please verify the checkbox above");
    } else {
      setRecaptchaValue(value);
      setErrorRecaptcha("");
    }
  };

  const onRecaptchaExpired = () => {
    setRecaptchaValue("");
    setErrorRecaptcha("Verification expired. Please verify again.");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setMessageBgColor("bg-[#1D92FB]");

    // Mark all fields as touched
    const allTouched: Partial<Record<keyof FormValues, boolean>> = {};
    (["name", "email", "contact_number", "looking"] as Array<keyof FormValues>).forEach(field => {
      allTouched[field] = true;
    });
    setTouched(allTouched);

    // Validate form
    const isValid = validateForm();
    
    if (!isValid) return;

    if (!recaptchaValue) {
      setErrorRecaptcha("Please verify the checkbox above");
      return;
    }

    const formattedPageName = pageName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("number", values.contact_number);
    formData.append("looking", values.looking);
    formData.append("message", values.subscribe ? "Newsletter subscription via popup" : "Popup form submission");
    formData.append("subscribe", values.subscribe.toString());
    formData.append("pagename", formattedPageName);
    formData.append("recaptcha_value", recaptchaValue);
    formData.append("page_url", typeof window !== "undefined" ? window.location.href : "");

    setUploading(true);
    setMessage("Submitting your response...");
    setProgressWidth("w-[10%]");

    try {
      const response = await fetch("/api/projectdiscussionform", {
        method: "POST",
        body: formData,
      });

      // Send lead to GoHighLevel CRM with correct field mapping
      try {
        const ghlResponse = await fetch("/api/lead", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.contact_number, // Now comes with country code like "+1234567890"
            what_are_you_looking_for: values.looking,
            message: values.subscribe 
              ? "Popup form submission (newsletter subscribed)" 
              : "Popup form submission",
          }),
        });
        const ghlData = await ghlResponse.json();
        if (ghlResponse.ok) {
          console.log("Lead successfully sent to GoHighLevel:", ghlData);
        } else {
          console.warn("GoHighLevel API warning:", ghlData);
        }
      } catch (ghlError) {
        console.warn("GoHighLevel submission warning:", ghlError);
      }

      if (response.ok) {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({ event: "formSubmission", form: "contactForm" });

        setMessage("Your response has been successfully submitted!");
        setMessageBgColor("bg-green-500");
        setProgressWidth("w-[100%]");
        
        // Reset form
        setValues(initialValues);
        setTouched({});
        setErrors({});
        recaptchaRef.current?.reset();
        setRecaptchaValue("");
        setErrorRecaptcha("");

        setTimeout(closePopup, 4000);
      } else {
        setMessage("Message not submitted!");
        setMessageBgColor("bg-red-500");
        setProgressWidth("w-[100%]");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage("Message not submitted!");
      setMessageBgColor("bg-red-500");
      setProgressWidth("w-[100%]");
    } finally {
      setUploading(false);
      setTimeout(() => setMessage(""), 8000);
    }
  };

  useEffect(() => {
    let cancelled = false;
    let showTimer: number | undefined;
    let animTimer: number | undefined;

    async function init() {
      const [popupData] = await getPopupData();
      if (cancelled) return;
      setData(popupData);

      if (!localStorage.getItem("hasVisited")) {
        showTimer = window.setTimeout(() => {
          if (cancelled) return;
          setIsVisible(true);
          animTimer = window.setTimeout(() => setIsAnimating(true), 300);
        }, 300);
      }
    }

    void init();

    return () => {
      cancelled = true;
      if (showTimer !== undefined) window.clearTimeout(showTimer);
      if (animTimer !== undefined) window.clearTimeout(animTimer);
    };
  }, []);

  const closePopup = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("hasVisited", "true");
    }, 500);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).classList.contains("popup-overlay")) {
      closePopup();
    }
  };

  return isVisible ? (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[1000] popup-overlay transition-all duration-700 ease-in-out ${
        isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
      onClick={handleOutsideClick}
    >
      <div
        className={`greetings overflow-hidden gap-4 rounded-lg pl-3 md:pl-0 pr-3 pt-3 pb-3 bg-white flex flex-col sm:flex-row justify-center relative transform transition-all duration-700 ease-in-out ${
          isAnimating ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {data?.image && (
          <div className="hidden sm:block w-[290px] md:w-[340px] h-full">
            <img
              loading="lazy"
              src={urlForImage(data.image).toString()}
              alt={data.image.alt}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <button
          className="absolute top-[12px] sm:top-1 p-4 md:p-2 right-1 sm:right-4 text-2xl font-light text-gray-800 transition-transform hover:rotate-90 z-10 duration-500 ease-in-out"
          onClick={closePopup}
        >
          &times;
        </button>
        <div className="flex border-2 border-gray-300 rounded-lg p-2 flex-col justify-center text-neutral-600 text-opacity-90">
          <div className="block sm:hidden w-[230px] mx-auto pt-4">
            {data?.image && (
              <img
                loading="lazy"
                src={urlForImage(data.image).toString()}
                alt={data.image.alt}
                className="object-cover"
              />
            )}
          </div>
          <div className="px-5 py-2 flex flex-col items-center">
            {data?.icon && (
              <img
                loading="lazy"
                src={urlForImage(data.icon).toString()}
                alt={data.icon.alt}
                className="h-8 hidden sm:block"
              />
            )}
            <div className="text-lg font-base text-center text-black mb-4 mt-5">{data?.title}</div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[260px] md:w-[300px]">
              {/* Name Field */}
              <div>
                <input
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Enter your name"
                  className={`text-sm px-2 py-1.5 shadow-md bg-white border rounded-md outline-none w-full ${
                    errors.name && touched.name ? "border-red-400" : "border-gray-400"
                  }`}
                />
                {errors.name && touched.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  placeholder="Enter your email"
                  className={`text-sm px-2 py-1.5 shadow-md bg-white border rounded-md outline-none w-full ${
                    errors.email && touched.email ? "border-red-400" : "border-gray-400"
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Field with Country Code Selector */}
              <div>
                <PhoneInput
                  country={'us'} // Default country (Pakistan)
                  value={values.contact_number}
                  onChange={handlePhoneChange}
                  onBlur={handlePhoneBlur}
                  inputClass={`!w-full !text-sm !py-1.5 !px-2 !shadow-md !bg-white !border rounded-md outline-none ${
                    errors.contact_number && touched.contact_number ? "!border-red-400" : "!border-gray-400"
                  }`}
                  containerClass="!w-full"
                  buttonClass="!bg-white !border !border-gray-300 !rounded-l-md"
                  dropdownClass="!z-50"
                  enableSearch={true}
                  searchPlaceholder="Search country"
                  preferredCountries={['pk', 'us', 'gb', 'ae', 'sa', 'in']}
                  placeholder="Enter phone number"
                />
                {errors.contact_number && touched.contact_number && (
                  <p className="text-red-500 text-xs mt-1">{errors.contact_number}</p>
                )}
              </div>

              {/* Looking For Field */}
              <div>
                <input
                  name="looking"
                  value={values.looking}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="What are you looking for?"
                  className={`text-sm px-2 py-1.5 shadow-md bg-white border rounded-md outline-none w-full ${
                    errors.looking && touched.looking ? "border-red-400" : "border-gray-400"
                  }`}
                />
                {errors.looking && touched.looking && (
                  <p className="text-red-500 text-xs mt-1">{errors.looking}</p>
                )}
              </div>

              <label className="text-base normal-case cursor-pointer">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={values.subscribe}
                  onChange={handleChange}
                  className="mr-2"
                />
                Subscribe to our newsletter
              </label>

              <DynamicRecaptcha
                recaptchaRef={recaptchaRef}
                onChange={onRecaptchaChange}
                onExpired={onRecaptchaExpired}
              />
              {errorRecaptcha && (
                <p className="text-red-500 text-xs">{errorRecaptcha}</p>
              )}

              <button
                type="submit"
                disabled={uploading}
                className={`text-base text-white bg-[#0A8FFC] hover:bg-[#1d92fb] shadow-sm rounded-md py-2 transition-colors ${
                  uploading ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {uploading ? "Submitting..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {message && (
        <div
          className={`fixed top-14 lg:top-5 right-5 ${messageBgColor} py-2 px-4 rounded-lg shadow-lg z-50 w-[270px] sm:w-[450px]`}
        >
          <div className={`h-1 bg-white mb-2 transition-all ${progressWidth}`}></div>
          <p className="text-xs text-white sm:text-base">{message}</p>
        </div>
      )}
    </div>
  ) : null;
};

export default GreetingPopup;