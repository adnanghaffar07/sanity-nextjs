import Image from "next/image";
export default function BlogSub() {
  return (
    <>
      <section className="relative">
        <div className="bg-[#1E1E1E] w-full h-[380px] sm:h-[700px] opacity-50 sm:opacity-75 absolute z-[1]"></div>
        <div className="w-full h-[380px] sm:h-[700px] relative z-0">
          <Image
            src="/blogs-subpage-mobile-hero.png"
            alt="Services Image"
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>

        <div className="mt-[260px] sm:mt-[410px] max-w-[300px] sm:max-w-[590px] md:max-w-[790px] lg:max-w-[890px] xl:max-w-[1000px] mx-auto absolute inset-0 flex flex-col items-center z-[2]">
          <h1 className="text-base lg:text-4xl text-2xl font-bold tracking-tight text-center capitalize leading-[20px] sm:leading-[48px] text-white">
            &quot;How to develop a successful mobile strategy for your
            company&quot;
          </h1>
        </div>
      </section>

      <div className="max-w-full mx-auto relative">
        <div className="flex flex-col self-center w-full xl:max-w-[1300px] relative z-10 mx-auto">
          <div className="lg:px-10 px-5 w-full py-6 sm:py-16">
            <h3 className="xl:text-5xl lg:text-5xl sm:text-3xl text-xl font-medium mb-4 sm:mb-8">
              Description
            </h3>

            <div>
              <p className="text-sm leading-5 sm:text-xl font-normal mb-5 max-w-[1020px] text-justify sm:leading-8">
                It is uncommon to meet someone who does not use a smartphone or
                other mobile gadget. We rely on mobile applications to be
                productive at work, on the go, and even home. They have become a
                staple of our existence.
              </p>

              <img
                loading="lazy"
                alt="blog image"
                srcSet="/blog-mobile-image-1.png"
                className="size-full mb-6 sm:mb-12 shadow-blogImage"
              />

              <p className="text-sm leading-5 sm:text-xl font-normal max-w-[1020px] sm:leading-8 text-justify mb-9">
                The market is flooded with portable electronic devices that
                provide users with a more engaging and interactive experience
                with the Internet of Things.
                <br />
                The number of smartphone users has surpassed 6 billion; in the
                next years, that number is projected to increase by 7 billion.
                Also, the COVID-19 Pandemic limits have prompted consumers to
                quickly discover their desired goods and services.
                <br />
                Businesses must thus implement a powerful mobile strategy that
                generates leads and revenue from most mobile consumers.
                <br />
                A strong omnichannel presence is desirable for any firm to gain
                a competitive edge in its industry. This article is for you if
                you cannot comprehend how to plan a successful approach.
                <br />
                But first, let&rsquo;s define the mobile strategy to create one.
              </p>
            </div>

            <h2 className=" xl:text-4xl lg:text-2xl text-xl font-semibold mb-5">
              Mobile strategy is about customer experience.
            </h2>
            <div>
              <img
                loading="lazy"
                srcSet="/blog-mobile-image-2.png"
                alt="blog image"
                className="size-full mb-7 sm:mb-14 shadow-blogImage"
              />

              <div className="max-w-[1020px] sm:leading-8 text-justify mb-9 sm:text-xl font-normal text-sm leading-5 ">
                <p>
                  Businesses must ask CX-related questions to improve their
                  mobile experiences since the customer experience (CX) is
                  everything.
                </p>
                <p>
                  Consider the e-commerce industry. If mobile conversion rates
                  are poor, it would be better for the mobile user to do
                  business by addressing problems with product browsing rather
                  than concentrating on checkout.
                </p>
                <p>
                  For instance, improving the responsive site&rsquo;s search
                  results, adding product filters, deepening product
                  descriptions, and speeding up page load times (so that the
                  entire catalogue is accessible).
                </p>
                <p>
                  While you browse, find out where your consumers are. How can
                  the experience be improved if the customer is at the store at
                  home or traveling on their bed? Businesses should use these
                  inquiries to describe the issue and their plans to address it.
                </p>

                <h3 className="font-semibold text-base sm:text-2xl mt-5">
                  1. Building a mobile strategy that works
                </h3>
                <p>
                  Mobile strategy is not based on conjecture. It consists of
                  solutions that are not only focused on features and functions
                  but also on how your clients use handheld and mobile devices
                  in their daily lives.
                </p>
                <p>
                  Here&rsquo;s how to develop a flexible mobile plan to include
                  in your marketing effort to get the best results.
                </p>
                <h3 className="font-semibold text-base sm:text-2xl mt-5">
                  2. Design mesmerizing experiences
                </h3>
                <p>
                  Concentrate on offering a user-interaction platform that
                  enables people to engage with your brand in novel and engaging
                  ways. Most consumers expect their applications to launch in
                  two seconds or less, and 85% of users prefer apps over
                  websites.
                </p>
                <p>
                  A mobile website with a distorted style and challenging
                  navigation may have disappointed you. Create your app to avoid
                  these annoyances.
                </p>

                <h3 className="font-semibold text-base sm:text-2xl mt-5">
                  3. Performance is the Master Key
                </h3>
                <p>
                  According to research, 57% of visitors leave your website if
                  it takes longer than 3 seconds to load. Yet you might be
                  surprised that about 80% of these visitors won&rsquo;t return.
                </p>
                <p>
                  This means you must concentrate on your website&rsquo;s
                  performance across all devices to keep your business afloat
                  and flourish in the expanding industry. Ensure your
                  website/application runs as smoothly on mobile devices as on
                  desktops.
                </p>

                <h3 className="font-semibold text-base sm:text-2xl mt-5">
                  4. Better Voice assistance for easy search
                </h3>
                <p>
                  The ability to speak and express oneself is now the greatest
                  gift &rsquo;people on earth&rsquo; have. Tony Zhao, the
                  founder and CEO of the video chat business Agora.io stated in
                  an interview that in-app conversations could raise user
                  interest and engagement to some level. The same holds for your
                  guests.
                </p>
                <p>
                  You can quickly implement video calling or a click-to-call
                  feature for audio calls on your application or website. Many
                  click-to-call Software Development Kits are available online
                  for the same. These kids must use a few coding lines and
                  procedures to deliver their needs.
                </p>

                <h3 className="font-semibold text-base sm:text-2xl mt-5">
                  5. Scalable with real-time analytics
                </h3>
                <p>
                  The smartphone market is expected to expand by more than 10%
                  in the next four to five years. The same is true for app
                  stores, which are predicted to have double-digit download
                  growth over the next few years.
                </p>
                <p>
                  You must ensure that your strategy, execution, and output are
                  scalable to keep up with this expanding industry and establish
                  a location. For all of your data and performance requirements,
                  you have real-time analytics.
                </p>

                <h3 className="font-semibold text-base sm:text-2xl mt-5">
                  6. Monetization of mobile apps
                </h3>
                <p>
                  Think about providing a free version of your software and
                  letting customers choose whether or not they want to pay for a
                  premium edition with additional features and content. Consider
                  the enormously well-liked Angry Birds iPhone game.
                </p>
                <p>
                  Offer a free version while granting paid members access to
                  harder levels and other free add-ons as part of their
                  continuous campaign.
                </p>

                <h3 className="font-semibold text-base sm:text-2xl mt-5">
                  7. Build a team
                </h3>
                <p>
                  Basic software can cost $10,000 to develop, while a
                  graphics-heavy app might cost millions. To create successful
                  apps, you need a strong team of developers. The beginning is
                  the internal development team.
                </p>
                <p>
                  Thanks to this, you will have the technical know-how to carry
                  out your strategy, and you won&rsquo;t need to negotiate a
                  feature&rsquo;s implementation with an outside contractor.
                </p>

                <h3 className="font-semibold text-base sm:text-2xl mt-5">
                  The Final Verdict
                </h3>
                <p>
                  The top seven mobile business strategies were those listed
                  above. The knowledge may be summarised by saying that you
                  require a skilled group of developers. Without that, you may
                  also think about working with a technical partner or
                  consultant to prevent these minor mistakes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}