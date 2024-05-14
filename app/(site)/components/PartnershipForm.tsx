"use client";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { partnershipSchema } from "../../schemas/index";
import Select from "react-select";

const initialValues = {
  name: "",
  purpose: "",
  contact_number: "",
  email: "",
  country: "",
  city: "",
  program: "",
};

// const citiesData = {
//   usa: [
//     "Albuquerque",
//     "Anaheim",
//     "Anchorage",
//     "Arlington",
//     "Atlanta",
//     "Aurora",
//     "Austin",
//     "Bakersfield",
//     "Baltimore",
//     "Baton Rouge",
//     "Birmingham",
//     "Boston",
//     "Buffalo",
//     "Charlotte",
//     "Chicago",
//     "Cincinnati",
//     "Cleveland",
//     "Colorado Springs",
//     "Columbus",
//     "Corpus Christi",
//     "Dallas",
//     "Denver",
//     "Detroit",
//     "El Paso",
//     "Fort Worth",
//     "Fresno",
//     "Honolulu",
//     "Houston",
//     "Indianapolis",
//     "Jacksonville",
//     "Kansas City",
//     "Las Vegas",
//     "Lexington",
//     "Lincoln",
//     "Long Beach",
//     "Los Angeles",
//     "Louisville",
//     "Memphis",
//     "Mesa",
//     "Miami",
//     "Milwaukee",
//     "Minneapolis",
//     "Nashville",
//     "New Orleans",
//     "New York",
//     "Oakland",
//     "Oklahoma City",
//     "Omaha",
//     "Orlando",
//     "Philadelphia",
//     "Phoenix",
//     "Pittsburgh",
//     "Portland",
//     "Raleigh",
//     "Riverside",
//     "Sacramento",
//     "Saint Louis",
//     "Saint Paul",
//     "Salt Lake City",
//     "San Antonio",
//     "San Diego",
//     "San Francisco",
//     "San Jose",
//     "Santa Ana",
//     "Seattle",
//     "Tampa",
//     "Toledo",
//     "Tucson",
//     "Tulsa",
//     "Virginia Beach",
//     "Washington",
//     "Wichita",
//   ],
//   canada: [
//     "Calgary",
//     "Edmonton",
//     "Toronto",
//     "Vancouver",
//     "Ottawa",
//     "Montreal",
//     "Winnipeg",
//     "Mississauga",
//     "Brampton",
//     "Hamilton",
//     "London",
//     "Markham",
//     "Vaughan",
//     "Surrey",
//     "Kitchener",
//     "Windsor",
//     "Richmond",
//     "Regina",
//     "Burnaby",
//     "Oshawa",
//     "Saskatoon",
//     "Kelowna",
//     "Barrie",
//     "Sherbrooke",
//     "Guelph",
//   ],
//   newzealand: [
//     "Auckland",
//     "Christchurch",
//     "Wellington",
//     "Hamilton",
//     "Tauranga",
//     "Dunedin",
//     "Palmerston North",
//     "Napier",
//     "Hastings",
//     "Nelson",
//     "Rotorua",
//     "New Plymouth",
//     "Whangarei",
//     "Invercargill",
//     "Whanganui",
//   ],
//   uk: [
//     "Aberdeen",
//     "Belfast",
//     "Birmingham",
//     "Bradford",
//     "Bristol",
//     "Cardiff",
//     "Coventry",
//     "Edinburgh",
//     "Glasgow",
//     "Leeds",
//     "Leicester",
//     "Liverpool",
//     "London",
//     "Manchester",
//     "Newcastle upon Tyne",
//     "Nottingham",
//     "Plymouth",
//     "Sheffield",
//     "Southampton",
//     "Stoke-on-Trent",
//     "Sunderland",
//     "Swansea",
//     "Wakefield",
//     "Wolverhampton",
//     "York",
//     "Cambridge",
//     "Oxford",
//     "Reading",
//     "Aberdeen",
//     "Dundee",
//   ],
//   australia: [
//     "Adelaide",
//     "Brisbane",
//     "Canberra",
//     "Darwin",
//     "Gold Coast",
//     "Hobart",
//     "Melbourne",
//     "Newcastle",
//     "Perth",
//     "Sunshine Coast",
//     "Sydney",
//     "Geelong",
//     "Wollongong",
//     "Townsville",
//     "Cairns",
//     "Toowoomba",
//     "Ballarat",
//     "Bendigo",
//     "Albury-Wodonga",
//     "Mackay",
//   ],
// };

