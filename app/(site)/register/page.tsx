"use client";

import { useState, useRef, Suspense } from "react";
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
  const packageName = searchParams.get("package") || ""; // Get package name from URL

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

  // Recaptcha Reference
  const recaptchaRef = useRef(null);

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

  // Handle Form Submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.recaptcha) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

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
          <form onSubmit={handleSubmit} className="w-full">
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
  HERE
</a>

                to view our brochures.
              </div>
            </div>
          </form>
        </div>
      </div>
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
