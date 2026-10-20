import WaitCallCountdown from "@/components/landing/ai-revenue-engine/WaitCallCountdown";
import { Phone, Bell, Smile, Calendar, Volume2, Shield, Clock, CheckCircle, Headphones, Sparkles, ArrowRight, User, Loader2 } from "lucide-react";

export const metadata = {
  robots: "noindex, nofollow",
};

export default function WaitPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 mt-12 px-4 py-8 md:py-12">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-bl from-[#3498db]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-tr from-[#f7e022]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-2xl relative z-10 mt-8 md:mt-16">
        {/* Main Card */}
        <div className="rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
          {/* Gradient accent bar */}
          <div className="h-1 bg-gradient-to-r from-[#3498db] via-[#4b2d85] to-[#f7e022]" />

          <div className="p-6 md:p-8 lg:p-10">
            {/* Phone icon animation */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3498db] to-[#4b2d85] animate-ping opacity-20" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-[#3498db] to-[#4b2d85] flex items-center justify-center shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl text-gray-800 font-light">
                WAIT!{" "}
                <span className="bg-gradient-to-r from-[#3498db] to-[#4b2d85] bg-clip-text text-transparent font-semibold">
                  Eva
                </span>
                <span className="text-gray-800 font-light"> is calling</span>
              </h1>
              <p className="text-gray-500 mt-2 text-sm">
                Your AI Sales Agent will ring your phone in a moment
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-10">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center border border-gray-100">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
                  Incoming call in
                </p>
                <WaitCallCountdown startSeconds={15} />
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Volume2 className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-xs text-gray-400">Keep your phone nearby</span>
                </div>
              </div>
            </div>

            {/* What to expect section */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#3498db]" />
                <h2 className="text-sm font-medium text-gray-700">What to expect</h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#3498db]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-3 h-3 text-[#3498db]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">Phone rings in <span className="font-medium text-[#3498db]">under 15 seconds</span></p>
                    <p className="text-xs text-gray-400 mt-0.5">From a US number — answer to meet Eva</p>
                  </div>
                  <Bell className="w-4 h-4 text-gray-300 flex-shrink-0" />
                </div>
                
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#f7e022]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Headphones className="w-3 h-3 text-[#d4b000]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">Eva introduces herself & learns about your business</p>
                    <p className="text-xs text-gray-400 mt-0.5">Natural conversation, just like a real person</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#3498db]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Calendar className="w-3 h-3 text-[#3498db]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">Eva schedules your free strategy call</p>
                    <p className="text-xs text-gray-400 mt-0.5">Book directly with our team in under 2 minutes</p>
                  </div>
                </div>
              </div>
            </div>

    
            {/* Trust indicators */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-gray-50">
                  <Shield className="w-3 h-3 text-green-500" />
                  <span className="text-gray-500">No credit card</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-gray-50">
                  <CheckCircle className="w-3 h-3 text-[#3498db]" />
                  <span className="text-gray-500">Zero commitment</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-gray-50">
                  <Clock className="w-3 h-3 text-amber-500" />
                  <span className="text-gray-500">15 sec response</span>
                </div>
              </div>
              
              {/* <div className="mt-4 text-center">
                <p className="text-xs text-gray-400">
                  Eva calls from a US number. 
                  <button className="ml-1 text-[#3498db] hover:underline transition-colors">
                    Missed the call? Click here
                  </button>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}