const purposeOptions = [
  { value: "Self", label: "Self" },
  { value: "Company", label: "Company" },
];

const countryOptions = [
  { value: "USA", label: "USA" },
  { value: "Canada", label: "Canada" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "UK", label: "UK" },
  { value: "Australia", label: "Australia" },
  { value: "Other", label: "Other" },
];

const programOptions = [
  { value: "Reseller Program", label: "Reseller Program" },
  { value: "Affiliate Program", label: "Affiliate Program" },
  { value: "White Label Program", label: "White Label Program" },
];

const cityOptions = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
];

const PartnershipForm = () => {
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [bgColor, setBgColor] = useState("bg-[#1D92FB]");
  const [messageSuccess, setMessageSuccess] = useState("w-[0%]");
  const [country, setCountry] = useState("");
  const [cityName, setCityName] = useState("");
  const [updatedCitiesArr, setUpdatedCitiesArr] = useState<string[]>([]);

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: partnershipSchema,
    onSubmit: (values, action) => {
      action.resetForm();
    },
  });

  const handleCombinedSubmit = async (event: any): Promise<void> => {
    handleSubmit(event);
    setMessage("");
    setBgColor("bg-[#1D92FB]");

    if (
      !values.name.length ||
      !values.purpose.length ||
      !values.contact_number.length ||
      !values.email.length ||
      !values.country.length ||
      !values.city.length ||
      !values.program.length
    ) {
      return;
    }
    if (
      errors.name ||
      errors.purpose ||
      errors.contact_number ||
      errors.email ||
      errors.country ||
      errors.city ||
      errors.program
    ) {
      return;
    }

    console.log("_______new form values ::::", values);

    // try {
    //   const formData = new FormData();
    //   formData.append("name", values.name);
    //   formData.append("purpose", values.purpose);
    //   formData.append("number", values.contact_number);
    //   formData.append("email", values.email);
    //   formData.append("country", values.country);
    //   formData.append("city", values.city);
    //   formData.append("program", values.program);
    //   setUploading(true);
    //   setMessage("Submitting form...");

    //   setMessageSuccess("w-[10%]");
    //   const response = await fetch("/api/partnershipform", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (response.ok) {
    //     setBgColor("bg-green-500");
    //     setMessage("Your Message has been successfully submitted!");
    //     setMessageSuccess("w-[100%]");
    //   } else {
    //     setBgColor("bg-red-500");
    //     setMessage("Message not submitted!");
    //     setMessageSuccess("w-[100%]");
    //   }
    // } catch (error) {
    //   setBgColor("bg-red-500");
    //   setMessage("Message not submitted!");
    //   setMessageSuccess("w-[100%]");
    //   console.error("Error:", error);
    // } finally {
    //   setUploading(false);
    //   setTimeout(() => {
    //     setMessage("");
    //   }, 5000);
    // }
  };

  return (
    <div className="flex justify-center items-center px-16 py-12 lg:text-2xl md:text-xl text-lg font-light text-black bg-white shadow-lg shadow-slate-500 rounded-[36px] max-md:px-5 border border-slate-300">
      <div className="flex flex-col mt-3.5 w-full max-w-[746px] max-md:max-w-full">
        <div className="lg:text-4xl md:text-3xl text-l font-medium  text-center leading-[52px] max-md:max-w-full max-md:text-4xl w-[240px] sm:w-[420px] lg:w-[570px]">
          Become a Partner
        </div>
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
            <Select
              // className="basic-single"
              placeholder="Self/Company"
              // classNamePrefix="select"
              // isDisabled={false}
              // isLoading={false}
              isClearable={true}
              // isRtl={false}
              isSearchable={false}
              name="purpose"
              value={purposeOptions.find(
                (option) => option.value === values.purpose
              )}
              onChange={(selectedOption) => {
                setFieldValue("purpose", selectedOption?.value);
                setFieldTouched("purpose", true, false);
              }}
              // onBlur={(e) => {
              //   const { value } = e.target;
              //   if (values.purpose === "") {
              //     // if (!value) {
              //     setFieldTouched("purpose", true, false);
              //   }
              // }}
              options={purposeOptions}
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "#f3f4f6",
                  border: "2px solid #e5e7eb",
                  boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1)",
                  // "&:focus": {
                  //   border: "2px solid black",
                  //   boxShadow: "0px 0px 4px rgba(29, 146, 251, 0.5)",
                  // },
                  "&:hover": {
                    border: "2px solid black",
                  },
                  // justifyContent: "center",
                  // alignItems: "start",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  // whiteSpace: "nowrap",
                  borderRadius: "0.75rem",
                  // width: "100%",
                  color: "#000",
                  fontSize: "0.875rem",
                  placeholderColor: "#000",
                }),
                option: (provided, state) => ({
                  ...provided,
                  fontSize: "14px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }),
              }}
            />
            {errors.purpose && touched.purpose ? (
              <p className="form-error">{errors.purpose}</p>
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
            {/* <select
              className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
              name="country"
              value={values.country}
              onChange={(e) => {
                handleChange(e);
                setCountry(e.target.value);
                setCityName("");
                // handleCitiesArray();
                // setFieldValue(values.city, "");
                // setTimeout(() => {
                //   setFieldValue("city", "");
                // }, 0);
              }}
              onBlur={handleBlur}
            >
              <option value="" disabled selected>
                I am located in : Country
              </option>
              
            </select> */}

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
                setFieldTouched("country", true, false);
              }}
              // onBlur={(e) => {
              //   const { value } = e.target;
              //   if (values.purpose === "") {
              //     // if (!value) {
              //     setFieldTouched("purpose", true, false);
              //   }
              // }}
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
                  placeholderColor: "#000",
                }),
                option: (provided, state) => ({
                  ...provided,
                  fontSize: "14px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }),
              }}
            />
            {errors.country && touched.country ? (
              <p className="form-error">{errors.country}</p>
            ) : null}
          </div>

          <div className="mt-4">
            <Select
              placeholder="City / State"
              // isLoading={false}
              isClearable={true}
              isSearchable={true}
              name="city"
              value={cityOptions.find((option) => option.value === values.city)}
              onChange={(selectedOption) => {
                setFieldValue("city", selectedOption?.value);
                setFieldTouched("city", true, false);
              }}
              // onBlur={(e) => {
              //   const { value } = e.target;
              //   if (values.purpose === "") {
              //     // if (!value) {
              //     setFieldTouched("purpose", true, false);
              //   }
              // }}
              options={cityOptions}
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
                  placeholderColor: "#000",
                }),
                option: (provided, state) => ({
                  ...provided,
                  fontSize: "14px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }),
              }}
            />

            {errors.city && touched.city ? (
              <p className="form-error">{errors.city}</p>
            ) : null}
          </div>

          <div className="mt-4">
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
                setFieldTouched("program", true, false);
              }}
              // onBlur={(e) => {
              //   const { value } = e.target;
              //   if (values.purpose === "") {
              //     // if (!value) {
              //     setFieldTouched("purpose", true, false);
              //   }
              // }}
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
                  placeholderColor: "#000",
                }),
                option: (provided, state) => ({
                  ...provided,
                  fontSize: "14px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }),
              }}
            />
            {errors.program && touched.program ? (
              <p className="form-error">{errors.program}</p>
            ) : null}
          </div>

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
