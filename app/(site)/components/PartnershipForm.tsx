"use client";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { partnershipSchema } from "../../schemas/index";

const initialValues = {
  name: "",
  purpose: "",
  contact_number: "",
  email: "",
  country: "",
  city: "",
  program: "",
};

interface CitiesData {
  [key: string]: string[];
}

const citiesData: CitiesData = {
  usa: [
    "Albuquerque",
    "Anaheim",
    "Anchorage",
    "Arlington",
    "Atlanta",
    "Aurora",
    "Austin",
    "Bakersfield",
    "Baltimore",
    "Baton Rouge",
    "Birmingham",
    "Boston",
    "Buffalo",
    "Charlotte",
    "Chicago",
    "Cincinnati",
    "Cleveland",
    "Colorado Springs",
    "Columbus",
    "Corpus Christi",
    "Dallas",
    "Denver",
    "Detroit",
    "El Paso",
    "Fort Worth",
    "Fresno",
    "Honolulu",
    "Houston",
    "Indianapolis",
    "Jacksonville",
    "Kansas City",
    "Las Vegas",
    "Lexington",
    "Lincoln",
    "Long Beach",
    "Los Angeles",
    "Louisville",
    "Memphis",
    "Mesa",
    "Miami",
    "Milwaukee",
    "Minneapolis",
    "Nashville",
    "New Orleans",
    "New York",
    "Oakland",
    "Oklahoma City",
    "Omaha",
    "Orlando",
    "Philadelphia",
    "Phoenix",
    "Pittsburgh",
    "Portland",
    "Raleigh",
    "Riverside",
    "Sacramento",
    "Saint Louis",
    "Saint Paul",
    "Salt Lake City",
    "San Antonio",
    "San Diego",
    "San Francisco",
    "San Jose",
    "Santa Ana",
    "Seattle",
    "Tampa",
    "Toledo",
    "Tucson",
    "Tulsa",
    "Virginia Beach",
    "Washington",
    "Wichita",
  ],
  canada: [
    "Calgary",
    "Edmonton",
    "Toronto",
    "Vancouver",
    "Ottawa",
    "Montreal",
    "Winnipeg",
    "Mississauga",
    "Brampton",
    "Hamilton",
    "London",
    "Markham",
    "Vaughan",
    "Surrey",
    "Kitchener",
    "Windsor",
    "Richmond",
    "Regina",
    "Burnaby",
    "Oshawa",
    "Saskatoon",
    "Kelowna",
    "Barrie",
    "Sherbrooke",
    "Guelph",
  ],
  newzealand: [
    "Auckland",
    "Christchurch",
    "Wellington",
    "Hamilton",
    "Tauranga",
    "Dunedin",
    "Palmerston North",
    "Napier",
    "Hastings",
    "Nelson",
    "Rotorua",
    "New Plymouth",
    "Whangarei",
    "Invercargill",
    "Whanganui",
  ],
  uk: [
    "Aberdeen",
    "Belfast",
    "Birmingham",
    "Bradford",
    "Bristol",
    "Cardiff",
    "Coventry",
    "Edinburgh",
    "Glasgow",
    "Leeds",
    "Leicester",
    "Liverpool",
    "London",
    "Manchester",
    "Newcastle upon Tyne",
    "Nottingham",
    "Plymouth",
    "Sheffield",
    "Southampton",
    "Stoke-on-Trent",
    "Sunderland",
    "Swansea",
    "Wakefield",
    "Wolverhampton",
    "York",
    "Cambridge",
    "Oxford",
    "Reading",
    "Aberdeen",
    "Dundee",
  ],
  australia: [
    "Adelaide",
    "Brisbane",
    "Canberra",
    "Darwin",
    "Gold Coast",
    "Hobart",
    "Melbourne",
    "Newcastle",
    "Perth",
    "Sunshine Coast",
    "Sydney",
    "Geelong",
    "Wollongong",
    "Townsville",
    "Cairns",
    "Toowoomba",
    "Ballarat",
    "Bendigo",
    "Albury-Wodonga",
    "Mackay",
  ],
};

