"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { GoogleLogin } from "@react-oauth/google";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    const token = Cookies.get("authToken") || localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true); // Start loading
    setErrorMessage(""); // Clear previous errors

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setIsLoading(false); // Stop loading

    if (data.success) {
      Cookies.set("authToken", data.token, { expires: 30 });
      localStorage.setItem("authToken", data.token);
      onLoginSuccess();
      onClose();
      setIsLoggedIn(true);
    } else {
      setErrorMessage(data.error || "Something went wrong. Please try again.");
    }
  };

  const handleSignUp = async () => {
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setIsLoading(false);

    if (data.success) {
      onLoginSuccess();
      onClose();
    } else {
      setErrorMessage(data.error || "Something went wrong. Please try again.");
    }
  };

  const handleGoogleLoginSuccess = async (response: any) => {
    const { credential } = response;
    setIsLoading(true);

    const res = await fetch("/api/auth/google-login", {
      method: "POST",
      body: JSON.stringify({ tokenId: credential }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setIsLoading(false);

    if (data.success) {
      Cookies.set("authToken", data.token, { expires: 30 });
      onLoginSuccess();
      onClose();
      setIsLoggedIn(true);
    } else {
      setErrorMessage(data.error || "Something went wrong. Please try again.");
    }
  };

  const handleGoogleLoginFailure = () => {
    console.error("Google login failed");
    setErrorMessage("Google login failed. Please try again.");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex px-6 items-center justify-center z-50">
      <div className="bg-white px-6 md:px-12 py-6 rounded-lg shadow-lg mt-16 md:mt-24 w-full md:w-[500px]">
        <h2 className="text-2xl font-medium mb-6 text-center">
          {isSignUp ? "Sign Up" : "Sign in"} to View Full Plan
        </h2>

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
            onClick={isSignUp ? handleSignUp : handleLogin}
            disabled={isLoading} // Disable button while loading
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
  );
};

export default LoginModal;
