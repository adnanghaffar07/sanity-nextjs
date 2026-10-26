"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Globe,
  LayoutGrid,
  Search,
  SearchX,
  ShoppingBag,
  Smartphone,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import type { CaseStudyCard as CaseStudyCardData } from "@/sanity/lib/case-studies";
import CaseStudyCard from "./CaseStudyCard";

const ITEMS_PER_PAGE = 9;
const MAX_SUGGESTIONS = 6;
const ALL = "all";

// Filter tabs. `value` matches a card's categories; `short` is shown on the
// pill, `label` is the full name (tooltip, screen readers, result summary).
const FILTERS: { value: string; label: string; short: string; icon: LucideIcon }[] = [
  { value: ALL, label: "All Projects", short: "All Projects", icon: LayoutGrid },
  { value: "app", label: "Mobile App Development", short: "Mobile Apps", icon: Smartphone },
  { value: "web", label: "Web App Development", short: "Web Apps", icon: Globe },
  { value: "qa", label: "QA Testing & Automation", short: "QA & Testing", icon: FlaskConical },
  { value: "shopify", label: "Ecommerce", short: "Ecommerce", icon: ShoppingBag },
  { value: "ai", label: "AI & Automation", short: "AI & Automation", icon: Sparkles },
];

const inCategory = (card: CaseStudyCardData, category: string) =>
  card.categories.some((c) => c.trim().toLowerCase() === category);

function Highlight({ text, query }: { text: string; query: string }) {
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (!query || index === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <span className="font-semibold text-[#1D92FB]">{text.slice(index, index + query.length)}</span>
      {text.slice(index + query.length)}
    </>
  );
}

