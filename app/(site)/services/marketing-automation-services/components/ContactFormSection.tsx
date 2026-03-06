'use client';

import { useState } from "react";
import { 
  Send,
  CheckCircle,
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  MessageSquare,
  ArrowRight,
  Sparkles,
  AlertCircle,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    tools: '',
    challenge: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! We\'ll be in touch within one business day.'
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          industry: '',
          tools: '',
          challenge: '',
        });
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send. Please try again or email us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    "Healthcare",
    "FinTech", 
    "eCommerce",
    "SaaS & B2B",
    "EdTech",
    "Real Estate",
    "Logistics",
    "Other"
  ];

  return (
    <section id="contact-box" className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 1px 1px, #1d92fb 1px, transparent 0)`,
             backgroundSize: '24px 24px'
           }}>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#1d92fb]/10 border border-[#1d92fb]/20 rounded-full px-3 py-1.5 mb-3">
            <Mail className="w-3.5 h-3.5 text-[#1d92fb]" />
            <span className="text-sm font-semibold text-[#1d92fb] tracking-wide">FREE AUDIT</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-[#020C16] mb-2">
            Get Your Free Marketing Audit
          </h2>
          
          <p className="text-md text-gray-500">
            Fill out the form below and we&apos;ll analyze your current setup before our call.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <Clock className="w-3.5 h-3.5 text-[#1d92fb]" />
            <span>24h response</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <Shield className="w-3.5 h-3.5 text-[#1d92fb]" />
            <span>NDA protected</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <User className="w-3.5 h-3.5 text-[#1d92fb]" />
            <span>Senior team</span>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-5">
            {/* Success/Error Messages */}
            {submitStatus.type && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-700' 
                  : 'bg-red-50 border border-red-200 text-red-700'
              }`}>
                <div className="flex items-center gap-1.5">
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-3.5 h-3.5" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5" />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              </div>
            )}

            {/* Form Fields - Compact Grid */}
            <div className="space-y-3">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d92fb] focus:ring-1 focus:ring-[#1d92fb]/20 transition-all bg-gray-50/50"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d92fb] focus:ring-1 focus:ring-[#1d92fb]/20 transition-all bg-gray-50/50"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d92fb] focus:ring-1 focus:ring-[#1d92fb]/20 transition-all bg-gray-50/50"
                  placeholder="Work email"
                  required
                />
              </div>

              {/* Company & Phone Row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d92fb] focus:ring-1 focus:ring-[#1d92fb]/20 transition-all bg-gray-50/50"
                    placeholder="Company"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d92fb] focus:ring-1 focus:ring-[#1d92fb]/20 transition-all bg-gray-50/50"
                    placeholder="Phone (optional)"
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d92fb] focus:ring-1 focus:ring-[#1d92fb]/20 transition-all bg-gray-50/50 text-gray-700"
                  required
                >
                  <option value="" disabled>Select your industry</option>
                  {industries.map(ind => (
                    <option key={ind} value={ind.toLowerCase()}>{ind}</option>
                  ))}
                </select>
              </div>

              {/* Current Tools */}
              <div>
                <input
                  type="text"
                  name="tools"
                  value={formData.tools}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d92fb] focus:ring-1 focus:ring-[#1d92fb]/20 transition-all bg-gray-50/50"
                  placeholder="Current tools (e.g., HubSpot, Salesforce)"
                />
              </div>

              {/* Challenge */}
              <div>
                <textarea
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1d92fb] focus:ring-1 focus:ring-[#1d92fb]/20 transition-all bg-gray-50/50 resize-none"
                  placeholder="What's your biggest marketing challenge?"
                  required
                />
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 border-t border-gray-100"></div>

            {/* What's Included - Compact */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#1d92fb]" />
                <span>Your free audit includes:</span>
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  "Tech stack analysis",
                  "Funnel review", 
                  "ROI opportunities",
                  "Custom roadmap"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#020C16] to-[#1d92fb] text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    <span>Request Free Audit</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
            </button>

            {/* Footer Note */}
            <p className="text-[10px] text-gray-400 text-center mt-3">
              No spam. Unsubscribe anytime. We&apos;ll never share your data.
            </p>
          </form>
        </div>

        {/* Bottom Trust Badge */}
        <div className="flex justify-center items-center gap-3 mt-4">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span className="text-[10px] text-gray-400">Enterprise ready</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <span className="text-[10px] text-gray-400">GDPR compliant</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            <span className="text-[10px] text-gray-400">SSL secure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;