"use client";

// Newsletter / lead sign-up popup shown once per visitor (see DelayedGreetingPopup).

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { ChangeEvent, FocusEvent, FormEvent, MouseEvent } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { POPUP_CONTENT, TIMINGS, markPopupSeen } from "./content";
import { submitForm } from "@/lib/forms/client/submitForm";
import {
  INITIAL_VALUES,
  REQUIRED_FIELDS,
  validateField,
  validateForm,
  type FormErrors,
  type FormValues,
  type RequiredField,
} from "./validation";

const Captcha = dynamic(() => import("@/components/forms/TurnstileWidget"), { ssr: false });

type Status = { text: string; tone: "pending" | "success" | "error" };

// Full class names (not built from parts) so Tailwind keeps them.
const STATUS_STYLES: Record<Status["tone"], { background: string; progress: string }> = {
  pending: { background: "bg-[#1D92FB]", progress: "w-[10%]" },
  success: { background: "bg-green-500", progress: "w-[100%]" },
  error: { background: "bg-red-500", progress: "w-[100%]" },
};

const inputClass = (invalid: boolean) =>
  `text-sm px-2 py-1.5 shadow-md bg-white border rounded-md outline-none w-full ${
    invalid ? "border-red-400" : "border-gray-400"
  }`;

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? (
    <p id={id} className="text-red-500 text-xs mt-1">
      {message}
    </p>
  ) : null;
}

