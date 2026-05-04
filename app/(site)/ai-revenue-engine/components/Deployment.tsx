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
        title: "24/7 AI RECEPTIONIST",
        icon: "headphones",
        description:
            "Answers every inbound call in under 60 seconds, addresses common questions and books appointments based on YOUR criteria, works 24/7...be it after-hours or on the weekends.",
        points: [
            "Answers every inbound call in under 60 seconds",
            "Addresses common questions & books appointments based on YOUR criteria",
            "Works 24/7... be it after-hours or on the weekends",
        ],
        perfectFor:
            "HVAC, Plumbing, Electrical, Dental, Med Spas, Auto Repair, Property Management",
        colorAccent: "#3498db",
    },
    {
        title: "LEAD QUALIFIER & APPOINTMENT SETTER",
        icon: "users",
        description:
            "Engages new leads within 60 seconds of opt-in, filters out time-wasters, and pushes qualified leads to your team with detailed notes.",
        points: [
            "Engages new leads within 60 seconds of opt-in",
            "Filters out time-wasters automatically",
            "Pushes qualified leads to your team with detailed notes",
        ],
        perfectFor:
            "Real Estate, Legal, Insurance, Financial Advisors, B2B Consulting",
        colorAccent: "#3498db",
    },
    {
        title: '"DEAD" LEADS REVIVER',
        icon: "rotate-ccw",
        description:
            "Re-engages old CRM leads automatically, re-qualifies their interest, and turns cold leads into booked appointments.",
        points: [
            "Re-engages old CRM leads automatically",
            "Re-qualifies intent and interest",
            "Turns cold leads into booked appointments",
        ],
        perfectFor: "Home Services, Real Estate, Legal, Med Spas, Gyms",
        colorAccent: "#f7e022",
    },
    {
        title: "APPOINTMENT CONFIRMATION & SHOW RATE BOOSTER",
        icon: "calendar-check",
        description:
            "Automatically confirms appointments, reduces no-shows by up to 50%, and keeps your calendar full and profitable.",
        points: [
            "Automatically confirms upcoming appointments",
            "Reduces no-shows by up to 50%",
            "Keeps your calendar full and profitable",
        ],
        perfectFor:
            "Dental, Med Spas, Lawyers, Financial Advisors, Contractors",
        colorAccent: "#3498db",
    },
    {
        title: 'WEBSITE "VOICE BUBBLE"',
        icon: "message-circle",
        description:
            "Turns your website into a 24/7 sales assistant that engages visitors, answers FAQs, and books appointments instantly.",
        points: [
            "Engages website visitors instantly",
            "Answers FAQs in real-time",
            "Books jobs or appointments on the spot",
        ],
        perfectFor: "Any service business with a website",
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
                            className="bg-gray-50 border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-opacity-50"
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
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 leading-[2.4]">
                        Where Exactly Can I Deploy These{" "}
                        <br className="hidden sm:block" />
                        <span className="relative inline-block whitespace-nowrap">
                            <span className="relative z-10 text-[#3498db]">AI Sales Agents</span>
                            <span
                                className="absolute bottom-1 left-0 w-full h-3 bg-no-repeat bg-bottom"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 12'%3E%3Cpath fill='none' stroke='%23f7e022' stroke-width='3.5' stroke-linecap='round' d='M5 7 Q 45 1 85 7 Q 125 13 170 7 Q 195 3 200 7'/%3E%3C/svg%3E")`,
                                    backgroundSize: "180px 12px",
                                }}
                            />
                        </span>
                        ?
                    </h2>

                    {/* Short answer pill */}
                    <div className="mt-6 mb-5 flex justify-center">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3498db]/5 to-[#f7e022]/10 rounded-2xl px-7 py-3.5 border border-[#3498db]/20 shadow-sm backdrop-blur-sm">
                            <Zap className="w-5 h-5 text-[#3498db] fill-[#3498db]/20" />
                            <p className="text-gray-800 font-semibold text-base">
                                Short answer: <span className="font-black text-[#3498db]">ANYWHERE you want.</span>
                            </p>
                        </div>
                    </div>

                    {/* Description text */}
                    <p className="text-gray-500 text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Any part of your business where humans are stuck doing repetitive tasks that drain your time and revenue.
                    </p>
                    {/* Description text */}
                    <p className="text-gray-500 text-md mt-10 max-w-3xl font-semibold mx-auto leading-relaxed">
                        Below are just a few ways service businesses like yours are already using it...
                    </p>
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