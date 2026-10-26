"use client";

// The interactive parts of /services/mobile-app: the quote modal, the "Get
// expert help" card and the floating consultation drawer, plus the buttons
// that open the modal or the live chat. They share state through a context so
// the rest of the page can stay server-rendered.

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { toggleLiveChat } from "@/components/layout/live-chat";
import QuoteModal from "./QuoteModal";
import FloatingConsultDrawer from "./FloatingConsultDrawer";

const CONSULTATION_URL = "https://calendly.com/adnanghaffar/codeautomation?utm_source=website&utm_campaign=services";
const HELP_CARD_DELAY_MS = 5000;

const ConsultContext = createContext<{ openQuote: () => void }>({ openQuote: () => {} });

export function MobileAppConsultProvider({ children }: { children: ReactNode }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [helpCardOpen, setHelpCardOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHelpCardOpen(true), HELP_CARD_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ConsultContext.Provider value={{ openQuote: () => setQuoteOpen(true) }}>
      {children}
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      {helpCardOpen && !quoteOpen && !drawerOpen && <HelpCard onClose={() => setHelpCardOpen(false)} />}
      <FloatingConsultDrawer isModalOpen={quoteOpen} setIsFloatingDrawerOpen={setDrawerOpen} />
    </ConsultContext.Provider>
  );
}

export function QuoteButton({ className, children }: { className: string; children: ReactNode }) {
  const { openQuote } = useContext(ConsultContext);
  return (
    <button type="button" onClick={openQuote} className={className}>
      {children}
    </button>
  );
}

export function LiveChatLink({ className, children }: { className: string; children: ReactNode }) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        toggleLiveChat();
      }}
      className={className}
    >
      {children}
    </a>
  );
}

// Small card in the bottom-left corner offering a chat or a call.
function HelpCard({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 z-[9999] w-[300px] sm:w-[320px] animate-fade-in">
      <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1D92FB] to-blue-400" />
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-6 h-6 rounded-full text-gray-400 hover:text-gray-600 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-[#1D92FB] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Get expert help</h3>
              <p className="text-xs text-gray-500">
                Response in <span className="text-green-600">&lt;2min</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => toggleLiveChat() && onClose()}
              className="flex-1 flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-2 px-3 rounded-lg transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Chat</span>
            </button>
            <a
              href={CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#1D92FB] hover:bg-blue-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Schedule</span>
            </a>
          </div>

          <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 rounded-full bg-[#1D92FB]/10 border border-white flex items-center justify-center">
                  <span className="text-[8px] font-medium text-[#1D92FB]">JD</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-purple-100 border border-white flex items-center justify-center">
                  <span className="text-[8px] font-medium text-purple-600">AK</span>
                </div>
              </div>
              <span className="text-xs text-gray-500">Online</span>
            </div>
            <span className="text-xs text-gray-400">Free consult</span>
          </div>
        </div>
      </div>
    </div>
  );
}
