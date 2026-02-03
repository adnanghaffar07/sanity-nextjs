import { Clock, Users, Target, AlertCircle, MapPin, FileText, Palette, Calendar, MessageSquare, Sparkles, Zap } from 'lucide-react';

export default function ProblemSection() {
  const painPoints = [
    {
      icon: <FileText className="w-4 h-4" />,
      title: "Writing Captions",
      description: "Crafting engaging, on-brand captions takes hours",
      time: "1-2 hours/day",
      color: "text-[#00A3FF]",
      bgColor: "bg-[#00A3FF]/10"
    },
    {
      icon: <Palette className="w-4 h-4" />,
      title: "Designing Visuals",
      description: "Creating and editing images for each platform",
      time: "2-3 hours/day",
      color: "text-[#7B61FF]",
      bgColor: "bg-[#7B61FF]/10"
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      title: "Scheduling Posts",
      description: "Coordinating posting times across multiple platforms",
      time: "1 hour/day",
      color: "text-[#00C9A7]",
      bgColor: "bg-[#00C9A7]/10"
    },
    {
      icon: <MessageSquare className="w-4 h-4" />,
      title: "Brand Consistency",
      description: "Ensuring everything stays consistent with your brand voice",
      time: "30 min/day",
      color: "text-[#FF6B82]",
      bgColor: "bg-[#FF6B82]/10"
    }
  ];

  return (
    <section id="problem" className="mt-16 py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFF]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#00A3FF] mr-3"></div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#00A3FF]/10 to-[#7B61FF]/10 border border-[#00A3FF]/20">
              <Zap className="w-3 h-3 text-[#00A3FF] mr-1.5" />
              <span className="text-xs font-medium text-[#0066CC]">The Automation Solution</span>
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#7B61FF] ml-3"></div>
          </div>
          
          <div className="relative mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Social Media Automation
              <span className="block mt-2 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] bg-clip-text text-transparent">
                Made Simple
              </span>
            </h2>
            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-[#00A3FF]/20 to-[#7B61FF]/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-soft border border-gray-100 mb-10">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] p-2 rounded-lg shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <p className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-6 leading-snug">
                &quot;Content creation isn&apos;t the challenge.
                <span className="block mt-2 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] bg-clip-text text-transparent">
                  It&apos;s the repetitive execution.&quot;
                </span>
              </p>
              
              <div className="flex justify-center mb-6">
                <div className="flex space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] opacity-70"></div>
                  ))}
                </div>
              </div>
              
              <p className="text-base text-gray-600 text-center leading-relaxed">
                Writing captions, designing visuals, scheduling posts, and ensuring everything 
                stays consistent with your brand voice - these repetitive tasks consume valuable creative time.
              </p>
            </div>
            
            <p className="text-base text-gray-700 italic text-center">
              Teams spend <span className="font-bold text-[#0066CC]">70% more time</span> on execution than creativity
            </p>
          </div>
        </div>

        {/* Problem Details */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          {/* Left Column - Pain Points */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00A3FF] via-[#7B61FF] to-[#00C9A7] rounded-full opacity-50"></div>
            
            <div className="pl-6">
              <div className="flex items-center mb-8">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-[#00A3FF]/10 to-[#7B61FF]/10 mr-3">
                  <AlertCircle className="w-5 h-5 text-[#00A3FF]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  The Daily Automation Gap
                </h2>
              </div>
              
              <div className="space-y-5">
                {painPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white p-5 rounded-xl border border-gray-100 hover:border-[#00A3FF]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`${point.bgColor} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <div className={point.color}>{point.icon}</div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {point.title}
                          </h3>
                          <span className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full w-fit border border-gray-200">
                            {point.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{point.description}</p>
                      </div>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="mt-5">
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${point.bgColor} rounded-full transition-all duration-1000 ease-out group-hover:scale-x-110`}
                          style={{ 
                            width: index === 0 ? '90%' : 
                                   index === 1 ? '75%' : 
                                   index === 2 ? '60%' : '45%' 
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Total Time Calculation */}
              <div className="mt-10 bg-gradient-to-r from-[#00A3FF]/5 to-[#7B61FF]/5 border border-[#00A3FF]/20 rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div>
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 text-[#0066CC] mr-2" />
                      <h4 className="font-bold text-gray-900 text-base">Daily Time Lost</h4>
                    </div>
                    <p className="text-sm text-gray-600">Without intelligent automation</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] bg-clip-text text-transparent">4-6 hours</div>
                    <div className="text-sm text-gray-600">Per team member</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Solution Introduction */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A3FF]/10 via-transparent to-[#7B61FF]/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-2xl p-8 text-white overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A3FF]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#7B61FF]/10 rounded-full blur-3xl"></div>
              
              {/* CodeAutomation Brand Badge */}
              <div className="hidden md:flex absolute top-6 right-6 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] px-3 py-1.5 rounded-full text-xs font-semibold items-center shadow-lg">
                <Zap className="w-3 h-3 mr-1.5" />
                CodeAutomation.ai
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] p-2 rounded-lg mr-3 shadow-lg">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">CodeAutomation Solution</h4>
                    <p className="text-sm text-gray-300">Chicago-based Automation Experts</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 leading-tight">
                    This is where 
                    <span className="block mt-2 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] bg-clip-text text-transparent">
                      CodeAutomation transforms
                    </span>
                    your workflow
                  </h2>
                  
                  <p className="text-gray-300 text-base mb-8 leading-relaxed">
                    While your team focuses on creativity, we automate the execution. 
                    Transform time-consuming manual tasks into seamless automated workflows.
                  </p>
                  
                  {/* Transformation Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-[#00A3FF]/30 transition-colors">
                      <div className="text-xl font-bold bg-gradient-to-r from-[#00C9A7] to-[#00A3FF] bg-clip-text text-transparent">95%</div>
                      <div className="text-xs text-gray-400 mt-2">Reduction in manual work</div>
                    </div>
                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-[#7B61FF]/30 transition-colors">
                      <div className="text-xl font-bold bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] bg-clip-text text-transparent">4x</div>
                      <div className="text-xs text-gray-400 mt-2">Faster execution time</div>
                    </div>
                  </div>
                </div>

                {/* Before/After Comparison */}
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 mr-2"></div>
                        <h4 className="text-sm font-semibold text-gray-300">Before Automation</h4>
                      </div>
                      <ul className="space-y-2">
                        {["Manual content scheduling", "Inconsistent branding", "Time-consuming coordination"].map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#00A3FF] mr-2"></div>
                        <h4 className="text-sm font-semibold text-gray-300">With CodeAutomation</h4>
                      </div>
                      <ul className="space-y-2">
                        {["Automated workflows", "Brand consistency guaranteed", "Focus on creativity"].map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-[#00C9A7] rounded-full mr-2 shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* US Badge */}
            <div className="hidden lg:block absolute -bottom-4 -right-4 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] text-white px-4 py-2 rounded-xl shadow-xl border border-white/10">
              <div className="flex items-center">
                <div className="bg-white/20 p-1 rounded-lg mr-2">
                  <MapPin className="w-3 h-3" />
                </div>
                <div>
                  <div className="text-xs font-semibold">US-Based Experts</div>
                  <div className="text-[10px] opacity-90">Chicago, Illinois</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Banner */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00A3FF] via-[#7B61FF] to-[#00C9A7] opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
          
          <div className="relative text-center p-8">
            <Sparkles className="w-6 h-6 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              The Problem is Clear. 
              <span className="block mt-2">The Automation Solution is Here.</span>
            </h3>
            <p className="text-white/90 text-base mb-6 max-w-2xl mx-auto leading-relaxed">
              Stop spending valuable creative time on repetitive execution tasks. 
              Let CodeAutomation transform your social media strategy with intelligent automation.
            </p>
            <a 
              href="https://calendly.com/adnanghaffar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-white text-gray-900 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>Book a Meeting</span>
              <Zap className="w-3.5 h-3.5 ml-2 text-[#00A3FF] group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}