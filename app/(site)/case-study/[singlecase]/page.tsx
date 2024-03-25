import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-full relative overflow-hidden">
      <div className="bg-[#1D92FB] opacity-15 w-[734px] h-[734px] rounded-full absolute -left-[600px] md:-left-[480px] top-[620px] hidden md:flex items-center justify-center z-0">
        <div className="bg-white w-[600px] h-[600px] rounded-full"></div>
      </div>
      <div className="bg-[#1D92FB] opacity-15 w-[734px] h-[734px] rounded-full absolute -left-[600px] md:-left-[360px] top-[2800px] md:flex items-center justify-center z-0 hidden">
        <div className="bg-white w-[600px] h-[600px] rounded-full"></div>
      </div>
      <div className="bg-[#1D92FB] opacity-15 w-[734px] h-[734px] rounded-full absolute -right-[600px] md:-right-[360px] top-[3900px] md:flex items-center justify-center z-0 hidden">
        <div className="bg-white w-[600px] h-[600px] rounded-full"></div>
      </div>
      <div className="bg-[#1D92FB] opacity-15 w-[207px] h-[207px] rounded-full absolute -right-24 top-[160px] sm:top-[250px] md:top-[600px] xl:top-[850px] 2xl:xl:top-[1100px] z-0 hidden md:block"></div>

      <h3 className="mt-[120px] md:mt-[215px] relative xl:text-6xl lg:text-5xl sm:text-4xl text-xl font-normal mb-6 md:mb-12 ms-4 sm:ms-10 2xl:container 2xl:mx-auto 2xl:ps-10">
        Bubblehouse{" "}
        <span className="xl:text-3xl lg:text-2xl sm:text-xl text-sm font-light">
          (E-Commerce Store)
        </span>
      </h3>

      <div className="flex flex-col self-center w-full xl:max-w-[1300px] relative z-10 mx-auto">
        <div className="lg:px-10 px-4">
          <div>
            <div className="flex justify-center mb-6 sm:mb-24 ">
              <img
                loading="lazy"
                srcSet="/casesubpage-bubblehouse.png"
                width={1080}
                className="shadow-blogImage"
              />
            </div>

            <div className="flex flex-col xl:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-24">
              <div>
                <h2 className="text-xl sm:text-3xl md:text-6xl mb-4">
                  The Brief
                </h2>
                <p className="text-xs sm:text-xl md:text-2xl font-light max-w-[610px] text-justify">
                  Bubblehouse is a player in a new market, coming up with
                  tailor-made e-commerce solutions to boost clients' brand
                  loyalty. Comprehensive VIP customer platform which
                  incorporates tiers, collectibles, referrals and other
                  entertaining elements to encourage customers and build loyalty
                  over the years and long term value (LTV). The end objective of
                  Bubblehouse project was to introduce a powerful e-commerce
                  loyalty solution that makes it possible for both individual
                  online stores and subscriptions doing business.
                </p>
              </div>

              <div className="flex flex-col gap-6 md:gap-14 mb-10 md:mb-24">
                <div className="relative">
                  <div className="w-[42px] md:w-[78px] h-[42px] md:h-[78px] rounded-full bg-[#1D92FB] opacity-[0.14] absolute -left-4 md:-left-10 md:-top-2"></div>
                  <p className="text-[#707070] text-sm md:text-2xl font-medium">
                    Industry
                  </p>
                  <p className="text-lg md:text-3xl font-medium ">E-Commerce</p>
                </div>
                <div className="relative">
                  <div className="w-[42px] md:w-[78px] h-[42px] md:h-[78px] rounded-full bg-[#1D92FB] opacity-[0.14] absolute -left-4 md:-left-10 md:-top-2"></div>
                  <p className="text-[#707070] text-sm md:text-2xl font-medium">
                    Technology
                  </p>
                  <p className="text-lg md:text-3xl font-medium">
                    Shopify Platform
                  </p>
                </div>
                <div className="relative">
                  <div className="w-[42px] md:w-[78px] h-[42px] md:h-[78px] rounded-full bg-[#1D92FB] opacity-[0.14] absolute -left-4 md:-left-10 md:-top-2"></div>
                  <p className="text-[#707070] text-sm md:text-2xl font-medium">
                    Service
                  </p>
                  <p className="text-lg md:text-3xl font-medium">
                    E-Commerce Store (NFTs)
                  </p>
                </div>
                <div className="relative">
                  <div className="w-[42px] md:w-[78px] h-[42px] md:h-[78px] rounded-full bg-[#1D92FB] opacity-[0.14] absolute -left-4 md:-left-10 md:-top-2"></div>
                  <p className="text-[#707070] text-sm md:text-2xl font-medium">
                    Visit
                  </p>
                  <p className="text-sm md:text-3xl font-medium">
                    https://www.bubblehouse.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              loading="lazy"
              srcSet="/casestudy-bubblehouse-project-1.png"
              className="size-full mb-0 sm:mb-14 shadow-blogImage"
            />

            <div className="max-w-[1020px] my-10 md:my-20 text-justify mx-auto">
              <h3 className="text-xl md:text-4xl font-semibold mb-4 md:mb-8">
                Project Scope:
              </h3>
              <p className="text-xs md:text-xl font-light leading-4 md:leading-8 tracking-[0.72px]">
                In our cooperation with Bubblehouse we provided backend
                development, integrations setup, and manual testing. The two
                major goals were to develop an amazing e-commerce solution that
                does not hinder customers' experience and assure the reliability
                of the application by opting for manual and automated testing
                methods.
              </p>

              <h3 className="text-xl md:text-4xl font-semibold my-4 md:my-8">
                Technologies used:
              </h3>
              <ul className="list-disc list-inside">
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Shopify Development:{" "}
                  </span>
                  <span>
                    The heartbeat of the project was, among other things, to
                    produce & incorporate loyalty attributes within Shopify
                    e-shop platform.
                  </span>
                </li>
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Manual Testing:{" "}
                  </span>
                  <span>
                    A stringent manual testing that analyzed and fixed the
                    blockers of both the functional and design issues was done.
                    Testing was conducted using actual scenarios in the
                    real-world given the fact that the end-users had to
                    encounter no technical problems while operating the
                    solution.
                  </span>
                </li>
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Automation Testing:{" "}
                  </span>
                  <span>
                    The automated testing was introduced to enhance the testing
                    process, thereby helping in minimizing individual repetition
                    and long-term duration of testing.
                  </span>
                </li>
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Reporting Bugs Using Jira:{" "}
                  </span>
                  <span>
                    Jira covered us with the smooth organization of the
                    bug-tracking and issue-management. It gave us a single place
                    for development and testing teams to collaborate
                    successfully.
                  </span>
                </li>
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Release Management:{" "}
                  </span>
                  <span>
                    A formal release management system was developed to
                    facilitate steady delivery of updates and new
                    functionalities without creating any problems involved with
                    abrupt downtimes and disturbances.
                  </span>
                </li>
              </ul>

              <h3 className="text-xl md:text-4xl font-semibold my-4 md:my-8">
                Challenges Faced:
              </h3>
              <ul className="list-disc list-inside">
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Integration Complexity:{" "}
                  </span>
                  <span>
                    The loyalty solution integration was executed through a
                    supervised process to make sure the direct consequences on
                    the user experience were avoided.
                  </span>
                </li>
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Scalability:{" "}
                  </span>
                  <span>
                    The issue of how the platform could be built to allow
                    further users to join or transactions to happen has always
                    been a concern that needed careful formulation of decision.
                  </span>
                </li>
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Comprehensive Testing:{" "}
                  </span>
                  <span>
                    Multiple aspects of the system implementing diversity in
                    general, as well as collectibles, and referrals were
                    considered as potential problems. There were test drives
                    that revealed some problems which were then ironed out
                    before the solution went live.
                  </span>
                </li>
              </ul>

              <h3 className="text-xl md:text-4xl font-semibold my-4 md:my-8">
                Our Approach:
              </h3>
              <ul className="list-disc list-inside">
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Shopify Development:{" "}
                  </span>
                  <span>
                    The cross-department teams collaborated with Bubblehouse's
                    team to comprehend the purpose of the app and the features
                    required to be included in the application. Feedback system
                    was set in place to undoubtedly equal performance with
                    expected standards of our clients.
                  </span>
                </li>
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Manual Testing:{" "}
                  </span>
                  <span>
                    The QA team on our side performed troubleshooting tests that
                    mimicked how real users would interact by taking user
                    journeys, slayer upgrades, and the referral system to the
                    forefront.
                  </span>
                </li>
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Automation Testing:{" "}
                  </span>
                  <span>
                    The automated scripts were then designed to do the
                    repetitious and the time consuming tests thus the shorter
                    testing cycle helped other facets of the development
                    process. Selenium Webdriver, and JUnit were used for this.
                  </span>
                </li>
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Release Management:{" "}
                  </span>
                  <span>
                    The strategy of, release management process, came in place
                    to keep those coded-back features and updates along the way
                    smooth enough so that it minimizes any kind of effect on
                    users.
                  </span>
                </li>
              </ul>

              <h3 className="text-xl md:text-4xl font-semibold my-4 md:my-8">
                Results:
              </h3>
              <ul className="list-disc list-inside">
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Seamless Integration:{" "}
                  </span>
                  <span>
                    The loyalty solution that was designed such that it was
                    seamlessly integrated into a Shopify platform thus leading
                    to a smooth interface with no interruptions.
                  </span>
                </li>
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Reliable Functionality:{" "}
                  </span>
                  <span>
                    Effective interviewing process, where both manual and
                    automated testing were incorporated, created reliable
                    loyalty features that did not lead to any problems with
                    errors or issues.
                  </span>
                </li>
                <li className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                  <span className="text-xs md:text-xl font-bold">
                    Increased Loyalty and LTV:{" "}
                  </span>
                  <span>
                    Bubblehouse’s started undoubtedly as a loyalty solution
                    which subsequently resulted in increased customer loyalty
                    and improved customer lifetime value for businesses.
                  </span>
                </li>
              </ul>

              <h3 className="text-xl md:text-4xl font-semibold my-4 md:my-8">
                Tools Used for Project & Test Case Management:
              </h3>
              <p className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                Zephyr became the Testing tool for us, allowing easy testing
                case management from design, to execution, to tracking.
              </p>

              <h3 className="text-xl md:text-4xl font-semibold my-4 md:my-8">
                Conclusion:
              </h3>
              <p className="text-xs md:text-xl leading-4 md:leading-8 tracking-[0.72px] font-light">
                The Bubblehouse project showcased the successful collaboration
                between our development and QA teams in delivering a robust
                e-commerce loyalty solution. The seamless integration,
                comprehensive testing, and effective release management
                contributed to the project's success, resulting in increased
                loyalty and lifetime value for Bubblehouse's clients. The
                utilization of tools like Zephyr played a crucial role in
                managing and streamlining the testing process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
