"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { X, Mail, User, Phone, ArrowRight, Shield, Clock, Sparkles, Headphones } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type FormState = {
  firstName: string;
  email: string;
  phone: string;
  countryCode: string;
};

const INITIAL_FORM: FormState = {
  firstName: "",
  email: "",
  phone: "",
  countryCode: "",
};

export default function AiRevenueLeadModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    const digits = form.phone.replace(/\D/g, "");
    const validPhone = digits.length >= 10 && digits.length <= 15;
    return (
      form.firstName.trim().length > 1 &&
      form.email.trim().length > 4 &&
      form.email.includes('@') &&
      validPhone
    );
  }, [form]);

  useEffect(() => {
    const autoOpenTimer = window.setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    const onGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const trigger = target.closest("[data-open-ai-form='true']");
      if (!trigger) return;

      event.preventDefault();
      setIsOpen(true);
    };

    document.addEventListener("click", onGlobalClick);
    return () => {
      window.clearTimeout(autoOpenTimer);
      document.removeEventListener("click", onGlobalClick);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    setError("");
    setTouched({});
    setFocusedField(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit || isSubmitting) return;

    setError("");
    setIsSubmitting(true);

    const phoneDigits = form.phone.replace(/\D/g, "");
    const phoneE164 = phoneDigits ? `+${phoneDigits}` : "";

    const payload = {
      ...form,
      phone: phoneE164,
      countryCode: form.countryCode || (phoneDigits ? `+${phoneDigits.slice(0, phoneDigits.length - 10)}` : ""),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
      source: "ai-revenue-engine",
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/ai-revenue-engine-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to submit form");
      }

      console.log("AI Revenue lead sent to webhook:", payload);
      router.push("/ai-revenue-engine/wait-page");
    } catch (submissionError) {
      console.error("AI Revenue lead webhook failed:", submissionError);
      setError("Submission failed. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const isFieldValid = (field: string, value: string) => {
    if (!touched[field]) return true;
    if (field === 'firstName') return value.trim().length > 1;
    if (field === 'email') return value.trim().length > 4 && value.includes('@');
    if (field === 'phone') {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }
    return true;
  };

  const getFieldError = (field: string, value: string) => {
    if (!touched[field]) return '';
    if (field === 'firstName' && value.trim().length <= 1) return 'Please enter your first name';
    if (field === 'email') {
      if (value.trim().length <= 4) return 'Email is required';
      if (!value.includes('@')) return 'Enter a valid email address';
    }
    if (field === 'phone') {
      const digits = value.replace(/\D/g, "");
      if (digits.length < 10) return 'Enter a valid phone number';
      if (digits.length > 15) return 'Phone number is too long';
    }
    return '';
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 p-3 sm:p-4" 
      onClick={closeModal}
    >
      <div 
        className="relative w-full max-w-[95%] sm:max-w-md mx-auto rounded-2xl bg-white shadow-xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - responsive positioning */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-3 top-3 sm:right-4 sm:top-4 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-center"
          aria-label="Close form"
        >
          <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.5} />
        </button>

        {/* Header Section - responsive padding */}
        <div className="px-4 pt-6 pb-3 sm:px-6 sm:pt-8 sm:pb-4 text-center">
          {/* Avatar Circle - responsive sizing */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#3498db]/10 to-[#4b2d85]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Headphones className="h-5 w-5 sm:h-7 sm:w-7 text-[#3498db]" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-xl sm:text-2xl text-gray-800 font-light">
            Call{" "}
            <span className="font-medium text-[#3498db]">Eva</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
            Experience our AI agent in less than 60 seconds
          </p>
        </div>

        {/* Form Section - responsive padding */}
        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {/* First Name Field */}
            <div>
              <label className="text-xs sm:text-sm text-gray-600 mb-1 block">
                First name
              </label>
              <div className="relative">
                <User className={`absolute left-3 top-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 -translate-y-1/2 transition-colors ${
                  focusedField === 'firstName' ? 'text-[#3498db]' : 'text-gray-400'
                }`} />
                <input
                  type="text"
                  value={form.firstName}
                  onFocus={() => setFocusedField('firstName')}
                  onBlur={() => {
                    setFocusedField(null);
                    setTouched(prev => ({ ...prev, firstName: true }));
                  }}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, firstName: event.target.value }))
                  }
                  placeholder="Your first name"
                  className={`w-full h-10 sm:h-11 rounded-xl border bg-white pl-9 sm:pl-10 pr-3 sm:pr-4 text-sm sm:text-base text-gray-700 outline-none transition-all
                    ${focusedField === 'firstName' 
                      ? 'border-[#3498db] ring-2 ring-[#3498db]/10' 
                      : touched.firstName && !isFieldValid('firstName', form.firstName)
                        ? 'border-red-300'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                />
              </div>
              {touched.firstName && !isFieldValid('firstName', form.firstName) && (
                <p className="text-[10px] sm:text-xs text-red-500 mt-1">{getFieldError('firstName', form.firstName)}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="text-xs sm:text-sm text-gray-600 mb-1 block">
                Email address
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 -translate-y-1/2 transition-colors ${
                  focusedField === 'email' ? 'text-[#3498db]' : 'text-gray-400'
                }`} />
                <input
                  type="email"
                  value={form.email}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => {
                    setFocusedField(null);
                    setTouched(prev => ({ ...prev, email: true }));
                  }}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, email: event.target.value }))
                  }
                  placeholder="you@company.com"
                  className={`w-full h-10 sm:h-11 rounded-xl border bg-white pl-9 sm:pl-10 pr-3 sm:pr-4 text-sm sm:text-base text-gray-700 outline-none transition-all
                    ${focusedField === 'email' 
                      ? 'border-[#3498db] ring-2 ring-[#3498db]/10' 
                      : touched.email && !isFieldValid('email', form.email)
                        ? 'border-red-300'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                />
              </div>
              {touched.email && !isFieldValid('email', form.email) && (
                <p className="text-[10px] sm:text-xs text-red-500 mt-1">{getFieldError('email', form.email)}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="text-xs sm:text-sm text-gray-600 mb-1 block">
                Phone number
              </label>
              <div className="phone-input-responsive">
                <PhoneInput
                  country="us"
                  value={form.phone}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => {
                    setFocusedField(null);
                    setTouched(prev => ({ ...prev, phone: true }));
                  }}
                  onChange={(value, data: any) =>
                    setForm((prev) => ({
                      ...prev,
                      phone: value,
                      countryCode: data?.dialCode ? `+${data.dialCode}` : prev.countryCode,
                    }))
                  }
                  inputProps={{
                    name: "phone",
                    required: true,
                    "aria-label": "Phone number",
                  }}
                  inputClass={`!w-full !h-10 sm:!h-11 !rounded-xl !border !bg-white !pl-12 sm:!pl-14 !pr-3 sm:!pr-4 !text-sm sm:!text-base !text-gray-700 !outline-none
                    ${focusedField === 'phone' 
                      ? '!border-[#3498db] !ring-2 !ring-[#3498db]/10' 
                      : touched.phone && !isFieldValid('phone', form.phone)
                        ? '!border-red-300'
                        : '!border-gray-200 hover:!border-gray-300'
                    }`}
                  buttonClass="!h-10 sm:!h-11 !border !border-gray-200 !border-r-0 !rounded-l-xl !bg-white hover:!bg-gray-50 !w-10 sm:!w-12"
                  containerClass="!w-full"
                  dropdownClass="!rounded-xl !border-gray-200 !shadow-lg !z-[200]"
                  enableSearch
                  disableSearchIcon={false}
                  countryCodeEditable={false}
                  preferredCountries={["us", "ca", "gb", "au"]}
                  placeholder="(555) 000-0000"
                />
              </div>
              {touched.phone && !isFieldValid('phone', form.phone) && (
                <p className="text-[10px] sm:text-xs text-red-500 mt-1">{getFieldError('phone', form.phone)}</p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 rounded-xl bg-red-50 p-2 sm:p-3 text-xs sm:text-sm text-red-600">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-500"></span>
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="relative w-full h-10 sm:h-12 rounded-xl bg-gradient-to-r from-[#3498db] to-[#4b2d85] text-white text-xs sm:text-sm font-medium transition-all hover:shadow-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                {isSubmitting ? (
                  <>
                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span>Call Eva now</span>
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </>
                )}
              </span>
            </button>

            {/* Trust indicators - responsive layout */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-2">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Shield className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gray-400" />
                <span className="text-[10px] sm:text-xs text-gray-500">Secure</span>
              </div>
              <div className="w-px h-2 sm:h-3 bg-gray-200"></div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gray-400" />
                <span className="text-[10px] sm:text-xs text-gray-500">60 sec response</span>
              </div>
              <div className="w-px h-2 sm:h-3 bg-gray-200"></div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gray-400" />
                <span className="text-[10px] sm:text-xs text-gray-500">No commitment</span>
              </div>
            </div>
          </form>
        </div>

        {/* Footer note - responsive */}
        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
          <p className="text-[10px] sm:text-xs text-gray-400 text-center">
            Live test calls for US & Canada numbers
          </p>
        </div>
      </div>
    </div>
  );
}