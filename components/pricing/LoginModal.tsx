"use client";

// Sign-in / sign-up dialog on the pricing page. The server sets an httpOnly
// session cookie on success (lib/auth/session.ts); nothing is stored here.

import { useEffect, useRef, useState } from "react";
import { GoogleLogin, GoogleOAuthProvider, type CredentialResponse } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "@/lib/auth/google";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GENERIC_ERROR = "Something went wrong. Please try again.";

const LoginModal = ({
  isOpen,
  onClose,
  onLoginSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside the dialog.
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Posts to one of the auth routes; on success the session cookie is set.
  const signIn = async (endpoint: string, body: Record<string, string>) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (!res.ok || !data.success) throw new Error(data.error || GENERIC_ERROR);
      onLoginSuccess();
      onClose();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : GENERIC_ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSubmit = () => {
    if (!EMAIL_PATTERN.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    signIn(isSignUp ? "/api/auth/register" : "/api/auth/login", { email, password });
  };

  const handleGoogleLoginSuccess = ({ credential }: CredentialResponse) => {
    if (!credential) {
      setErrorMessage("Google login failed. Please try again.");
      return;
    }
    signIn("/api/auth/google-login", { tokenId: credential });
  };

  const handleGoogleLoginFailure = () => setErrorMessage("Google login failed. Please try again.");

  if (!isOpen) return null;

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex px-6 items-center justify-center z-50">
        <div ref={modalRef} className="bg-white px-6 md:px-12 py-6 rounded-lg shadow-lg mt-16 md:mt-24 w-full md:w-[500px]">
          <h3 className="text-2xl font-medium mb-6 text-center">
            {isSignUp ? "Sign Up" : "Sign in"} to View Full Plan
          </h3>

          {errorMessage && (
            <div className="text-red-500 text-center -mt-3 mb-4">
              {errorMessage}
            </div>
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-gray-100 rounded-md mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 bg-gray-100 rounded-md mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-center">
            <button
              className="bg-[#1D92FB] text-white w-fit py-2 px-6 rounded-md flex items-center justify-center"
              onClick={handleEmailSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full"
                  viewBox="0 0 24 24"
                ></svg>
              ) : (
                isSignUp ? "Sign Up" : "Login"
              )}
            </button>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-800" />
            <span className="mx-2 text-black text-xl">Or</span>
            <hr className="flex-1 border-gray-800" />
          </div>

          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
            useOneTap
          />

          <div className="text-center mt-4">
            <span>{isSignUp ? "Already have an account?" : "Don't have an account?"}</span>
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-500 ml-2"
            >
              {isSignUp ? "Login" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginModal;
