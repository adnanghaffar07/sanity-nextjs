"use client";
import React, { useState } from "react";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

interface BlogListProps {
  data: any[];
  pageSize?: number; // how many to show per "page"
}

const BlogList: React.FC<BlogListProps> = ({ data, pageSize = 6 }) => {
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const visibleItems = data.slice(0, visibleCount);
  const canLoadMore = visibleCount < data.length;

  return (
    <div className="flex flex-col self-center py-10 w-full xl:max-w-[1200px] max-w-[991px] max-md:max-w-full relative z-10 mx-auto">
      <div className="lg:px-10 px-5 w-full">
        {/* Grid to reduce scroll */}
        <div className="grid grid-cols-1 gap-8">
          {visibleItems.map((item) => (
            <Link
              key={item._id}
              href={`/blogs/${item.slug}`}
              className="w-full"
            >
              <div className="rounded-3xl shadow-md shadow-slate-400 bg-[#F3F3F3] transition hover:shadow-lg hover:scale-[1.01] duration-300">
                <div className="xl:flex gap-5 xl:h-[400px]">
                  {/* Image Section */}
                  <div className="xl:w-7/12">
                    <img
                      loading="lazy"
                      src={urlForImage(item.heroimage).toString()}
                      alt={item.title}
                      width={683}
                      height={207}
                      className="w-full xl:h-[400px] rounded-3xl hidden xl:block object-cover"
                    />
                    <img
                      loading="lazy"
                      src={urlForImage(item.heroimage).toString()}
                      alt={item.title}
                      width={911}
                      height={636}
                      className="w-full xl:h-[400px] rounded-3xl block xl:hidden object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="xl:w-5/12 self-center xl:py-3 py-10 xl:pr-10 xl:pl-0 px-5">
                    {item.subtitle && (
                      <p className="text-xs sm:text-lg mb-4">{item.subtitle}</p>
                    )}
                    <h3 className="text-2xl sm:text-xl font-medium line-clamp-2">
                      {item.title}
                    </h3>

                    <hr className="bg-black my-5 h-px w-full border-0" />

                    <p className="font-light text-sm sm:text-lg leading-7 line-clamp-4">
                      {item.introductionheading
                        ? item.introductionheading
                            .split(" ")
                            .slice(0, 30)
                            .join(" ")
                            .concat(
                              item.introductionheading.split(" ").length > 30
                                ? "..."
                                : ""
                            )
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More (reduces initial scroll, keeps UX modern) */}
        {canLoadMore && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + pageSize)}
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
};

export default BlogList;
