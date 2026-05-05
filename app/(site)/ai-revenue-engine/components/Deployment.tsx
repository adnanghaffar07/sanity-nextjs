import React from "react";
import {
    Zap,
    Headphones,
    Users,
    RotateCcw,
    CalendarCheck,
    MessageCircle,
    CheckCircle2,
    Target,
    Bot,
    Smartphone,
} from "lucide-react";

// Type definitions
interface UseCase {
    title: string;
    icon: keyof typeof iconMap;
    description: string;
    points: string[];
    perfectFor: string;
    colorAccent: "#3498db" | "#f7e022";
}

const iconMap = {
    headphones: Headphones,
    users: Users,
    "rotate-ccw": RotateCcw,
    "calendar-check": CalendarCheck,
    "message-circle": MessageCircle,
    bot: Bot,
};

const useCases: UseCase[] = [
    {
        title: "AI RECEPTIONIST",
        icon: "headphones",
        description:
            "Your always-on front desk that never misses a call, never puts customers on hold, and never loses a lead.",
        points: [
            "Answers every incoming call instantly, 24/7 without delays",
            "Handles FAQs, service inquiries, and basic customer requests automatically",
            "Books appointments directly into your calendar based on your rules",
            "Transfers or escalates high-intent leads with full conversation context",
        ],
        perfectFor:
            "HVAC • Plumbing • Electrical • Contractors • Dental Clinics • Med Spas • Real Estate Agencies • Law Firms • Insurance Providers",
        colorAccent: "#3498db",
    },
    {
        title: "AI SCHEDULING ASSISTANT",
        icon: "calendar-check",
        description:
            "Never lose bookings or waste time coordinating calendars again. Your AI handles scheduling automatically so your team can focus on actual work, not back-and-forth messaging.",
        points: [
            "Instantly books appointments based on real-time availability",
            "Eliminates back-and-forth calls, texts, and emails",
            "Sends automatic confirmations and reminders to reduce no-shows",
            "Handles rescheduling and cancellations without human input",
        ],
        perfectFor:
            "HVAC • Plumbing • Electrical • Contractors • Dental Clinics • Med Spas • Real Estate Agencies • Legal Firms • Insurance Agencies",
        colorAccent: "#3498db",
    },
    {
        title: '"DEAD" LEADS REVIVER',
        icon: "rotate-ccw",
        description:
            "Turn forgotten leads into booked jobs without lifting a finger. Your AI automatically re-engages old prospects sitting in your CRM and brings them back to life.",
        points: [
            "Reaches out to old and cold leads automatically from your CRM",
            "Restarts conversations with personalized, human-like messaging",
            "Re-qualifies interest to identify who is still ready to buy",
            "Converts inactive leads into booked appointments and sales",
        ],
        perfectFor:
            "Real Estate • HVAC • Plumbing • Contractors • Legal Firms • Med Spas • Insurance Agencies • Home Services • Any business with an existing CRM database",
        colorAccent: "#f7e022",
    },
    {
        title: "AI ANSWERING SERVICE",
        icon: "headphones",
        description:
            "Never miss another customer call again — even after hours, on weekends, or during peak workload. Your AI handles every call like a trained receptionist.",
        points: [
            "Answers inbound calls instantly with natural, human-like conversation",
            "Provides 24/7 coverage so no lead goes unanswered",
            "Captures customer details and call intent for your team to follow up",
            "Routes calls or books appointments based on your business rules",
        ],
        perfectFor:
            "HVAC • Plumbing • Electrical • Contractors • Dental Clinics • Med Spas • Real Estate Agencies • Legal Firms • Insurance Providers",
        colorAccent: "#3498db",
    },
    {
        title: "AI CHATBOT",
        icon: "message-circle",
        description:
            "Your 24/7 website assistant that engages visitors, answers questions, and turns traffic into qualified leads automatically.",
        points: [
            "Engages website visitors instantly before they leave your site",
            "Answers FAQs in real time without human intervention",
            "Collects lead details and qualifies prospects automatically",
            "Books appointments directly from your website chat",
        ],
        perfectFor:
            "HVAC • Plumbing • Electrical • Contractors • Dental Clinics • Med Spas • Real Estate Agencies • Legal Firms • Insurance Providers • Any service business with a website",
        colorAccent: "#f7e022",
    },
];

