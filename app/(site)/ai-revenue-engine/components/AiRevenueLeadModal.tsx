"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { X, Mail, User, Phone, ArrowRight, Shield, Sparkles, Clock, Globe, Zap } from "lucide-react";
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
      // REMOVED: setForm(INITIAL_FORM); - Don't clear form before redirect
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm transition-all duration-300" 
      onClick={closeModal}
    >
      <div 
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-4 fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative gradient bar - Blue to Yellow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-yellow-400" />

        {/* Close Button */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-3 top-3 z-30 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition-all hover:bg-gray-50 hover:text-gray-600 hover:shadow-md"
          aria-label="Close form"
        >
          <X className="h-3.5 w-3.5" strokeWidth={2} />
        </button>

        {/* Header Section */}
        <div className="px-6 pt-6 pb-1">
          {/* Badge */}
          <div className="mb-2 flex justify-center">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 px-2.5 py-0.5 shadow-sm">
              <Zap className="h-3 w-3 text-blue-600" />
              <span className="text-[11px] font-semibold text-blue-700">Live Demo Available</span>
              <Sparkles className="h-3 w-3 text-yellow-400" />
            </div>
          </div>
          
          <h3 className="text-center text-xl font-bold tracking-tight text-gray-900">
            Test Drive Emma
          </h3>
          <p className="mx-auto mt-1 max-w-sm text-center text-xs text-gray-500">
            Our AI Sales Agent — experience it live in under 60 seconds
          </p>
        </div>

        {/* Form Section */}
        <div className="px-6 py-6">
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* First Name Field */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-gray-700">
                First Name <span className="text-blue-500">*</span>
              </label>
              <div className={`relative transition-all duration-200 ${focusedField === 'firstName' ? 'scale-[1.01]' : ''}`}>
                <User className={`absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 transition-all duration-200 ${
                  focusedField === 'firstName' ? 'text-blue-500 scale-110' : 'text-gray-400'
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
                  placeholder="Enter your first name"
                  className={`h-10 w-full rounded-lg border bg-white pl-8 text-sm text-gray-900 outline-none transition-all duration-200
                    ${focusedField === 'firstName' 
                      ? 'border-blue-400 ring-2 ring-blue-100 ring-offset-0' 
                      : touched.firstName && !isFieldValid('firstName', form.firstName)
                        ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                        : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                    }`}
                />
              </div>
              {touched.firstName && !isFieldValid('firstName', form.firstName) && (
                <p className="text-[10px] text-red-500">{getFieldError('firstName', form.firstName)}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-gray-700">
                Email Address <span className="text-blue-500">*</span>
              </label>
              <div className={`relative transition-all duration-200 ${focusedField === 'email' ? 'scale-[1.01]' : ''}`}>
                <Mail className={`absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 transition-all duration-200 ${
                  focusedField === 'email' ? 'text-blue-500 scale-110' : 'text-gray-400'
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
                  className={`h-10 w-full rounded-lg border bg-white pl-8 text-sm text-gray-900 outline-none transition-all duration-200
                    ${focusedField === 'email' 
                      ? 'border-blue-400 ring-2 ring-blue-100 ring-offset-0' 
                      : touched.email && !isFieldValid('email', form.email)
                        ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                        : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
                    }`}
                />
              </div>
              {touched.email && !isFieldValid('email', form.email) && (
                <p className="text-[10px] text-red-500">{getFieldError('email', form.email)}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-gray-700">
                Phone Number <span className="text-blue-500">*</span>
              </label>
              <div className="relative z-[110]">
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
                  inputClass={`!h-10 !w-full !rounded-lg !border !bg-white !pl-11 !text-sm !text-gray-900 !outline-none !transition-all !duration-200
                    ${focusedField === 'phone' 
                      ? '!border-blue-400 !ring-2 !ring-blue-100' 
                      : touched.phone && !isFieldValid('phone', form.phone)
                        ? '!border-red-300 focus:!border-red-400'
                        : '!border-gray-200 hover:!border-gray-300 focus:!border-blue-400'
                    }`}
                  buttonClass="!h-10 !border !border-gray-200 !border-r-0 !rounded-l-lg !bg-white hover:!bg-gray-50 !transition-all !duration-200"
                  containerClass="!w-full"
                  dropdownClass="!z-[200] !rounded-lg !border-gray-200 !shadow-xl"
                  dropdownStyle={{ zIndex: 200 }}
                  enableSearch
                  disableSearchIcon={false}
                  countryCodeEditable={false}
                  preferredCountries={["us", "ca", "gb", "au"]}
                  placeholder="(555) 000-0000"
                />
              </div>
              {touched.phone && !isFieldValid('phone', form.phone) && (
                <p className="text-[10px] text-red-500">{getFieldError('phone', form.phone)}</p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="animate-shake flex items-center gap-2 rounded-lg bg-red-50 p-2 text-xs text-red-600">
                <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="group relative h-10 w-full overflow-hidden rounded-lg bg-gradient-to-r from-[#f7e022] to-yellow-400 text-xs font-bold uppercase tracking-wide text-gray-900 shadow-md transition-all duration-200 hover:from-[#f7e022] hover:to-yellow-600 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
            >
              <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg className="h-3.5 w-3.5 animate-spin text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Test The Agent Right Now!
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </button>

            {/* Trust & Safety Section */}
            <div className="mt-6 space-y-2">
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-3 w-3 text-gray-400" />
                  <span className="text-[10px] text-gray-500">256-bit SSL Secure</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3 text-gray-400" />
                  <span className="text-[10px] text-gray-500">Under 60 seconds</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="h-3 w-3 text-gray-400" />
                  <span className="text-[10px] text-gray-500">Global Access</span>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Important Notice */}
        <div className="mx-6 mb-5 rounded-lg bg-gradient-to-r from-blue-50 to-yellow-50 p-2.5 border border-blue-100">
          <div className="flex gap-2">
            <div className="flex-shrink-0">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-100">
                <span className="text-[10px] font-bold text-yellow-700">!</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[12px] font-semibold text-gray-800 mb-0.5">Limited Availability</p>
              <p className="text-[12px] leading-relaxed text-gray-600">
                Live test calls currently for <span className="font-bold text-blue-600">US & Canada</span> numbers. 
                International? Opt in — we&apos;ll reach you via email with next steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}