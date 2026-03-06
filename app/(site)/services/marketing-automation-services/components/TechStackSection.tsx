import React from "react";
import { 
  Code2, 
  Zap, 
  BarChart3, 
  Cpu,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Database,
  GitBranch,
  Globe,
  Mail,
  MessageSquare,
  Share2,
  Users,
  Workflow,
  Brain,
  LineChart,
  Cloud,
  Link,
  PieChart,
  Bot
} from 'lucide-react';

const TechStackSection = () => {
  const platforms = [
    { 
      icon: Users, 
      name: "HubSpot", 
      label: "CRM & Automation",
      description: "All-in-one marketing, sales, and CRM platform",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      iconColor: "text-orange-500"
    },
    { 
      icon: Zap, 
      name: "Marketo", 
      label: "Enterprise Automation",
      description: "B2B enterprise marketing automation",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      iconColor: "text-blue-500"
    },
    { 
      icon: Mail, 
      name: "Klaviyo", 
      label: "eCommerce Email",
      description: "eCommerce email & SMS automation",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      iconColor: "text-purple-500"
    },
    { 
      icon: MessageSquare, 
      name: "ActiveCampaign", 
      label: "CRM + Email",
      description: "CRM, email marketing, and automation",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      iconColor: "text-green-500"
    },
    { 
      icon: Cloud, 
      name: "Salesforce", 
      label: "Enterprise CRM",
      description: "World's leading enterprise CRM platform",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      iconColor: "text-blue-500"
    },
    { 
      icon: GitBranch, 
      name: "Zapier/Make", 
      label: "Workflow Automation",
      description: "Connect apps and automate workflows",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      iconColor: "text-orange-500"
    },
    { 
      icon: LineChart, 
      name: "GA4 + Looker", 
      label: "Analytics",
      description: "Advanced analytics and visualization",
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      iconColor: "text-indigo-500"
    },
    { 
      icon: Brain, 
      name: "Custom AI", 
      label: "Bespoke Solutions",
      description: "Tailored AI and automation solutions",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      iconColor: "text-purple-500"
    },
  ];

  const categories = [
    { name: "Marketing Automation", count: "8+ platforms", icon: Zap },
    { name: "CRM Integration", count: "12+ tools", icon: Database },
    { name: "Analytics & BI", count: "6+ solutions", icon: BarChart3 },
    { name: "Custom Development", count: "Full stack", icon: Code2 },
  ];

  const integrationMethods = [
    { name: "REST APIs", icon: Globe },
    { name: "Webhooks", icon: Zap },
    { name: "Custom Middleware", icon: Code2 },
    { name: "Data Warehouses", icon: Database },
    { name: "CDP Platforms", icon: Users },
    { name: "Reverse ETL", icon: ArrowRight },
    { name: "Real-time Sync", icon: Workflow },
    { name: "Batch Processing", icon: PieChart },
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
            <Cpu className="w-4 h-4 text-[#1d92fb]" />
            <span className="text-sm font-semibold text-[#1d92fb] tracking-wide">TECHNOLOGY STACK</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#020C16] mb-6 tracking-tight">
            We Work With Every<br />
            <span className="text-[#1d92fb]">Major Platform</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Not locked into one tool. We recommend and implement the best fit for your business, 
            ensuring seamless integration with your existing stack.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:border-[#1d92fb]/30 transition-colors">
                <IconComponent className="w-4 h-4 text-[#1d92fb]" />
                <span className="font-medium text-gray-700">{category.name}</span>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">{category.count}</span>
              </div>
            );
          })}
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, idx) => {
            const IconComponent = platform.icon;
            
            return (
              <div 
                key={idx} 
                className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Hover accent */}
                <div className={`absolute inset-0 ${platform.bgColor} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon with background */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${platform.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 ${platform.iconColor}`} strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-[#020C16] mb-1">{platform.name}</h4>
                  <p className={`text-sm font-medium ${platform.textColor} mb-2`}>{platform.label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{platform.description}</p>
                  
                  {/* Expertise badge */}
                  <div className="mt-3 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span className="text-xs text-gray-500">Certified experts</span>
                  </div>

                  {/* Hover indicator */}
                  {/* <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-6 h-6 bg-[#1d92fb]/10 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-[#1d92fb]" />
                    </div>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { value: "50+", label: "Integrations", icon: Link },
            { value: "100%", label: "API Coverage", icon: Globe },
            { value: "24/7", label: "Monitoring", icon: Workflow },
            { value: "99.9%", label: "Uptime SLA", icon: CheckCircle },
          ].map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1d92fb]/10 rounded-full mb-3 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5 text-[#1d92fb]" />
                </div>
                <div className="text-3xl font-bold text-[#1d92fb] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Integration Showcase */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-bold text-[#020C16] mb-4">Seamless Integration</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We connect your entire marketing stack, ensuring all your tools work together perfectly.
                No data silos, no manual exports — just unified automation.
              </p>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact-box');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group inline-flex items-center gap-2 bg-[#020C16] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1d92fb] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Discuss your stack</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {integrationMethods.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={idx} className="bg-gray-50 p-4 rounded-xl text-center hover:bg-[#1d92fb]/5 transition-colors group">
                      <div className="flex justify-center mb-2">
                        <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-5 h-5 text-[#1d92fb]" />
                        </div>
                      </div>
                      <span className="text-xs font-medium text-gray-700">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-gray-200">
          {[
            { text: "Certified partners", icon: CheckCircle },
            { text: "Official integrations", icon: Link },
            { text: "Custom API development", icon: Code2 },
            { text: "Migration experts", icon: Workflow },
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2 text-gray-600">
                <IconComponent className="w-5 h-5 text-[#1d92fb]" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;