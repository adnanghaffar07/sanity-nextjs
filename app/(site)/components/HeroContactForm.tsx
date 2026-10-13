"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { TURNSTILE_SITE_KEY } from "./RecaptchaComponent";
import { submitForm } from "@/lib/forms/client/submitForm";

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

type HeroContactFormProps = {
  variant?: "default" | "blue";
  pageName?: string;
  heading?: string;
  subheading?: string;
};

const DEFAULT_HEADING = "Ready to innovate your business?";
const DEFAULT_SUBHEADING = "We are here! Let's kick-off our journey to success.";

export default function HeroContactForm({ variant = "default", pageName, heading, subheading }: HeroContactFormProps) {
  const isBlueVariant = variant === "blue";

  const containerClass = isBlueVariant
    ? "mx-auto w-[min(92vw,24rem)] xl:w-[min(32vw,30rem)] rounded-[clamp(1rem,1.8vw,1.2rem)] bg-[#1D92FB] p-[clamp(1rem,1.4vw,2rem)] shadow-2xl"
    : "mx-auto w-[min(92vw,24rem)] xl:w-[min(32vw,30rem)] rounded-[clamp(1rem,1.8vw,1.2rem)] border border-white/20 bg-white/10 p-[clamp(1rem,1.4vw,2rem)] shadow-2xl backdrop-blur-xl";

  const titleClass = isBlueVariant
    ? "text-[clamp(1rem,1.5vw,1.8rem)] font-bold text-white leading-tight"
    : "text-[clamp(1rem,1.5vw,1.8rem)] font-bold text-white leading-tight";

  const subtitleClass = isBlueVariant
    ? "mt-2 text-[clamp(0.75rem,0.9vw,0.95rem)] text-white/90"
    : "mt-2 text-[clamp(0.75rem,0.9vw,0.95rem)] text-white/80";

  const inputClass = isBlueVariant
    ? "w-full rounded-xl border border-white/30 bg-white px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.55rem,0.8vw,0.85rem)] text-[clamp(0.75rem,0.9vw,0.95rem)] text-black placeholder:text-gray-500"
    : "w-full rounded-xl border border-white/20 bg-white/5 px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.55rem,0.8vw,0.85rem)] text-[clamp(0.75rem,0.9vw,0.95rem)] text-white placeholder:text-white/50";

  const errorClass = isBlueVariant
    ? "text-[clamp(0.72rem,0.88vw,0.9rem)] text-rose-100"
    : "text-[clamp(0.72rem,0.88vw,0.9rem)] text-rose-300";

  const checkboxLabelClass = isBlueVariant
    ? "flex items-center gap-3 text-[clamp(0.75rem,0.9vw,0.95rem)] text-white"
    : "flex items-center gap-3 text-[clamp(0.75rem,0.9vw,0.95rem)] text-white";
  const [step, setStep] = useState<1 | 2>(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [lookingFor, setLookingFor] = useState("");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<TurnstileInstance | undefined>(undefined);

  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const originalOverflow = document.body.style.overflow;
    if (showModal) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showModal, isMounted]);

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
    if (!turnstileToken) nextErrors.captcha = "Please complete the verification.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true); // ✅ start spinner

    try {
      await submitForm("hero-form", {
        fields: { name, email, phone, lookingFor, message },
        details: { Service: pageName },
        captchaToken: turnstileToken,
      });

      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setStep(1);
        setName("");
        setEmail("");
        setPhone("");
        setLookingFor("");
        setMessage("");
        setTurnstileToken("");
        turnstileRef.current?.reset();
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
    <div className={containerClass}>

      {/* HEADER */}
      <div className="mb-[clamp(0.9rem,1.2vw,1.5rem)]">
        <p className={titleClass}>
          {heading?.trim() || DEFAULT_HEADING}
        </p>
        <p className={subtitleClass}>
          {subheading?.trim() || DEFAULT_SUBHEADING}
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
              className={inputClass}
            />
            {errors.name && <p className={errorClass}>{errors.name}</p>}

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={inputClass}
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Contact Number"
              className={inputClass}
            />
            {errors.phone && <p className={errorClass}>{errors.phone}</p>}

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
              className={inputClass}
            />
            {errors.lookingFor && (
              <p className={errorClass}>{errors.lookingFor}</p>
            )}

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              rows={3}
              className={inputClass}
            />
            {errors.message && (
              <p className={errorClass}>{errors.message}</p>
            )}

            <Turnstile
              ref={turnstileRef}
              siteKey={TURNSTILE_SITE_KEY}
              onSuccess={(token) => setTurnstileToken(token)}
              onExpire={() => setTurnstileToken("")}
            />

            {errors.captcha && (
              <p className={errorClass}>{errors.captcha}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`flex w-full items-center justify-center gap-2 rounded-xl px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.55rem,0.8vw,0.85rem)] text-[clamp(0.75rem,0.9vw,0.95rem)] font-semibold disabled:cursor-not-allowed disabled:opacity-70 ${
                isBlueVariant
                  ? "bg-[#F7E022] text-black hover:bg-[#e6d01e]"
                  : "bg-[#1d92fb] text-white"
              }`}
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
      {isMounted &&
        showModal &&
        createPortal(
          <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4 py-6 sm:px-6">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Modal */}
            <div className="animate-fadeIn relative max-h-[calc(100vh-3rem)] w-full max-w-sm overflow-y-auto rounded-[1.25rem] border border-slate-200 bg-white p-4 text-center shadow-xl sm:max-w-md sm:p-6">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 sm:mb-4 sm:h-11 sm:w-11">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M20 7L9 18l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Thank you for contacting us</h2>

              <p className="mt-2 text-[0.83rem] leading-relaxed text-slate-600 sm:text-sm">
                Your request has been received. Our team will connect with you shortly to understand your goals and
                suggest the best next steps.
              </p>

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-[0.82rem] text-slate-700 sm:mt-5 sm:text-sm">
                <div className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 shrink-0 text-blue-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 6v6l4 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <span className="text-left sm:text-center">
                    Book a 15-30 minute strategy call for personalized guidance
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2.5 sm:mt-5">
                <a
                  href="https://calendly.com/adnanghaffar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M16 3v4M8 3v4M3 10h18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Schedule a Free Consultation
                </a>

                <button onClick={() => setShowModal(false)} className="text-[11px] text-slate-500 transition hover:text-slate-800">
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>

  );
}

