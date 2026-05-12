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
  Sparkles,
} from "lucide-react";

export default function TryItTodaySection() {
  const capabilities = [
    { text: "Answering calls", icon: PhoneCall, color: "from-blue-500 to-blue-600" },
    { text: "Qualifying leads", icon: Users, color: "from-indigo-500 to-indigo-600" },
    { text: "Following up", icon: Send, color: "from-purple-500 to-purple-600" },
    { text: "Confirming appointments", icon: Calendar, color: "from-teal-500 to-teal-600" },
    { text: 'Re-engaging leads', icon: RefreshCw, color: "from-amber-500 to-amber-600" },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-r from-blue-200/10 via-transparent to-indigo-200/10 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-4xl px-4 relative z-10">
        
        {/* Header with accent */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-sm text-[#3498db] font-medium uppercase tracking-wider mb-4">
            <Sparkles className="h-4 w-4" />
            <span>See it in action</span>
            <Sparkles className="h-4 w-4" />
          </div>
          <h2 className="text-4xl text-gray-800 font-light">
            Start seeing{" "}
            <span className="bg-gradient-to-r from-[#3498db] to-[#4b2d85] bg-clip-text text-transparent font-semibold">
              results
            </span>
          </h2>
          <p className="text-gray-500 mt-2">
            from day one — with zero effort
          </p>
        </div>

        {/* Capabilities - Colorful cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mb-12">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:border-[#3498db]/20 hover:shadow-md hover:shadow-[#3498db]/5 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-4 w-4 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-xs text-gray-600 font-medium text-center">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Features - Colored badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            <Clock className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-xs text-blue-700 font-medium">24/7 coverage</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100">
            <Languages className="h-3.5 w-3.5 text-purple-600" />
            <span className="text-xs text-purple-700 font-medium">50+ languages</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100">
            <Zap className="h-3.5 w-3.5 text-green-600" />
            <span className="text-xs text-green-700 font-medium">99.9% uptime</span>
          </div>
        </div>

        {/* Main CTA Card - Colorful */}
        <div className="relative">
          {/* Decorative gradient behind CTA */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3498db] via-[#4b2d85] to-[#f7e022] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
          
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="text-center">
              {/* Animated avatar */}
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#3498db] to-[#4b2d85] flex items-center justify-center mx-auto mb-4 shadow-lg">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3498db] to-[#4b2d85] animate-ping opacity-20" />
                <Phone className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-2xl text-gray-800 font-medium">
                Ready to experience{" "}
                <span className="bg-gradient-to-r from-[#3498db] to-[#4b2d85] bg-clip-text text-transparent">
                  Eva
                </span>
                ?
              </h3>
              
              <p className="text-gray-500 mt-2 mb-6">
                Our AI agent will call you within 10-15 seconds
              </p>

              {/* CTA Button - Gradient */}
              <button
                type="button"
                data-open-ai-form="true"
                className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#3498db] to-[#4b2d85] rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <PhoneCall className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                <span>Talk to Eva now</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust indicators - Styled */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50">
                  <Shield className="h-3.5 w-3.5 text-green-600" />
                  <span className="text-xs text-green-700">No credit card</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" />
                  <span className="text-xs text-amber-700">Zero commitment</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50">
                  <Clock className="h-3.5 w-3.5 text-blue-600" />
                  <span className="text-xs text-blue-700">10-15 sec response</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small print */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Live test calls available for US & Canada numbers
        </p>
      </div>
    </section>
  );
}