// DEV ONLY: renders Service Page sections without needing Sanity documents.
//   /service-sections-preview                  → every section with sample content
//   /service-sections-preview/spHero           → one section (used for Studio thumbnails)
//   /service-sections-preview/seed/<name>      → a seed document from sanity/seed/<name>.servicePage.json,
//                                                rendered exactly as the live route would (links resolved)
// Returns 404 in production.

import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import ServicePageRenderer from "../../(site)/components/service-sections/ServicePageRenderer";
import { SAMPLE_SECTIONS } from "../../(site)/components/service-sections/sample-data";
import { buildLinkMap } from "../../(site)/components/service-sections/links";

export const metadata = { robots: { index: false, follow: false } };

// Tailwind is bundled with the (site) layout, which this standalone dev page
// (no site header/footer/popups) doesn't use, so link it directly.
const SiteStyles = () => <link rel="stylesheet" href="/_next/static/css/app/(site)/layout.css" />;

export default async function ServiceSectionsPreview({ params }: { params: { type?: string[] } }) {
  if (process.env.NODE_ENV === "production") notFound();

  const [first, second] = params.type || [];

  if (first === "seed" && second && /^[a-z0-9-]+$/.test(second)) {
    let doc: any;
    try {
      const file = path.join(process.cwd(), "sanity", "seed", `${second}.servicePage.json`);
      doc = JSON.parse(await readFile(file, "utf8"));
    } catch {
      notFound();
    }
    const links = await buildLinkMap(doc.sections);
    return (
      <>
        <SiteStyles />
        <ServicePageRenderer sections={doc.sections} links={links} pageTitle={doc.title} pageId={doc._id} pageSlug={doc.slug?.current} />
      </>
    );
  }

  const sections = first ? SAMPLE_SECTIONS.filter((s) => s._type === first) : SAMPLE_SECTIONS;
  if (first && sections.length === 0) notFound();

  return (
    <>
      <SiteStyles />
      <ServicePageRenderer sections={sections} links={{}} />
    </>
  );
}
