// pages/index.js

import Link from "next/link";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import HeroSectionComponent from "../../components/HeroSectionComponent";


async function getData(params: string) {
    const query = `*[_type == 'logicalServices' && urlPath == '${params}'][0]`;


    ;
    try {
        const fetchData = await client.fetch(query);
        return fetchData || [];
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

async function getSubData() {
    const querySub = `*[_type == 'subService'] | order(_createdAt asc)`;
    ;
    try {
        const fetchData = await client.fetch(querySub);
        return fetchData || [];
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}




export default async function service({ params }: { params: { service: string } }) {
    const data = await getData(params.service);
    const dataSub = await getSubData();

    return (

        <div className="bg-gray-100">


            <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
            {data.heroImage && (
        <img
            className="top-0 left-0 object-cover absolute inset-0 size-full"
            src={urlForImage(data.heroImage).toString()}
            alt="lifeatca"
        />
    )}
                <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
                <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
                    <div className="lg:absolute lg:top-[300px]">
                        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
                            <h2 className="title capitalize">
                                {data.serviceTitle}
                            </h2>
                        </div>
                        <div className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
                            {data.serviceDesc}
                        </div>
                    </div>
                </div>

            </div>


            {/* Introduction Section */}
            <section className="py-16 bg-gray-200 px-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 ">
                        {data.introductionSection?.introHeading}
                    </h2>
                    <div className="max-w-2xl ">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            {data.introductionSection?.introDesc}
                        </p>
                    </div>
                </div>

            </section>


            {/* child service cards */}

            <section className="py-16 px-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">{data.subServiceHeading}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.subServices && data.subServices.map((subServiceRef: any) => {
                            const subService = dataSub.find((item: any) => item._id === subServiceRef._ref);
                            if (subService) {
                                return (
                                    <Link href={`/services/service/${subService.urlPathSub}`} key={subService._id}>
                                        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                                            <img src={urlForImage(subService.heroImageSub).toString()} alt={subService.serviceCardSub} className="w-full h-40 object-cover" />
                                            <div className="p-6">
                                                <h3 className="text-xl font-semibold mb-4">{subService.serviceCardSub}</h3>
                                                <p className="text-gray-700">{subService.serviceDescSub}</p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
            </section>


            {/* Tools & Technology Section */}
            <section className="py-16 px-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">
                        {data.toolsTechSection?.toolsTechHeading}</h2>
                    <p className="text-xl font-light mb-8">
                        {data.toolsTechSection?.toolsTechDesc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.toolsTechSection?.toolsTech?.map((tool: any, toolIndex: any) => (
                            <div key={toolIndex}>
                                <div className="bg-white shadow-md p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4">
                                        {tool.heading}
                                    </h3>
                                    <p className="text-gray-700">
                                        {tool.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Example Value of Service (Use Cases) Section */}
            <section className="bg-gray-200 py-16 px-16">

                <div className="container mx-auto" >
                    <h2 className="text-3xl font-bold mb-8">
                        {data.exampleServicesSection?.exampleServiceHeading}</h2>
                    <p className="text-xl font-light mb-8">
                        {data.exampleServicesSection?.exampleServicedesc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.exampleServicesSection?.exampleService?.map((example: any, exampleIndex: any) => (
                            <div

                                key={exampleIndex}
                            >
                                <div className="bg-white shadow-md p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4">
                                        {example.heading}
                                    </h3>
                                    <p className="text-gray-700">
                                        {example.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Typical Project Cycle Stages Section */}
            <section className="py-16 px-16">

                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">{data.projectCycleSection?.projectCycleHaeding}</h2>
                    <ul className="list-disc list-inside">
                        {data.projectCycleSection?.projectCycle?.map((cycle: any, index: any) => (
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
                    <h2 className="text-3xl font-bold mb-8">{data.deliveryOptionSection?.deliveryOptionHaeding}</h2>
                    <ul className="list-disc list-inside">
                        {data.deliveryOptionSection?.deliveryOption?.map((cycle: any, index: any) => (
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
                    <h2 className="text-3xl font-bold mb-8">{data.specialOffersSection?.offerHeading}</h2>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <p className="text-xl font-semibold mb-4">{data.specialOffersSection?.specialOffer}</p>
                    </div>
                </div>


            </section>

            {/* Summary Message about Service Section */}
            <section className="bg-gray-200 py-16 px-16">

                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">{data.summarySection?.summaryHeading}</h2>
                    <p className="text-xl text-center">{data.summarySection?.summaryMessage}</p>
                </div>


            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-16">

                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">{data.callToActionSection?.callToActionHeading}</h2>
                    <p className="text-lg mb-8">{data.callToActionSection?.callToAction}</p>
                </div>

            </section>

            {/* Contact Section */}

            <section className="py-16 px-16 bg-gray-200">
            
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">{data.contactSection?.contactUsHeading}</h2>

                <p className="text-lg text-center">
                    {data.contactSection?.contactUsDesc}
                    {/* To learn more about our services or to schedule a consultation, please email us at{' '}
                <a href="mailto:contact@codeautomation.ai" className="text-blue-500 font-bold">
                    contact@codeautomation.ai
                </a>{' '}
                or call us at <span className="font-bold">(123) 456-7890</span>. */}
                </p>
                <p className="text-blue-500 font-bold">
                    {data.contactSection?.contactEmail}
                </p>
                <p className="font-bold">
                    {data.contactSection?.contactPhone}
                </p>
                <p className="font-bold">
                    {data.contactSection?.contactLink}
                </p>
            </div>

</section>


        </div>

    )
}
