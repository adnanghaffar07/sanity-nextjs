// pages/index.js

import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

async function getData(urlPathSub: string) {
    const query = `*[_type == 'subService' && urlPathSub == '${urlPathSub}'][0]`;
    try {
        const fetchData = await client.fetch(query);
        console.log("Fetched data:", fetchData); // Log fetched data
        return fetchData || [];
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}





const Page = async ({ params }: { params: { slug: string } }) => {
    const data = await getData(params.slug);


    return (

        <div className="bg-gray-100">
            {/* Hero Section */}

            <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
                <img
                    className="top-0 left-0 object-cover absolute inset-0 size-full"
                    src={urlForImage(data.heroImageSub).toString()}
                    alt="lifeatca"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
                <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
                    <div className="lg:absolute lg:top-[300px]">
                        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
                            <h2 className="title capitalize">
                                {data.serviceTitleSub}
                            </h2>
                        </div>

                        <div className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
                            {data.serviceDescSub}
                        </div>
                    </div>
                </div>

            </div>


            {/* Introduction Section */}
            <section className="py-16 bg-gray-200 px-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 ">
                        {data.introductionSubSection.introHeading}
                    </h2>
                    <div className="max-w-2xl ">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            {data.introductionSubSection.introDesc}
                        </p>
                    </div>
                </div>


            </section>


            {/* Tools & Technology Section */}
            <section className="py-16 px-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">{data.toolsTechSubSection && data.toolsTechSubSection.toolsTechHeading}</h2>
                    <p className="text-xl font-light mb-8">{data.toolsTechSubSection && data.toolsTechSubSection.toolsTechDesc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.toolsTechSubSection &&
                            data.toolsTechSubSection.toolsTech &&
                            data.toolsTechSubSection.toolsTech.map((tool: any, toolIndex: any) => (
                                <div key={toolIndex} className="bg-white shadow-md p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4">{tool.heading}</h3>
                                    <p className="text-gray-700">{tool.detail}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Example Value of Service (Use Cases) Section */}
            <section className="py-16 px-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">{data.exampleServicesSubSection && data.exampleServicesSubSection.exampleServiceHeading}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.exampleServicesSubSection &&
                            data.exampleServicesSubSection.exampleService &&
                            data.exampleServicesSubSection.exampleService.map((example: any, exIndex: any) => (
                                <div key={exIndex} className="bg-white shadow-md p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4">{example.heading}</h3>
                                    <p className="text-gray-700">{example.detail}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </section>


            {/* Typical Project Cycle Stages Section */}
            <section className="py-16 px-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">{data.projectCycleSubSection && data.projectCycleSubSection.projectCycleHaeding}</h2>
                    <ul className="list-disc list-inside">
                        {data.projectCycleSubSection &&
                            data.projectCycleSubSection.projectCycle &&
                            data.projectCycleSubSection.projectCycle.map((cycle: any, index: any) => (
                                <li key={index} className="mb-4">
                                    {cycle.detail}
                                </li>
                            ))}
                    </ul>
                </div>
            </section>



            {/* Service Options Section */}
            <section className="bg-gray-200 px-16 py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">{data.deliveryOptionSubSection && data.deliveryOptionSubSection.deliveryOptionHaeding}</h2>
                    <ul className="list-disc list-inside">
                        {data.deliveryOptionSubSection &&
                            data.deliveryOptionSubSection.deliveryOption &&
                            data.deliveryOptionSubSection.deliveryOption.map((cycle: any, index: any) => (
                                <li key={index} className="mb-4">
                                    {cycle.detail}
                                </li>
                            ))}
                    </ul>
                </div>
            </section>



            {/* Special Offers Section */}
            <section className="py-16 px-16">
          
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold mb-8">{data.specialOffersSubSection.offerHeading}</h2>
                            <div className="bg-white shadow-md p-6 rounded-lg">
                                <p className="text-xl font-semibold mb-4">{data.specialOffersSubSection.specialOffer}</p>
                            </div>
                        </div>
      
            </section>

            {/* Summary Message about Service Section */}
            <section className="bg-gray-200 py-16 px-16">
              
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold mb-8">{data.summarySubSection.summaryHeading}</h2>
                            <p className="text-xl text-center">{data.summarySubSection.summaryMessage}</p>
                        </div>
              
            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-16">
          
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-4">{data.callToActionSubSection.callToActionHeading}</h2>
                            <p className="text-lg mb-8">{data.callToActionSubSection.callToAction}</p>
                        </div>
              
            </section>

            {/* Contact Section */}
            <section className="py-16 px-16 bg-gray-200">
            
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-4">{data.contactSubSection.contactUsHeading}</h2>

                            <p className="text-lg text-center">
                                {data.contactSubSection.contactUsDesc}
                                {/* To learn more about our services or to schedule a consultation, please email us at{' '}
                            <a href="mailto:contact@codeautomation.ai" className="text-blue-500 font-bold">
                                contact@codeautomation.ai
                            </a>{' '}
                            or call us at <span className="font-bold">(123) 456-7890</span>. */}
                            </p>
                            <p className="text-blue-500 font-bold">
                                {data.contactSubSection.contactEmail}
                            </p>
                            <p className="font-bold">
                                {data.contactSubSection.contactPhone}
                            </p>
                            <p className="font-bold">
                                {data.contactSubSection.contactLink}
                            </p>
                        </div>
            
            </section>



        </div>

    )
}
export default Page;