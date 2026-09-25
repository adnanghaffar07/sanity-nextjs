"use client";
import React, { useMemo, useState, useRef, useEffect, useId } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    Search,
    X,
    SearchX,
    ArrowUpRight,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    CalendarCheck,
} from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";

const PINNED_SERVICE_ORDER = [
    "ai-agent",
    "ai-chatbot-development-services",
    "ai-business-automation-solutions",
    "ai-software-development-services",
    "qa-testing-services",
    "ai-devops",
    "ml-services",
    "custom-software-development-services",
    "mobile-app-development-services",
    "automation-integration",
    "ui-ux-design-services",
    "custom-cms-development-services",
    "rpa-services",
    "data-warehouse",
    "email-marketing",
    "iot-services",
];

const ITEMS_PER_PAGE = 15;
const MAX_SUGGESTIONS = 6;
const CALENDLY_URL =
    "https://calendly.com/adnanghaffar/codeautomation?utm_source=website&utm_campaign=services-search";

const normalize = (value: unknown) =>
    typeof value === "string" ? value.toLowerCase().trim() : "";

// Bold the part of a suggestion that matches the query.
const Highlight = ({ text, query }: { text: string; query: string }) => {
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (!query || index === -1) return <>{text}</>;
    return (
        <>
            {text.slice(0, index)}
            <span className="font-semibold text-[#1D92FB]">
                {text.slice(index, index + query.length)}
            </span>
            {text.slice(index + query.length)}
        </>
    );
};

