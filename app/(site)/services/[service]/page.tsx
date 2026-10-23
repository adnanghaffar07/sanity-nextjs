import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegacyService } from "@/sanity/lib/legacy-services";
import { urlForImage } from "@/sanity/lib/image";
import ServicePageRenderer from "@/components/services/page-builder/ServicePageRenderer";
import { getServicePageWithLinks, servicePageMetadata } from "@/components/services/page-builder/data";
import LegacyServicePage from "@/components/services/legacy/LegacyServicePage";

export const revalidate = 300;

type Props = { params: { service: string } };

const DEFAULT_TITLE = "Code Automation - Custom Software and Mobile Development Company in USA";
const DEFAULT_DESCRIPTION = "Custom Software and Mobile Development Company in USA";

// A section-based "Service Page" with this address takes precedence over the legacy page.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const newPage = await getServicePageWithLinks(params.service);
  if (newPage) return servicePageMetadata(newPage.page);

  const service = await getLegacyService(params.service);
  const seo = service?.webSeoMetadata;
  const title = seo?.title || DEFAULT_TITLE;
  const description = seo?.description || DEFAULT_DESCRIPTION;
  const url = `https://codeautomation.ai/services/${params.service}`;
  const image = service?.heroImage ? urlForImage(service.heroImage) : "/thankyou.jpg";

  return {
    title,
    description,
    keywords: seo?.keywords?.join(", ") || "CodeAutomation.ai",
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: service?.facebookCards?.facebookTitle || title,
      description: service?.facebookCards?.facebookDescription || description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: service?.twitterCards?.twitterTitle || title,
      description: service?.twitterCards?.twitterDescription || description,
      images: [{ url: image, alt: title }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const newPage = await getServicePageWithLinks(params.service);
  if (newPage) {
    const { page, links } = newPage;
    return <ServicePageRenderer sections={page.sections} links={links} pageTitle={page.title} pageId={page._id} pageSlug={page.slug} />;
  }

  const service = await getLegacyService(params.service);
  if (!service) notFound();
  return <LegacyServicePage service={service} />;
}
