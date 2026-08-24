import { Turnstile } from "@marsidev/react-turnstile";
import React from "react";

const RecaptchaComponent = ({
  onChange,
  onExpired,
  recaptchaRef,
}: {
  onChange: any;
  onExpired: any;
  recaptchaRef: any;
}) => (
  <div className="overflow-x-hidden -mx-5 sm:-mx-0">
    <div className="w-full max-w-[200px] sm:max-w-[inherit] scale-75 sm:scale-100">
      <Turnstile
        ref={recaptchaRef}
        siteKey={
          process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
          "1x00000000000000000000AA"
        }
        onSuccess={onChange}
        onExpire={onExpired}
      />
    </div>
  </div>
);

export default RecaptchaComponent;
