"use client";
import React, { useEffect, useMemo, useRef, useState, useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  X,
  SearchX,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Smartphone,
  Globe,
  FlaskConical,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { CASE_STUDY_CARDS_QUERY, mergeCaseStudyCards } from "@/sanity/lib/content";
import { urlForImage } from "@/sanity/lib/image";
import ButtonScrollToSection from "../components/ButtonScrollToSection";

const ITEMS_PER_PAGE = 9;
const MAX_SUGGESTIONS = 6;

// Tabs on the page. `value` matches the card's `group` in Sanity.
// `short` is shown on the pill; `label` is the full name (tooltip, screen
// readers, result summary).
const FILTERS: { value: string; label: string; short: string; icon: LucideIcon }[] = [
  { value: "all", label: "All Projects", short: "All Projects", icon: LayoutGrid },
  { value: "app", label: "Mobile App Development", short: "Mobile Apps", icon: Smartphone },
  { value: "web", label: "Web App Development", short: "Web Apps", icon: Globe },
  { value: "qa", label: "QA Testing & Automation", short: "QA & Testing", icon: FlaskConical },
  { value: "shopify", label: "Ecommerce", short: "Ecommerce", icon: ShoppingBag },
  { value: "ai", label: "AI & Automation", short: "AI & Automation", icon: Sparkles },
];

// Short labels for the badges shown on each card.
const GROUP_BADGES: Record<string, string> = {
  app: "Mobile App",
  web: "Web App",
  qa: "QA & Testing",
  shopify: "Ecommerce",
  ai: "AI & Automation",
};

// `group` may hold several comma-separated values (e.g. "web,ai") so a case
// study can appear under more than one tab.
const groupsOf = (item: any): string[] =>
  String(item?.group ?? "")
    .split(",")
    .map((g) => g.trim().toLowerCase())
    .filter(Boolean);

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

const CaseStudy = () => {
  const [originalCards, setOriginalCards] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  const listboxId = useId();
  const gridTopRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  const fetchData = async () => {
    // Fetch only the card fields (never whole documents: full blog posts made
    // this grid take minutes to appear). Each case study has its own card;
    // the old CaseStudyInfo list fills in until every case study is copied.
    try {
      setOriginalCards(mergeCaseStudyCards(await client.fetch(CASE_STUDY_CARDS_QUERY)));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Close the suggestion list when clicking outside the search box.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!searchBoxRef.current?.contains(e.target as Node)) setShowSuggestions(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const query = searchTerm.trim().toLowerCase();

  // Number of case studies per tab, shown on each filter pill.
  const filterCounts = useMemo(() => {
    const counts: Record<string, number> = { all: originalCards.length };
    for (const item of originalCards) {
      for (const g of new Set(groupsOf(item))) counts[g] = (counts[g] ?? 0) + 1;
    }
    return counts;
  }, [originalCards]);

  const filteredItems = useMemo(() => {
    let items = originalCards;

    if (activeFilter !== "all") {
      items = items.filter((item) => groupsOf(item).includes(activeFilter));
    }

    if (query) {
      items = items.filter(
        (item) =>
          item.cardTitle?.toLowerCase().includes(query) ||
          item.cardDescription?.toLowerCase().includes(query)
      );
    }

    return items;
  }, [originalCards, activeFilter, query]);

  const suggestions = useMemo(() => {
    if (!query) return [];
    return originalCards
      .filter((item) => item.cardTitle?.toLowerCase().includes(query))
      .sort(
        (a, b) =>
          Number(!a.cardTitle.toLowerCase().startsWith(query)) -
          Number(!b.cardTitle.toLowerCase().startsWith(query))
      )
      .slice(0, MAX_SUGGESTIONS);
  }, [originalCards, query]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
  const paginatedItems = filteredItems.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(0);
  };

  const updateSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(0);
    setActiveSuggestion(-1);
    setShowSuggestions(Boolean(value.trim()));
  };

  const resetAll = () => {
    updateSearch("");
    handleFilterChange("all");
  };

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
      updateSearch(suggestions[activeSuggestion].cardTitle);
      setShowSuggestions(false);
    } else if (e.key === "Enter") {
      setShowSuggestions(false);
    }
  };

  const suggestionsOpen = showSuggestions && query.length > 0;
  const activeFilterLabel = FILTERS.find((f) => f.value === activeFilter)?.label;

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[380px] sm:h-[700px] opacity-65 absolute z-[1]"></div>
        <div className="w-full h-[380px] sm:h-[700px] relative z-0">
          <Image
            src="/CaseStudyHero.png"
            alt="CaseStudyHero.jpg"
            loading="lazy"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="mt-[130px] sm:mt-[290px] items-center absolute inset-0 flex flex-col z-[2]">
          <h1 className="text-xl sm:text-5xl font-bold tracking-tight capitalize leading-[48px] text-white text-center">
            Discover Success Stories
          </h1>
          <p className="mt-2 sm:mt-4 mb-4 text-xs sm:text-xl font-light tracking-wide leading-4 sm:leading-7 text-white max-w-5xl xl:px-0 text-center">
            Explore our case study on codeautomation, showcasing how innovative
            strategies significantly enhance efficiency, reduce costs, and
            accelerate development in software projects.
          </p>
          <ButtonScrollToSection
            content="Let’s Get Started"
            classes="bg-[#1D92FB] hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            destination="gridSection"
            key="Lets-Get-Started"
          />
        </div>
      </section>

      <section className=" relative">
        <div className="absolute inset-0 bg-[#3595EB] opacity-10 pointer-events-none"></div>
        <img
          loading="lazy"
          src="/ellipse-1.png"
          className="absolute left-0 w-40 lg:block hidden"
          alt="ellipse"
        />

        <div className="max-w-6xl px-6 md:px-16 py-10 md:py-16 mx-auto relative">
          {/* Content with Image and Text */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Section on the Left */}
            <div className="flex-1 md:mr-8">
              <h3 className="text-2xl md:text-4xl font-semibold text-black mb-4">
                Real World Application Case studies
              </h3>
              <p className="text-xl text-[#3C3C3C]">
                Case studies are essential because they offer detailed insights and
                practical examples of how theories work in real-world scenarios,
                helping to improve strategies and decision-making.
              </p>
            </div>

            {/* Image on the Right */}
            <div className="flex-1 mt-8 md:mt-0">
              <img
                src="/Picture.png"
                alt="Our Case Studies"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>


      <section
        id="gridSection"
        className="w-full max-w-[1340px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-24"
      >
        {/* Header + search */}
        <div ref={gridTopRef} className="scroll-mt-28 flex flex-col md:flex-row md:items-end gap-6">
          <div className="text-center md:text-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">
              Our Portfolio
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl text-black font-bold">
              Explore Our Work
            </h2>
            <p className="mt-2 text-gray-600">
              Real projects we&apos;ve designed, built, tested, and automated for our clients.
            </p>
          </div>

          <div ref={searchBoxRef} className="relative w-full md:w-[340px] md:ml-auto">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              aria-hidden
            />
            <input
              type="search"
              role="combobox"
              aria-label="Search case studies"
              aria-expanded={suggestionsOpen}
              aria-controls={listboxId}
              aria-autocomplete="list"
              aria-activedescendant={
                activeSuggestion >= 0 ? `${listboxId}-${activeSuggestion}` : undefined
              }
              placeholder="Search case studies"
              value={searchTerm}
              onChange={(e) => updateSearch(e.target.value)}
              onFocus={() => setShowSuggestions(Boolean(query))}
              onKeyDown={handleKeyDown}
              className="w-full rounded-full border border-gray-300 bg-white py-3 pl-12 pr-11 text-black shadow-sm placeholder:text-gray-400 focus:border-[#1D92FB] focus:outline-none focus:ring-4 focus:ring-[#1D92FB]/15 transition [&::-webkit-search-cancel-button]:hidden"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => updateSearch("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-black transition"
              >
                <X className="w-4 h-4" aria-hidden />
              </button>
            )}

            {suggestionsOpen && (
              <ul
                id={listboxId}
                role="listbox"
                className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-gray-100 bg-white py-2 shadow-xl"
              >
                {suggestions.length > 0 ? (
                  suggestions.map((item, i) => (
                    <li
                      key={item._key ?? item.url}
                      id={`${listboxId}-${i}`}
                      role="option"
                      aria-selected={i === activeSuggestion}
                    >
                      <Link
                        href={`/case-studies/${item.url}`}
                        onMouseEnter={() => setActiveSuggestion(i)}
                        className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-gray-700 transition-colors ${
                          i === activeSuggestion ? "bg-[#EAF4FF]" : ""
                        }`}
                      >
                        <span className="truncate">
                          <Highlight text={item.cardTitle} query={searchTerm.trim()} />
                        </span>
                        <ArrowUpRight className="w-4 h-4 shrink-0 text-gray-400" aria-hidden />
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="flex items-center gap-2 px-4 py-3 text-sm text-gray-500">
                    <SearchX className="w-4 h-4 shrink-0 text-red-400" aria-hidden />
                    No case study named &ldquo;{searchTerm.trim()}&rdquo;
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>

        {/* Filter pills */}
        <div
          role="tablist"
          aria-label="Filter case studies"
          // Phones: one sideways-scrolling row. md+: wraps (fits on one row on desktop).
          className="mt-8 -mx-5 px-5 md:mx-0 md:px-0 flex gap-2.5 overflow-x-auto md:flex-wrap md:overflow-visible pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {FILTERS.map(({ value, label, short, icon: Icon }) => {
            const active = activeFilter === value;
            return (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={active}
                title={label}
                onClick={(e) => {
                  handleFilterChange(value);
                  e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
                }}
                className={`group inline-flex shrink-0 whitespace-nowrap items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${
                  active
                    ? "border-[#1D92FB] bg-[#1D92FB] text-white shadow-md shadow-[#1D92FB]/25"
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#1D92FB]/50 hover:text-[#1D92FB]"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" aria-hidden />
                {short}
                {!isLoading && (
                  <span
                    className={`min-w-[1.5rem] rounded-full px-1.5 py-0.5 text-xs font-semibold ${
                      active ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-[#EAF4FF] group-hover:text-[#1D92FB]"
                    }`}
                  >
                    {filterCounts[value] ?? 0}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Result summary (announced to screen readers) */}
        <p className="mt-6 min-h-[1.25rem] text-sm text-gray-500" aria-live="polite">
          {!isLoading &&
            filteredItems.length > 0 &&
            (query || activeFilter !== "all") &&
            `Showing ${filteredItems.length} ${filteredItems.length === 1 ? "case study" : "case studies"}${
              activeFilter !== "all" ? ` in ${activeFilterLabel}` : ""
            }${query ? ` matching “${searchTerm.trim()}”` : ""}`}
        </p>

        {isLoading ? (
          /* Loading skeletons */
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" aria-hidden>
            {Array.from({ length: 6 }, (_, i) => (
              <li key={i} className="rounded-3xl border border-gray-100 bg-white p-3 shadow-sm">
                <div className="aspect-[1.52] w-full animate-pulse rounded-2xl bg-gray-100" />
                <div className="px-3 pb-3 pt-5 space-y-3">
                  <div className="h-5 w-2/3 animate-pulse rounded bg-gray-100" />
                  <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
                  <div className="h-4 w-4/5 animate-pulse rounded bg-gray-100" />
                </div>
              </li>
            ))}
          </ul>
        ) : filteredItems.length === 0 ? (
          /* Empty state */
          <div
            role="alert"
            className="mt-4 rounded-3xl border border-dashed border-gray-300 bg-[#F7F9FC] px-6 py-14 text-center"
          >
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
              <SearchX className="w-8 h-8" aria-hidden />
            </span>
            <h3 className="mt-5 text-xl sm:text-2xl font-bold text-black">
              {query
                ? <>No case studies found for &ldquo;{searchTerm.trim()}&rdquo;</>
                : <>No case studies in {activeFilterLabel} yet</>}
            </h3>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Try a different keyword or category, or browse all of our projects.
            </p>
            <button
              type="button"
              onClick={resetAll}
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#1D92FB] px-6 py-3 font-semibold text-white shadow hover:bg-blue-600 transition-colors"
            >
              <LayoutGrid className="w-4 h-4" aria-hidden />
              View all projects
            </button>
          </div>
        ) : (
          <>
            {/* Case study grid */}
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {paginatedItems.map((item: any, i: number) => {
                const badges = groupsOf(item).filter((g) => GROUP_BADGES[g]);
                return (
                  <motion.li
                    key={item._key ?? item.url ?? i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.04 }}
                    className="h-full"
                  >
                    <Link
                      href={`/case-studies/${item?.url}`}
                      className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-3 shadow-sm hover:-translate-y-1 hover:border-[#1D92FB]/30 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-gray-50">
                        {item?.cardImage && (
                          <Image
                            width={454}
                            height={300}
                            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                            className="aspect-[1.52] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            src={urlForImage(item.cardImage).toString()}
                            alt={item.cardTitle ? `${item.cardTitle} case study` : "Case study"}
                          />
                        )}
                        <span
                          aria-hidden
                          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 opacity-0 shadow-md backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:rotate-45"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </span>
                      </div>

                      <div className="flex grow flex-col px-3 pb-3 pt-5">
                        {badges.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {badges.map((g) => (
                              <span
                                key={g}
                                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                                  g === "ai"
                                    ? "bg-[#f7e022]/30 text-[#7a6a00]"
                                    : "bg-[#EAF4FF] text-[#1D92FB]"
                                }`}
                              >
                                {GROUP_BADGES[g]}
                              </span>
                            ))}
                          </div>
                        )}
                        <h3 className="mt-3 text-lg sm:text-xl font-semibold leading-snug text-black">
                          {item.cardTitle}
                        </h3>
                        {item.cardDescription && (
                          <p className="mt-2 grow text-[15px] leading-6 text-gray-600 line-clamp-2">
                            {item.cardDescription}
                          </p>
                        )}
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D92FB]">
                          View case study
                          <ArrowRight
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            aria-hidden
                          />
                        </span>
                      </div>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Pagination (hidden when everything fits on one page) */}
            {totalPages > 1 && (
              <nav
                aria-label="Case study pages"
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
    </>
  );
};

export default CaseStudy;
