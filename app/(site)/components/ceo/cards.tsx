import type { ReactNode } from "react";
import { FaNewspaper } from "react-icons/fa";

// Expertise Card Component
export const ExpertiseCard = ({
    icon,
    title,
    subtitle,
    description,
    tech,
    delay
}: {
    icon: ReactNode;
    title: string;
    subtitle: string;
    description: string;
    tech: ReactNode[];
    delay: number;
}) => (
    <div
        className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
        style={{ animationDelay: `${delay}ms` }}
    >
        {/* Icon */}
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
            {icon}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-sm text-blue-600 font-medium mb-4">{subtitle}</p>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed text-sm">{description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
                <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition"
                >
                    {item}
                </span>
            ))}
        </div>
    </div>
);

// Media Card Component
export const MediaCard = ({
    publication,
    category,
    description,
    highlights,
    color,
    logo,
    delay
}: {
    publication: string;
    category: string;
    description: string;
    highlights: string[];
    color: string;
    logo: string;
    delay: number;
}) => (
    <div
        className="group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
        style={{ animationDelay: `${delay}ms` }}
    >
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

        {/* Publication Logo */}
        <div className="relative mb-6">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-2xl font-bold`}>
                {logo}
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8">
                <FaNewspaper className="text-red-500 text-sm" />
            </div>
        </div>

        {/* Publication Info */}
        <h3 className="text-xl font-bold mb-2 text-gray-900">{publication}</h3>
        <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
            {category}
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        {/* Highlights */}
        <div className="space-y-2">
            {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{highlight}</span>
                </div>
            ))}
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
);
