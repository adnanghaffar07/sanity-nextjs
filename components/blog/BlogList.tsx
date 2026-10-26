"use client";

import { useState } from "react";
import Link from "next/link";
import SanityImage from "@/components/ui/SanityImage";
import type { BlogCard } from "@/sanity/lib/blog";

const EXCERPT_WORDS = 30;

function excerpt(text?: string | null) {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > EXCERPT_WORDS ? `${words.slice(0, EXCERPT_WORDS).join(" ")}...` : text;
}

// Blog cards on /blogs, shown a page at a time with a "Load More" button.
export default function BlogList({ posts, pageSize = 6 }: { posts: BlogCard[]; pageSize?: number }) {
  const [visibleCount, setVisibleCount] = useState(pageSize);

  return (
    <div className="flex flex-col self-center py-10 w-full xl:max-w-[1200px] max-w-[991px] max-md:max-w-full relative z-10 mx-auto">
      <div className="lg:px-10 px-5 w-full">
        <div className="grid grid-cols-1 gap-8">
          {posts.slice(0, visibleCount).map((post) => (
            <Link key={post._id} href={`/blogs/${post.slug}`} className="w-full">
              <div className="rounded-3xl shadow-md shadow-slate-400 bg-[#F3F3F3] transition hover:shadow-lg hover:scale-[1.01] duration-300">
                <div className="xl:flex gap-5 xl:h-[400px]">
                  <div className="xl:w-7/12">
                    <SanityImage
                      image={post.heroimage}
                      alt={post.title}
                      sizes="(min-width: 1280px) 683px, (min-width: 1024px) 911px, 100vw"
                      className="w-full h-auto xl:h-[400px] rounded-3xl object-cover"
                    />
                  </div>

                  <div className="xl:w-5/12 self-center xl:py-3 py-10 xl:pr-10 xl:pl-0 px-5">
                    {post.subtitle && <p className="text-xs sm:text-lg mb-4">{post.subtitle}</p>}
                    <h3 className="text-2xl sm:text-xl font-medium line-clamp-2">{post.title}</h3>
                    <hr className="bg-black my-5 h-px w-full border-0" />
                    <p className="font-light text-sm sm:text-lg leading-7 line-clamp-4">{excerpt(post.introductionheading)}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {visibleCount < posts.length && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + pageSize)}
              className="px-6 py-3 rounded-xl bg-[#1D92FB] text-white font-medium hover:bg-[#167fdc] transition"
              aria-label="Load more blog posts"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
