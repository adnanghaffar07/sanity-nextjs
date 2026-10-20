import type { ServiceSummaryContent } from "@/sanity/lib/service-summary";
import SanityLogo from "@/components/ui/SanityLogo";

// How projects are tracked and how invoices are paid, side by side.
export default function ToolsAndPayments({
  tools,
  payments,
}: {
  tools?: ServiceSummaryContent["tools"];
  payments?: ServiceSummaryContent["payments"];
}) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24 grid gap-14 lg:grid-cols-2 lg:gap-20">
        {!!tools?.items?.length && (
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#061A3A]">{tools.heading}</h2>
            <ul className="mt-8 divide-y divide-slate-100 border-y border-slate-100">
              {tools.items.map((tool) => (
                <li key={tool._key} className="flex items-center gap-5 py-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EAF4FF]">
                    {tool.logos[0] && (
                      <SanityLogo logo={tool.logos[0]} height={28} alt="" className="h-7 w-auto max-w-[36px] object-contain" />
                    )}
                  </span>
                  <span>
                    <span className="block font-semibold text-[#061A3A]">{tool.heading}</span>
                    {tool.detail && <span className="block mt-0.5 text-slate-500">{tool.detail}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!!payments?.items?.length && (
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#061A3A]">{payments.heading}</h2>
            {payments.text && <p className="mt-4 max-w-xl text-slate-600 leading-7">{payments.text}</p>}
            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {payments.items.map((method) => (
                <li
                  key={method._key}
                  className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center transition-colors hover:border-[#1D92FB]/50 hover:bg-[#F5FAFF]"
                >
                  {method.logos[0] && (
                    <SanityLogo logo={method.logos[0]} height={36} alt="" className="h-9 w-auto max-w-[120px] object-contain" />
                  )}
                  <span className="text-sm font-medium text-[#061A3A]">{method.heading}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