export default function GreetingPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<RequiredField, boolean>>>({});
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status | null>(null);

  const captchaRef = useRef<TurnstileInstance | undefined>(undefined);
  const timers = useRef(new Set<number>());
  const idPrefix = useId();
  const titleId = `${idPrefix}-title`;
  const errorId = (field: RequiredField) => `${idPrefix}-${field}-error`;

  /** setTimeout that is cancelled if the popup unmounts first. */
  const later = useCallback((callback: () => void, ms: number) => {
    const id = window.setTimeout(() => {
      timers.current.delete(id);
      callback();
    }, ms);
    timers.current.add(id);
  }, []);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((id) => window.clearTimeout(id));
  }, []);

  // Appear shortly after mounting, then animate in.
  useEffect(() => {
    later(() => {
      setIsVisible(true);
      later(() => setIsAnimating(true), TIMINGS.animateDelayMs);
    }, TIMINGS.showDelayMs);
  }, [later]);

  const closePopup = useCallback(() => {
    setIsAnimating(false);
    later(() => {
      setIsVisible(false);
      markPopupSeen();
    }, TIMINGS.closeAnimationMs);
  }, [later]);

  // Escape closes the popup, like a click outside it.
  useEffect(() => {
    if (!isVisible) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isVisible, closePopup]);

  const updateField = (field: keyof FormValues, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (field !== "subscribe" && touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value as string) }));
    }
  };

  const touchField = (field: RequiredField, value: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = event.target;
    updateField(name as keyof FormValues, type === "checkbox" ? checked : value);
  };

  const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    touchField(event.target.name as RequiredField, event.target.value);
  };

  const handleCaptchaSuccess = (token: string) => {
    setCaptchaToken(token);
    setCaptchaError(token ? "" : "Please verify the checkbox above");
  };

  const handleCaptchaExpired = () => {
    setCaptchaToken("");
    setCaptchaError("Verification expired. Please verify again.");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    setTouched(Object.fromEntries(REQUIRED_FIELDS.map((field) => [field, true])));
    const formErrors = validateForm(values);
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) return;

    if (!captchaToken) {
      setCaptchaError("Please verify the checkbox above");
      return;
    }

    setSubmitting(true);
    setStatus({ text: "Submitting your response...", tone: "pending" });
    try {
      await submitForm(
        "greeting-popup",
        {
          fields: {
            name: values.name,
            email: values.email,
            phone: values.contact_number,
            lookingFor: values.looking,
            message: values.subscribe ? "Newsletter subscription via popup" : "Popup form submission",
            newsletterOptIn: values.subscribe,
          },
          captchaToken,
        },
        { trackConversion: true }
      );
      setStatus({ text: "Your response has been successfully submitted!", tone: "success" });
      setValues(INITIAL_VALUES);
      setTouched({});
      setErrors({});
      captchaRef.current?.reset();
      setCaptchaToken("");
      setCaptchaError("");
      later(closePopup, TIMINGS.closeAfterSuccessMs);
    } catch (error) {
      console.error("Greeting popup submission failed:", error);
      setStatus({ text: "Message not submitted!", tone: "error" });
    } finally {
      setSubmitting(false);
      later(() => setStatus(null), TIMINGS.messageVisibleMs);
    }
  };

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) closePopup();
  };

  const showError = (field: RequiredField) => (touched[field] ? errors[field] : undefined);

  const textField = (field: "name" | "email" | "looking", type: string, placeholder: string) => {
    const error = showError(field);
    return (
      <div>
        <input
          name={field}
          value={values[field]}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type={type}
          placeholder={placeholder}
          aria-label={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId(field) : undefined}
          className={inputClass(Boolean(error))}
        />
        <FieldError id={errorId(field)} message={error} />
      </div>
    );
  };

  if (!isVisible) return null;

  const phoneError = showError("contact_number");
  const { image, logo, title } = POPUP_CONTENT;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[1000] popup-overlay transition-all duration-700 ease-in-out ${
        isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`greetings overflow-hidden gap-4 rounded-lg pl-3 md:pl-0 pr-3 pt-3 pb-3 bg-white flex flex-col sm:flex-row justify-center relative transform transition-all duration-700 ease-in-out ${
          isAnimating ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="hidden sm:block w-[290px] md:w-[340px] h-full">
          <Image src={image.src} alt={image.alt} sizes="340px" className="h-full w-full object-cover" />
        </div>
        <button
          type="button"
          aria-label="Close"
          className="absolute top-[12px] sm:top-1 p-4 md:p-2 right-1 sm:right-4 text-2xl font-light text-gray-800 transition-transform hover:rotate-90 z-10 duration-500 ease-in-out"
          onClick={closePopup}
        >
          &times;
        </button>
        <div className="flex sm:border-2 sm:border-gray-300 rounded-lg sm:p-2 flex-col justify-center text-neutral-600 text-opacity-90">
          <div className="block sm:hidden w-[230px] mx-auto pt-4">
            <Image src={image.src} alt={image.alt} sizes="230px" className="object-cover" />
          </div>
          <div className="px-5 py-2 flex flex-col items-center">
            <Image src={logo.src} alt={logo.alt} className="h-8 w-auto hidden sm:block" />
            <div id={titleId} className="text-lg font-base text-center text-black mb-4 mt-5">
              {title}
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[260px] md:w-[300px]">
              {textField("name", "text", "Enter your name")}
              {textField("email", "email", "Enter your email")}

              <div>
                <PhoneInput
                  country="us"
                  value={values.contact_number}
                  onChange={(value) => updateField("contact_number", value)}
                  onBlur={() => touchField("contact_number", values.contact_number)}
                  inputClass={`!w-full !text-sm !py-1.5 !px-2 !shadow-md !bg-white !border rounded-md outline-none ${
                    phoneError ? "!border-red-400" : "!border-gray-400"
                  }`}
                  inputProps={{
                    "aria-label": "Phone number",
                    "aria-invalid": Boolean(phoneError),
                    "aria-describedby": phoneError ? errorId("contact_number") : undefined,
                  }}
                  containerClass="!w-full"
                  buttonClass="!bg-white !border !border-gray-300 !rounded-l-md"
                  dropdownClass="!z-50"
                  enableSearch
                  searchPlaceholder="Search country"
                  preferredCountries={["pk", "us", "gb", "ae", "sa", "in"]}
                  placeholder="Enter phone number"
                />
                <FieldError id={errorId("contact_number")} message={phoneError} />
              </div>

              {textField("looking", "text", "What are you looking for?")}

              <label className="text-base normal-case cursor-pointer">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={values.subscribe}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Subscribe to our newsletter
              </label>

              <Captcha recaptchaRef={captchaRef} onChange={handleCaptchaSuccess} onExpired={handleCaptchaExpired} />
              {captchaError && <p className="text-red-500 text-xs">{captchaError}</p>}

              <button
                type="submit"
                disabled={submitting}
                className={`text-base text-white bg-[#0A8FFC] hover:bg-[#1d92fb] shadow-sm rounded-md py-2 transition-colors ${
                  submitting ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {submitting ? "Submitting..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {status && (
        <div
          role="status"
          className={`fixed top-14 lg:top-5 right-5 ${STATUS_STYLES[status.tone].background} py-2 px-4 rounded-lg shadow-lg z-50 w-[270px] sm:w-[450px]`}
        >
          <div className={`h-1 bg-white mb-2 transition-all ${STATUS_STYLES[status.tone].progress}`}></div>
          <p className="text-xs text-white sm:text-base">{status.text}</p>
        </div>
      )}
    </div>
  );
}
