"use client";

// Turnstile for a form in three lines:
//   const captcha = useTurnstile();
//   ...{captcha.widget} above the submit button...
//   submitForm(id, { ..., captchaToken: captcha.token }), then captcha.reset() after every attempt
// Tokens are single-use, so always reset after a submission (success or failure).

import { useCallback, useRef, useState } from "react";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import TurnstileWidget from "./TurnstileWidget";

export function useTurnstile() {
  const ref = useRef<TurnstileInstance | undefined>();
  const [token, setToken] = useState("");

  const reset = useCallback(() => {
    ref.current?.reset();
    setToken("");
  }, []);

  const widget = <TurnstileWidget recaptchaRef={ref} onChange={setToken} onExpired={() => setToken("")} />;

  return { token, reset, widget };
}

export const CAPTCHA_MISSING_MESSAGE = "Please complete the verification above the button.";
