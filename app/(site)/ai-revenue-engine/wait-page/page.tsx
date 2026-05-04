import WaitCallCountdown from "./WaitCallCountdown";
import { Phone, Bell, Smile, Calendar, Volume2, Shield, Clock, CheckCircle } from "lucide-react";

export default function WaitPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl mt-20">
        {/* Main Card */}
        <div className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden">
          {/* Minimal top accent */}
          <div className="h-0.5 bg-gradient-to-r from-[#3498db] to-[#f7e022]" />

          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                WAIT!{" "}
                <span className="text-[#3498db] font-bold">Emma</span>
              </h1>
              <p className="text-gray-500 mt-1 text-sm">
                Your AI Sales Agent is calling you right now
              </p>
            </div>

            {/* Countdown */}
            <div className="mb-8">
              <WaitCallCountdown startSeconds={60} />
            </div>

            {/* Steps - Clean list */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-[#3498db]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3 h-3 text-[#3498db]" />
                </div>
                <span className="text-gray-700">Phone rings in <span className="font-medium">under 60 seconds</span></span>
                <Bell className="w-3.5 h-3.5 text-gray-400 ml-auto flex-shrink-0" />
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-[#f7e022]/10 flex items-center justify-center flex-shrink-0">
                  <Smile className="w-3 h-3 text-[#d4b000]" />
                </div>
                <span className="text-gray-700">Emma introduces herself & asks about your business</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-[#3498db]/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-3 h-3 text-[#3498db]" />
                </div>
                <span className="text-gray-700">Books your free demo call</span>
              </div>
            </div>

            {/* Video Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-medium text-gray-900">See Emma in action</h2>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-900 border border-gray-200">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                  title="Emma AI demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  No credit card
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-200" />
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Zero commitment
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-200" />
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  60 sec response
                </span>
              </div>
              <p className="text-center text-xs text-gray-400 mt-3">
                Emma calls from a US number. Missed it? We&apos;ll reach out via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}