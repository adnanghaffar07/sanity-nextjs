'use client';

import { useFormik } from "formik";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from 'next/navigation';

type MathOperator = '+' ;

export default function MobileForm() {
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  // CAPTCHA state
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState<MathOperator>('+');
  const [userAnswer, setUserAnswer] = useState("");
  const [errorCaptcha, setErrorCaptcha] = useState("");
  const [shake, setShake] = useState(false);

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 20) + 1;
    const n2 = Math.floor(Math.random() * 20) + 1;
    const operators: MathOperator[] = ['+'];
    const op = operators[Math.floor(Math.random() * operators.length)];
    setNum1(n1);
    setNum2(n2);
    setOperator(op);
    setUserAnswer("");
    setErrorCaptcha("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const calculateAnswer = () => {
    switch (operator) {
      case '+': return num1 + num2;
      default: return num1 + num2;
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      contact_number: "",
      email: "",
      looking: "",
      message: "",
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.contact_number) errors.contact_number = "Phone number is required";
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      const correctAnswer = calculateAnswer();
      if (parseInt(userAnswer) !== correctAnswer) {
        setErrorCaptcha("Incorrect answer. Try again.");
        setShake(true);
        setTimeout(() => setShake(false), 500);
        generateCaptcha();
        return;
      }

      setUploading(true);
      try {
        const res = await fetch("/api/send-mobile-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values }),
        });

        if (res.ok) router.push("/thank-you-mobile-app");
        else alert("Submission failed. Try again.");
        resetForm();
        generateCaptcha();
      } catch (error) {
        console.error(error);
        alert("Submission failed.");
      } finally {
        setUploading(false);
      }
    },
  });

  return (
    <div className="flex justify-center items-center max-w-[400px] mx-auto bg-[#001E6B] shadow-lg rounded-2xl border border-gray-300">
      <div className="w-full max-w-md mx-auto px-4 py-6 sm:px-6">
        <h2 className="text-2xl font-semibold text-white mb-1">Start Your Project</h2>
        <p className="text-sm text-gray-200 mb-6">Request a Free Quote</p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            className="border-2 px-4 py-2 rounded-lg w-full text-black text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <PhoneInput
            country={"us"}
            value={formik.values.contact_number}
            onChange={(value) => formik.setFieldValue("contact_number", value)}
            inputClass="!w-full border-2 px-4 py-2 rounded-lg !text-black !text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            containerClass="!w-full"
            buttonClass="!bg-white !border-gray-300"
            placeholder="Phone Number"
          />
          {formik.touched.contact_number && formik.errors.contact_number && (
            <p className="text-red-500 text-sm">{formik.errors.contact_number}</p>
          )}

          <input
            className="border-2 px-4 py-2 rounded-lg w-full text-black text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />

          <input
            className="border-2 px-4 py-2 rounded-lg w-full text-black text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            placeholder="What are you looking for?"
            name="looking"
            value={formik.values.looking}
            onChange={formik.handleChange}
            required
          />

          <textarea
            className="border-2 px-4 py-2 rounded-lg w-full text-black text-sm resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            placeholder="Your Message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            rows={4}
          />

          {/* Sleek Modern CAPTCHA */}
          <div className={`flex flex-col items-center w-full shadow-sm ${shake ? "animate-shake" : ""}`}>
            <p className="text-gray-200 font-medium mb-2">Human Verification</p>
            <div className="flex items-center gap-3">
              <span className="text-white font-bold text-lg">{num1} {operator} {num2} =</span>
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-20 px-2 py-1 rounded-lg text-center font-semibold text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            {errorCaptcha && <p className="text-red-500 mt-2 text-sm">{errorCaptcha}</p>}
          </div>

          <button
            type="submit"
            disabled={uploading}
            className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-xl text-lg font-semibold shadow-md transition ${
              uploading ? "cursor-not-allowed opacity-70" : ""
            }`}
          >
            {uploading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Shake animation */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease;
        }
      `}</style>
    </div>
  );
}