// app/workflows/social-media-automation/components/FinalCTASection.tsx
import { 
  Rocket, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Zap, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  BarChart,
  Users,
  Shield,
  Play
} from 'lucide-react';

export default function FinalCTASection() {
  const features = [
    { icon: <Zap className="w-4 h-4" />, text: "Full automation" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "Brand consistency" },
    { icon: <Clock className="w-4 h-4" />, text: "Time savings" },
    { icon: <BarChart className="w-4 h-4" />, text: "Better engagement" },
  ];

  const benefits = [
    { value: "20+", label: "Hours saved weekly", gradient: "from-[#00A3FF] to-[#0066CC]" },
    { value: "95%", label: "Reduced manual work", gradient: "from-[#00C9A7] to-[#00A3FF]" },
    { value: "3x", label: "More content output", gradient: "from-[#7B61FF] to-[#5A43CC]" },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFF]/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00A3FF]/5 via-white to-[#7B61FF]/5" />
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#00A3FF]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#7B61FF]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      
      <div className="relative max-w-6xl mx-auto">
        
        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-800 rounded-xl p-6 md:p-8 text-white shadow-lg overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#00A3FF]/20 to-[#7B61FF]/20 rounded-full -translate-y-12 translate-x-12" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#00C9A7]/20 to-[#00A3FF]/20 rounded-full translate-y-16 -translate-x-16" />
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              {/* Badge */}
              <div className="inline-flex items-center mb-4">
                <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#00A3FF] mr-2"></div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#00A3FF] to-[#7B61FF]">
                  <Rocket className="w-3 h-3 text-white mr-1.5" />
                  <span className="text-xs font-medium text-white">Ready to Automate?</span>
                </div>
                <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#7B61FF] ml-2"></div>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transform Your Social Media
                <span className="block mt-2 bg-gradient-to-r from-[#00A3FF] via-[#7B61FF] to-[#00C9A7] bg-clip-text text-transparent">
                  with CodeAutomation
                </span>
              </h2>
              
              {/* Location Badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <MapPin className="w-3 h-3 text-[#00A3FF] mr-1.5" />
                <span className="text-sm text-blue-200">Chicago-based • Serving Nationwide</span>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column - Value Proposition */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">CodeAutomation</span> is your go-to partner for automating your social media management. With our Social Media Automation Workflow, you can eliminate the stress of scheduling and focus more on what truly matters - creating amazing content.
                  </p>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="flex items-center mb-3">
                      <Sparkles className="w-4 h-4 text-[#00A3FF] mr-2" />
                      <h4 className="text-sm font-semibold">We Handle Everything</h4>
                    </div>
                    <p className="text-xs text-gray-300">
                      We handle the rest, making sure your posts are always on-brand, timely, and effective. 
                      Automate your social media process today and streamline your social media efforts like never before.
                    </p>
                  </div>
                </div>
                
                {/* Features List */}
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center p-2.5 bg-white/5 rounded-lg">
                      <div className="text-[#00A3FF] mr-2">{feature.icon}</div>
                      <span className="text-sm text-gray-300">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column - Benefits & Form */}
              <div className="space-y-6">
                {/* Benefits Stats */}
                <div className="bg-gradient-to-r from-[#00A3FF]/10 to-[#7B61FF]/10 rounded-lg p-5 border border-white/10">
                  <h4 className="text-sm font-semibold mb-4 text-center">What You&apos;ll Achieve</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="text-center">
                        <div className={`text-xl font-bold mb-1 bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                          {benefit.value}
                        </div>
                        <div className="text-xs text-gray-300">{benefit.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA Form */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10">
                  <h4 className="text-base font-semibold mb-4 text-center">Start Your Automation Journey</h4>
                  
                  <div className="space-y-3">
                    <a 
                      href="https://calendly.com/adnanghaffar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full group bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] hover:from-[#0066CC] hover:to-[#5A43CC] text-white py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
                    >
                      Book a Meeting
                      <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <div className="relative py-2">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="px-3 bg-transparent text-gray-400">or</span>
                      </div>
                    </div>
                    
                    <a 
                      href="https://calendly.com/adnanghaffar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-[1.02] border border-white/20 flex items-center justify-center"
                    >
                      <Calendar className="w-3.5 h-3.5 mr-2" />
                      Request Demo
                    </a>
                  </div>
                  
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Join 500+ teams automating their social media
                  </p>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="border-t border-white/10 pt-6">
              <h4 className="text-sm font-semibold text-center mb-4">Trusted By Industry Leaders</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Marketing Teams", icon: <Users className="w-4 h-4" /> },
                  { name: "Digital Agencies", icon: <TrendingUp className="w-4 h-4" /> },
                  { name: "E-commerce Brands", icon: <BarChart className="w-4 h-4" /> },
                  { name: "Startups", icon: <Rocket className="w-4 h-4" /> },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center p-3 bg-white/5 rounded-lg">
                    <div className="text-[#00A3FF] mb-1.5">{item.icon}</div>
                    <div className="text-xs text-gray-300 text-center">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Banner */}
        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-gray-600">
            <div className="flex items-center">
              <Shield className="w-3 h-3 text-[#00C9A7] mr-1.5" />
              <span>US-Based Company</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center">
              <MapPin className="w-3 h-3 text-[#00A3FF] mr-1.5" />
              <span>Chicago, Illinois</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div>© {new Date().getFullYear()} CodeAutomation</div>
          </div>
        </div>
      </div>
    </section>
  );
}