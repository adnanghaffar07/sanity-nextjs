import { Metadata } from "next";
import { client } from "../../../../sanity/lib/client";
import FileInput from "../../components/FileInput";

async function getData(jobId: string) {
  const query = `*[_type == 'careers' && _id == '${jobId}'][0]`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// ✅ Function to dynamically set metadata, including Canonical URL
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const jobData = await getData(params.slug);
  const canonicalUrl = `https://codeautomation.ai/career/${params.slug}`;

  return {
    title: jobData ? jobData.jobTitleBaner : "Career at CodeAutomation",
    description: jobData ? jobData.descJobTitle : "Apply now to be a part of CodeAutomation.",
    alternates: {
      canonical: canonicalUrl, // ✅ This ensures correct canonical
    },
    openGraph: {
      url: canonicalUrl,
      title: jobData ? jobData.jobTitleBaner : "Career at CodeAutomation",
      description: jobData ? jobData.descJobTitle : "Apply now to be a part of CodeAutomation.",
      images: [
        {
          url: "https://codeautomation.ai/career-sub.jpg",
          width: 1200,
          height: 630,
          alt: "Career at CodeAutomation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: jobData ? jobData.jobTitleBaner : "Career at CodeAutomation",
      description: jobData ? jobData.descJobTitle : "Apply now to be a part of CodeAutomation.",
      images: ["https://codeautomation.ai/career-sub.jpg"],
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  const canonicalUrl = `https://codeautomation.ai/career/${params.slug}`;

  return (
    <>
      <div>
        <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
          <img
            className="top-0 left-0 object-cover absolute inset-0 size-full"
            src="/career-sub.jpg"
            alt="lifeatca"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-75"></div>
          <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
            <div className="lg:absolute lg:top-[350px]">
              <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
                <h2 className="title capitalize">
                  {data ? `"${data.jobTitleBaner}"` : "Loading..."}
                </h2>
              </div>
              <h1 className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
                Apply now to be a part of our unique adventure in CodeAutomation.
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-full mx-auto relative">
          <img
            loading="lazy"
            src="/intersect-left.png"
            className="aspect-[1.22] absolute -left-5 top-5 lg:block hidden"
            alt="rounded bg"
          />
          <div className="flex flex-col self-center w-full xl:max-w-[1582px] relative z-10 mx-auto">
            <div className="lg:px-10 px-5 w-full py-16">
              <div className="xl:text-5xl lg:text-4xl text-2xl flex flex-col gap-5  font-normal xl:mb-16 mb-8 xl:w-7/12">
                <span>{data?.descJobTitle || "Job Description"}</span>
                <span>{data?.yearsofExperience || "Experience Required"}</span>
              </div>
              <div className="mb-10">
                <h3 className="xl:text-4xl lg:text-2xl text-xl text-[#024] font-semibold mb-5">
                  Job Description
                </h3>
                <p>{data?.jobDescription || "No description available."}</p>
              </div>
              <div className="mb-10">
                <h3 className="xl:text-4xl lg:text-2xl text-xl font-semibold mb-5 text-[#024]">
                  Key Responsibilities
                </h3>
                <ul>
                  {data?.newresponsibilities?.length > 0
                    ? data.newresponsibilities.map((ele: string, index: number) => (
                        <li key={index} className="list-disc ml-5">
                          {ele}
                        </li>
                      ))
                    : "No responsibilities listed."}
                </ul>
              </div>
              <div className="mb-10">
                <h3 className="xl:text-4xl lg:text-2xl text-xl font-semibold mb-5 text-[#024]">
                  Requirements
                </h3>
                <ul>
                  {data?.requirements?.length > 0
                    ? data.requirements.map((ele: string, index: number) => (
                        <li key={index} className="list-disc ml-5">
                          {ele}
                        </li>
                      ))
                    : "No requirements listed."}
                </ul>
              </div>
              <div className="mb-10">
                <h3 className="xl:text-4xl lg:text-2xl text-xl font-semibold mb-5 text-[#024]">
                  Qualifications
                </h3>
                <ul>
                  {data?.qualification?.length > 0
                    ? data.qualification.map((ele: string, index: number) => (
                        <li key={index} className="list-disc ml-5">
                          {ele}
                        </li>
                      ))
                    : "No qualifications listed."}
                </ul>
              </div>
              <FileInput jobPost={data?.jobTitleBaner || "Unknown Position"} />
            </div>
          </div>
          <img
            loading="lazy"
            src="/ellipse-2.png"
            className="aspect-[1.22] absolute bottom-0 right-0 lg:block hidden"
            alt="eclipse"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
