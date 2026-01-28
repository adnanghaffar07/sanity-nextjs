// app/workflows/social-media-automation/components/FAQSection.tsx
"use client"
import { useState } from 'react';
import { 
  ChevronDown, 
  MessageSquare, 
  Zap, 
  Sparkles, 
  Users,
  Shield,
  Target,
  TrendingUp,
  Clock,
  Calendar,
  Brain,
  Workflow,
  CheckCircle,
  HelpCircle,
  Mail,
  Phone
} from 'lucide-react';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqs = [
    {
      question: "How does social media automation save time for my team?",
      answer: "Social media automation with CodeAutomation eliminates the need for manually scheduling posts across platforms like Facebook, Instagram, and LinkedIn. By automating caption creation, hashtag generation, and image/video processing, you free up your team to focus on creative strategies instead of repetitive tasks. Our system takes care of everything, from planning to publishing, automatically.",
      icon: <Clock className="w-4 h-4" />,
      category: "Time Savings"
    },
    {
      question: "Can CodeAutomation handle both social media posts and video reels?",
      answer: "Yes! Whether you need to schedule a regular social media post or a video reel, CodeAutomation has you covered. Our system intelligently detects the type of content being submitted and processes it accordingly. For posts, we handle image editing, caption generation, and scheduling. For reels, we manage thumbnail creation, video production, and scheduling, all automated.",
      icon: <MessageSquare className="w-4 h-4" />,
      category: "Content Types"
    },
    {
      question: "What makes CodeAutomation's social media automation different from other tools?",
      answer: "Unlike other social media tools, CodeAutomation goes beyond just scheduling posts. Our system integrates Google Gemini AI, which automatically generates captions, hashtags, and metadata based on your content. We also provide smart image and video processing, ensuring your posts are always polished, on-brand, and ready for publication without extra effort from your team.",
      icon: <Sparkles className="w-4 h-4" />,
      category: "Unique Features"
    },
    {
      question: "How does AI help improve social media content?",
      answer: "Our AI integration with Google Gemini ensures that every post is optimized for engagement. It automatically generates high-quality captions and hashtags based on your input, helping you reach a larger audience. AI also analyzes images and videos to ensure they meet your style and theme requirements, making your social media presence consistent and professional.",
      icon: <Brain className="w-4 h-4" />,
      category: "AI Benefits"
    },
    {
      question: "Is CodeAutomation suitable for businesses with multiple social media accounts?",
      answer: "Yes! Whether you manage a single social media account or multiple campaigns, CodeAutomation is designed to scale with your needs. The system handles posts and reels across various platforms, including Facebook, Instagram, and LinkedIn, all from one centralized workflow. You can easily manage multiple schedules, content types, and campaigns with minimal effort.",
      icon: <Users className="w-4 h-4" />,
      category: "Scalability"
    },
    {
      question: "How can I ensure that my posts stay on-brand using automation?",
      answer: "CodeAutomation ensures that all your posts stay on-brand by using structured Social Planner forms to capture all the details you need, such as your preferred style, tone, and colors. The system adheres to these brand guidelines when generating captions, selecting hashtags, and processing images and videos. You can rest easy knowing your content is consistently aligned with your brand's voice and visual identity.",
      icon: <Shield className="w-4 h-4" />,
      category: "Brand Consistency"
    },
    {
      question: "What happens if I need to make last-minute changes to a scheduled post?",
      answer: "Making updates is simple with CodeAutomation. If you need to change the caption, image, or scheduling time of a post or reel, just update the details in the Social Planner form. The system automatically adjusts and reschedules your content according to your new preferences. No need to manually rework anything—you have complete flexibility.",
      icon: <Calendar className="w-4 h-4" />,
      category: "Flexibility"
    },
    {
      question: "Can I automate my social media posts for the long term, or is this a short-term solution?",
      answer: "CodeAutomation is built to automate your social media posting over the long term. Once you set up your workflows, the system will continue to handle your social media content seamlessly. Whether you're scheduling posts for the next week or month, you can rely on our system to manage your content without manual intervention.",
      icon: <Workflow className="w-4 h-4" />,
      category: "Long-term Solution"
    },
    {
      question: "How does CodeAutomation help boost my social media engagement?",
      answer: "By automating the process of generating captions, hashtags, and metadata, CodeAutomation ensures that your content is always optimized for maximum reach and engagement. With the power of Google Gemini AI, your posts are crafted to attract attention, boost interactions, and drive traffic to your social profiles.",
      icon: <TrendingUp className="w-4 h-4" />,
      category: "Engagement"
    },
    {
      question: "Is CodeAutomation easy to set up, or do I need a lot of technical knowledge?",
      answer: "Setting up CodeAutomation is simple and doesn't require any technical expertise. Our workflow system is user-friendly, and we provide all the tools you need to create posts and reels, schedule them, and track results. You don't need to be a tech expert. Just fill out the Social Planner form, and we'll handle the rest.",
      icon: <Zap className="w-4 h-4" />,
      category: "Ease of Use"
    }
  ];

  const categories = [
    { name: "All", count: faqs.length, icon: <HelpCircle className="w-3.5 h-3.5" /> },
    { name: "Time Savings", count: 1, icon: <Clock className="w-3.5 h-3.5" /> },
    { name: "Content Types", count: 1, icon: <MessageSquare className="w-3.5 h-3.5" /> },
    { name: "Unique Features", count: 1, icon: <Sparkles className="w-3.5 h-3.5" /> },
    { name: "AI Benefits", count: 1, icon: <Brain className="w-3.5 h-3.5" /> },
    { name: "Scalability", count: 1, icon: <Users className="w-3.5 h-3.5" /> },
    { name: "Brand Consistency", count: 1, icon: <Shield className="w-3.5 h-3.5" /> },
    { name: "Flexibility", count: 1, icon: <Calendar className="w-3.5 h-3.5" /> },
    { name: "Long-term", count: 1, icon: <Workflow className="w-3.5 h-3.5" /> },
    { name: "Engagement", count: 1, icon: <TrendingUp className="w-3.5 h-3.5" /> },
    { name: "Ease of Use", count: 1, icon: <Zap className="w-3.5 h-3.5" /> }
  ];

  const filteredFaqs = faqs.filter(faq => {
    return selectedCategory === 'All' || faq.category === selectedCategory;
  });

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFF]/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#00A3FF] mr-3"></div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#00A3FF]/10 to-[#7B61FF]/10 border border-[#00A3FF]/20">
              <HelpCircle className="w-3 h-3 text-[#00A3FF] mr-1.5" />
              <span className="text-xs font-medium text-[#0066CC]">FAQ Center</span>
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#7B61FF] ml-3"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about automating your social media with CodeAutomation
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat.name
                    ? 'bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span className="mr-2 opacity-80">{cat.icon}</span>
                {cat.name}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  selectedCategory === cat.name 
                    ? 'bg-white/20' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-12">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Try selecting a different category or view all questions
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`p-2 rounded-lg flex-shrink-0 ${
                        activeIndex === index
                          ? 'bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] text-white'
                          : 'bg-gradient-to-r from-[#00A3FF]/10 to-[#7B61FF]/10 text-[#00A3FF]'
                      }`}>
                        {faq.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 pr-8">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                        activeIndex === index ? 'transform rotate-180 text-[#00A3FF]' : ''
                      }`}
                    />
                  </button>
                  
                  {activeIndex === index && (
                    <div className="px-6 pb-4 pt-2">
                      <div className="pl-12">
                        <div className="border-l-2 border-[#00A3FF] pl-4">
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                          <div className="mt-4 flex items-center space-x-2 text-xs text-gray-500">
                            <CheckCircle className="w-3.5 h-3.5 text-[#00C9A7]" />
                            <span>Includes automation, AI, and brand consistency</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "24/7", label: "Support", icon: <Shield className="w-4 h-4" />, color: "bg-[#00A3FF]/10 text-[#00A3FF]" },
            { value: "99.9%", label: "Uptime", icon: <Zap className="w-4 h-4" />, color: "bg-[#7B61FF]/10 text-[#7B61FF]" },
            { value: "500+", label: "Teams", icon: <Users className="w-4 h-4" />, color: "bg-[#00C9A7]/10 text-[#00C9A7]" },
            { value: "95%", label: "Satisfaction", icon: <TrendingUp className="w-4 h-4" />, color: "bg-[#FF6B82]/10 text-[#FF6B82]" },
          ].map((stat, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="bg-gradient-to-r from-[#00A3FF]/5 via-white to-[#7B61FF]/5 rounded-xl p-8 border border-[#00A3FF]/20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0 lg:mr-8 flex-1">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded-lg mr-3">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Still need help?</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Our team is ready to assist you with any questions
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-white border border-gray-200 rounded-lg">
                  <Mail className="w-4 h-4 text-[#00A3FF] mr-3" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Email Us</div>
                    <a href="mailto:info@codeautomation.ai" className="text-xs text-gray-500 hover:text-[#00A3FF]">
                      info@codeautomation.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-center mr-3">
                    <Phone className="w-4 h-4 text-[#7B61FF]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Call Us</div>
                    <a href="tel:8505584691" className="text-xs text-gray-500 hover:text-[#7B61FF]">
                      850.558.4691
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-3 w-full lg:w-auto">
              <a 
                href="https://calendly.com/adnanghaffar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] hover:from-[#0066CC] hover:to-[#5A43CC] text-white px-8 py-3 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] w-full lg:w-auto"
              >
                <MessageSquare className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Book a Meeting
              </a>
              <a 
                href="https://calendly.com/adnanghaffar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-white border border-[#00A3FF] text-[#00A3FF] hover:bg-[#00A3FF]/5 px-8 py-3 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] w-full lg:w-auto"
              >
                <Calendar className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}