import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegacySubService } from "@/sanity/lib/legacy-services";
import { urlForImage } from "@/sanity/lib/image";
import ServicePageRenderer from "@/components/services/page-builder/ServicePageRenderer";
import { getServicePageWithLinks, servicePageMetadata } from "@/components/services/page-builder/data";
import LegacySubServicePage from "@/components/services/legacy/LegacySubServicePage";

export const revalidate = 300;

type Props = { params: { service: string; slug: string } };

const DEFAULT_TITLE = "CodeAutomation - Custom Software and Mobile Development Company in USA";
const DEFAULT_DESCRIPTION = "Custom Software and Mobile Development Company in USA";

// A section-based "Service Page" with this parent and address takes precedence over the legacy page.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const newPage = await getServicePageWithLinks(params.slug, params.service);
  if (newPage) return servicePageMetadata(newPage.page);

  const sub = await getLegacySubService(params.slug);
  const seo = sub?.webSeoMetadataSub;
  const title = seo?.title || DEFAULT_TITLE;
  const description = seo?.description || DEFAULT_DESCRIPTION;
  const url = `https://codeautomation.ai/services/${params.service}/${params.slug}`;
  const image = sub?.heroImageSub ? urlForImage(sub.heroImageSub) : "/thankyou.jpg";
  const twitter = sub?.twitterCardsSub;

  return {
    title,
    description,
    keywords: seo?.keywords?.join(", ") || "CodeAutomation.ai",
    alternates: { canonical: url },
    openGraph: { type: "website", url, title, description, images: [{ url: image, width: 1200, height: 630, alt: title }] },
    twitter: {
      card: "summary_large_image",
      title: twitter?.twitterTitle || title,
      description: twitter?.twitterDescription || description,
      images: [{ url: twitter?.twitterImage ? urlForImage(twitter.twitterImage) : image, alt: twitter?.twitterTitle || title }],
    },
  };
}

export default async function SubServicePage({ params }: Props) {
  const newPage = await getServicePageWithLinks(params.slug, params.service);
  if (newPage) {
    const { page, links } = newPage;
    return <ServicePageRenderer sections={page.sections} links={links} pageTitle={page.title} pageId={page._id} pageSlug={page.slug} />;
  }

  const sub = await getLegacySubService(params.slug);
  if (!sub) notFound();
  return <LegacySubServicePage sub={sub} />;
}
