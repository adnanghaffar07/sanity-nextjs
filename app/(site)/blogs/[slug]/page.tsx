import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getMoreArticles } from "@/sanity/lib/blog";
import { urlForImage } from "@/sanity/lib/image";
import SanityImage from "@/components/ui/SanityImage";
import AuthorBio from "@/components/blog/AuthorBio";
import BlogBody, { splitForCta } from "@/components/blog/BlogBody";
import BlogCtaBanner from "@/components/blog/BlogCtaBanner";
import BlogFaq from "@/components/blog/BlogFaq";
import MoreArticles from "@/components/blog/MoreArticles";
import PreferredSourceBadge from "@/components/blog/PreferredSourceBadge";
import SocialShare from "@/components/blog/SocialShare";

export const revalidate = 300;

type Props = { params: { slug: string } };

const DEFAULT_TITLE = "Codeautomation - Custom Software and Mobile Development Company in USA";
const DEFAULT_DESCRIPTION = "Custom Software and Mobile Development Company in USA";
const ARTICLE_IMAGE_SIZES = "(min-width: 1024px) 976px, 100vw";

const postUrl = (slug: string) => `https://codeautomation.ai/blogs/${slug}`;

// Route params arrive URL-encoded (e.g. a space as %20); addresses are stored decoded.
function decodeSlug(slug: string) {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(decodeSlug(params.slug));
  const title = post?.webSeoMetadataSub?.title || DEFAULT_TITLE;
  const description = post?.webSeoMetadataSub?.description || DEFAULT_DESCRIPTION;
  const url = postUrl(params.slug);
  const image = post?.heroimage ? urlForImage(post.heroimage) : "/thankyou.jpg";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: image, width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [{ url: image }] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const slug = decodeSlug(params.slug);
  const post = await getBlogPost(slug);
  if (!post) notFound();
  const moreArticles = await getMoreArticles(slug);
  const [bodyBeforeCta, bodyAfterCta] = splitForCta(post.description ?? [], post.introductionheading ?? "");

  return (
    <div className="bg-white">
      {/* Tablets/desktop: floating bottom-left */}
      <PreferredSourceBadge variant="floating" />
      {post.jsonLd && (
        <script
          type="application/ld+json"
          // Escape "<" so content can never close the script tag.
          dangerouslySetInnerHTML={{ __html: post.jsonLd.replace(/</g, "\\u003c") }}
        />
      )}

      {/* Hero */}
      <div className="relative flex flex-col w-full min-h-[500px] lg:min-h-[700px] bg-[#020C16]">
        <SanityImage image={post.heroimage} alt="blog post" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#020C16] opacity-75" />
        <div className="relative flex flex-col items-center justify-center flex-grow px-6 py-20 lg:py-32">
          <h1 className="max-w-4xl mx-auto text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        {/* Phones: first thing after the hero image, aligned with the text */}
        <PreferredSourceBadge variant="inline" />

        <div className="mb-16">
          {post.blogheading && (
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{post.blogheading}</h2>
          )}
          {post.subtitle && <p className="text-gray-700 mt-4 mb-6 text-sm md:text-base">Published {post.subtitle}</p>}
          {post.introductionheading && (
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{post.introductionheading}</p>
          )}

          {bodyBeforeCta.length > 0 && <BlogBody value={bodyBeforeCta} />}
          {bodyAfterCta.length > 0 && (
            <>
              <BlogCtaBanner />
              <BlogBody value={bodyAfterCta} />
            </>
          )}

          {post.cardimage && (
            <div className="my-8">
              <SanityImage image={post.cardimage} alt="blog post" sizes={ARTICLE_IMAGE_SIZES} className="w-full h-auto rounded-2xl object-cover" />
            </div>
          )}
          {post.briefdescription && <p className="text-lg text-gray-700 leading-relaxed mb-6">{post.briefdescription}</p>}
          {post.briefitemsarray?.length ? (
            <div className="space-y-6 my-8">
              {post.briefitemsarray.map((item, index) => (
                <div key={item._key ?? index}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.heading}</h3>
                  <p className="text-gray-700">{item.value}</p>
                </div>
              ))}
            </div>
          ) : null}
          {post.primaryimage && (
            <div className="my-8">
              <SanityImage image={post.primaryimage} alt="blog post" sizes={ARTICLE_IMAGE_SIZES} className="w-full h-auto rounded-2xl object-cover" />
            </div>
          )}

          {/* Body too short to hold the banner: show it after the article text instead */}
          {bodyAfterCta.length === 0 && <BlogCtaBanner />}
        </div>

        {post.challengesfacedheading && (
          <div className="relative bg-blue-50 rounded-2xl px-6 py-12 md:px-8 md:py-16 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{post.challengesfacedheading}</h2>
            {post.chanllangesfaced?.map((challenge, index) => (
              <div key={challenge._key ?? index} className="mb-6 last:mb-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{challenge.heading}</h3>
                <p className="text-gray-700">{challenge.description}</p>
              </div>
            ))}
          </div>
        )}

        {post.conclusionheading && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{post.conclusionheading}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{post.conclusion}</p>
          </div>
        )}

        {post.faqSection && (
          <div className="mb-16">
            <BlogFaq faq={post.faqSection} />
          </div>
        )}

        <div className="border-t border-b border-gray-200 py-8 mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Share this article</span>
            </div>
            <SocialShare title={post.title} url={postUrl(params.slug)} />
          </div>
        </div>

        <div className="mb-16">
          <AuthorBio />
        </div>
      </div>

      <MoreArticles articles={moreArticles} />
    </div>
  );
}
