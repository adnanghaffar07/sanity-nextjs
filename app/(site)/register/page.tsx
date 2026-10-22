"use client";

// Plan registration form, reached from the plan buttons on /pricing
// (?package=<plan>). Bots are stopped by Turnstile, which the server checks
// with Cloudflare before saving (lib/forms/server/process.ts).

import { useRef, useState, Suspense, type ChangeEvent, type FormEvent } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import TurnstileWidget from "@/components/forms/TurnstileWidget";
import { submitForm } from "@/lib/forms/client/submitForm";

type Fields = { name: string; phone: string; email: string; details: string };
const EMPTY: Fields = { name: "", phone: "", email: "", details: "" };

function RegisterForm() {
  const packageName = useSearchParams().get("package") || "";
  const router = useRouter();

  const [fields, setFields] = useState<Fields>(EMPTY);
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const captchaRef = useRef<TurnstileInstance | undefined>();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!captchaToken) {
      setError("Please complete the verification above.");
      return;
    }

    setLoading(true);
    try {
      await submitForm("registration", {
        fields: {
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          lookingFor: packageName || "Registration inquiry",
          message: fields.details,
        },
        details: { Package: packageName },
        captchaToken,
      });
      setFields(EMPTY);
      router.push("/thankyou");
    } catch (submitError) {
      console.error("Registration failed:", submitError);
      // Turnstile tokens are single-use: get a fresh one for the next attempt.
      captchaRef.current?.reset();
      setCaptchaToken("");
      setError("Your details couldn't be sent. Please complete the verification again and resubmit.");
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:leading-[56px]">
            Let’s Build a Better Tomorrow Together
          </h1>
          <p className="mb-6 text-lg">
            Kick off your project, explore our previous work, transition your application seamlessly, or simply
            contact us through our form to connect with CodeAutomation today.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 flex flex-col items-center md:px-16 py-6 md:mt-16 rounded-lg">
          <h2 className="text-2xl md:text-4xl text-white font-bold mb-4">Your Journey Starts Here</h2>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                aria-label="Full name"
                value={fields.name}
                onChange={handleChange}
                className="block w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                aria-label="Phone number"
                value={fields.phone}
                onChange={handleChange}
                className="block w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                aria-label="Email address"
                value={fields.email}
                onChange={handleChange}
                className="block w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                name="details"
                placeholder="Project Details"
                aria-label="Project details"
                value={fields.details}
                onChange={handleChange}
                className="block w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-blue-300"
                rows={6}
              />
            </div>

            <div className="mb-4">
              <TurnstileWidget
                recaptchaRef={captchaRef}
                onChange={(token) => {
                  setCaptchaToken(token);
                  setError("");
                }}
                onExpired={() => setCaptchaToken("")}
              />
            </div>

            {error && (
              <p role="alert" className="mb-3 rounded-lg bg-white px-3 py-2 text-sm text-red-600">
                {error}
              </p>
            )}

            <div className="flex justify-start gap-3 items-center mt-4">
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded flex items-center justify-center disabled:opacity-70"
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-label="Sending"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l-3 3m7 1a8 8 0 01-8 8v-4l3-3" />
                  </svg>
                ) : (
                  "Submit"
                )}
              </button>
              <div className="bg-white p-2 text-sm rounded-lg">
                Click{" "}
                <a href="/brochure" className="text-blue-600 cursor-pointer" target="_blank" rel="noopener noreferrer">
                  HERE
                </a>{" "}
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
