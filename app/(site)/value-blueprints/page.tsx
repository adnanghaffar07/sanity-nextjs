import type { Metadata } from "next";
import Image from "next/image";
import { getValueBlueprintCards, getValueBlueprintsPage } from "@/sanity/lib/value-blueprints";
import { urlForImage } from "@/sanity/lib/image";
import BlueprintHero from "@/components/value-blueprints/BlueprintHero";
import TextImageSection from "@/components/value-blueprints/TextImageSection";
import BlueprintCarousel from "@/components/value-blueprints/BlueprintCarousel";
import ToolsShowcase from "@/components/value-blueprints/ToolsShowcase";
import IconCardGrid from "@/components/value-blueprints/IconCardGrid";
import OfferCards from "@/components/value-blueprints/OfferCards";
import stroke1 from "@/public/stroke1.png";
import stroke2 from "@/public/stroke2.png";

export const revalidate = 300;

const PAGE_URL = "https://codeautomation.ai/value-blueprints";
const DEFAULT_TITLE = "Code Automation - Custom Software and Mobile Development Company in USA";
const DEFAULT_DESCRIPTION = "Custom Software and Mobile Development Company in USA";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getValueBlueprintsPage();
  const title = page?.seo?.title || DEFAULT_TITLE;
  const description = page?.seo?.description || DEFAULT_DESCRIPTION;
  const images = page?.heroImage ? [{ url: urlForImage(page.heroImage), width: 1200, height: 630, alt: title }] : undefined;

  return {
    title,
    description,
    keywords: page?.seo?.keywords?.join(", ") || "CodeAutomation.ai",
    alternates: { canonical: PAGE_URL },
    openGraph: {
      type: "website",
      url: PAGE_URL,
      title: page?.facebook?.title || title,
      description: page?.facebook?.description || description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: page?.twitter?.title || title,
      description: page?.twitter?.description || description,
      images,
    },
  };
}

// Decorative curve at the edge of a section.
function Stroke({ src, className }: { src: typeof stroke1; className: string }) {
  return <Image src={src} alt="" className={`absolute z-0 h-auto ${className}`} />;
}

export default async function ValueBlueprintsPage() {
  const [page, cards] = await Promise.all([getValueBlueprintsPage(), getValueBlueprintCards()]);

  return (
    <>
      <BlueprintHero image={page?.heroImage ?? null} title={page?.title ?? null} />
      <Stroke src={stroke1} className="w-[130px]" />
      <TextImageSection block={page?.intro ?? null} textAlign="justify" />
      <BlueprintCarousel cards={cards} />
      <Stroke src={stroke2} className="right-0 w-[150px]" />
      {page && <ToolsShowcase tools={page.tools} />}
      <IconCardGrid section={page?.projectCycle ?? null} />
      <IconCardGrid section={page?.deliveryOptions ?? null} />
      <Stroke src={stroke1} className="w-[120px]" />
      <TextImageSection block={page?.summary ?? null} textAlign="center" />
      <OfferCards callToAction={page?.callToAction ?? null} specialOffer={page?.specialOffer ?? null} />
    </>
  );
}
