"use client";

import React, { useState } from "react";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setIsSubmitting(true);

    const response = await fetch("/api/real-estate-audit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    setIsSubmitted(true);

    // Optional: reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
    });
  } catch (error) {
    console.error("Form submission error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="audit" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      {/* Premium Background Elements - Blue theme */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #3498db 1px, transparent 0)`,
        backgroundSize: '50px 50px',
        opacity: 0.03
      }} />
      
      {/* Soft Theme Color Glows - Blue & Yellow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3498db]/10 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f7e022]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3498db]/10 rounded-full blur-[120px]" />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Column - Content */}
            <div className="p-8 md:p-12 lg:p-14">
              {/* Premium Eyebrow - Blue */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#3498db]" />
                <span className="text-[#3498db] text-sm font-semibold tracking-[0.2em] uppercase">
                  Free audit — no commitment
                </span>
                <div className="w-8 h-px bg-[#3498db]" />
              </div>
              
              {/* Headline - Blue accent */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                See exactly what we&apos;d
                <br />
                <span className="relative inline-block mt-3">
                  <span className="relative z-10 font-serif italic text-[#3498db]">
                    automate for you
                  </span>
                  <div className="absolute bottom-2 left-0 right-0 h-3 bg-[#3498db]/20 -z-0" />
                </span>
              </h2>
              
              {/* Subtext */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We&apos;ll spend 30 minutes reviewing your current workflow and hand you a written plan showing the top 3–5 automations we&apos;d build, expected time saved, and estimated ROI. No pitch. No obligation.
              </p>
              
              {/* Benefits List - Blue Checkmarks */}
              <div className="space-y-3 mb-8">
                {[
                  "30-minute workflow audit",
                  "Written automation roadmap",
                  "ROI & time savings estimate",
                  "No sales pitch — just value",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-[#3498db]/10 group-hover:bg-[#3498db]/20 transition-colors flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#3498db]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* Note - Blue Accent Box */}
              <div className="bg-[#3498db]/5 rounded-xl p-4 border border-[#3498db]/20">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3498db] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="text-[#3498db]/80 text-sm font-medium">
                      Only available to US-based real estate operators
                    </p>
                    <p className="text-[#3498db]/60 text-xs mt-1">
                      Spots limited each month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 lg:p-14 border-l border-gray-100">
              <div className="max-w-md mx-auto">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Claim your free audit
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Fill out the form and we&apos;ll contact you within 24 hours
                  </p>
                </div>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Full name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20 transition-all duration-200"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Email address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20 transition-all duration-200"
                        placeholder="john@yourcompany.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Company name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20 transition-all duration-200"
                        placeholder="Your Real Estate Company"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20 transition-all duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f7e022] hover:bg-[#e6cd1a] text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#f7e022]/25 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative text-sm md:text-xl z-10">Claim your free automation audit</span>
                          <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-gray-400 text-xs mt-4">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#3498db]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#3498db]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank you!</h3>
                    <p className="text-gray-600">
                      We&apos;ll review your request and contact you within 24 hours to schedule your free audit.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators - Blue theme */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
          <div className="flex items-center gap-2 group">
            <svg className="w-5 h-5 text-[#3498db] group-hover:text-[#3498db]/80 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors">256-bit SSL Secure</span>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          
          <div className="flex items-center gap-2 group">
            <svg className="w-5 h-5 text-[#3498db] group-hover:text-[#3498db]/80 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors">Data protected</span>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          
          <div className="flex items-center gap-2 group">
            <svg className="w-5 h-5 text-[#3498db] group-hover:text-[#3498db]/80 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors">No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;