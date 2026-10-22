import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import React from "react";

// The real site key in production; Cloudflare's always-pass test key only in
// local development. The server checks every token (lib/forms/server/turnstile.ts).
export const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
  (process.env.NODE_ENV === "production" ? "" : "1x00000000000000000000AA");

if (!TURNSTILE_SITE_KEY) console.error("NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set: the captcha cannot load.");

// Cloudflare Turnstile captcha widget used by the website forms.
const TurnstileWidget = ({
  onChange,
  onExpired,
  recaptchaRef,
}: {
  onChange: (token: string) => void;
  onExpired: () => void;
  recaptchaRef: React.Ref<TurnstileInstance | undefined>;
}) => (
  <div className="overflow-x-hidden -mx-5 sm:mx-0">
    <div className="w-full max-w-[200px] sm:max-w-[inherit] scale-75 sm:scale-100">
      <Turnstile
        ref={recaptchaRef}
        siteKey={TURNSTILE_SITE_KEY}
        onSuccess={onChange}
        onExpire={onExpired}
      />
    </div>
  </div>
);

export default TurnstileWidget;
