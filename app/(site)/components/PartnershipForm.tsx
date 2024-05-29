"use client";
import { useRef, useState } from "react";
import { useFormik } from "formik";
import { partnershipSchema } from "../../schemas/index";
import Select from "react-select";
import { City } from "country-state-city";
import ReCAPTCHA from "react-google-recaptcha";

const initialValues = {
  name: "",
  purpose: "",
  contact_number: "",
  email: "",
  country: "",
  city: "",
  program: "",
};

const purposeOptions = [
  { value: "Self", label: "Self" },
  { value: "Company", label: "Company" },
];

const countryOptions = [
  { value: "USA", label: "USA", countryCode: "US" },
  { value: "Canada", label: "Canada", countryCode: "CA" },
  { value: "New Zealand", label: "New Zealand", countryCode: "NZ" },
  { value: "UK", label: "UK", countryCode: "GB" },
  { value: "Australia", label: "Australia", countryCode: "AU" },
  { value: "Other", label: "Other" },
];

const programOptions = [
  { value: "Reseller Program", label: "Reseller Program" },
  { value: "Affiliate Program", label: "Affiliate Program" },
  { value: "White Label Program", label: "White Label Program" },
];

const PartnershipForm = () => {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [errorRecaptcha, setErrorRecaptcha] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState("");

  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [bgColor, setBgColor] = useState("bg-[#1D92FB]");
  const [messageSuccess, setMessageSuccess] = useState("w-[0%]");
  const [updatedCitiesArr, setUpdatedCitiesArr] = useState<any>([]);

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: partnershipSchema,
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

  const handleCombinedSubmit = async (event: any): Promise<void> => {
    handleSubmit(event);
    setMessage("");
    setBgColor("bg-[#1D92FB]");

    if (!recaptchaValue) {
      setErrorRecaptcha("Please verify the above checkbox");
      return;
    }

    if (!values.name.length || !values.email.length) {
      return;
    }
    if (errors.name || errors.email) {
      return;
    }

    setFieldValue("purpose", null);
    setFieldValue("country", null);
    setFieldValue("city", null);
    setFieldValue("program", null);

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("purpose", values.purpose);
      formData.append("number", values.contact_number);
      formData.append("email", values.email);
      formData.append("country", values.country);
      formData.append("city", values.city);
      formData.append("program", values.program);
      setUploading(true);
      setMessage("Submitting form...");

      setMessageSuccess("w-[10%]");
      const response = await fetch("/api/partnershipform", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
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

  const handleCityData = () => {
    const selectedCountry = countryOptions.filter(
      (country) => country.label == values.country
    );
    const countryCodeValue = selectedCountry[0]?.countryCode;
    if (countryCodeValue) {
      try {
        const citiesData = City.getCitiesOfCountry(countryCodeValue);
        setUpdatedCitiesArr(
          citiesData?.map((city) => ({
            label: city.name,
            value: city.name,
          }))
        );
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    } else {
      // console.log("Country not found");
    }
  };

  return (
    <div className="flex justify-center items-center px-16 py-12 lg:text-2xl md:text-xl text-lg font-light text-black bg-white shadow-lg shadow-slate-500 rounded-[36px] max-md:px-5 border border-slate-300">
      <div className="flex flex-col mt-3.5 w-full max-w-[746px] max-md:max-w-full">
        <h2 className="lg:text-4xl md:text-3xl text-l font-medium  text-center leading-[52px] max-md:max-w-full max-md:text-4xl w-full sm:w-[500px] lg:w-[570px]">
          Become a Partner
        </h2>
        <form onSubmit={handleCombinedSubmit}>
          <div className="mt-10">
            <input
              className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
              placeholder={"Full Name"}
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
              className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
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
              className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
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
            <Select
              placeholder="Self/Company"
              isClearable={true}
              isSearchable={false}
              name="purpose"
              value={purposeOptions.find(
                (option) => option.value === values.purpose
              )}
              onChange={(selectedOption) => {
                setFieldValue("purpose", selectedOption?.value);
              }}
              options={purposeOptions}
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "#f3f4f6",
                  border: "2px solid #e5e7eb",
                  boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    border: "2px solid black",
                  },
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  borderRadius: "0.75rem",
                  color: "#000",
                  fontSize: "0.875rem",
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "#000",
                }),
                option: (provided, state) => ({
                  ...provided,
                  fontSize: "14px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }),
              }}
            />
          </div>

          <div className="mt-4">
            <Select
              placeholder="I am located in : Country"
              isClearable={true}
              isSearchable={false}
              name="country"
              value={countryOptions.find(
                (option) => option.value === values.country
              )}
              onChange={(selectedOption) => {
                setFieldValue("country", selectedOption?.value);
                handleCityData();
                if (selectedOption?.value === "Other") {
                  setUpdatedCitiesArr([]);
                }
              }}
              options={countryOptions}
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "#f3f4f6",
                  border: "2px solid #e5e7eb",
                  boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    border: "2px solid black",
                  },
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  borderRadius: "0.75rem",
                  color: "#000",
                  fontSize: "0.875rem",
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "#000",
                }),
                option: (provided, state) => ({
                  ...provided,
                  fontSize: "14px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }),
              }}
            />
          </div>

          <div className="mt-4">
            {values.country === "Other" ? (
              <input
                className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
                placeholder={"Please enter your city name"}
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ) : (
              <Select
                placeholder="City / State"
                isClearable={true}
                isSearchable={true}
                name="city"
                value={updatedCitiesArr.find(
                  (option: any) => option === values.city
                )}
                onChange={(selectedOption) => {
                  setFieldValue("city", selectedOption?.value);
                  handleCityData();
                }}
                onFocus={handleCityData}
                options={updatedCitiesArr}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    backgroundColor: "#f3f4f6",
                    border: "2px solid #e5e7eb",
                    boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      border: "2px solid black",
                    },
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                    borderRadius: "0.75rem",
                    color: "#000",
                    fontSize: "0.875rem",
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: "#000",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    fontSize: "14px",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                  }),
                }}
              />
            )}
          </div>

          <div className="my-4">
            <Select
              placeholder="I am interested in"
              isClearable={true}
              isSearchable={false}
              name="program"
              value={programOptions.find(
                (option) => option.value === values.program
              )}
              onChange={(selectedOption) => {
                setFieldValue("program", selectedOption?.value);
              }}
              options={programOptions}
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "#f3f4f6",
                  border: "2px solid #e5e7eb",
                  boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    border: "2px solid black",
                  },
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  borderRadius: "0.75rem",
                  color: "#000",
                  fontSize: "0.875rem",
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "#000",
                }),
                option: (provided, state) => ({
                  ...provided,
                  fontSize: "14px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }),
              }}
            />
          </div>

          <ReCAPTCHA
            sitekey="6LcEiOkpAAAAADLW7X7N2yvpY01uLPXb0GbeDD0Q"
            ref={recaptchaRef}
            onChange={onRecaptchaChange}
            onExpired={onRecaptchaExpired}
          />
          {errorRecaptcha && <div className="form-error">{errorRecaptcha}</div>}

          <button
            type="submit"
            disabled={uploading}
            className={`self-center mt-6 shadow-md text-base xl:text-1xl lg:text-xl text-center text-black max-md:mt-10 bg-[#F7E022] flex w-full justify-center rounded-xl py-2 ${
              uploading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            Submit
          </button>
        </form>
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
  );
};

export default PartnershipForm;