// Searchable, filterable, paginated grid of case study cards on /case-studies.
export default function CaseStudyGrid({ id, cards }: { id: string; cards: CaseStudyCardData[] }) {
  const [activeFilter, setActiveFilter] = useState(ALL);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  const listboxId = useId();
  const gridTopRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  // Close the suggestion list when clicking outside the search box.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!searchBoxRef.current?.contains(e.target as Node)) setShowSuggestions(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const typed = searchTerm.trim();
  const query = typed.toLowerCase();

  // Number of case studies per tab, shown on each filter pill.
  const filterCounts = useMemo(
    () =>
      Object.fromEntries(
        FILTERS.map(({ value }) => [value, value === ALL ? cards.length : cards.filter((c) => inCategory(c, value)).length])
      ),
    [cards]
  );

  const filteredCards = useMemo(
    () =>
      cards.filter(
        (card) =>
          (activeFilter === ALL || inCategory(card, activeFilter)) &&
          (!query || card.title?.toLowerCase().includes(query) || card.description?.toLowerCase().includes(query))
      ),
    [cards, activeFilter, query]
  );

  const suggestions = useMemo(() => {
    if (!query) return [];
    const startsWithQuery = (card: CaseStudyCardData) => Number(!card.title.toLowerCase().startsWith(query));
    return cards
      .filter((card) => card.title?.toLowerCase().includes(query))
      .sort((a, b) => startsWithQuery(a) - startsWithQuery(b))
      .slice(0, MAX_SUGGESTIONS);
  }, [cards, query]);

  const totalPages = Math.max(1, Math.ceil(filteredCards.length / ITEMS_PER_PAGE));
  const pageCards = filteredCards.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);
  const suggestionsOpen = showSuggestions && query.length > 0;
  const activeFilterLabel = FILTERS.find((f) => f.value === activeFilter)?.label;

  const changeFilter = (filter: string) => {
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
    changeFilter(ALL);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") return setShowSuggestions(false);
    if (!showSuggestions || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggestion((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestion((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Enter") {
      if (activeSuggestion >= 0) {
        e.preventDefault();
        updateSearch(suggestions[activeSuggestion].title);
      }
      setShowSuggestions(false);
    }
  };

  return (
    <section id={id} className="w-full max-w-[1340px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-24">
      {/* Header + search */}
      <div ref={gridTopRef} className="scroll-mt-28 flex flex-col md:flex-row md:items-end gap-6">
        <div className="text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#1D92FB]">Our Portfolio</span>
          <h2 className="mt-2 text-3xl md:text-4xl text-black font-bold">Explore Our Work</h2>
          <p className="mt-2 text-gray-600">Real projects we&apos;ve designed, built, tested, and automated for our clients.</p>
        </div>

        <div ref={searchBoxRef} className="relative w-full md:w-[340px] md:ml-auto">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden />
          <input
            type="search"
            role="combobox"
            aria-label="Search case studies"
            aria-expanded={suggestionsOpen}
            aria-controls={listboxId}
            aria-autocomplete="list"
            aria-activedescendant={activeSuggestion >= 0 ? `${listboxId}-${activeSuggestion}` : undefined}
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
                suggestions.map((card, i) => (
                  <li key={card._id} id={`${listboxId}-${i}`} role="option" aria-selected={i === activeSuggestion}>
                    <Link
                      href={`/case-studies/${card.slug}`}
                      onMouseEnter={() => setActiveSuggestion(i)}
                      className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-gray-700 transition-colors ${
                        i === activeSuggestion ? "bg-[#EAF4FF]" : ""
                      }`}
                    >
                      <span className="truncate">
                        <Highlight text={card.title} query={typed} />
                      </span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 text-gray-400" aria-hidden />
                    </Link>
                  </li>
                ))
              ) : (
                <li className="flex items-center gap-2 px-4 py-3 text-sm text-gray-500">
                  <SearchX className="w-4 h-4 shrink-0 text-red-400" aria-hidden />
                  No case study named &ldquo;{typed}&rdquo;
                </li>
              )}
            </ul>
          )}
        </div>
      </div>

      {/* Filter pills: one sideways-scrolling row on phones, wrapping from md up */}
      <div
        role="tablist"
        aria-label="Filter case studies"
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
                changeFilter(value);
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
              <span
                className={`min-w-[1.5rem] rounded-full px-1.5 py-0.5 text-xs font-semibold ${
                  active ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-[#EAF4FF] group-hover:text-[#1D92FB]"
                }`}
              >
                {filterCounts[value]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Result summary (announced to screen readers) */}
      <p className="mt-6 min-h-[1.25rem] text-sm text-gray-500" aria-live="polite">
        {filteredCards.length > 0 &&
          (query || activeFilter !== ALL) &&
          `Showing ${filteredCards.length} ${filteredCards.length === 1 ? "case study" : "case studies"}${
            activeFilter !== ALL ? ` in ${activeFilterLabel}` : ""
          }${query ? ` matching “${typed}”` : ""}`}
      </p>

      {filteredCards.length === 0 ? (
        <div role="alert" className="mt-4 rounded-3xl border border-dashed border-gray-300 bg-[#F7F9FC] px-6 py-14 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
            <SearchX className="w-8 h-8" aria-hidden />
          </span>
          <h3 className="mt-5 text-xl sm:text-2xl font-bold text-black">
            {query ? <>No case studies found for &ldquo;{typed}&rdquo;</> : <>No case studies in {activeFilterLabel} yet</>}
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
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pageCards.map((card, i) => (
              <motion.li
                key={card._id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.04 }}
                className="h-full"
              >
                <CaseStudyCard card={card} imageSizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" />
              </motion.li>
            ))}
          </ul>

          {totalPages > 1 && (
            <nav aria-label="Case study pages" className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <PageArrow direction="previous" disabled={currentPage === 0} onClick={() => goToPage(currentPage - 1)} />
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
              <PageArrow direction="next" disabled={currentPage >= totalPages - 1} onClick={() => goToPage(currentPage + 1)} />
            </nav>
          )}
        </>
      )}
    </section>
  );
}

function PageArrow({ direction, disabled, onClick }: { direction: "previous" | "next"; disabled: boolean; onClick: () => void }) {
  const next = direction === "next";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={next ? "Next page" : "Previous page"}
      className="flex h-10 items-center gap-1 rounded-full border border-gray-200 bg-white px-3 sm:px-4 text-sm font-medium text-gray-700 hover:border-[#1D92FB] hover:text-[#1D92FB] disabled:pointer-events-none disabled:opacity-40 transition"
    >
      {!next && <ChevronLeft className="w-4 h-4" aria-hidden />}
      <span className="hidden sm:inline">{next ? "Next" : "Prev"}</span>
      {next && <ChevronRight className="w-4 h-4" aria-hidden />}
    </button>
  );
}
