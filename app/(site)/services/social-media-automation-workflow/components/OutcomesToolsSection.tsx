// app/workflows/social-media-automation/components/OutcomesToolsSection.tsx
import { 
  Zap, 
  Workflow, 
  Brain, 
  Shield, 
  TrendingUp, 
  CheckCircle,
  Cpu,
  Code,
  MessageSquare,
  Calendar,
  Bell,
  Sparkles,
  Target,
  Layers,
  Infinity as InfinityIcon,
  BarChart,
  Users,
  Clock,
  ArrowRight,
  Play
} from 'lucide-react';

export default function OutcomesToolsSection() {
  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Full Automation",
      description: "From submission to posting, everything handled automatically across platforms",
      color: "blue",
      gradient: "from-[#00A3FF] to-[#0066CC]",
      features: ["Zero manual work", "Multi-platform", "24/7 operation"]
    },
    {
      icon: <Workflow className="w-5 h-5" />,
      title: "Post & Reel Workflows",
      description: "Tailored processes for posts and reels, ensuring efficiency",
      color: "purple",
      gradient: "from-[#7B61FF] to-[#5A43CC]",
      features: ["Smart routing", "Optimized steps", "No redundancy"]
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI-Generated Content",
      description: "Captions, hashtags, and metadata automatically generated",
      color: "green",
      gradient: "from-[#00C9A7] to-[#00A3FF]",
      features: ["Google Gemini AI", "SEO optimized", "Trend analysis"]
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Brand Consistency",
      description: "Every piece of content aligned with your brand guidelines",
      color: "indigo",
      gradient: "from-[#7B61FF] to-[#5A43CC]",
      features: ["Auto-enforced", "Voice matching", "Visual consistency"]
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Scalable",
      description: "Manages one account or multiple campaigns with linear performance",
      color: "orange",
      gradient: "from-[#FF6B82] to-[#FF4757]",
      features: ["Unlimited scaling", "Enterprise ready", "Consistent performance"]
    }
  ];

  const tools = [
    {
      name: "n8n",
      description: "Workflow automation backbone",
      detail: "Triggers process from form submission to scheduling",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-[#00C9A7] to-[#00A3FF]"
    },
    {
      name: "Google Gemini AI",
      description: "Intelligent content generation",
      detail: "Generates captions, hashtags, and metadata",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-[#00A3FF] to-[#0066CC]"
    },
    {
      name: "GoHighLevel",
      description: "Content scheduling platform",
      detail: "Uploads and schedules posts to platforms",
      icon: <Calendar className="w-6 h-6" />,
      gradient: "from-[#7B61FF] to-[#5A43CC]"
    },
    {
      name: "Slack & Email",
      description: "Real-time notifications",
      detail: "Updates on post scheduling and status",
      icon: <Bell className="w-6 h-6" />,
      gradient: "from-[#FF6B82] to-[#FF4757]"
    }
  ];

  const stats = [
    { 
      value: "95%", 
      label: "Time Saved", 
      icon: <Clock className="w-4 h-4" />,
      gradient: "from-[#00A3FF] to-[#0066CC]"
    },
    { 
      value: "3x", 
      label: "More Content", 
      icon: <BarChart className="w-4 h-4" />,
      gradient: "from-[#7B61FF] to-[#5A43CC]"
    },
    { 
      value: "40%", 
      label: "Higher Engagement", 
      icon: <Users className="w-4 h-4" />,
      gradient: "from-[#00C9A7] to-[#00A3FF]"
    },
    { 
      value: "100%", 
      label: "Consistency", 
      icon: <CheckCircle className="w-4 h-4" />,
      gradient: "from-[#FF6B82] to-[#FF4757]"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFF]/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#00A3FF] mr-3"></div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#00A3FF]/10 to-[#7B61FF]/10 border border-[#00A3FF]/20">
              <Target className="w-3 h-3 text-[#00A3FF] mr-1.5" />
              <span className="text-xs font-medium text-[#0066CC]">Outcomes & Benefits</span>
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#7B61FF] ml-3"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Transform Your Social Media
            <span className="block mt-2 bg-gradient-to-r from-[#00A3FF] via-[#7B61FF] to-[#00C9A7] bg-clip-text text-transparent">
              with CodeAutomation
            </span>
          </h2>
          
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Here&apos;s what you can expect when you use CodeAutomation for your social media management
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-lg p-4 border border-gray-200 hover:shadow-sm transition-all hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full mb-3 mx-auto bg-gradient-to-r ${stat.gradient} p-2`}>
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1 text-center">{stat.value}</div>
              <div className="text-sm text-gray-600 text-center">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div 
                key={index} 
                className={`group bg-white border border-gray-200 rounded-lg p-5 hover:shadow-sm transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-gradient-to-br ${benefit.gradient}`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{benefit.description}</p>
                
                <div className="space-y-2">
                  {benefit.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00C9A7] mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Full width benefit cards for last two */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.slice(3).map((benefit, index) => (
                  <div 
                    key={index} 
                    className={`group bg-white border border-gray-200 rounded-lg p-5 hover:shadow-sm transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-gradient-to-br ${benefit.gradient}`}>
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{benefit.description}</p>
                    
                    <div className="space-y-2">
                      {benefit.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="w-3.5 h-3.5 text-[#00C9A7] mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <div className="text-center mb-10">
            <div className="inline-flex items-center mb-4">
              <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#00A3FF] mr-2"></div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#00C9A7]/10 to-[#00A3FF]/10 border border-[#00C9A7]/20">
                <Cpu className="w-3 h-3 text-[#00C9A7] mr-1.5" />
                <span className="text-xs font-medium text-[#00A3FF]">Our Technology Stack</span>
              </div>
              <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#00A3FF] ml-2"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Tools We Use</h3>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Powered by industry-leading technologies for reliable, scalable automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="group bg-white rounded-lg p-4 border border-gray-200 hover:shadow-sm transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg mb-4 bg-gradient-to-r ${tool.gradient} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <div className="text-white">{tool.icon}</div>
                </div>
                
                <h4 className="text-base font-bold text-gray-900 mb-1">{tool.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
                <p className="text-xs text-gray-500">{tool.detail}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">Integrates with:</div>
                  <div className="flex items-center">
                    {tools
                      .filter((_, i) => i !== index)
                      .slice(0, 2)
                      .map((otherTool, i) => (
                        <div 
                          key={i}
                          className={`w-6 h-6 -ml-1.5 first:ml-0 rounded-full border border-white bg-gradient-to-r ${otherTool.gradient} flex items-center justify-center text-white text-[10px] font-bold`}
                        >
                          {otherTool.name.charAt(0)}
                        </div>
                      ))}
                    {tools.filter((_, i) => i !== index).length > 2 && (
                      <div className="w-6 h-6 -ml-1.5 rounded-full border border-white bg-gray-100 flex items-center justify-center text-gray-600 text-[10px] font-bold">
                        +{tools.filter((_, i) => i !== index).length - 2}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integration Flow */}
          <div className="bg-gradient-to-r from-[#00A3FF]/5 to-[#7B61FF]/5 rounded-lg p-5 border border-[#00A3FF]/20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center mb-6 md:mb-0">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${tool.gradient} flex items-center justify-center mb-2`}>
                    <div className="text-white">{tool.icon}</div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{tool.name}</span>
                  {index < tools.length - 1 && (
                    <div className="hidden md:block mt-3">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              All tools work together in perfect harmony to deliver complete automation
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#00A3FF] via-[#7B61FF] to-[#00C9A7] rounded-lg p-8 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <Sparkles className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                Ready to Experience These Benefits?
              </h3>
              <p className="text-sm text-blue-100 mb-6 max-w-xl mx-auto">
                Join thousands of teams who have transformed their social media management with CodeAutomation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="https://calendly.com/adnanghaffar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-white text-gray-900 hover:bg-blue-50 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] flex items-center justify-center"
                >
                  <InfinityIcon className="w-3.5 h-3.5 inline mr-2 group-hover:rotate-180 transition-transform" />
                  Book a Meeting
                </a>
                <a 
                  href="https://calendly.com/adnanghaffar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] flex items-center justify-center"
                >
                  <Play className="w-3.5 h-3.5 inline mr-2 group-hover:scale-110 transition-transform" />
                  Request Demo
                </a>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Free consultation • No commitment • Expert guidance
          </p>
        </div>
      </div>
    </section>
  );
}