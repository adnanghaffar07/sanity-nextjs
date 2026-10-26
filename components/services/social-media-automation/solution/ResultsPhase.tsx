import { ArrowUpRight, Bell, CheckCircle, Rocket, Shield, Upload } from "lucide-react";
import { BENEFITS, CONSULTATION_URL, NOTIFICATIONS, PLATFORMS, type Phase } from "./data";
import PhaseHeader from "./PhaseHeader";

// Step 4: scheduled in GoHighLevel, with Slack/email notifications.
export default function ResultsPhase({ phase }: { phase: Phase }) {
  return (
    <div className="p-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <PhaseHeader phase={phase} />
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#00A3FF]/5 to-[#7B61FF]/5 border border-[#00A3FF]/20 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="p-1.5 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded mr-2">
                  <Upload className="w-3.5 h-3.5 text-white" />
                </div>
                <h5 className="text-sm font-bold text-gray-900">GoHighLevel Integration</h5>
              </div>
              <p className="text-sm text-gray-700 mb-3">Content uploaded and scheduled for optimal times.</p>
              <div className="grid grid-cols-3 gap-2">
                {PLATFORMS.map((platform) => (
                  <div key={platform.name} className="bg-white rounded-lg p-2 border border-[#00A3FF]/20 text-center">
                    <div className="text-xs text-gray-500 mb-1">Platform</div>
                    <div className={`text-sm font-bold ${platform.color}`}>{platform.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {BENEFITS.map((benefit) => (
                <div key={benefit.title} className="group bg-white border border-gray-200 rounded-lg p-3 hover:shadow-xs transition-all">
                  <div className="flex items-center mb-1.5">
                    <div className="p-1 rounded bg-gradient-to-br from-[#00A3FF]/10 to-[#7B61FF]/10 group-hover:scale-105 transition-transform mr-1.5">
                      <benefit.icon className="w-3 h-3 text-[#00A3FF]" />
                    </div>
                    <h6 className="text-sm font-medium text-gray-900">{benefit.title}</h6>
                  </div>
                  <p className="text-xs text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="p-1.5 bg-gradient-to-r from-[#00A3FF] to-[#7B61FF] rounded mr-2">
                  <Bell className="w-3.5 h-3.5 text-white" />
                </div>
                <h5 className="text-sm font-bold text-gray-900">Notifications</h5>
              </div>
              <div className="w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse" />
            </div>

            <div className="space-y-3">
              {NOTIFICATIONS.map((notification) => (
                <div key={notification.platform} className="bg-white border border-gray-200 rounded-lg p-3 hover:border-[#00A3FF]/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="p-1.5 rounded bg-gradient-to-br from-[#00A3FF]/10 to-[#7B61FF]/10 mr-2">
                        <notification.icon className="w-3 h-3 text-[#00A3FF]" />
                      </div>
                      <div>
                        <h6 className="text-sm font-medium text-gray-900">{notification.platform}</h6>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-700 mb-1.5">{notification.preview}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <CheckCircle className="w-3 h-3 text-[#00C9A7] mr-1" />
                    Includes all details
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center mb-1.5">
                <Shield className="w-3 h-3 text-[#00C9A7] mr-1.5" />
                <h6 className="text-sm font-medium text-gray-900">Nothing Missed</h6>
              </div>
              <p className="text-xs text-gray-600">Real-time notifications ensure complete transparency.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#00A3FF] via-[#7B61FF] to-[#00C9A7] rounded-lg p-4 text-white overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-center mb-2">
                <Rocket className="w-4 h-4 mr-1.5" />
                <h5 className="text-sm font-bold">Transform Your Workflow</h5>
              </div>
              <p className="text-blue-100 text-xs mb-3">Join teams automating with CodeAutomation</p>
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-gray-900 hover:bg-blue-50 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center"
              >
                Book a Meeting →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
