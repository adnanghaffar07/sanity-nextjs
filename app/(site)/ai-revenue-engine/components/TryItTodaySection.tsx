"use client";
import React from "react";
import {
  PhoneCall,
  Users,
  Send,
  Calendar,
  RefreshCw,
  CheckCircle2,
  Clock,
  Languages,
  ArrowRight,
  Phone,
  Shield,
  Zap,
} from "lucide-react";

export default function TryItTodaySection() {
  const capabilities = [
    { text: "Answering calls", icon: PhoneCall },
    { text: "Qualifying leads", icon: Users },
    { text: "Following up", icon: Send },
    { text: "Confirming appointments", icon: Calendar },
    { text: 'Re-engaging "dead" leads', icon: RefreshCw },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3498db] opacity-[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f7e022] opacity-[0.02] rounded-full blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 md:px-6 relative z-10">
        {/* Header - Compact */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Try It{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#3498db] to-[#2c7ab8] bg-clip-text text-transparent">
                Today
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full h-3"
                viewBox="0 0 200 8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4 Q 50 8 100 4 Q 150 0 200 4"
                  stroke="#f7e022"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
            AI Sales Agents can supercharge any part of your revenue process:
          </p>
        </div>

        {/* Capabilities - Compact horizontal scroll on mobile, grid on desktop */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 transition-all duration-200 hover:border-[#3498db]/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#3498db]/10 to-[#f7e022]/10 transition-all duration-200 group-hover:scale-105">
                  <Icon className="h-4 w-4 text-[#3498db]" strokeWidth={1.7} />
                </div>
                <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Features row - Sleek badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-[#3498db]/5 px-3 py-1.5">
            <Clock className="h-3.5 w-3.5 text-[#3498db]" />
            <span className="text-xs font-medium text-gray-700">24/7/365</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-[#f7e022]/10 px-3 py-1.5">
            <Languages className="h-3.5 w-3.5 text-[#d4b000]" />
            <span className="text-xs font-medium text-gray-700">50+ Languages</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5">
            <Zap className="h-3.5 w-3.5 text-gray-500" />
            <span className="text-xs font-medium text-gray-700">Zero Downtime</span>
          </div>
        </div>

        {/* Highlight - One line */}
        <p className="mt-6 text-center text-sm text-gray-600">
          No days off. No sick leaves. No raises. Just{" "}
          <span className="font-semibold text-[#3498db]">24/7/365</span> performance.
        </p>

        {/* CTA Box - Compact & Clean */}
        <div className="mt-10 relative">
          <div className="relative rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 md:p-8 text-center shadow-sm">
            {/* Decorative icon */}
            <div className="absolute top-4 right-4 opacity-10">
              <Phone className="h-16 w-16 text-[#f7e022]" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Ready to experience it in{" "}
              <span className="text-[#3498db]">action?</span>
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Meet Emma — she&apos;ll call you within 60 seconds.
            </p>

            {/* CTA Button */}
            <button
              type="button"
              data-open-ai-form="true"
              className="group my-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3498db] to-[#2c7ab8] px-7 py-4 text-md font-semibold text-white shadow-md shadow-[#3498db]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#3498db]/30 hover:scale-105"
            >
              <PhoneCall className="h-6 w-6 transition-transform group-hover:rotate-12" />
              TALK TO OUR AI NOW
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                No credit card
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-green-500" />
                Zero commitment
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                60 sec response
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}