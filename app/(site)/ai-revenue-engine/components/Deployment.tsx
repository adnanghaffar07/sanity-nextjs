"use client"
import React from "react";
import {
    Headphones,
    CalendarCheck,
    RotateCcw,
    MessageCircle,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

// Type definitions
interface UseCase {
    title: string;
    icon: keyof typeof iconMap;
    description: string;
    points: string[];
    perfectFor: string[];
    colorAccent: "#3498db" | "#f7e022";
    conversation: { role: "customer" | "agent"; message: string }[];
}

const iconMap = {
    headphones: Headphones,
    "calendar-check": CalendarCheck,
    "rotate-ccw": RotateCcw,
    "message-circle": MessageCircle,
};

const useCases: UseCase[] = [
    {
        title: "AI Receptionist",
        icon: "headphones",
        description: "Your always-on front desk that never misses a call, never puts customers on hold, and never loses a lead.",
        points: [
            "Answers every incoming call instantly, 24/7",
            "Handles FAQs and service inquiries automatically",
            "Books appointments directly into your calendar",
            "Transfers high-intent leads with full context"
        ],
        perfectFor: ["HVAC", "Plumbing", "Electrical", "Contractors", "Dental Clinics", "Real Estate"],
        colorAccent: "#3498db",
        conversation: [
            { role: "customer", message: "Hi, my AC is making a weird noise. Can you help?" },
            { role: "agent", message: "Of course! I can send a technician today between 2-4 PM. Does that work for you?" },
            { role: "customer", message: "Yes, that's perfect. What's your address?" },
            { role: "agent", message: "Great! I've booked Mike for 2 PM. You'll receive a confirmation text with details." },
        ],
    },
    {
        title: "AI Scheduling Assistant",
        icon: "calendar-check",
        description: "Never lose bookings or waste time coordinating calendars again. Handles scheduling automatically.",
        points: [
            "Instantly books appointments based on availability",
            "Eliminates back-and-forth communication",
            "Sends confirmations and reminders",
            "Handles rescheduling without human input"
        ],
        perfectFor: ["Medical Practices", "Salons & Spas", "Consulting", "Home Services"],
        colorAccent: "#3498db",
        conversation: [
            { role: "customer", message: "I need to schedule a dental cleaning for next week." },
            { role: "agent", message: "I have openings on Tuesday at 10 AM or Thursday at 2 PM. Which works better?" },
            { role: "customer", message: "Tuesday at 10 AM sounds great." },
            { role: "agent", message: "Perfect! I've booked Dr. Smith for Tuesday at 10 AM. A reminder will be sent 24 hours before." },
        ],
    },
    {
        title: "Dead Leads Reviver",
        icon: "rotate-ccw",
        description: "Turn forgotten leads into booked jobs automatically. Re-engages old prospects from your CRM.",
        points: [
            "Reaches out to old leads automatically",
            "Restarts conversations with personalized messaging",
            "Re-qualifies interest and intent",
            "Converts inactive leads into appointments"
        ],
        perfectFor: ["Real Estate", "Insurance", "Legal Services", "Home Services"],
        colorAccent: "#f7e022",
        conversation: [
            { role: "agent", message: "Hi Michael, we noticed you were interested in our services 3 months ago. Still looking?" },
            { role: "customer", message: "Actually yes, I've been meaning to reach back out." },
            { role: "agent", message: "Great timing! I can schedule a free consultation this week. Are you available Thursday?" },
            { role: "customer", message: "Thursday at 1 PM works for me." },
            { role: "agent", message: "Perfect! I've sent the calendar invite to your email." },
        ],
    },
    {
        title: "AI Chatbot",
        icon: "message-circle",
        description: "Your 24/7 website assistant that engages visitors and turns traffic into qualified leads.",
        points: [
            "Engages visitors instantly",
            "Answers FAQs in real time",
            "Collects and qualifies leads",
            "Books appointments from your website"
        ],
        perfectFor: ["E-commerce", "SaaS", "Agencies", "Professional Services"],
        colorAccent: "#3498db",
        conversation: [
            { role: "customer", message: "What's your pricing for the pro plan?" },
            { role: "agent", message: "Our Pro plan is $99/month with a 14-day free trial. Would you like to see a demo?" },
            { role: "customer", message: "Yes, I'd love to see how it works." },
            { role: "agent", message: "Awesome! Can I grab your email to send you a demo video and schedule a call?" },
            { role: "customer", message: "Sure, it's mike@example.com" },
            { role: "agent", message: "Thanks Mike! Check your inbox in the next minute. Anything else I can help with?" },
        ],
    },
];

// Tab Component - Responsive with horizontal scroll on mobile
const TabButton = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
        onClick={onClick}
        className={`px-4 sm:px-6 py-2 text-xs sm:text-sm whitespace-nowrap transition-all duration-300 ${
            active 
                ? "text-[#3498db] border-b-2 border-[#3498db]" 
                : "text-gray-400 hover:text-gray-600"
        }`}
    >
        {children}
    </button>
);

