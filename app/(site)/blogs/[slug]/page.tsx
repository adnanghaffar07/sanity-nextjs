import { PortableText, PortableTextMarkComponentProps, PortableTextReactComponents } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import SocialShare from "../../components/socialShare";
import BlogsFaq from "../../components/BlogsFaq";
import AuthorBio from "../../components/AuthorBio";
import Link from "next/link";
import Script from "next/script";

async function getValueData(slug: string) {
  const safeSlug = slug.replace(/'/g, "\\'");
  const queryValue = `*[_type == 'portfolio' && slug == '${safeSlug}' && pageType == 'blogs'][0]`;
  try {
    return await client.fetch(queryValue);
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function getLogoData() {
  const queryLogo = `*[_type == 'techLogos'] | order(_createdAt asc)`;
  try {
    return await client.fetch(queryLogo);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function getMoreArticlesData(currentSlug: string) {
  const query = `
    *[
      _type == "portfolio" &&
      pageType == "blogs"
    ] | order(_createdAt desc) {
      _id,
      title,
      subtitle,
      introductionheading,
      heroimage,
      cardimage,
      "slug": slug.current,
      "publishedAt": _createdAt
    }
  `;

  try {
    const articles = await client.fetch(query);
    const filteredArticles = articles.filter(
      (article: any) => article.slug !== currentSlug
    );
    return filteredArticles
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
  } catch (error) {
    console.error("Error fetching more articles:", error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = await getValueData(params.slug);
  const defaultTitle = "Codeautomation - Custom Software and Mobile Development Company in USA";
  const defaultDescription = "Custom Software and Mobile Development Company in USA";
  const canonicalUrl = `https://codeautomation.ai/blogs/${params.slug}`;

  const title = data?.webSeoMetadataSub?.title || defaultTitle;
  const description = data?.webSeoMetadataSub?.description || defaultDescription;
  const heroImageUrl = data?.heroimage ? urlForImage(data.heroimage).toString() : "/default-image.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [{ url: heroImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: heroImageUrl }],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const LinkMark = ({ value, children }: PortableTextMarkComponentProps) => {
  const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
  return (
    <a href={value?.href} target={target} className="text-blue-600 font-light underline" rel={target === '_blank' ? 'noindex nofollow' : ''}>
      {children}
    </a>
  );
};

const InternalLinkMark = ({ value, children }: PortableTextMarkComponentProps) => {
  return <Link href={`/blogs/${value?.slug}`}>{children}</Link>;
};

const portableTextComponents: Partial<PortableTextReactComponents> = {
  marks: {
    link: LinkMark,
    internalLink: InternalLinkMark,
  },
  types: {
    image: ({ value }: { value: any }) => (
      <img
        className="object-cover w-full h-full rounded-2xl"
        src={urlForImage(value).toString()}
        alt={value.alt || "Blog post image"}
      />
    ),
    code: ({ value }: { value: any }) => (
      <div className="my-6">
        <SyntaxHighlighter language={value.language || "javascript"} style={dracula}>
          {value.code}
        </SyntaxHighlighter>
      </div>
    ),
    youtubeEmbed: ({ value }: { value: { url: string } }) => {
      const videoIdMatch = value.url.match(/(?:\?v=|\/embed\/|\.be\/)([\w\-]{11})/);
      const videoId = videoIdMatch ? videoIdMatch[1] : null;
      return videoId ? (
        <div className="my-8 w-full aspect-video relative">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl border-none"
          />
        </div>
      ) : (
        <p className="text-red-500">Invalid YouTube URL</p>
      );
    },
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc ml-5 space-y-2 my-4">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal ml-5 space-y-2 my-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="ml-3 text-gray-700">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="ml-3 text-gray-700">{children}</li>
    ),
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-lg md:text-xl font-medium mt-5 mb-3">{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
  },
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await getValueData(params.slug);
  const moreArticles = await getMoreArticlesData(params.slug);

  return (
    <div className="bg-white">
      {data?.jsonLd && (
        <Script
          id="blog-post-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: data.jsonLd }}
        />
      )}

      {/* Hero Section */}
      <div className="relative flex flex-col w-full min-h-[500px] lg:min-h-[700px] bg-[#020C16]">
        {data.heroimage && (
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={urlForImage(data.heroimage).toString()}
            alt={data.heroimage?.alt || "blog post"}
          />
        )}
        <div className="absolute inset-0 bg-[#020C16] opacity-75"></div>
        <div className="relative flex flex-col items-center justify-center flex-grow px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {data.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        
        {/* Introduction Section */}
        <div className="mb-16">
          {data.blogheading && (
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {data.blogheading}
            </h2>
          )}
               {data.subtitle && (
              <p className="text-gray-700 mt-4 mb-6 text-sm md:text-base">
                Published {data.subtitle}
              </p>
            )}
          {data.introductionheading && (
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {data.introductionheading}
            </p>
          )}
          {data.description && (
            <div className="prose prose-lg max-w-none">
              <PortableText value={data.description} components={portableTextComponents} />
            </div>
          )}
          {data.cardimage && (
            <div className="my-8">
              <img
                className="w-full rounded-2xl object-cover"
                src={urlForImage(data.cardimage).toString()}
                alt={data.cardimage?.alt || "blog post"}
              />
            </div>
          )}
          {data.briefdescription && (
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {data.briefdescription}
            </p>
          )}
          {data.briefitemsarray && data.briefitemsarray.length > 0 && (
            <div className="space-y-6 my-8">
              {data.briefitemsarray.map((item: any, index: number) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.heading}</h3>
                  <p className="text-gray-700">{item.value}</p>
                </div>
              ))}
            </div>
          )}
          {data.primaryimage && (
            <div className="my-8">
              <img
                className="w-full rounded-2xl object-cover"
                src={urlForImage(data.primaryimage).toString()}
                alt={data.primaryimage?.alt || "blog post"}
              />
            </div>
          )}
        </div>

        {/* Challenges Faced Section */}
        {data.challengesfacedheading && (
          <div className="relative bg-blue-50 rounded-2xl px-6 py-12 md:px-8 md:py-16 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              {data.challengesfacedheading}
            </h2>
            {data.chanllangesfaced && data.chanllangesfaced.map((challenge: any, index: number) => (
              <div key={index} className="mb-6 last:mb-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {challenge.heading}
                </h3>
                <p className="text-gray-700">{challenge.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Conclusion Section */}
        {data.conclusionheading && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {data.conclusionheading}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{data.conclusion}</p>
          </div>
        )}

        {/* FAQ Section */}
        {data.faqSection && (
          <div className="mb-16">
            <BlogsFaq faq={data.faqSection} />
          </div>
        )}

        {/* Banner CTA */}
        <div className="relative overflow-hidden rounded-2xl mb-16">
          <img
            src="/container.jpeg"
            alt="Start Your Project"
            className="w-full h-[300px] md:h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="text-center max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Ready to Automate Your Success?
              </h2>
              <p className="text-gray-200 mb-6">
                From AI-powered applications to scalable software development,
                we help businesses automate workflows and accelerate growth.
              </p>
              <a
                href="https://calendly.com/adnanghaffar/codeautomation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f7e022] hover:bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Book a Free Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Share & Author Section */}
        <div className="border-t border-b border-gray-200 py-8 mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Share this article</span>
            </div>
            <SocialShare title={data.title} />
          </div>
        </div>

        {/* Author Bio */}
        <div className="mb-16">
          <AuthorBio />
        </div>
      </div>

      {/* More Articles Section */}
      {moreArticles.length > 0 && (
        <div className="bg-gray-50 px-6 py-20 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-mono uppercase tracking-wider text-gray-500">Continue Reading</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                More Articles
              </h2>
              <div className="w-12 h-px bg-gray-300 mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {moreArticles.map((article: any) => (
                <Link
                  key={article._id}
                  href={`/blogs/${article.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {(article.cardimage || article.heroimage) && (
                    <div className="overflow-hidden">
                      <img
                        src={urlForImage(article.cardimage || article.heroimage).toString()}
                        alt={article.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {article.subtitle && (
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">
                        {article.subtitle}
                      </p>
                    )}
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                <span>View all articles</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;