const ServicesCard = ({ data }: any) => {
    const router = useRouter();
    const listboxId = useId();
    const gridTopRef = useRef<HTMLDivElement>(null);
    const searchBoxRef = useRef<HTMLDivElement>(null);

    const [searchTerm, setSearchTerm] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [activeSuggestion, setActiveSuggestion] = useState(-1);
    const [currentPage, setCurrentPage] = useState(0);

    // Pinned services first (in PINNED_SERVICE_ORDER), then the rest in their original order.
    const sortedServices = useMemo(() => {
        const items: any[] = Array.isArray(data) ? data : [];
        return items
            .map((item, index) => ({ item, index }))
            .sort((a, b) => {
                const aIndex = PINNED_SERVICE_ORDER.indexOf(normalize(a.item?.urlPath));
                const bIndex = PINNED_SERVICE_ORDER.indexOf(normalize(b.item?.urlPath));
                if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
                if (aIndex !== -1) return -1;
                if (bIndex !== -1) return 1;
                return a.index - b.index;
            })
            .map(({ item }) => item);
    }, [data]);

    const query = normalize(searchTerm);

    // Search matches the title or the description.
    const filteredServices = useMemo(() => {
        if (!query) return sortedServices;
        return sortedServices.filter(
            (item) =>
                normalize(item.serviceCardTitle).includes(query) ||
                normalize(item.serviceDesc).includes(query)
        );
    }, [sortedServices, query]);

    // Suggestions: title matches only, titles starting with the query ranked first.
    const suggestions = useMemo(() => {
        if (!query) return [];
        return sortedServices
            .filter((item) => normalize(item.serviceCardTitle).includes(query))
            .sort(
                (a, b) =>
                    Number(!normalize(a.serviceCardTitle).startsWith(query)) -
                    Number(!normalize(b.serviceCardTitle).startsWith(query))
            )
            .slice(0, MAX_SUGGESTIONS);
    }, [sortedServices, query]);

    const totalPages = Math.max(1, Math.ceil(filteredServices.length / ITEMS_PER_PAGE));
    const paginatedServices = filteredServices.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    );
    const popularServices = sortedServices.slice(0, 4);

    // Close the suggestion list when clicking outside the search box.
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (!searchBoxRef.current?.contains(e.target as Node)) setShowSuggestions(false);
        };
        document.addEventListener("mousedown", onClick);
        return () => document.removeEventListener("mousedown", onClick);
    }, []);

    const updateSearch = (value: string) => {
        setSearchTerm(value);
        setCurrentPage(0);
        setActiveSuggestion(-1);
        setShowSuggestions(Boolean(value.trim()));
    };

    const clearSearch = () => updateSearch("");

    const goToPage = (page: number) => {
        setCurrentPage(page);
        gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Escape") {
            setShowSuggestions(false);
            return;
        }
        if (!showSuggestions || suggestions.length === 0) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveSuggestion((i) => (i + 1) % suggestions.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveSuggestion((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
        } else if (e.key === "Enter" && activeSuggestion >= 0) {
            e.preventDefault();
            router.push(`/services/${suggestions[activeSuggestion].urlPath}`);
        } else if (e.key === "Enter") {
            setShowSuggestions(false);
        }
    };

    const suggestionsOpen = showSuggestions && query.length > 0;

    return (
        <section
            id="gridSection"
            className="w-full max-w-[1340px] mx-auto px-5 md:px-10 mt-14 mb-24"
        >
            {/* Header + search */}
            <div ref={gridTopRef} className="scroll-mt-28 flex flex-col md:flex-row md:items-end gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl text-black font-bold">
                        Your Digital Solutions
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Explore {sortedServices.length} services across AI, automation, and
                        software development.
                    </p>
                </div>

                <div ref={searchBoxRef} className="relative w-full md:w-[380px] md:ml-auto">
                    <Search
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        aria-hidden
                    />
                    <input
                        type="search"
                        role="combobox"
                        aria-label="Search services"
                        aria-expanded={suggestionsOpen}
                        aria-controls={listboxId}
                        aria-autocomplete="list"
                        aria-activedescendant={
                            activeSuggestion >= 0 ? `${listboxId}-${activeSuggestion}` : undefined
                        }
                        placeholder="Search e.g. chatbot, CRM"
                        value={searchTerm}
                        onChange={(e) => updateSearch(e.target.value)}
                        onFocus={() => setShowSuggestions(Boolean(query))}
                        onKeyDown={handleKeyDown}
                        className="w-full rounded-full border border-gray-300 bg-white py-3 pl-12 pr-11 text-black shadow-sm placeholder:text-gray-400 focus:border-[#1D92FB] focus:outline-none focus:ring-4 focus:ring-[#1D92FB]/15 transition [&::-webkit-search-cancel-button]:hidden"
                    />
                    {searchTerm && (
                        <button
                            type="button"
                            onClick={clearSearch}
                            aria-label="Clear search"
                            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-black transition"
                        >
                            <X className="w-4 h-4" aria-hidden />
                        </button>
                    )}

                    {/* Suggestions */}
                    {suggestionsOpen && (
                        <ul
                            id={listboxId}
                            role="listbox"
                            className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-gray-100 bg-white py-2 shadow-xl"
                        >
                            {suggestions.length > 0 ? (
                                suggestions.map((item, i) => (
                                    <li
                                        key={item._id}
                                        id={`${listboxId}-${i}`}
                                        role="option"
                                        aria-selected={i === activeSuggestion}
                                    >
                                        <Link
                                            href={`/services/${item.urlPath}`}
                                            onMouseEnter={() => setActiveSuggestion(i)}
                                            className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-gray-700 transition-colors ${
                                                i === activeSuggestion ? "bg-[#EAF4FF]" : ""
                                            }`}
                                        >
                                            <span className="truncate">
                                                <Highlight text={item.serviceCardTitle} query={searchTerm.trim()} />
                                            </span>
                                            <ArrowUpRight className="w-4 h-4 shrink-0 text-gray-400" aria-hidden />
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <li className="flex items-center gap-2 px-4 py-3 text-sm text-gray-500">
                                    <SearchX className="w-4 h-4 shrink-0 text-red-400" aria-hidden />
                                    No service named &ldquo;{searchTerm.trim()}&rdquo;
                                </li>
                            )}
                        </ul>
                    )}
                </div>
            </div>

            {/* Result summary (announced to screen readers) */}
            <p className="mt-6 min-h-[1.5rem] text-sm text-gray-500" aria-live="polite">
                {query &&
                    (filteredServices.length > 0
                        ? `${filteredServices.length} ${filteredServices.length === 1 ? "service" : "services"} found for “${searchTerm.trim()}”`
                        : "")}
            </p>

            {filteredServices.length === 0 && query ? (
                /* Empty state: the searched service does not exist */
                <div
                    role="alert"
                    className="mt-4 rounded-3xl border border-dashed border-gray-300 bg-[#F7F9FC] px-6 py-14 text-center"
                >
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
                        <SearchX className="w-8 h-8" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-xl sm:text-2xl font-bold text-black">
                        No services found for &ldquo;{searchTerm.trim()}&rdquo;
                    </h3>
                    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                        We don&apos;t list a service matching your search. Try a different
                        keyword, or tell us what you need. We build custom solutions too.
                    </p>
                    <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                            type="button"
                            onClick={clearSearch}
                            className="inline-flex items-center gap-2 rounded-lg bg-[#1D92FB] px-6 py-3 font-semibold text-white shadow hover:bg-blue-600 transition-colors"
                        >
                            <X className="w-4 h-4" aria-hidden />
                            Clear search
                        </button>
                        <Link
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#f7e022] px-6 py-3 font-semibold text-black shadow hover:bg-yellow-400 transition-colors"
                        >
                            <CalendarCheck className="w-4 h-4" aria-hidden />
                            Talk to us about it
                        </Link>
                    </div>

                    {popularServices.length > 0 && (
                        <div className="mt-8">
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Popular services
                            </p>
                            <div className="mt-3 flex flex-wrap justify-center gap-2">
                                {popularServices.map((item) => (
                                    <Link
                                        key={item._id}
                                        href={`/services/${item.urlPath}`}
                                        className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-700 hover:border-[#1D92FB] hover:text-[#1D92FB] transition-colors"
                                    >
                                        {item.serviceCardTitle}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    {/* Services grid */}
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
                        {paginatedServices.map((service, i) => {
                            const iconSrc = service.cardIcon
                                ? urlForImage(service.cardIcon).toString()
                                : service.iconSrc;
                            return (
                                <motion.li
                                    key={service._id}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.04 }}
                                    className="h-full"
                                >
                                    <Link
                                        href={`/services/${service.urlPath}`}
                                        className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:-translate-y-1 hover:border-[#1D92FB]/30 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#EAF4FF] transition-colors group-hover:bg-[#dcecff]">
                                                {iconSrc && (
                                                    <img
                                                        src={iconSrc}
                                                        loading="lazy"
                                                        alt=""
                                                        className="h-9 w-9 object-contain"
                                                    />
                                                )}
                                            </span>
                                            <span
                                                aria-hidden
                                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 group-hover:border-[#1D92FB] group-hover:bg-[#1D92FB] group-hover:text-white group-hover:rotate-45"
                                            >
                                                <ArrowUpRight className="w-5 h-5" />
                                            </span>
                                        </div>

                                        <h3 className="mt-5 text-lg sm:text-xl font-semibold leading-snug text-black">
                                            {service.serviceCardTitle}
                                        </h3>
                                        <p className="mt-2 grow text-[15px] leading-6 text-gray-600 line-clamp-3">
                                            {service.serviceDesc}
                                        </p>

                                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D92FB]">
                                            Learn more
                                            <ArrowRight
                                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                                aria-hidden
                                            />
                                        </span>
                                    </Link>
                                </motion.li>
                            );
                        })}
                    </ul>

                    {/* Pagination (hidden when everything fits on one page) */}
                    {totalPages > 1 && (
                        <nav
                            aria-label="Services pages"
                            className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                        >
                            <button
                                type="button"
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 0}
                                aria-label="Previous page"
                                className="flex h-10 items-center gap-1 rounded-full border border-gray-200 bg-white px-3 sm:px-4 text-sm font-medium text-gray-700 hover:border-[#1D92FB] hover:text-[#1D92FB] disabled:pointer-events-none disabled:opacity-40 transition"
                            >
                                <ChevronLeft className="w-4 h-4" aria-hidden />
                                <span className="hidden sm:inline">Prev</span>
                            </button>

                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => goToPage(index)}
                                    aria-label={`Page ${index + 1}`}
                                    aria-current={currentPage === index ? "page" : undefined}
                                    className={`h-10 w-10 rounded-full text-sm font-semibold transition ${
                                        currentPage === index
                                            ? "bg-[#1D92FB] text-white shadow-md"
                                            : "border border-gray-200 bg-white text-gray-700 hover:border-[#1D92FB] hover:text-[#1D92FB]"
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                type="button"
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage >= totalPages - 1}
                                aria-label="Next page"
                                className="flex h-10 items-center gap-1 rounded-full border border-gray-200 bg-white px-3 sm:px-4 text-sm font-medium text-gray-700 hover:border-[#1D92FB] hover:text-[#1D92FB] disabled:pointer-events-none disabled:opacity-40 transition"
                            >
                                <span className="hidden sm:inline">Next</span>
                                <ChevronRight className="w-4 h-4" aria-hidden />
                            </button>
                        </nav>
                    )}
                </>
            )}
        </section>
    );
};

export default ServicesCard;
