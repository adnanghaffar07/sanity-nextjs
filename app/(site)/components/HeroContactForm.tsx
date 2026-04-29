"use client";

import React, { useState } from "react";
import { submitHeroLead } from "@/lib/submitHeroLead";
import { usePathname } from "next/navigation";

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  lookingFor?: string;
  message?: string;
  captcha?: string;
};

const validateEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value.trim());
const validatePhone = (value: string) => /^[0-9+\s()\-]{7,20}$/.test(value.trim());

export default function HeroContactForm() {
  const [step, setStep] = useState<1 | 2>(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [lookingFor, setLookingFor] = useState("");
  const [message, setMessage] = useState("");
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const pathname = usePathname();

  // ✅ STEP 1 VALIDATION
  const handleStepOneSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Errors = {};

    if (!name.trim()) nextErrors.name = "Name is required.";
    if (!email.trim()) nextErrors.email = "Email is required.";
    else if (!validateEmail(email)) nextErrors.email = "Please enter a valid email address.";

    if (!phone.trim()) nextErrors.phone = "Contact number is required.";
    else if (!validatePhone(phone)) nextErrors.phone = "Please enter a valid contact number.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStep(2);
  };

  // ✅ FINAL SUBMIT (API CALL)
  const handleFinalSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Errors = {};

    if (!lookingFor.trim()) nextErrors.lookingFor = "Please let us know what you're looking for.";
    if (!message.trim()) nextErrors.message = "Please enter your message.";
    if (!captchaChecked) nextErrors.captcha = "Please verify the captcha.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true); // ✅ start spinner

    try {
      await submitHeroLead({
        name,
        email,
        phone,
        lookingFor,
        message,
        pageName: pathname?.split("/").pop() || "home",
      });

      setSuccessMessage("Thank you! Your message has been sent.");

      setTimeout(() => {
        setSuccessMessage("");
        setStep(1);
        setName("");
        setEmail("");
        setPhone("");
        setLookingFor("");
        setMessage("");
        setCaptchaChecked(false);
        setErrors({});
      }, 5000);

    } catch (error) {
      setErrors({
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false); // ✅ stop spinner
    }
  };

  return (
    <div className="mx-auto w-[min(92vw,24rem)] xl:w-[min(32vw,30rem)] rounded-[clamp(1rem,1.8vw,1.2rem)] border border-white/20 bg-white/10 p-[clamp(1rem,1.4vw,2rem)] shadow-2xl backdrop-blur-xl">

      {/* HEADER */}
      <div className="mb-[clamp(0.9rem,1.2vw,1.5rem)]">
        <p className="text-[clamp(1rem,1.5vw,1.8rem)] font-bold text-white leading-tight">
          Ready to innovate your business?
        </p>
        <p className="mt-2 text-[clamp(0.75rem,0.9vw,0.95rem)] text-white/80">
          We are here! Let&apos;s kick-off our journey to success.
        </p>
        
      </div>

      {/* SUCCESS MESSAGE */}
      {successMessage && <p className="mb-4 text-[clamp(0.75rem,0.9vw,0.95rem)] text-green-300">{successMessage}</p>}

      {/* FORM WRAPPER */}
      <div className="min-h-[clamp(220px,24vw,260px)] flex flex-col justify-between">

        {/* STEP 1 */}
        {step === 1 ? (
          <form onSubmit={handleStepOneSubmit} className="space-y-[clamp(0.85rem,1vw,1rem)] flex-1">

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full rounded-xl border border-white/20 bg-white/5 px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.55rem,0.8vw,0.85rem)] text-[clamp(0.75rem,0.9vw,0.95rem)] text-white placeholder:text-white/50"
            />
            {errors.name && <p className="text-[clamp(0.72rem,0.88vw,0.9rem)] text-rose-300">{errors.name}</p>}

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded-xl border border-white/20 bg-white/5 px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.55rem,0.8vw,0.85rem)] text-[clamp(0.75rem,0.9vw,0.95rem)] text-white placeholder:text-white/50"
            />
            {errors.email && <p className="text-[clamp(0.72rem,0.88vw,0.9rem)] text-rose-300">{errors.email}</p>}

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Contact Number"
              className="w-full rounded-xl border border-white/20 bg-white/5 px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.55rem,0.8vw,0.85rem)] text-[clamp(0.75rem,0.9vw,0.95rem)] text-white placeholder:text-white/50"
            />
            {errors.phone && <p className="text-[clamp(0.72rem,0.88vw,0.9rem)] text-rose-300">{errors.phone}</p>}

            <button
              type="submit"
              className="w-full rounded-xl bg-[#F7E022] px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.55rem,0.8vw,0.85rem)] text-[clamp(0.75rem,0.9vw,0.95rem)] font-semibold text-black"
            >
              Continue
            </button>
          </form>

        ) : (

          /* STEP 2 */
          <form onSubmit={handleFinalSubmit} className="space-y-[clamp(0.65rem,1vw,1rem)] flex-1">

            <input
              type="text"
              value={lookingFor}
              onChange={(e) => setLookingFor(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full rounded-xl border border-white/20 bg-white/5 px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.55rem,0.8vw,0.85rem)] text-[clamp(0.75rem,0.9vw,0.95rem)] text-white placeholder:text-white/50"
            />
            {errors.lookingFor && (
              <p className="text-[clamp(0.72rem,0.88vw,0.9rem)] text-rose-300">{errors.lookingFor}</p>
            )}

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              rows={3}
              className="w-full rounded-xl border border-white/20 bg-white/5 px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.55rem,0.8vw,0.85rem)] text-[clamp(0.75rem,0.9vw,0.95rem)] text-white placeholder:text-white/50"
            />
            {errors.message && (
              <p className="text-[clamp(0.72rem,0.88vw,0.9rem)] text-rose-300">{errors.message}</p>
            )}

            <label className="flex items-center gap-3 text-[clamp(0.75rem,0.9vw,0.95rem)] text-white">
              <input
                type="checkbox"
                checked={captchaChecked}
                onChange={(e) => setCaptchaChecked(e.target.checked)}
              />
              I am not a robot
            </label>

            {errors.captcha && (
              <p className="text-[clamp(0.72rem,0.88vw,0.9rem)] text-rose-300">{errors.captcha}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1d92fb] px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.55rem,0.8vw,0.85rem)] text-[clamp(0.75rem,0.9vw,0.95rem)] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}