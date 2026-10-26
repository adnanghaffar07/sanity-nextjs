"use client";

// Plan comparison table. The page only sends the preview rows (preview.ts);
// signed-in visitors get the full plan from /api/pricing/plan: every feature,
// the prices and the "Submit proposal" buttons. Phones get one table per plan,
// larger screens one combined table; both are rendered and CSS picks one, so
// server and browser HTML match.

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PlanFeature } from "@/sanity/lib/site-pages";
import LoginModal from "./LoginModal";
import { PREVIEW_ROWS, type PlanFeatures } from "./preview";
import illusTopRight from "@/public/illus1.png";
import illusTopRightMember from "@/public/illus-1.png";
import illusTopCenter from "@/public/illus2.png";
import illusBottomLeftSmall from "@/public/illus3.png";
import illusBottomLeft from "@/public/illus4.png";
import illusBottomCenter from "@/public/illus5.png";

const PLANS = [
  { key: "basic", label: "BASIC", name: "Basic", heading: "text-[#1D92FB]", price: "basicPrice", button: "bg-[#1D92FB] text-white", phoneButton: "bg-[#F7E022] text-black" },
  { key: "standard", label: "STANDARD", name: "Standard", heading: "text-[#F7E022]", price: "standardPrice", button: "bg-[#F7E022] text-black", phoneButton: "bg-[#F7E022] text-black" },
  { key: "enterprise", label: "ENTERPRISE", name: "Enterprise", heading: "text-black", price: "enterprisePrice", button: "bg-black text-white", phoneButton: "bg-black text-white" },
] as const;

type Plan = (typeof PLANS)[number];
type Features = PlanFeatures;

const proposalHref = (plan: Plan) => `/register?package=${encodeURIComponent(plan.name)}`;

