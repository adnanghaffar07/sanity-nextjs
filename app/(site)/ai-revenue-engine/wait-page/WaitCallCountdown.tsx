"use client";

import { useEffect, useState } from "react";
import { Phone, Clock } from "lucide-react";

export default function WaitCallCountdown({ startSeconds = 60 }: { startSeconds?: number }) {
  const [secondsLeft, setSecondsLeft] = useState(startSeconds);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          window.clearInterval(id);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [startSeconds]);

  // Format seconds to MM:SS format for longer waits
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins > 0) {
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    return `${seconds}`;
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 text-center border border-gray-100 shadow-sm"
      role="timer"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#3498db]/5 to-transparent rounded-full blur-xl" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#f7e022]/5 to-transparent rounded-full blur-xl" />

      {/* Icon */}
      <div className="flex justify-center mb-3">
        <div className="w-10 h-10 rounded-full bg-[#3498db]/10 flex items-center justify-center">
          <Phone className="w-5 h-5 text-[#3498db]" />
        </div>
      </div>
      {/* Timer */}
      <div className="mb-2">
        <span className="text-5xl font-light text-gray-800 tabular-nums">
          {formatTime(secondsLeft)}
        </span>
        {secondsLeft > 0 && (
          <span className="ml-1 text-lg text-gray-400">seconds</span>
        )}
      </div>

      {/* Progress bar */}
      {secondsLeft > 0 && (
        <div className="w-full max-w-[200px] mx-auto mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#3498db] to-[#4b2d85] rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${((startSeconds - secondsLeft) / startSeconds) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}