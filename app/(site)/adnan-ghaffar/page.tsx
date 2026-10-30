import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ceoPhoto from "@/public/ceo-adnan.png";
import { getBlogCards } from "@/sanity/lib/blog";
import { getAdnanGhaffarPage } from "@/sanity/lib/adnan-ghaffar";
import SanityImage from "@/components/ui/SanityImage";

export const revalidate = 300;

const PAGE_URL = "https://codeautomation.ai/adnan-ghaffar";
const PORTRAIT_URL = "https://codeautomation.ai/ceo-adnan.png";
const PORTRAIT_SIZE = 708;
const PORTRAIT_ALT = "Adnan Ghaffar, founder and CEO of CodeAutomation";

export async function generateMetadata(): Promise<Metadata> {
  const { seoTitle, seoDescription } = await getAdnanGhaffarPage();
  const image = { url: PORTRAIT_URL, width: PORTRAIT_SIZE, height: PORTRAIT_SIZE, alt: PORTRAIT_ALT };
  return {
    // absolute: skip the site-wide title template so the title matches exactly.
    title: { absolute: seoTitle },
    description: seoDescription,
    alternates: { canonical: PAGE_URL },
    robots: { index: true, follow: true },
    openGraph: {
      type: "profile",
      url: PAGE_URL,
      title: seoTitle,
      description: seoDescription,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [image],
    },
  };
}

// sameAs (social profiles) is left out until those URLs are confirmed.
function profileSchema(seoTitle: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${PAGE_URL}#profile`,
    url: PAGE_URL,
    name: seoTitle,
    mainEntity: {
      "@type": "Person",
      "@id": `${PAGE_URL}#person`,
      name: "Adnan Ghaffar",
      url: PAGE_URL,
      image: PORTRAIT_URL,
      jobTitle: "Founder and CEO",
      description:
        "Adnan Ghaffar is the founder and CEO of CodeAutomation. His work focuses on AI strategy, custom AI agents, business automation and software development.",
      worksFor: { "@type": "Organization", name: "CodeAutomation", url: "https://codeautomation.ai/" },
      knowsAbout: [
        "Artificial intelligence",
        "AI agents",
        "Business process automation",
        "Custom software development",
        "Software architecture",
        "System integration",
      ],
    },
  };
}

export default async function AuthorPage() {
  const [page, allBlogs] = await Promise.all([getAdnanGhaffarPage(), getBlogCards()]);
  const blogs = allBlogs.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#020C16] to-[#0a1929] py-20 px-5 border-b border-blue-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mt-20 md:gap-12 items-center md:items-start">
            <div className="flex-shrink-0">
              <Image
                src={ceoPhoto}
                alt={PORTRAIT_ALT}
                priority
                sizes="192px"
                className="w-48 h-48 rounded-2xl object-cover shadow-2xl border-4 border-blue-500/20"
              />
            </div>

            <div className="flex-1 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Adnan Ghaffar</h1>
              <p className="text-lg text-blue-300 mb-6 font-light">{page.role}</p>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">{page.introduction}</p>
            </div>
          </div>
        </div>
      </div>

      {/* About + Areas of focus */}
      <div className="py-16 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">{page.aboutHeading}</h2>
          {page.aboutParagraphs.map((paragraph, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">{page.focusHeading}</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {page.focusAreas.map((area) => (
              <li key={area.title} className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {area.link ? (
                    <Link href={area.link} className="text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline">
                      {area.title}
                    </Link>
                  ) : (
                    area.title
                  )}
                </h3>
                <p className="text-gray-700 leading-relaxed">{area.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Articles */}
      <div className="py-20 px-5 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{page.articlesHeading}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{page.articlesIntro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {blogs.map((blog) => (
              <Link
                key={blog._id}
                href={`/blogs/${blog.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="group cursor-pointer h-full">
                  <div className="relative overflow-hidden rounded-xl mb-4 h-64 bg-gray-200">
                    <SanityImage
                      image={blog.heroimage}
                      alt={blog.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {blog.subtitle ||
                      blog.introductionheading?.split(" ").slice(0, 15).join(" ")}
                  </p>

                  <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium group-hover:bg-blue-600 group-hover:text-white transition">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="py-16 px-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{page.ctaHeading}</h2>
          <p className="text-blue-100 mb-8">{page.ctaText}</p>
          <Link
            href={page.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            {page.ctaButtonLabel}
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileSchema(page.seoTitle)).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
