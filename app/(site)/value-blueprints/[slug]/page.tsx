import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getValueBlueprint } from "@/sanity/lib/value-blueprints";
import { urlForImage } from "@/sanity/lib/image";
import BlueprintHero from "@/components/value-blueprints/BlueprintHero";
import BlueprintWorkflow from "@/components/value-blueprints/BlueprintWorkflow";

export const revalidate = 300;

type Props = { params: { slug: string } };

const DEFAULT_TITLE = "Code Automation - Custom Software and Mobile Development Company in USA";
const DEFAULT_DESCRIPTION = "Custom Software and Mobile Development Company in USA";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blueprint = await getValueBlueprint(params.slug);
  const title = blueprint?.seo?.title || DEFAULT_TITLE;
  const description = blueprint?.seo?.description || DEFAULT_DESCRIPTION;
  const url = `https://codeautomation.ai/value-blueprints/${blueprint?.slug || params.slug}`;
  const image = blueprint?.heroimage ? urlForImage(blueprint.heroimage) : "/thankyou.jpg";
  const images = [{ url: image, width: 1200, height: 630, alt: title }];

  return {
    title,
    description,
    keywords: blueprint?.seo?.keywords?.join(", ") || "CodeAutomation.ai",
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: blueprint?.facebook?.facebookTitle || title,
      description: blueprint?.facebook?.facebookDescription || description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: blueprint?.twitter?.twitterTitle || title,
      description: blueprint?.twitter?.twitterDescription || description,
      images,
    },
  };
}

export default async function ValueBlueprintPage({ params }: Props) {
  const blueprint = await getValueBlueprint(params.slug);
  if (!blueprint) notFound();

  return (
    <>
      <BlueprintHero image={blueprint.heroimage} title={blueprint.title} darken />
      <BlueprintWorkflow heading={blueprint.toolsandtechusedheading} steps={blueprint.steps} />

      <div className="px-6 md:px-16 py-10 md:py-14 bg-gray-100">
        {blueprint.challengesfacedheading && (
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-8">{blueprint.challengesfacedheading}</h2>
            <ul>
              {blueprint.chanllangesfaced?.map((point) => (
                <li key={point._key} className="mb-6">
                  <h3 className="font-bold text-lg mb-2">{point.heading}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{point.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <h2 className="text-center text-lg font-bold text-gray-800 leading-relaxed mb-6">{blueprint.resultsheading}</h2>
      </div>

      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-8">{blueprint.conclusionheading}</h2>
          <p className="text-lg text-gray-800 leading-relaxed">{blueprint.conclusion}</p>
        </div>
      </div>
    </>
  );
}
