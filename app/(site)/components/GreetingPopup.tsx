"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { popupSchema } from "../../schemas/index";
import { usePathname } from "next/navigation";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

async function getData() {
  const query = `*[_type == 'popup'] | order(_updatedAt desc)`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const initialValues = {
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
    validationSchema: popupSchema,
    onSubmit: (values, action) => {
      // action.resetForm();
    },
  });

  const pageName = currentPath.split("/").pop();

  const handleCombinedSubmit = async (event: any): Promise<void> => {
    handleSubmit(event);
    setMessage("");
    setBgColor("bg-[#1D92FB]");

    if (
      !values.name.length ||
      !values.email.length ||
      !values.contact_number.length
    ) {
      return;
    }
    if (errors.name || errors.contact_number || errors.email) {
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
      formData.append("subscribe", values.subscribe ? "true" : "false");
      formData.append("pagename", actuallPageName || "Home");
      setUploading(true);
      setMessage("Submitting your response...");

      setMessageSuccess("w-[10%]");
      const response = await fetch("/api/popupform", {
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

        setTimeout(() => {
          closePopup();
        }, 4000);

        setBgColor("bg-green-500");
        setMessage("Your response has been successfully submitted!");
        setMessageSuccess("w-[100%]");
        resetForm();
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
    async function fetchData() {
      const fetchedData = await getData();
      setData(fetchedData[0]);
    }
    fetchData();

    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsVisible(true);

        setTimeout(() => {
          setIsAnimating(true);
        }, 300);
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

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).classList.contains("popup-overlay")) {
      closePopup();
    }
  };

  return isVisible ? (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[1000] popup-overlay transition-all duration-700 ease-in-out ${
        isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
      onClick={handleClickOutside}
    >
      <div
        className={`overflow-scroll sm:overflow-hidden gap-4 rounded-3xl p-2 sm:p-3 flex flex-col sm:flex-row justify-center relative transform transition-all duration-700 ease-in-out ${
          isAnimating ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{
          backgroundImage: `url("/greetingPopup-bg.png")`,
        }}
      >
        <div className="w-[290px] md:w-[340px] z-30 hidden sm:block">
          {data?.image?.asset && (
            <img
              loading="lazy"
              src={urlForImage(data?.image?.asset)}
              className="object-cover"
              alt={data?.image?.alt}
              width={"340"}
              height={"391"}
            />
          )}
        </div>

        <div className="flex relative flex-col justify-center text-3xl font-light capitalize text-neutral-600 text-opacity-90">
          <button
            className="absolute top-[2px] sm:top-1 right-2 sm:right-4 text-4xl font-bold text-gray-800 transition-transform transform hover:rotate-90 z-10 duration-500 ease-in-out"
            onClick={closePopup}
          >
            &times;
          </button>
          <div className="w-[230px] z-30 block sm:hidden pt-4 mx-auto">
            {data?.image?.asset && (
              <img
                loading="lazy"
                src={urlForImage(data?.image?.asset)}
                className="object-cover"
                alt={data?.image?.alt}
                width={"230"}
                height={"265"}
              />
            )}
          </div>

          <div className="flex relative flex-col gap-4 items-center">
            {data?.icon?.asset && (
              <img
                loading="lazy"
                src={urlForImage(data?.icon?.asset)}
                className="w-[120px] md:w-[174px] hidden sm:block"
                alt={data?.icon?.alt}
                width={"174"}
                height={"46"}
              />
            )}
            <div className="text-xl md:text-2xl text-center text-black mt-2 sm:mt-0">
              {data?.title}
            </div>
            <div>
              <form
                onSubmit={handleCombinedSubmit}
                className="flex flex-col gap-3 w-[260px] md:w-[300px]"
              >
                <input
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Full Name"
                  className={`text-base px-2 py-[2px] md:py-1 bg-white border-2 rounded-md outline-none ${
                    errors.name && touched.name
                      ? "border-red-400"
                      : "border-gray-400"
                  }`}
                />
                <input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Enter Your Email Address"
                  className={`text-base px-2 py-[2px] md:py-1 bg-white border-2 rounded-md outline-none ${
                    errors.email && touched.email
                      ? "border-red-400"
                      : "border-gray-400"
                  }`}
                />
                <input
                  name="contact_number"
                  value={values.contact_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Contact Number"
                  className={`text-base px-2 py-[2px] md:py-1 bg-white border-2 rounded-md outline-none ${
                    errors.contact_number && touched.contact_number
                      ? "border-red-400"
                      : "border-gray-400"
                  }`}
                />
                <input
                  name="looking"
                  value={values.looking}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="What are you looking for ?"
                  className="text-base px-2 py-[2px] md:py-1 bg-white border-2 rounded-md outline-none border-gray-400"
                />

                <label className="text-base normal-case cursor-pointer">
                  <input
                    type="checkbox"
                    name="subscribe"
                    checked={values.subscribe}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="What are you looking for ?"
                    className="mr-2"
                  />
                  Subscribe to our newsletter
                </label>

                <button
                  type="submit"
                  disabled={uploading}
                  className={`text-base text-center text-white bg-[#007ae7] hover:bg-[#1d92fb] shadow-sm rounded-md py-1 transition-colors delay-100 ease-in-out ${
                    uploading ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
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
  ) : null;
};

export default GreetingPopup;
