import ReCAPTCHA from "react-google-recaptcha";
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
      <ReCAPTCHA
        sitekey="6LcEiOkpAAAAADLW7X7N2yvpY01uLPXb0GbeDD0Q"
        ref={recaptchaRef}
        onChange={onChange}
        onExpired={onExpired}
      />
    </div>
  </div>
);

export default RecaptchaComponent;