const PartnershipForm = () => {
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [bgColor, setBgColor] = useState("bg-[#1D92FB]");
  const [messageSuccess, setMessageSuccess] = useState("w-[0%]");
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [country, setCountry] = useState("");
  const [cityName, setCityName] = useState("");
  const [updatedCitiesArr, setUpdatedCitiesArr] = useState<string[]>([]);
  console.log("__updatedCitiesArr::", updatedCitiesArr);

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: partnershipSchema,
    onSubmit: (values, action) => {
      action.resetForm();
    },
  });

  useEffect(() => {
    const handleCitiesArray = () => {
      if (cityName === "") {
        console.log("__cityname::", cityName);
        console.log("__country::", country);
        setUpdatedCitiesArr(citiesData[country]);
        return;
      }
      const regex = new RegExp(cityName, "i");
      const newCitiesArray = citiesData[country].filter((city) =>
        regex.test(city)
      );
      setUpdatedCitiesArr(newCitiesArray);
    };
    handleCitiesArray();
  }, [cityName, country]);

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
    // console.log("_______new form values ::::", values);

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
            <select
              className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black pl-4"
              name="purpose"
              value={values.purpose}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" disabled selected>
                Self/Company
              </option>
              <option value="self">Self</option>
              <option value="company">Company</option>
            </select>
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
            <select
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
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="newzealand">New Zealand</option>
              <option value="uk">UK</option>
              <option value="australia">Australia</option>
              <option value="other">Other</option>
            </select>
            {errors.country && touched.country ? (
              <p className="form-error">{errors.country}</p>
            ) : null}
          </div>

          <div className="mt-4 relative z-10">
            <input
              className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
              placeholder="City / State"
              name="city"
              value={values.city}
              onChange={(e) => {
                handleChange(e);
                setCityName(e.target.value);
                // handleCitiesArray();
              }}
              onFocus={() => {
                setIsOpen(true);
                setIsAnimating(false);
                // handleCitiesArray();
              }}
              onBlur={(e) => {
                handleBlur(e);
                setIsAnimating(true);

                // setTimeout(() => {
                //   setIsAnimating(false);
                //   setIsOpen(false);
                // }, 700);
              }}
            />
            {(isOpen || isAnimating) && (
              <div
                className={`absolute top-0 mt-16 w-full border-2 border-gray-300 flex-col flex justify-center items-start whitespace-nowrap rounded-xl shadow-lg max-md:px-5 text-black placeholder-black text-base bg-zinc-100 overflow-auto z-dropdown pt-80 max-h-[300px] 
              ${isAnimating ? "animate-slide-up" : "animate-slide-down"}
              `}
                style={{
                  scrollbarWidth: "initial",
                  scrollbarColor: "#1D92FB #f1f1f1",
                }}
              >
                <ul className="w-full">
                  {country.length !== 0 ? (
                    updatedCitiesArr?.map((city: string, index: number) => {
                      console.log("cities", "--", index, "--", city);
                      return (
                        <li
                          className="hover:bg-white px-7 py-2 cursor-pointer transition-colors duration-200"
                          key={`${country}-${city}`}
                          onClick={() => setFieldValue(values.city, city)}
                        >
                          {city}
                        </li>
                      );
                    })
                  ) : (
                    <li className="hover:bg-white px-7 py-2 transition-colors duration-200">
                      Please select a country
                    </li>
                  )}
                </ul>
              </div>
            )}

            {errors.city && touched.city && !isOpen && !isAnimating ? (
              <p className="form-error">{errors.city}</p>
            ) : null}
          </div>

          <div className="mt-4">
            <select
              className="border-2 justify-center items-start px-7 py-3 whitespace-nowrap rounded-xl shadow-sm bg-zinc-100 max-md:px-5 w-full text-black text-sm placeholder-black"
              name="program"
              value={values.program}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" disabled selected>
                I am interested in
              </option>
              <option value="Reseller Program">Reseller Program</option>
              <option value="Affiliate Program">Affiliate Program</option>
              <option value="White Label Program">White Label Program</option>
            </select>
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
