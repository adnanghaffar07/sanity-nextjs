"use client";

import { useEffect, useState } from "react";

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

  return (
    <div
      className="mt-6 flex flex-col items-center justify-center gap-2 rounded-xl border border-[#d8dbea] bg-[#f8f9fd] px-6 py-5 text-center"
      role="timer"
      aria-live="polite"
      aria-atomic="true"
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-[#24345f]">
        Estimated time until your call
      </p>
      <p className="text-5xl font-black tabular-nums text-[#5b35a0] md:text-6xl">
        {secondsLeft}
        <span className="ml-2 text-2xl font-bold text-[#24345f] md:text-3xl">sec</span>
      </p>
      {secondsLeft === 0 ? (
        <p className="text-sm font-medium text-[#24345f]">Your phone should ring any moment...</p>
      ) : null}
    </div>
  );
}
