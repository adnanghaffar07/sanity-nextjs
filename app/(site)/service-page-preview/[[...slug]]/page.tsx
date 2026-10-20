// DEV ONLY: full-page preview of new Service Pages WITH the site header/footer
// (this route lives inside the (site) layout).
//   /service-page-preview                    → every section with sample content
//   /service-page-preview/<name>             → seed document sanity/seed/<name>.servicePage.json
// The bare version without header/footer (used for Studio thumbnails) is
// /service-sections-preview. Returns 404 in production.

import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import ServicePageRenderer from "@/components/services/page-builder/ServicePageRenderer";
import { SAMPLE_SECTIONS } from "@/components/services/page-builder/sample-data";
import { buildLinkMap } from "@/components/services/page-builder/links";
import { servicePageMetadata } from "@/components/services/page-builder/data";

type Props = { params: { slug?: string[] } };

async function loadSeed(name?: string) {
  if (!name || !/^[a-z0-9-]+$/.test(name)) return null;
  try {
    const file = path.join(process.cwd(), "sanity", "seed", `${name}.servicePage.json`);
    return JSON.parse(await readFile(file, "utf8"));
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props) {
  if (process.env.NODE_ENV === "production") return {};
  const doc = await loadSeed(params.slug?.[0]);
  const meta = doc
    ? servicePageMetadata({ ...doc, slug: doc.slug?.current })
    : { title: "Service sections preview" };
  // Never index the preview itself.
  return { ...meta, robots: { index: false, follow: false } };
}

export default async function ServicePagePreview({ params }: Props) {
  if (process.env.NODE_ENV === "production") notFound();

  const name = params.slug?.[0];
  if (!name) {
    return <ServicePageRenderer sections={SAMPLE_SECTIONS} links={{}} />;
  }

  const doc = await loadSeed(name);
  if (!doc) notFound();
  const links = await buildLinkMap(doc.sections);
  return <ServicePageRenderer sections={doc.sections} links={links} pageTitle={doc.title} pageId={doc._id} pageSlug={doc.slug?.current} />;
}
