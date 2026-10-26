import Link from "next/link";
import SanityImage from "@/components/ui/SanityImage";
import type { BlogCard } from "@/sanity/lib/blog";

// "More Articles" grid at the end of a blog post.
export default function MoreArticles({ articles }: { articles: BlogCard[] }) {
  if (articles.length === 0) return null;

  return (
    <div className="bg-gray-50 px-6 py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-mono uppercase tracking-wider text-gray-500">Continue Reading</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">More Articles</h2>
          <div className="w-12 h-px bg-gray-300 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article._id}
              href={`/blogs/${article.slug}`}
              className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {(article.cardimage || article.heroimage) && (
                <div className="relative h-56 overflow-hidden">
                  <SanityImage
                    image={article.cardimage || article.heroimage}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                {article.subtitle && (
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">{article.subtitle}</p>
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
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