// Card Component Props
interface DeploymentCardProps {
    item: UseCase;
}

const DeploymentCard: React.FC<DeploymentCardProps> = ({ item }) => {
    const IconComponent = iconMap[item.icon] || Bot;
    const isBlue = item.colorAccent === "#3498db";
    const accentColor = item.colorAccent;
    const accentBg = isBlue ? "bg-[#3498db]/10" : "bg-[#f7e022]/10";
    const iconBorderColor = isBlue ? "border-[#3498db]/20" : "border-[#f7e022]/20";

    // Split perfectFor into all tags (no limit)
    const perfectTags = item.perfectFor.split(",").map((t) => t.trim());

    return (
        <div
            className="group bg-white border border-gray-200 rounded-3xl p-6 lg:p-7 flex flex-col relative overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gray-300"
            style={{ borderColor: "#e9edf2" }}
        >
            {/* Header with icon + badge */}
            <div className="flex items-start justify-between mb-5">
                <div
                    className={`w-12 h-12 rounded-2xl ${accentBg} flex items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:shadow-md border ${iconBorderColor}`}
                >
                    <IconComponent className="w-6 h-6" style={{ color: accentColor, strokeWidth: 1.7 }} />
                </div>
                <div className="inline-flex items-center gap-1.5 bg-gray-100 rounded-full px-3 py-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                        AI Ready
                    </span>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5 tracking-tight">
                {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-[1.89] mb-7">{item.description}</p>

            {/* Bullet points */}
            <div className="space-y-2.5 mb-6 flex-1">
                {item.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accentColor }} />
                        <span className="text-gray-700 text-sm font-medium leading-relaxed">
                            {point}
                        </span>
                    </div>
                ))}
            </div>

            {/* Perfect For Section - ALL tags displayed */}
            <div className="pt-5 mt-2 border-t border-gray-100">
                <div className="flex items-center gap-1.5 mb-3">
                    <Target className="w-3.5 h-3.5 text-gray-400" />
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        Perfect For
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {perfectTags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:border-opacity-50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Main Component
export default function DeploymentSection() {
    const firstThree = useCases.slice(0, 3);
    const lastTwo = useCases.slice(3, 5);

    return (
        <section className="py-10 md:py-20 relative overflow-hidden bg-[#3498db]/5">
            {/* Decorative background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#3498db] opacity-[0.02] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f7e022] opacity-[0.02] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-20 md:mb-24">
                    {/* Main Heading with squiggle underline */}
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
                        Where Exactly Can I Use These{" "}
                        <br className="hidden sm:block" />
                        <span className="relative inline-block whitespace-nowrap">
                            <span className="relative z-10 text-[#3498db]">AI Employees?</span>
                            <span
                                className="absolute bottom-1 left-0 w-full h-3 bg-no-repeat bg-bottom"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 12'%3E%3Cpath fill='none' stroke='%23f7e022' stroke-width='3.5' stroke-linecap='round' d='M5 7 Q 45 1 85 7 Q 125 13 170 7 Q 195 3 200 7'/%3E%3C/svg%3E")`,
                                    backgroundSize: "180px 12px",
                                }}
                            />
                        </span>
                        
                    </h2>

                    {/* Description text */}
                    <p className="text-gray-500 text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
Anywhere your business talks to leads or books customers.                    </p>
                    {/* Description text */}
                    <p className="text-gray-500 text-md mt-10 max-w-3xl font-semibold mx-auto leading-relaxed">
Below are some examples of how services businesses are using AI revenue engines.                    </p>
                </div>

                {/* Cards Grid - Row 1 (3 cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {firstThree.map((item, idx) => (
                        <DeploymentCard key={idx} item={item} />
                    ))}
                </div>

                {/* Cards Grid - Row 2 (2 cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {lastTwo.map((item, idx) => (
                        <DeploymentCard key={idx} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}