function Tick() {
  return (
    <svg className="inline-block w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-label="Included">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Cell({ feature, plan }: { feature: PlanFeature; plan: Plan }) {
  const cell = feature[plan.key];
  return (
    <>
      {cell?.included ? <Tick /> : "❌"} {cell?.description}
    </>
  );
}

function Illustration({ src, className }: { src: typeof illusTopRight; className: string }) {
  return <Image src={src} alt="" className={`absolute h-auto pointer-events-none ${className}`} />;
}

// One plan per table, stacked (phones).
function PhoneTable({ plan, features, member }: { plan: Plan; features: Features; member: boolean }) {
  const rows = member ? features.featuresList ?? [] : (features.featuresList ?? []).slice(0, PREVIEW_ROWS.phone);
  const isEnterprise = plan.key === "enterprise";

  return (
    <div className="relative max-w-full mx-auto bg-white border border-black shadow-lg mb-6">
      {isEnterprise && <Illustration src={illusTopRight} className="top-0 right-0 w-[150px]" />}
      {member && isEnterprise && <Illustration src={illusTopRightMember} className="top-6 right-0 w-[130px]" />}
      {member && <Illustration src={illusBottomLeft} className="bottom-0 left-0 w-[170px]" />}
      {member && <Illustration src={illusBottomLeftSmall} className="bottom-0 left-0 w-[80px]" />}
      <table className="relative w-full">
        <thead>
          <tr>
            <th className="px-3 py-8 text-xl font-extrabold text-left border-r border-gray-300 text-black">PACKAGES</th>
            <th className={`px-3 text-xl font-extrabold text-left border-r border-gray-300 ${plan.heading}`}>{plan.label}</th>
          </tr>
          <tr className="font-bold text-lg">
            <td className="px-3 py-3 border-r bg-[#F3F9FF] border-gray-300">FEATURES</td>
            <td className="px-3 py-3 border-r border-gray-300">INCLUDED</td>
          </tr>
        </thead>
        <tbody>
          {rows.map((feature) => (
            <tr key={feature._key} className="border-b border-gray-300 text-sm">
              <td className="px-3 py-2 font-semibold border-r border-gray-300 w-[45%]">{feature.name}</td>
              <td className="px-3 py-2 text-left border-r border-gray-300 w-[55%]">
                <Cell feature={feature} plan={plan} />
              </td>
            </tr>
          ))}
        </tbody>
        {member && (
          <tfoot>
            <tr className="bg-gray-100 text-3xl text-black">
              <td className="px-3 py-4 font-semibold border-r border-gray-300">Price</td>
              <td className="px-3 py-4 text-center font-bold border-r border-gray-300">${features.pricing?.[plan.price]}</td>
            </tr>
            <tr>
              <td />
              <td className="p-3 text-center font-bold border-r border-gray-300">
                <Link href={proposalHref(plan)} className={`inline-block px-3 py-4 rounded-xl ${plan.phoneButton}`}>
                  SUBMIT PROPOSAL
                </Link>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}

// All three plans side by side (tablets and desktops).
function DesktopTable({ features, member }: { features: Features; member: boolean }) {
  const rows = member ? features.featuresList ?? [] : (features.featuresList ?? []).slice(0, PREVIEW_ROWS.desktop);

  return (
    <div className="relative max-w-7xl mx-auto bg-white border border-black shadow-lg overflow-x-auto">
      <Illustration src={illusTopRight} className="top-0 right-0 w-[200px]" />
      <Illustration src={illusTopCenter} className="top-0 left-[40%] -translate-x-1/2 w-[300px]" />
      {member && (
        <>
          <Illustration src={illusTopRightMember} className="top-6 right-0 w-[200px]" />
          <Illustration src={illusBottomLeft} className="bottom-0 left-0 w-[280px]" />
          <Illustration src={illusBottomLeftSmall} className="bottom-0 left-0 w-[140px]" />
          <Illustration src={illusBottomCenter} className="bottom-[160px] left-1/2 -translate-x-1/2 w-[250px]" />
        </>
      )}
      <table className="relative w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-8 text-2xl font-extrabold text-left border-r border-gray-300 text-black">PACKAGES</th>
            {PLANS.map((plan) => (
              <th key={plan.key} className={`px-6 text-2xl font-extrabold text-left border-r border-gray-300 ${plan.heading}`}>
                {plan.label}
              </th>
            ))}
          </tr>
          <tr className="font-bold text-xl">
            <td className="px-6 py-3 border-r bg-[#F3F9FF] border-gray-300">FEATURES</td>
            {PLANS.map((plan) => (
              <td key={plan.key} className="px-6 py-3 border-r border-gray-300">
                INCLUDED
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((feature) => (
            <tr key={feature._key} className="border-b border-gray-300 text-sm">
              <td className="px-6 py-2 font-semibold border-r border-gray-300">{feature.name}</td>
              {PLANS.map((plan) => (
                <td key={plan.key} className="px-4 py-2 text-left border-r border-gray-300">
                  <Cell feature={feature} plan={plan} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {member && (
          <tfoot>
            <tr className="bg-gray-100 text-3xl text-black">
              <td className="px-6 py-4 font-semibold border-r border-gray-300">Price</td>
              {PLANS.map((plan) => (
                <td key={plan.key} className="px-6 py-4 text-center font-bold border-r border-gray-300">
                  ${features.pricing?.[plan.price]}
                </td>
              ))}
            </tr>
            <tr>
              <td />
              {PLANS.map((plan) => (
                <td key={plan.key} className="p-4 text-center font-bold border-r border-gray-300">
                  <Link href={proposalHref(plan)} className={`inline-block px-4 py-4 rounded-xl ${plan.button}`}>
                    SUBMIT PROPOSAL
                  </Link>
                </td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}

export default function PricingPlan({ preview }: { preview: Features }) {
  const [showLogin, setShowLogin] = useState(false);
  const [fullPlan, setFullPlan] = useState<Features | null>(null);
  const member = fullPlan !== null;
  const features = fullPlan ?? preview;

  // Asks the server whether this visitor is signed in (the session cookie
  // can't be read here) and, if so, gets the full plan.
  const loadFullPlan = useCallback(async () => {
    try {
      const res = await fetch("/api/pricing/plan", { cache: "no-store" });
      const data = (await res.json()) as { signedIn: boolean; features?: Features | null };
      if (data.signedIn && data.features) setFullPlan(data.features);
    } catch {
      // Network error: keep showing the preview.
    }
  }, []);

  // A visitor who signed in before keeps seeing the full plan.
  useEffect(() => {
    loadFullPlan();
  }, [loadFullPlan]);

  return (
    <div className="px-6 md:px-16 py-6 md:py-10 bg-[url('/pricingplan.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-2xl mb-4 lg:text-4xl font-bold leading-[36px]">{features.title}</h2>
        <p className="text-lg mb-4 lg:text-4xl font-bold">{features.description}</p>
      </div>

      <div className="md:hidden">
        {PLANS.map((plan) => (
          <PhoneTable key={plan.key} plan={plan} features={features} member={member} />
        ))}
      </div>
      <div className="hidden md:block">
        <DesktopTable features={features} member={member} />
      </div>

      {!member && (
        <div className="text-center mt-10">
          <button type="button" onClick={() => setShowLogin(true)} className="bg-[#0081FE] text-white px-6 w-48 py-3 rounded-xl text-lg">
            View Full Plan
          </button>
        </div>
      )}

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} onLoginSuccess={loadFullPlan} />
    </div>
  );
}