// Main Component
export default function DeploymentSection() {
    const [activeTab, setActiveTab] = React.useState(0);
    const activeUseCase = useCases[activeTab];

    // Split use cases into two columns for the list view
    const leftColumn = useCases.slice(0, 2);
    const rightColumn = useCases.slice(2, 4);

    return (
        <section className="py-12 sm:py-20 bg-white overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Tabbed Interface */}
                <div className="mb-16 sm:mb-20">
                    <div className="text-center mb-8 sm:mb-10">
                        <div className="inline-flex items-center gap-2 text-sm text-[#3498db] mb-3">
                            <span className="w-6 h-px bg-[#3498db]"></span>
                            <span>Solutions</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-light mb-3">
                            Choose your{" "}
                            <span className="font-medium text-[#3498db]">AI agent</span>
                        </h2>
                        <p className="text-gray-500 text-sm">Specialized for different parts of your business</p>
                    </div>

                    {/* Tab Navigation - Horizontal scroll on mobile */}
                    <div className="overflow-x-auto overflow-y-hidden mb-8 pb-2">
                        <div className="flex justify-start sm:justify-center border-b border-gray-100 min-w-max sm:min-w-0">
                            {useCases.map((item, idx) => (
                                <TabButton key={idx} active={activeTab === idx} onClick={() => setActiveTab(idx)}>
                                    {item.title}
                                </TabButton>
                            ))}
                        </div>
                    </div>

                    {/* Active Tab Content - Responsive padding */}
                    <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10">
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start">
                            {/* Left Column */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#3498db]/10 flex items-center justify-center shrink-0">
                                        {React.createElement(iconMap[activeUseCase.icon], {
                                            className: "w-5 h-5 text-[#3498db]"
                                        })}
                                    </div>
                                    <span className="text-xs text-gray-400 uppercase tracking-wide">AI Solution</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl text-gray-900 font-medium mb-3">{activeUseCase.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">{activeUseCase.description}</p>

                                <div className="space-y-3 mb-8">
                                    {activeUseCase.points.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-[#3498db] shrink-0 mt-0.5" />
                                            <span className="text-gray-600 text-sm">{point}</span>
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Perfect for</p>
                                    <div className="flex flex-wrap gap-2">
                                        {activeUseCase.perfectFor.map((tag, idx) => (
                                            <span key={idx} className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Conversation */}
                            <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-100">
                                <div className="text-center mb-4">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#3498db]/10 to-[#4b2d85]/10 flex items-center justify-center mx-auto mb-3">
                                        {React.createElement(iconMap[activeUseCase.icon], {
                                            className: "w-6 h-6 sm:w-8 sm:h-8 text-[#3498db]"
                                        })}
                                    </div>
                                    <p className="text-gray-600 text-sm">See how it works</p>
                                </div>

                                {/* Dynamic Mock Conversation - Responsive message width */}
                                <div className="space-y-3">
                                    {activeUseCase.conversation.map((message, idx) => (
                                        <div 
                                            key={idx} 
                                            className={`rounded-lg p-3 break-words ${
                                                message.role === "customer" 
                                                    ? "bg-gray-50" 
                                                    : "bg-[#3498db]/5 ml-2 sm:ml-4"
                                            }`}
                                        >
                                            <p className={`text-xs mb-1 ${
                                                message.role === "customer" 
                                                    ? "text-gray-400" 
                                                    : "text-[#3498db]"
                                            }`}>
                                                {message.role === "customer" ? "Customer" : "AI Agent"}
                                            </p>
                                            <p className="text-sm text-gray-700 break-words">{message.message}</p>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    data-open-ai-form="true"
                                    className="w-full mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-[#3498db] transition-colors"
                                >
                                    <span>Try demo conversation</span>
                                    <ArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Two-Column List Layout - Responsive */}
                <div>
                    <div className="text-center mb-8 sm:mb-10">
                        <div className="inline-flex items-center gap-2 text-sm text-[#3498db] mb-3">
                            <span className="w-6 h-px bg-[#3498db]"></span>
                            <span>At a glance</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl text-gray-900 font-light">
                            All{" "}
                            <span className="font-medium text-[#3498db]">AI capabilities</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-3xl mx-auto">
                        {[...leftColumn, ...rightColumn].map((item, idx) => {
                            const Icon = iconMap[item.icon];
                            return (
                                <div key={idx} className="flex gap-3 sm:gap-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">{item.title}</h3>
                                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}