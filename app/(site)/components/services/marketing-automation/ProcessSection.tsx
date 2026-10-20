import React from "react";
import { 
  Search,
  Compass,
  Code2,
  Rocket,
  CheckCircle,
  ArrowRight,
  Target,
  GitBranch,
  LineChart,
  Settings,
  Users,
  Zap,
  Shield,
  BarChart3,
  Clock,
  Sparkles
} from 'lucide-react';

const ProcessSection = () => {
  const phases = [
    {
      step: "01",
      title: "Discovery & Marketing Audit",
      description: "We start by understanding your current marketing stack, audience segments, conversion funnel, and biggest bottlenecks.",
      deliverables: ["Tech stack audit", "Funnel analysis", "Competitor benchmarking", "Automation opportunity mapping"],
      icon: Search,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      benefits: ["Uncover hidden opportunities", "Identify quick wins", "Benchmark against competitors"]
    },
    {
      step: "02",
      title: "Strategy & Architecture Design",
      description: "We design your full automation architecture aligned to your revenue goals before a single line of code is written.",
      deliverables: ["Workflow blueprints", "Lead scoring model", "Segmentation strategy", "Integration architecture"],
      icon: Compass,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      benefits: ["Revenue-aligned strategy", "Scalable architecture", "Clear implementation roadmap"]
    },
    {
      step: "03",
      title: "Build, Integrate & Test",
      description: "Our engineers configure your chosen platforms, build all automations, connect integrations, and run thorough QA.",
      deliverables: ["Platform setup", "API integrations", "End-to-end QA", "Deliverability testing"],
      icon: Code2,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      benefits: ["Rigorous testing", "Seamless integration", "Performance optimization"]
    },
    {
      step: "04",
      title: "Launch, Monitor & Optimise",
      description: "We launch your automations with live monitoring and run continuous A/B tests to improve conversion rates over time.",
      deliverables: ["Phased rollout", "A/B testing", "Monthly reporting", "Ongoing optimisation"],
      icon: Rocket,
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      benefits: ["Continuous improvement", "Data-driven decisions", "Maximize ROI"]
    },
  ];

  const timelineMetrics = [
    { icon: Clock, label: "Phase 1", value: "1-2 weeks" },
    { icon: Settings, label: "Phase 2", value: "1-2 weeks" },
    { icon: Code2, label: "Phase 3", value: "3-4 weeks" },
    { icon: Rocket, label: "Phase 4", value: "Ongoing" },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-white">
      {/* Subtle blue background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1d92fb]/5 to-transparent"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 1px 1px, #1d92fb 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1d92fb]/10 border border-[#1d92fb]/20 rounded-full px-4 py-2 mb-6">
            <GitBranch className="w-4 h-4 text-[#1d92fb]" />
            <span className="text-sm font-semibold text-[#1d92fb] tracking-wide">OUR APPROACH</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#020C16] mb-6 tracking-tight">
            From Strategy to Live Automation<br />
            <span className="text-[#1d92fb]">in 4 Structured Phases</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A battle-tested delivery process that minimises risk and maximises time-to-value 
            for your marketing investment.
          </p>
        </div>

        {/* Timeline Overview */}
        {/* <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {timelineMetrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <div key={idx} className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100">
                <div className="w-8 h-8 bg-[#1d92fb]/10 rounded-full flex items-center justify-center">
                  <IconComponent className="w-4 h-4 text-[#1d92fb]" />
                </div>
                <div>
                  <span className="text-sm text-gray-500">{metric.label}</span>
                  <span className="ml-2 font-semibold text-[#020C16]">{metric.value}</span>
                </div>
              </div>
            );
          })}
        </div> */}

        {/* Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {phases.map((phase, idx) => {
            const IconComponent = phase.icon;
            
            return (
              <div 
                key={idx} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Phase number background */}
                <div className="absolute top-0 right-0 text-[120px] font-bold text-gray-100 leading-none select-none">
                  {phase.step}
                </div>

                <div className="relative z-10 p-8">
                  {/* Header with icon and step */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 ${phase.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-8 h-8 ${phase.iconColor}`} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className={`text-sm font-semibold ${phase.iconColor} mb-1 block`}>Phase {phase.step}</span>
                        <h3 className="text-xl font-bold text-[#020C16]">{phase.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600  text-sm mb-6 leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#020C16] mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#1d92fb]" />
                      Key Benefits
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.benefits.map((benefit, i) => (
                        <span key={i} className="bg-gray-50 px-3 py-1 rounded-full text-xs text-gray-600 border border-gray-200">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#020C16] mb-3">Deliverables</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Colored accent line at top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${phase.color}`}></div>
              </div>
            );
          })}
        </div>

        {/* Process Timeline Visual */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-[#020C16] mb-8 text-center">The Complete Journey</h3>
          
          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#1d92fb] to-[#f7e022] transition-all duration-500" style={{ width: '100%' }}></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {phases.map((phase, idx) => {
                const IconComponent = phase.icon;
                
                return (
                  <div key={idx} className="relative text-center">
                    {/* Phase indicator */}
                    <div className="relative z-10 mb-4">
                      <div className={`w-16 h-16 mx-auto ${phase.bgColor} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${phase.iconColor}`} />
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-[#020C16] mb-2">{phase.title}</h4>
                    <p className="text-xs text-gray-500">Phase {phase.step}</p>
                    
                    {/* Arrow for mobile */}
                    {idx < phases.length - 1 && (
                      <div className="md:hidden flex justify-center my-2">
                        <ArrowRight className="w-5 h-5 text-[#1d92fb] transform rotate-90" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1d92fb]/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#1d92fb]" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Average timeline</div>
                <div className="font-bold text-[#020C16]">6-8 weeks to launch</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1d92fb]/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#1d92fb]" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Risk mitigation</div>
                <div className="font-bold text-[#020C16]">Phased rollout approach</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1d92fb]/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#1d92fb]" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Ongoing optimization</div>
                <div className="font-bold text-[#020C16]">Continuous improvement</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact-box');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center gap-3 bg-[#020C16] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1d92fb] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Start Your Automation Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            No commitment required. We&apos;ll show you what&apos;s possible in a free consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;