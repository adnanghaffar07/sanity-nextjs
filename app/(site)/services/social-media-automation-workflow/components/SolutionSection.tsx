'use client';

import { useState, useEffect } from 'react';
import { 
  Zap, FormInput, Workflow, Split, ImageIcon, FileText, Palette, Upload, 
  Video, Mic, Calendar, Bell, Mail, Slack, Sparkles, Brain, Clock,
  CheckCircle, ArrowRight, Play, ChevronRight, BarChart, Users,
  Globe, Layers, Filter, MessageSquare, Cpu, Shield, Rocket, Infinity, Target,
  ArrowUpRight
} from 'lucide-react';

export default function SolutionSection() {
  const [activePhase, setActivePhase] = useState('submission');
  const [activeWorkflow, setActiveWorkflow] = useState<'post' | 'reel'>('post');
  const [formProgress, setFormProgress] = useState(0);

  useEffect(() => {
    if (activePhase === 'submission') {
      setFormProgress(0);
      const timer = setInterval(() => {
        setFormProgress(prev => prev < 100 ? prev + 10 : 100);
      }, 200);
      return () => clearInterval(timer);
    }
  }, [activePhase]);

  const phases = [
    { 
      id: 'submission', 
      number: '1', 
      title: 'Content Submission', 
      icon: FormInput, 
      gradient: 'from-[#00A3FF] to-[#0066CC]'
    },
    { 
      id: 'activation', 
      number: '2', 
      title: 'Automation Start', 
      icon: Zap, 
      gradient: 'from-[#00C9A7] to-[#00A3FF]'
    },
    { 
      id: 'processing', 
      number: '3', 
      title: 'AI Processing', 
      icon: Brain, 
      gradient: 'from-[#7B61FF] to-[#5A43CC]'
    },
    { 
      id: 'results', 
      number: '4', 
      title: 'Scheduled & Notified', 
      icon: Bell, 
      gradient: 'from-[#FF6B82] to-[#FF4757]'
    },
  ];

  const formFields = [
    { icon: Globe, label: 'Platforms', value: 'Facebook, Instagram, LinkedIn' },
    { icon: FileText, label: 'Post Title & Description', value: 'Engaging content that converts' },
    { icon: Layers, label: 'Category', value: 'Business, Lifestyle, Education' },
    { icon: Split, label: 'Post Type', value: 'Post or Reel' },
    { icon: Calendar, label: 'Posting Date & Time', value: 'Optimal times selected' },
    { icon: Palette, label: 'Background Color/Mood', value: 'Brand-aligned visuals' },
    { icon: MessageSquare, label: 'Caption Instructions', value: 'Tone, style, CTAs' },
    { icon: Filter, label: 'Hashtag Instructions', value: 'Relevant & trending' },
  ];

  const postSteps = [
    { 
      step: '4A', 
      title: 'Image Input & Template Logic', 
      icon: ImageIcon,
      description: 'System processes your image selection',
      details: [
        'Template detection (standard vs custom)',
        'Automatic image optimization',
        'Platform-specific sizing',
        'Brand compliance check'
      ],
      aiPowered: false
    },
    { 
      step: '5A', 
      title: 'Caption & Hashtag Generation', 
      icon: FileText,
      description: 'AI crafts engaging, optimized content',
      details: [
        'Google Gemini AI generates captions',
        'Trending hashtag research',
        'SEO-optimized metadata',
        'Cross-platform formatting'
      ],
      aiPowered: true
    },
    { 
      step: '6A', 
      title: 'Image Editing & Asset Creation', 
      icon: Palette,
      description: 'Automated design with AI enhancements',
      details: [
        'Intelligent text overlays',
        'Color-based adjustments',
        'Style & filter application',
        'Consistency verification'
      ],
      aiPowered: true
    },
    { 
      step: '7A', 
      title: 'Upload & Scheduling', 
      icon: Upload,
      description: 'Deployment across all platforms',
      details: [
        'Direct GoHighLevel integration',
        'Optimal timing algorithms',
        'Multi-platform coordination',
        'Performance tracking setup'
      ],
      aiPowered: false
    },
  ];

  const reelSteps = [
    { 
      step: '4B', 
      title: 'Thumbnail Creation', 
      icon: ImageIcon,
      description: 'Eye-catching thumbnails for engagement',
      details: [
        'Template-based or custom designs',
        'High-converting layouts',
        'Platform-optimized dimensions',
        'Brand consistency checks'
      ],
      aiPowered: false
    },
    { 
      step: '5B', 
      title: 'Video Generation from Script', 
      icon: Video,
      description: 'AI transforms scripts into videos',
      details: [
        'Dynamic scene composition',
        'Professional transitions',
        'AI voiceovers (optional)',
        'Background music integration'
      ],
      aiPowered: true
    },
    { 
      step: '6B', 
      title: 'Upload & Scheduling', 
      icon: Calendar,
      description: 'Strategic deployment for maximum reach',
      details: [
        'Multi-platform distribution',
        'Peak engagement timing',
        'Cross-channel promotion',
        'Analytics integration'
      ],
      aiPowered: false
    },
  ];

  const aiCapabilities = [
    {
      title: 'Smart Caption Generation',
      description: 'Creates engaging, brand-aligned captions',
      icon: MessageSquare,
      impact: '2x engagement rate'
    },
    {
      title: 'Hashtag Optimization',
      description: 'Applies trending, relevant hashtags',
      icon: Filter,
      impact: '40% more reach'
    },
    {
      title: 'Visual Analysis',
      description: 'Analyzes and optimizes images',
      icon: ImageIcon,
      impact: '35% better appeal'
    },
    {
      title: 'Video Creation',
      description: 'Transforms scripts into videos',
      icon: Video,
      impact: '3x more content'
    },
  ];

  const notifications = [
    {
      platform: 'Slack',
      icon: Slack,
      preview: 'Post scheduled successfully!',
      time: '2:30 PM Today'
    },
    {
      platform: 'Email',
      icon: Mail,
      preview: 'Content scheduled across platforms',
      time: 'Just now'
    },
  ];

  const benefits = [
    { 
      icon: Clock, 
      title: 'Save 20+ hrs/wk', 
      description: 'Automate repetitive tasks'
    },
    { 
      icon: BarChart, 
      title: 'Increase engagement', 
      description: 'AI-optimized content'
    },
    { 
      icon: Users, 
      title: 'Scale effortlessly', 
      description: 'Handle unlimited content'
    },
    { 
      icon: Shield, 
      title: 'Maintain consistency', 
      description: 'Always on-brand'
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFF]/50">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#00A3FF] mr-3"></div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#00A3FF]/10 to-[#7B61FF]/10 border border-[#00A3FF]/20">
              <Sparkles className="w-3 h-3 text-[#00A3FF] mr-1.5" />
              <span className="text-xs font-medium text-[#0066CC]">Complete Automation</span>
            </div>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#7B61FF] ml-3"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform One Form Into
            <span className="block mt-2 bg-gradient-to-r from-[#00A3FF] via-[#7B61FF] to-[#00C9A7] bg-clip-text text-transparent">
              Scheduled Content Everywhere
            </span>
          </h2>
          
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-6">
            At <span className="font-semibold text-[#0066CC]">CodeAutomation</span>, we built a fully automated social media system using n8n that handles everything from AI creation to multi-platform scheduling.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#00C9A7] mr-1.5"></div>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#00A3FF] mr-1.5"></div>
              <span>Zero Manual Work</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#7B61FF] mr-1.5"></div>
              <span>Multi-Platform</span>
            </div>
          </div>
        </div>

        {/* Interactive Journey Timeline */}
        <div className="mb-16">
          {/* Phase Navigation */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-10 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Content&apos;s Automated Journey
              </h3>
              <p className="text-sm text-gray-600">From submission to scheduled in minutes</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {phases.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center border ${
                    activePhase === phase.id
                      ? `bg-gradient-to-r ${phase.gradient} text-white shadow-md border-transparent`
                      : `bg-white text-gray-600 hover:bg-gray-50 border-gray-200`
                  }`}
                >
                  <phase.icon className="w-3.5 h-3.5 mr-1.5" />
                  <span className="hidden sm:inline">{phase.title}</span>
                  <span className="sm:hidden">Step {phase.number}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Journey Visualization */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            
            {/* Phase 1: Content Submission */}
            {activePhase === 'submission' && (
              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Form Preview */}
                  <div className="space-y-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#00A3FF] to-[#0066CC] rounded-lg flex items-center justify-center mr-3 shadow">
                        <FormInput className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-[#0066CC] mb-0.5">Step 1 of 4</div>
                        <h4 className="text-lg font-bold text-gray-900">Content Submission</h4>
                        <p className="text-sm text-gray-600">Everything starts with one simple form</p>
                      </div>
                    </div>

                    {/* Form Fields Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {formFields.map((field, index) => (
                        <div 
                          key={index}
                          className="group bg-white border border-gray-200 rounded-lg p-3 hover:border-[#00A3FF]/40 hover:shadow-xs transition-all"
                        >
                          <div className="flex items-center mb-2">
                            <div className="p-1.5 rounded bg-gradient-to-br from-[#00A3FF]/10 to-[#0066CC]/10 group-hover:scale-105 transition-transform mr-2">
                              <field.icon className="w-3.5 h-3.5 text-[#00A3FF]" />
                            </div>
                            <h5 className="text-sm font-medium text-gray-900">{field.label}</h5>
                          </div>
                          <p className="text-xs text-gray-600">{field.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Form Progress */}
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs font-medium text-gray-700">Form Completion</span>
                        <span className="text-xs font-bold text-[#00A3FF]">{formProgress}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded-full transition-all duration-500"
                          style={{ width: `${formProgress}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1.5">
                        Ensures all content is on-brand and consistent
                      </p>
                    </div>
                  </div>

                  {/* Benefits Sidebar */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-[#00A3FF]/5 to-[#7B61FF]/5 border border-[#00A3FF]/20 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="p-1.5 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded mr-2">
                          <Shield className="w-3.5 h-3.5 text-white" />
                        </div>
                        <h5 className="text-sm font-bold text-gray-900">Why This Works</h5>
                      </div>
                      <ul className="space-y-2">
                        {[
                          'Structured data for perfect automation',
                          'No room for errors',
                          'Brand guidelines enforced',
                          'One-time setup'
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded-full mt-1 mr-2"></div>
                            <span className="text-xs text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded-lg p-4 text-white overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-2">
                          <Zap className="w-4 h-4 mr-2" />
                          <h5 className="text-sm font-bold">Ready to Submit?</h5>
                        </div>
                        <p className="text-blue-100 text-xs mb-3">
                          Experience seamless submission to automation
                        </p>
                        <a 
                          href="https://calendly.com/adnanghaffar" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full bg-white text-[#0066CC] hover:bg-blue-50 py-2 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] flex items-center justify-center"
                        >
                          Book a Meeting →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Phase 2: Automation Activation */}
            {activePhase === 'activation' && (
              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#00C9A7] to-[#00A3FF] rounded-lg flex items-center justify-center mr-3 shadow">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-[#00C9A7] mb-0.5">Step 2 of 4</div>
                        <h4 className="text-lg font-bold text-gray-900">Automation Start</h4>
                        <p className="text-sm text-gray-600">Magic happens automatically</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-[#00C9A7]/10 to-[#00A3FF]/10 border border-[#00C9A7]/20 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <div className="p-1.5 bg-gradient-to-r from-[#00C9A7] to-[#00A3FF] rounded mr-2">
                            <Workflow className="w-3.5 h-3.5 text-white" />
                          </div>
                          <h5 className="text-sm font-bold text-gray-900">n8n Workflow Engine</h5>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">
                          Instantly detects submissions and triggers automation—zero manual intervention.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white rounded-lg p-2.5 border border-[#00C9A7]/20">
                            <div className="text-xs text-gray-500">Response Time</div>
                            <div className="text-base font-bold text-[#00C9A7]">{"< 1s"}</div>
                          </div>
                          <div className="bg-white rounded-lg p-2.5 border border-[#00C9A7]/20">
                            <div className="text-xs text-gray-500">Success Rate</div>
                            <div className="text-base font-bold text-[#00C9A7]">99.9%</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 text-white">
                        <h5 className="text-sm font-bold mb-2">Hands Off, No Stress</h5>
                        <p className="text-gray-300 text-xs mb-3">
                          Focus on strategy while we handle execution.
                        </p>
                        <div className="space-y-1.5">
                          <div className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-[#00C9A7] mr-2" />
                            <span className="text-xs">No manual follow-up needed</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-[#00C9A7] mr-2" />
                            <span className="text-xs">24/7 automated processing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200 rounded-lg p-4 h-full">
                      <div className="flex items-center mb-4">
                        <div className="p-1.5 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded mr-2">
                          <Cpu className="w-3.5 h-3.5 text-white" />
                        </div>
                        <h5 className="text-sm font-bold text-gray-900">Workflow Progress</h5>
                      </div>
                      <div className="space-y-3">
                        {[
                          { label: 'Form Submission Received', status: 'completed' },
                          { label: 'Data Validation', status: 'completed' },
                          { label: 'Content Type Detection', status: 'active' },
                          { label: 'Workflow Routing', status: 'pending' },
                          { label: 'AI Processing Queue', status: 'pending' },
                        ].map((step, index) => (
                          <div key={index} className="flex items-center">
                            <div className={`w-6 h-6 rounded-lg mr-3 flex items-center justify-center ${
                              step.status === 'completed' 
                                ? 'bg-gradient-to-r from-[#00C9A7] to-[#00A3FF] text-white' 
                                : step.status === 'active'
                                ? 'bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] text-white animate-pulse'
                                : 'bg-gray-100 text-gray-400'
                            }`}>
                              {step.status === 'completed' ? <CheckCircle className="w-2.5 h-2.5" /> : index + 1}
                            </div>
                            <span className={`flex-1 text-xs font-medium ${
                              step.status === 'completed' 
                                ? 'text-gray-900' 
                                : step.status === 'active'
                                ? 'text-[#00A3FF]'
                                : 'text-gray-600'
                            }`}>
                              {step.label}
                            </span>
                          </div>
                        ))}
                      </div>
                      <a 
                        href="https://calendly.com/adnanghaffar" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                      >
                        <Play className="w-3 h-3 inline mr-1.5" />
                        Request Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Phase 3: AI Processing */}
            {activePhase === 'processing' && (
              <div className="p-6">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7B61FF] to-[#5A43CC] rounded-lg flex items-center justify-center mr-3 shadow">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#7B61FF] mb-0.5">Step 3 of 4</div>
                    <h4 className="text-lg font-bold text-gray-900">AI Processing</h4>
                    <p className="text-sm text-gray-600">AI-powered content transformation</p>
                  </div>
                </div>

                {/* Workflow Selector */}
                <div className="flex justify-center mb-8">
                  <div className="inline-flex bg-gradient-to-r from-[#00A3FF]/10 to-[#7B61FF]/10 p-0.5 rounded-lg">
                    <button
                      onClick={() => setActiveWorkflow('post')}
                      className={`px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center ${
                        activeWorkflow === 'post'
                          ? 'bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] text-white shadow'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <ImageIcon className="w-3.5 h-3.5 mr-1.5" />
                      Post (4 Steps)
                    </button>
                    <button
                      onClick={() => setActiveWorkflow('reel')}
                      className={`px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center ${
                        activeWorkflow === 'reel'
                          ? 'bg-gradient-to-r from-[#FF6B82] to-[#FF4757] text-white shadow'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Video className="w-3.5 h-3.5 mr-1.5" />
                      Reel (3 Steps)
                    </button>
                  </div>
                </div>

                {/* AI Capabilities */}
                <div className="mb-8">
                  <div className="text-center mb-6">
                    <h5 className="text-base font-bold text-gray-900 mb-1">
                      Powered by Google Gemini AI
                    </h5>
                    <p className="text-xs text-gray-600">Advanced AI for maximum impact</p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {aiCapabilities.map((capability, index) => (
                      <div key={index} className="group bg-white border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-all">
                        <div className="flex items-center mb-2">
                          <div className="p-1.5 rounded bg-gradient-to-br from-[#00A3FF]/10 to-[#7B61FF]/10 group-hover:scale-105 transition-transform mr-2">
                            <capability.icon className="w-3.5 h-3.5 text-[#00A3FF]" />
                          </div>
                          <h6 className="text-sm font-medium text-gray-900">{capability.title}</h6>
                        </div>
                        <p className="text-xs text-gray-600 mb-1.5">{capability.description}</p>
                        <div className="text-xs font-medium bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] bg-clip-text text-transparent">
                          Impact: {capability.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workflow Steps */}
                <div className="relative">
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-[#00A3FF] via-[#7B61FF] to-[#00C9A7] transform -translate-y-1/2 hidden lg:block" />
                  
                  <div className="grid lg:grid-cols-3 gap-4">
                    {(activeWorkflow === 'post' ? postSteps : reelSteps).map((step, index, array) => (
                      <div key={step.step} className="relative">
                        <div className="group bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-all">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center">
                              <div className={`w-9 h-9 rounded-lg flex items-center justify-center mr-2.5 ${
                                step.aiPowered 
                                  ? 'bg-gradient-to-br from-[#00A3FF]/10 to-[#7B61FF]/10' 
                                  : 'bg-gray-100'
                              }`}>
                                <step.icon className={`w-4 h-4 ${step.aiPowered ? 'text-[#7B61FF]' : 'text-gray-600'}`} />
                              </div>
                              <div>
                                <div className="flex items-center">
                                  <span className="text-xs font-bold text-gray-900 mr-1.5">{step.step}</span>
                                  {step.aiPowered && (
                                    <span className="text-[10px] bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] text-white px-1.5 py-0.5 rounded-full">
                                      AI
                                    </span>
                                  )}
                                </div>
                                <h5 className="text-sm font-bold text-gray-900 mt-0.5">{step.title}</h5>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-xs text-gray-600 mb-3">{step.description}</p>
                          
                          <ul className="space-y-1">
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex items-start text-xs text-gray-600">
                                <ChevronRight className="w-3 h-3 text-[#00A3FF] mr-1 mt-0.5" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Connection Arrow */}
                        {index < array.length - 1 && (
                          <div className="hidden lg:block absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] p-1 rounded">
                              <ArrowRight className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Phase 4: Results & Notifications */}
            {activePhase === 'results' && (
              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B82] to-[#FF4757] rounded-lg flex items-center justify-center mr-3 shadow">
                        <Bell className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-[#FF6B82] mb-0.5">Step 4 of 4</div>
                        <h4 className="text-lg font-bold text-gray-900">Scheduled & Notified</h4>
                        <p className="text-sm text-gray-600">Complete transparency</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* GoHighLevel Integration */}
                      <div className="bg-gradient-to-br from-[#00A3FF]/5 to-[#7B61FF]/5 border border-[#00A3FF]/20 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <div className="p-1.5 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded mr-2">
                            <Upload className="w-3.5 h-3.5 text-white" />
                          </div>
                          <h5 className="text-sm font-bold text-gray-900">GoHighLevel Integration</h5>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">
                          Content uploaded and scheduled for optimal times.
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          {['Facebook', 'Instagram', 'LinkedIn'].map((platform, i) => (
                            <div key={i} className="bg-white rounded-lg p-2 border border-[#00A3FF]/20 text-center">
                              <div className="text-xs text-gray-500 mb-1">Platform</div>
                              <div className={`text-sm font-bold ${
                                platform === 'Facebook' ? 'text-[#00A3FF]' :
                                platform === 'Instagram' ? 'text-[#FF6B82]' :
                                'text-[#0066CC]'
                              }`}>
                                {platform}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {benefits.map((benefit, index) => (
                          <div key={index} className="group bg-white border border-gray-200 rounded-lg p-3 hover:shadow-xs transition-all">
                            <div className="flex items-center mb-1.5">
                              <div className="p-1 rounded bg-gradient-to-br from-[#00A3FF]/10 to-[#7B61FF]/10 group-hover:scale-105 transition-transform mr-1.5">
                                <benefit.icon className="w-3 h-3 text-[#00A3FF]" />
                              </div>
                              <h6 className="text-sm font-medium text-gray-900">{benefit.title}</h6>
                            </div>
                            <p className="text-xs text-gray-600">{benefit.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Notifications */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="p-1.5 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded mr-2">
                            <Bell className="w-3.5 h-3.5 text-white" />
                          </div>
                          <h5 className="text-sm font-bold text-gray-900">Notifications</h5>
                        </div>
                        <div className="w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse"></div>
                      </div>
                      
                      <div className="space-y-3">
                        {notifications.map((notification, index) => (
                          <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 hover:border-[#00A3FF]/40 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center">
                                <div className="p-1.5 rounded bg-gradient-to-br from-[#00A3FF]/10 to-[#7B61FF]/10 mr-2">
                                  <notification.icon className="w-3 h-3 text-[#00A3FF]" />
                                </div>
                                <div>
                                  <h6 className="text-sm font-medium text-gray-900">{notification.platform}</h6>
                                  <p className="text-xs text-gray-500">{notification.time}</p>
                                </div>
                              </div>
                              <ArrowUpRight className="w-3 h-3 text-gray-400" />
                            </div>
                            <p className="text-sm text-gray-700 mb-1.5">{notification.preview}</p>
                            <div className="flex items-center text-xs text-gray-500">
                              <CheckCircle className="w-3 h-3 text-[#00C9A7] mr-1" />
                              Includes all details
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="flex items-center mb-1.5">
                          <Shield className="w-3 h-3 text-[#00C9A7] mr-1.5" />
                          <h6 className="text-sm font-medium text-gray-900">Nothing Missed</h6>
                        </div>
                        <p className="text-xs text-gray-600">
                          Real-time notifications ensure complete transparency.
                        </p>
                      </div>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-gradient-to-r from-[#00A3FF] via-[#7B61FF] to-[#00C9A7] rounded-lg p-4 text-white overflow-hidden relative">
                      <div className="relative z-10">
                        <div className="flex items-center mb-2">
                          <Rocket className="w-4 h-4 mr-1.5" />
                          <h5 className="text-sm font-bold">Transform Your Workflow</h5>
                        </div>
                        <p className="text-blue-100 text-xs mb-3">
                          Join teams automating with CodeAutomation
                        </p>
                        <a 
                          href="https://calendly.com/adnanghaffar" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full bg-white text-gray-900 hover:bg-blue-50 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center"
                        >
                          Book a Meeting →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Journey Progress Bar */}
        <div className="mb-12">
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-1.5 bg-gray-200 rounded-full transform -translate-y-1/2"></div>
            <div className="relative flex justify-between">
              {phases.map((phase, index) => (
                <div key={phase.id} className="flex flex-col items-center">
                  <button
                    onClick={() => setActivePhase(phase.id)}
                    className={`relative w-12 h-12 rounded-lg flex items-center justify-center mb-2.5 transition-all ${
                      activePhase === phase.id
                        ? `bg-gradient-to-r ${phase.gradient} text-white shadow-lg scale-105`
                        : `bg-white text-gray-600 hover:scale-102 border border-gray-200`
                    }`}
                  >
                    <phase.icon className="w-5 h-5" />
                    {activePhase === phase.id && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#00C9A7] rounded-full flex items-center justify-center border border-white">
                        <CheckCircle className="w-2 h-2 text-white" />
                      </div>
                    )}
                  </button>
                  <span className={`text-xs font-medium text-center ${
                    activePhase === phase.id ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {phase.title}
                  </span>
                  <span className="text-[10px] text-gray-500 mt-0.5">Step {phase.number}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Future of Social Media Management
          </h3>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
            With CodeAutomation, you&apos;re getting a complete automation partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://calendly.com/adnanghaffar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] hover:from-[#0066CC] hover:to-[#5A43CC] text-white px-8 py-3 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] flex items-center justify-center"
            >
              <Play className="w-3.5 h-3.5 inline mr-2 group-hover:scale-110 transition-transform" />
              Request Demo
            </a>
            <a 
              href="https://calendly.com/adnanghaffar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white border border-[#00A3FF] text-[#00A3FF] hover:bg-[#00A3FF]/5 px-8 py-3 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] flex items-center justify-center"
            >
              <Infinity className="w-3.5 h-3.5 inline mr-2 group-hover:rotate-180 transition-transform" />
              Book a Meeting
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Free consultation • No commitment • Expert guidance
          </p>
        </div>
      </div>
    </section>
  );
}