import { getBannercontent } from "@/sanity/sanity-utils";
import { getBannerbox1content } from "@/sanity/sanity-utils";

export default function Technologies() {
  return (
    <div>
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <img className="absolute top-0 left-0 object-cover absolute inset-0 size-full" src="/technologies.png" />
          
   
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-75"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[300px]">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 max-md:max-w-full">
              {/* &quot;Transforming Businesses through{" "}
              <span className="text-yellow-400">Generative AI</span>&quot; */}
              {/* {bannercontent.map((bannercontent) => (
                <h2 className="title capitalize" key={bannercontent._id}>
                    {bannercontent.name}
                </h2>
              ))} */}
              <h2 className="title capitalize">
                &quot;Technology&quot;
              </h2>
            </div>
            <div className="lg:text-2xl text-center mt-4 max-md:max-w-full lg:px-32">
              We offer only well-recognized and time-tested technologies to bring advancement to any of your business goals.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:px-10 md:px-5 lg:py-16 py-8 w-full text-black bg-[#F3F3F3] leading-[100%] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1582px] max-md:my-10 max-md:max-w-full">
          <div className="self-center lg:text-5xl text-3xl xl:w-6/12 mx-auto text-center max-md:max-w-full lg:mb-5 mb-2.5">
            Our Tech Stack In Different Technologies
          </div>
          <div className="xl:w-9/12 mx-auto text-center">
            <p className="lg:text-xl text-l text-base">Explore the technologies that power our solutions and witness the innovation firsthand! Here, we showcase our proficiency in a wide range of cutting-edge technologies across various domains of software development.</p>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto relative">
        <img
            loading="lazy"
            src="/intersect-left.png"
            className="aspect-[1.22] absolute left-0 top-20 lg:block hidden"
          />
          <div className="flex flex-col self-center w-full max-w-[1624px] max-md:max-w-full relative z-10 mx-auto">
            <div className="lg:px-10 px-5 w-full">
              <div className="grid lg:grid-cols-2 gap-5 lg:py-12 py-8">
                <div className="xl:pr-20 lg:order-1 order-2 relative">
                  <img
                    loading="lazy"
                    src="/intersect-left.png"
                    className="w-20 absolute -left-5 top-0 lg:hidden block -z-10"
                  />
                  <div className="lg:text-5xl text-3xl mb-3">
                    Ai/ML
                  </div>
                  <div className="mb-10">
                    <p className="lg:text-lg text-base">CodeAutomation leverage it&rsquo;s clients with AI/ML services and languages. Our developers are not only knowledgeable in these languages but also keep up with the latest advancements to ensure our clients receive cutting-edge solutions.</p>
                  </div>
                  <div className="lg:pr-36">
                    <img
                    loading="lazy"
                    src="/img-logos-ai-ml.jpg"
                    className="lg:w-full md:w-3/4 w-full inline-block"
                    />
                  </div>
                </div>
                <div className="text-center lg:order-2 order-1">
                  <img
                  loading="lazy"
                  src="/illustration-ai.jpg"
                  className="lg:w-3/4 md:w-1/2 w-3/4 inline-block"
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="max-w-full mx-auto relative">
        <img
            loading="lazy"
            src="/intersect-right.png"
            className="aspect-[1.22] absolute right-0 top-20 lg:block hidden"
          />
          <div className="flex flex-col self-center w-full max-w-[1624px] max-md:max-w-full relative z-10 mx-auto">
            <div className="lg:px-10 px-5 w-full">
              <div className="grid lg:grid-cols-2 gap-5 lg:py-12 py-8">            
                <div className="text-center">
                  <img
                  loading="lazy"
                  src="/illustration-crm-cms.jpg"
                  className="lg:w-3/4 md:w-1/2 w-3/4 inline-block"
                  />
                </div>
                <div className="lg:pl-20 relative">
                  <img
                    loading="lazy"
                    src="/intersect-right.png"
                    className="w-20 absolute -right-5 top-0 lg:hidden block -z-10"
                  />                  
                  <div className="lg:text-5xl text-3xl mb-3 text-end">
                    CRM/CMS
                  </div>
                  <div className="mb-10">
                    <p className="lg:text-lg text-base text-end">CodeAutomation excels in the field of CRM customization and implementation, showcasing a high level of proficiency in tailoring solutions to meet unique business needs.</p>
                  </div>
                  <div className="lg:pl-36 md:text-end">
                    <img
                    loading="lazy"
                    src="/img-logos-crm-cms.jpg"
                    className="lg:w-full md:w-3/4 w-full inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="max-w-full mx-auto relative">
        <img
            loading="lazy"
            src="/intersect-left.png"
            className="aspect-[1.22] absolute left-0 top-20 lg:block hidden"
          />
          <div className="flex flex-col self-center w-full max-w-[1624px] max-md:max-w-full relative z-10 mx-auto">
            <div className="lg:px-10 px-5 w-full">
              <div className="grid lg:grid-cols-2 gap-5 lg:py-12 py-8">
              <div className="xl:pr-20 lg:order-1 order-2 relative">
                  <img
                    loading="lazy"
                    src="/intersect-left.png"
                    className="w-20 absolute -left-5 top-0 lg:hidden block -z-10"
                  />
                  <div className="lg:text-5xl text-3xl mb-3">
                    Frontend
                  </div>
                  <div className="mb-10">
                    <p className="lg:text-lg text-base">Our expertise lies in crafting cutting-edge frontend solutions, leveraging the power of HTML5 and the latest JavaScript frameworks.</p>
                  </div>
                  <div className="lg:pr-36">
                    <img
                    loading="lazy"
                    src="/img-logos-frontend.jpg"
                    className="lg:w-full md:w-3/4 w-full inline-block"
                    />
                  </div>
                </div>
                <div className="text-center lg:order-2 order-1">
                  <img
                  loading="lazy"
                  src="/illustration-frontend.jpg"
                  className="lg:w-3/4 md:w-1/2 w-3/4 inline-block"
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="max-w-full mx-auto relative">
        <img
            loading="lazy"
            src="/intersect-right.png"
            className="aspect-[1.22] absolute right-0 top-20 lg:block hidden"
          />
          <div className="flex flex-col self-center w-full max-w-[1624px] max-md:max-w-full relative z-10 mx-auto">
            <div className="lg:px-10 px-5 w-full">
              <div className="grid lg:grid-cols-2 gap-5 lg:py-12 py-8">            
                <div className="text-center">
                  <img
                  loading="lazy"
                  src="/illustration-backend.jpg"
                  className="lg:w-3/4 md:w-1/2 w-3/4 inline-block"
                  />
                </div>
                <div className="lg:pl-20 relative">
                  <img
                    loading="lazy"
                    src="/intersect-right.png"
                    className="w-20 absolute -right-5 top-0 lg:hidden block -z-10"
                  />
                  <div className="lg:text-5xl text-3xl mb-3 text-end">
                    Backend
                  </div>
                  <div className="mb-10">
                    <p className="lg:text-lg text-base text-end">Our toolkit includes robust frameworks such as Node.js, Django, and Ruby on Rails, coupled with scalable databases like MongoDB and PostgreSQL.</p>
                  </div>
                  <div className="lg:pl-36 md:text-end">
                    <img
                    loading="lazy"
                    src="/img-logos-backend.jpg"
                    className="lg:w-full md:w-3/4 w-full inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="max-w-full mx-auto relative">
        <img
            loading="lazy"
            src="/intersect-left.png"
            className="aspect-[1.22] absolute left-0 top-20 lg:block hidden"
          />
          <div className="flex flex-col self-center w-full max-w-[1624px] max-md:max-w-full relative z-10 mx-auto">
            <div className="lg:px-10 px-5 w-full">
              <div className="grid lg:grid-cols-2 gap-5 lg:py-12 py-8">
                <div className="xl:pr-20 lg:order-1 order-2 relative">
                  <img
                    loading="lazy"
                    src="/intersect-left.png"
                    className="w-20 absolute -left-5 top-0 lg:hidden block -z-10"
                  />
                  <div className="lg:text-5xl text-3xl mb-3">
                    Database
                  </div>
                  <div className="mb-10">
                    <p className="lg:text-lg text-base">We leverage relational databases like MySQL and PostgreSQL for structured data, NoSQL databases such as MongoDB for flexible and scalable data storage, and cloud-based solutions.</p>
                  </div>
                  <div className="lg:pr-36">
                    <img
                    loading="lazy"
                    src="/img-logos-database.jpg"
                    className="lg:w-full md:w-3/4 w-full inline-block"
                    />
                  </div>
                </div>
                <div className="text-center lg:order-2 order-1">
                  <img
                  loading="lazy"
                  src="/illustration-database.jpg"
                  className="lg:w-3/4 md:w-1/2 w-3/4 inline-block"
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="max-w-full mx-auto relative">
        <img
            loading="lazy"
            src="/intersect-right.png"
            className="aspect-[1.22] absolute right-0 top-20 lg:block hidden"
          />
          <div className="flex flex-col self-center w-full max-w-[1624px] max-md:max-w-full relative z-10 mx-auto">
            <div className="lg:px-10 px-5 w-full">
              <div className="grid lg:grid-cols-2 gap-5 lg:py-12 py-8">            
                <div className="text-center">
                  <img
                  loading="lazy"
                  src="/illustration-mobile-technologies.jpg"
                  className="lg:w-3/4 md:w-1/2 w-3/4 inline-block"
                  />
                </div>
                <div className="lg:pl-20 relative">
                  <img
                    loading="lazy"
                    src="/intersect-right.png"
                    className="w-20 absolute -right-5 top-0 lg:hidden block -z-10"
                  />
                  <div className="lg:text-5xl text-3xl mb-3 text-end">
                    Mobile Technologies
                  </div>
                  <div className="mb-10">
                    <p className="lg:text-lg text-base text-end">At Code Automation, our mobile development services are underpinned by a commitment to reliability and versatility.</p>
                  </div>
                  <div className="lg:pl-36 md:text-end">
                    <img
                    loading="lazy"
                    src="/img-logos-mobile-technologies.jpg"
                    className="lg:w-full md:w-3/4 w-full inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="max-w-full mx-auto relative">
        <img
            loading="lazy"
            src="/intersect-left.png"
            className="aspect-[1.22] absolute left-0 top-20 lg:block hidden"
          />
          <div className="flex flex-col self-center w-full max-w-[1624px] max-md:max-w-full relative z-10 mx-auto">
            <div className="lg:px-10 px-5 w-full">
              <div className="grid lg:grid-cols-2 gap-5 lg:py-12 py-8">
                <div className="xl:pr-20 lg:order-1 order-2 relative">
                  <img
                    loading="lazy"
                    src="/intersect-left.png"
                    className="w-20 absolute -left-5 top-0 lg:hidden block -z-10"
                  />
                  <div className="lg:text-5xl text-3xl mb-3">
                    Manual Testing
                  </div>
                  <div className="mb-10">
                    <p className="text-lg">Our developers use a meticulous manual testing process and a suite of tools, to ensure the quality and functionality of your website or application.</p>
                  </div>
                  <div className="lg:pr-36">
                    <img
                    loading="lazy"
                    src="/img-logos-manual-testing.jpg"
                    className="lg:w-full md:w-3/4 w-full inline-block"
                    />
                  </div>
                </div>
                <div className="text-center lg:order-2 order-1">
                  <img
                  loading="lazy"
                  src="/illustration-manual-testing.jpg"
                  className="lg:w-3/4 md:w-1/2 w-3/4 inline-block"
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="max-w-full mx-auto relative">
        <img
            loading="lazy"
            src="/intersect-right.png"
            className="aspect-[1.22] absolute right-0 top-20 lg:block hidden"
          />
          <div className="flex flex-col self-center w-full max-w-[1624px] max-md:max-w-full relative z-10 mx-auto">
            <div className="lg:px-10 px-5 w-full">
              <div className="grid lg:grid-cols-2 gap-5 lg:py-12 py-8">            
                <div className="text-center">
                  <img
                  loading="lazy"
                  src="/illustration-automated-testing.jpg"
                  className="lg:w-3/4 md:w-1/2 w-3/4 inline-block"
                  />
                </div>
                <div className="lg:pl-20 relative">
                  <img
                    loading="lazy"
                    src="/intersect-right.png"
                    className="w-20 absolute -right-5 top-0 lg:hidden block -z-10"
                  />                  
                  <div className="lg:text-5xl text-3xl mb-3 text-end">
                    Automated Testing
                  </div>
                  <div className="mb-10">
                    <p className="lg:text-lg text-base text-end">We utilize advanced automation testing tools like Selenium, Appium, and JUnit for web and mobile application testing, ensuring robust software solutions and successful application development.</p>
                  </div>
                  <div className="lg:pl-36 md:text-end">
                    <img
                    loading="lazy"
                    src="/img-logos-automated-testing.jpg"
                    className="lg:w-full md:w-3/4 w-full inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="max-w-full mx-auto relative">
        <img
            loading="lazy"
            src="/intersect-left.png"
            className="aspect-[1.22] absolute left-0 top-20 lg:block hidden"
          />
          <div className="flex flex-col self-center w-full max-w-[1624px] max-md:max-w-full relative z-10 mx-auto">
            <div className="lg:px-10 px-5 w-full">
              <div className="grid lg:grid-cols-2 gap-5 lg:py-12 py-8">
                <div className="xl:pr-20 lg:order-1 order-2 relative">
                  <img
                    loading="lazy"
                    src="/intersect-left.png"
                    className="w-20 absolute -left-5 top-0 lg:hidden block -z-10"
                  />
                  <div className="lg:text-5xl text-3xl mb-3">
                    UI/UX Designing
                  </div>
                  <div className="mb-10">
                    <p className="lg:text-lg text-base">For creating impressive designs, our essential tools include Adobe Creative Cloud for versatile graphic design, Sketch for efficient UI/UX, and Figma for collaborative prototyping.</p>
                  </div>
                  <div className="lg:pr-36">
                    <img
                    loading="lazy"
                    src="/img-logos-ui-ux-designing.jpg"
                    className="lg:w-full md:w-3/4 w-full inline-block"
                    />
                  </div>
                </div>
                <div className="text-center lg:order-2 order-1">
                  <img
                  loading="lazy"
                  src="/illustration-ui-ux-designing.jpg"
                  className="lg:w-3/4 md:w-1/2 w-3/4 inline-block"
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

