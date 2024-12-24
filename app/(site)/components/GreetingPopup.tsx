"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { popupSchema } from "../../schemas/index";
import { usePathname } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

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

  const currentPath = usePathname();
  const pageName = currentPath.split("/").pop() || "Home";

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik<FormValues>({
    initialValues,
    validationSchema: popupSchema,
    onSubmit: async () => {
      setMessage("");
      setMessageBgColor("bg-[#1D92FB]");

      if (Object.values(errors).length > 0) return;

      const formattedPageName = pageName
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("number", values.contact_number);
      formData.append("looking", values.looking);
      formData.append("subscribe", values.subscribe.toString());
      formData.append("pagename", formattedPageName);

      setUploading(true);
      setMessage("Submitting your response...");
      setProgressWidth("w-[10%]");

      try {
        const response = await fetch("/api/popupform", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({ event: "formSubmission", form: "contactForm" });

          setMessage("Your response has been successfully submitted!");
          setMessageBgColor("bg-green-500");
          setProgressWidth("w-[100%]");
          resetForm();

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
    },
  });

  useEffect(() => {
    async function fetchData() {
      const [popupData] = await getPopupData();
      setData(popupData);
    }
    fetchData();

    if (!localStorage.getItem("hasVisited")) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsAnimating(true), 300);
      }, 8000);
      return () => clearTimeout(timer);
    }
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
      className={`fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[1000] popup-overlay transition-all duration-700 ease-in-out ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      onClick={handleOutsideClick}
    >
      <div
        className={`greetings overflow-hidden gap-4 rounded-lg pl-3 md:pl-0 pr-3 pt-3 pb-3 bg-white flex flex-col sm:flex-row justify-center relative transform transition-all duration-700 ease-in-out ${isAnimating ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
      >
        {data?.image?.asset && (
          <div className="hidden sm:block w-[290px] md:w-[340px] h-full">
            <img
              loading="lazy"
              src={urlForImage(data.image.asset)}
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
            {data?.image?.asset && (
              <img
                loading="lazy"
                src={urlForImage(data.image.asset)}
                alt={data.image.alt}
                className="object-cover"
              />
            )}
          </div>
          <div className="px-5 py-2 flex flex-col items-center">
            {data?.icon?.asset && (
              <img
                loading="lazy"
                src={urlForImage(data.icon.asset)}
                alt={data.icon.alt}
                className="h-8 hidden sm:block"
              />
            )}
            <div className="text-lg font-base text-center text-black mb-4 mt-5">{data?.title}</div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[260px] md:w-[300px]">
              {/* Dynamically generate input fields except for "subscribe" */}
              {(["name", "email", "contact_number", "looking"] as Array<keyof Omit<FormValues, "subscribe">>).map((field) => (
                <input
                  key={field}
                  name={field}
                  value={values[field]} // Access value dynamically
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder={field === "looking" ? "What are you looking for?" : `Enter your ${field}`}
                  className={`text-sm px-2 py-1.5 shadow-md bg-white border rounded-md outline-none ${errors[field] && touched[field] ? "border-red-400" : "border-gray-400"
                    }`}
                />
              ))}

              {/* Separate handling for "subscribe" checkbox */}
              <label className="text-base normal-case cursor-pointer">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={values.subscribe} // Use "checked" for checkbox
                  onChange={handleChange}
                  className="mr-2"
                />
                Subscribe to our newsletter
              </label>

              <button
                type="submit"
                disabled={uploading}
                className={`text-base text-white bg-[#0A8FFC] hover:bg-[#1d92fb] shadow-sm rounded-md py-2 transition-colors ${uploading ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
              >
                Subscribe
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
