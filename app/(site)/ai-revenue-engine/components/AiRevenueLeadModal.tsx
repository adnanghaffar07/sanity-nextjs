"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { X, Mail } from "lucide-react";
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

  const canSubmit = useMemo(() => {
    const digits = form.phone.replace(/\D/g, "");
    const validPhone = digits.length >= 10 && digits.length <= 15;
    return (
      form.firstName.trim().length > 1 &&
      form.email.trim().length > 4 &&
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
      setForm(INITIAL_FORM);
      router.push("/ai-revenue-engine/wait-page");
    } catch (submissionError) {
      console.error("AI Revenue lead webhook failed:", submissionError);
      setError("Submission failed. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-3 md:p-6">
      <div className="relative w-full max-w-2xl overflow-visible rounded-lg border-2 border-[#6f7788] bg-white shadow-2xl">
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-0 top-0 z-30 flex h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-black text-white shadow-lg ring-1 ring-black/10 hover:bg-gray-900"
          aria-label="Close form"
        >
          <X className="h-4 w-4" strokeWidth={2.5} />
        </button>

        <div className="p-4 pt-10 md:p-6 md:pt-12">
          <div className="h-6 w-full rounded-full bg-gray-100">
            <div className="flex h-full w-[56%] items-center justify-center rounded-full bg-gradient-to-r from-[#6d79f4] to-[#9fdcff] text-xs font-semibold text-white">
              Step 1 of 2
            </div>
          </div>

          <h3 className="mt-4 text-center text-xl font-bold text-black md:text-2xl">
            Want To Test Drive Emma (Our AI Sales Agent)?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-black md:text-base">
            Just pop in your info below & experience it in live-action....in less than 60 seconds!
          </p>

          <p className="mx-auto mt-3 max-w-xl text-center text-xs leading-relaxed text-[#1f2430] md:text-sm">
            <span className="font-extrabold text-red-500 uppercase">IMPORTANT:</span>{" "}
            Due to high demand, Emma&apos;s live test calls are currently limited to US & Canada numbers.
            International? No worries, opt in anyway and we&apos;ll reach you via email with next steps.
          </p>

          <div className="mx-auto mt-4 max-w-xl rounded-sm border border-[#e6eff5] bg-white p-4 shadow-sm md:p-5">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName" className="mb-1 block text-xs font-semibold text-black md:text-sm">
                  First Name <span className="text-black">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, firstName: event.target.value }))
                  }
                  placeholder="First Name"
                  className="h-10 w-full rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-[#6d42b5]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-xs font-semibold text-black md:text-sm">
                  Email <span className="text-black">*</span>
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, email: event.target.value }))
                    }
                    placeholder="Your best email"
                    className="h-10 w-full rounded-md border border-gray-300 pl-9 pr-3 text-sm outline-none focus:border-[#6d42b5]"
                    required
                  />
                </div>
              </div>

              <div className="relative z-[110] [&_.react-tel-input]:w-full [&_.flag-dropdown.open]:z-[120]">
                <label htmlFor="phone" className="mb-1 block text-xs font-semibold text-black md:text-sm">
                  Phone <span className="text-black">*</span>
                </label>
                <PhoneInput
                  country="us"
                  value={form.phone}
                  onChange={(value, data: any) =>
                    setForm((prev) => ({
                      ...prev,
                      phone: value,
                      countryCode: data?.dialCode ? `+${data.dialCode}` : prev.countryCode,
                    }))
                  }
                  inputProps={{
                    id: "phone",
                    name: "phone",
                    required: true,
                    "aria-label": "Phone number",
                  }}
                  inputClass="!h-10 !w-full !rounded-md !border !border-gray-300 !text-sm !text-black !outline-none"
                  buttonClass="!h-10 !border !border-gray-300 !border-r-0 !rounded-l-md !bg-white"
                  containerClass="!w-full"
                  dropdownClass="!z-[200] !text-sm"
                  dropdownStyle={{ zIndex: 200 }}
                  enableSearch
                  disableSearchIcon={false}
                  countryCodeEditable={false}
                  preferredCountries={["us", "ca", "gb", "au"]}
                  placeholder="Phone number"
                />
              </div>

              {error ? <p className="text-sm text-red-600">{error}</p> : null}

              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-[#f7e022] text-sm font-bold uppercase tracking-wide text-black shadow-sm transition hover:bg-[#e6cf1d] active:bg-[#dcc010] disabled:cursor-not-allowed disabled:opacity-60 md:text-base"
              >
                {isSubmitting ? "Submitting..." : "Test The Agent Right Now!"}
              </button>
            </form>
          </div>

          <p className="mt-4 text-center text-sm italic text-[#3d4f7e] md:text-base">
            &quot;I was skeptical about AI until I heard it speak at Dan Martell&apos;s event. The conversation was realistic,
            I knew right then we needed this.&quot;{" "}
            <span className="font-semibold not-italic">- Colin Lyons</span>
          </p>
        </div>
      </div>
    </div>
  );
}
