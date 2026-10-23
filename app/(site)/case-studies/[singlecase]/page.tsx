import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy } from "@/sanity/lib/case-studies";
import { urlForImage } from "@/sanity/lib/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import CaseStudyHero from "@/components/case-studies/detail/CaseStudyHero";
import CaseStudyOverview from "@/components/case-studies/detail/CaseStudyOverview";
import CaseStudyGoals from "@/components/case-studies/detail/CaseStudyGoals";
import CaseStudyTools from "@/components/case-studies/detail/CaseStudyTools";
import CaseStudyFeatures from "@/components/case-studies/detail/CaseStudyFeatures";
import CaseStudyStory from "@/components/case-studies/detail/CaseStudyStory";

export const revalidate = 300;

type Props = { params: { singlecase: string } };

const DEFAULT_TITLE = "Code Automation - Custom Software and Mobile Development Company in USA";
const DEFAULT_DESCRIPTION = "Custom Software and Mobile Development Company in USA";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = await getCaseStudy(params.singlecase);
  const seo = study?.webSeoMetadataSub;
  const title = seo?.title || DEFAULT_TITLE;
  const description = seo?.description || DEFAULT_DESCRIPTION;
  const url = `https://codeautomation.ai/case-studies/${params.singlecase}`;
  const image = study?.cardimage ? urlForImage(study.cardimage) : "/thankyou.jpg";
  const images = [{ url: image, width: 1200, height: 630, alt: title }];

  return {
    title,
    description,
    keywords: seo?.keywords?.join(", ") || "CodeAutomation.ai",
    alternates: { canonical: url },
    openGraph: { type: "website", url, title, description, images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const study = await getCaseStudy(params.singlecase);
  if (!study) notFound();

  return (
    <>
      {study.jsonLd && (
        <script
          type="application/ld+json"
          // Escape "<" so content can never close the script tag.
          dangerouslySetInnerHTML={{ __html: study.jsonLd.replace(/</g, "\\u003c") }}
        />
      )}
      <CaseStudyHero study={study} />
      {/* The intro and goals only show when the case study has project goals. */}
      {study.projectGoalsSection && (
        <>
          <ScrollAnimation>
            <CaseStudyOverview study={study} />
          </ScrollAnimation>
          <ScrollAnimation>
            <CaseStudyGoals goals={study.projectGoalsSection} color={study.color} />
          </ScrollAnimation>
        </>
      )}
      <ScrollAnimation>
        <CaseStudyTools heading={study.toolsandtechusedheading} tools={study.tools} />
      </ScrollAnimation>
      <ScrollAnimation>
        <CaseStudyFeatures features={study.features} />
      </ScrollAnimation>
      <ScrollAnimation>
        <CaseStudyStory study={study} />
      </ScrollAnimation>
    </>
  );
}
