"use client";

import { useState, useRef, Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import RecaptchaComponent from "../components/RecaptchaComponent";

type FormData = {
  name: string;
  phone: string;
  email: string;
  details: string;
  package: string;
  recaptcha?: string;
};

function RegisterForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const packageName = searchParams.get("package") || "";
  // Form State
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    details: "",
    package: packageName,
    recaptcha: "",
  });

  const [loading, setLoading] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  // Recaptcha Reference
  const recaptchaRef = useRef(null);

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Inside your component
  const otpInputs = useRef<(HTMLInputElement | null)[]>([]); // Array to store input refs

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newOtp = otp.split(""); // Convert OTP to array
    newOtp[index] = e.target.value; // Update the specific index
    setOtp(newOtp.join("")); // Convert back to string

    // Focus next input if the user enters a digit
    if (e.target.value !== "" && otpInputs.current[index + 1]) {
      otpInputs.current[index + 1]?.focus();
    }
  };

  // Handle Reset
  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      details: "",
      package: "",
      recaptcha: "",
    });
  };

  // Function to request OTP
  const requestOtp = async () => {
    if (!formData.email) {  // Check for email instead of phone
      alert("Please enter an email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }), // Send email instead of phone
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok && data.success) {
        setOtpSent(true);
        setOtpModalOpen(true);
      } else {
        alert(data.error || "Failed to send OTP. Try again.");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Something went wrong.");
    }
  };

  const verifyOtpAndSubmit = async () => {
    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp }), // Ensure email is correctly passed
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok && data.success) {
        // OTP Verified, now submit the form
        handleSubmit();
      } else {
        setError(data.message || "Invalid OTP. Try again.");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Something went wrong.");
    }
  };

  // Handle Form Submission after OTP Verification
  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/paymentPlan-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setTimeout(() => {
          handleReset();
          setLoading(false);
          setOtpModalOpen(false);
          router.push("/thankyou");
        }, 200);
      } else {
        alert("Submission failed. Try again.");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
      setLoading(false);
    }
  };

  // Disable/Enable scrolling when OTP modal is open
  useEffect(() => {
    if (otpModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    // Cleanup on component unmount or when OTP modal closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [otpModalOpen]);


  return (
    <div
      className="md:h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/payment-register.jpeg)" }}
    >
      <div className="flex flex-col md:flex-row max-w-7xl w-full p-10">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center md:p-6 mt-[100px] md:mt-0 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:leading-[56px]">
            Let’s Build a Better Tomorrow Together
          </h2>
          <p className="mb-6 text-lg">
            Kick off your project, explore our previous work, transition your application seamlessly, or simply
            contact us through our form to connect with Keyideas today.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 flex flex-col items-center md:px-16 py-6 md:mt-16 rounded-lg">
          <h2 className="text-2xl md:text-4xl text-white font-bold mb-4">Your Journey Starts Here</h2>
          <form onSubmit={(e) => {
            e.preventDefault(); // Prevent the form from submitting directly
            requestOtp(); // First request the OTP
            { handleSubmit }
          }} className="w-full">
            {/* Name */}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className="block w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                className="block w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
                required
              />
            </div>

            {/* Details */}
            <div className="mb-4">
              <textarea
                name="details"
                placeholder="Project Details"
                value={formData.details}
                onChange={handleChange}
                className="block w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
                rows={6}
              ></textarea>
            </div>

            {/* Recaptcha */}
            <div className="mb-4">
              <RecaptchaComponent
                recaptchaRef={recaptchaRef}
                onChange={(token: any) => setFormData((prev) => ({ ...prev, recaptcha: token }))}
                onExpired={() => setFormData((prev) => ({ ...prev, recaptcha: "" }))}
              />
            </div>

            {/* Submit Button with Loader */}
            <div className="flex justify-start gap-3 items-center mt-4">
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l-3 3m7 1a8 8 0 01-8 8v-4l3-3"
                      ></path>
                    </svg>
                  </>
                ) : (
                  "Submit"
                )}
              </button>
              <div className="bg-white p-2 text-sm rounded-lg">
                Click{" "}
                <a href="/brochure" className="text-blue-600 cursor-pointer" target="_blank" rel="noopener noreferrer">
                  HERE{" "}
                </a>
                 to view our brochures.
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* OTP Modal */}
      {otpModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] text-center relative">

            {/* Close Button */}
            <button
              className="absolute top-2 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={() => setOtpModalOpen(false)}
            >
              &times;
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <img
                  src="/register.png"
                  alt="Register"
                  className="h-8 object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800 mb-2">Enter OTP Code</h2>

            {/* OTP Input Fields */}
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(4)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  ref={(el) => { otpInputs.current[index] = el }}
                  className="w-12 h-12 text-center border rounded-md text-lg font-bold focus:outline-none focus:border-blue-500"
                  onChange={(e) => handleOtpChange(e, index)}
                />
              ))}
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            {/* Verify Button */}
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded w-full text-lg font-semibold"
              onClick={verifyOtpAndSubmit}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </div>
        </div>
      )}


    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
}
