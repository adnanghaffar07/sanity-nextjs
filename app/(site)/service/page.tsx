// pages/index.js

import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";


async function getData() {
    const query = `*[_type == 'logicalServices'] | order(_createdAt asc)`;
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




export default async function service() {
    const data = await getData();
    const dataSub = await getSubData();


    return (

        <div className="bg-gray-100">
            {/* Hero Section */}
            {data.map((service: any, index: any) => {
                if (index === 8) {
                    return (
                        <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full" key={service._id}>

                            <img
                                className="top-0 left-0 object-cover absolute inset-0 size-full"
                                src={urlForImage(service.heroImage).toString()}
                                alt="lifeatca"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
                            <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
                                <div className="lg:absolute lg:top-[300px]">
                                    <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
                                        <h2 className="title capitalize">
                                        {service.serviceTitle}
                                        </h2>
                                    </div>
                                    <div className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
                                        {service.serviceDesc}
                                    </div>
                                </div>
                            </div>

                        </div>
                    );
                }
                return null;
            })}


            {/* Introduction Section */}
            <section className="py-16 bg-gray-200 px-16">
                {data.map((service: any, index: any) => {
                    if (index === 8) {
                        return (
                            <div key={index} className="container mx-auto">
                                <h2 className="text-3xl font-bold mb-8 ">
                                    {service.introductionSection.introHeading}
                                </h2>
                                <div className="max-w-2xl ">
                                    <p className="text-lg text-gray-800 leading-relaxed">
                                        {service.introductionSection.introDesc}
                                    </p>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </section>


            {/* child service cards */}

<section className="py-16 px-16">
    {data.map((service: any, index: any) => {
        if (index === 8) {
            return (
                <div className="container mx-auto" key={index}>
                    <h2 className="text-3xl font-bold mb-8 text-center">{service.subServiceHeading}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Filter dataSub based on service.subServices */}
                        {service.subServices.map((subServiceRef: any) => {
                            // Find the corresponding subService object from dataSub
                            const subService = dataSub.find((item: any) => item._id === subServiceRef._ref);
                            if (subService) {
                                return (
                                    <Link href={`/service/${subService.urlPathSub}`} key={subService._id}>
                                        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                                            <img
                                                src={urlForImage(subService.heroImageSub).toString()}
                                                alt={subService.serviceCardSub}
                                                className="w-full h-40 object-cover"
                                            />
                                            <div className="p-6">
                                                <h3 className="text-xl font-semibold mb-4">{subService.serviceCardSub}</h3>
                                                <p className="text-gray-700">{subService.serviceDescSub}</p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            } else {
                                // Handle case when subService is not found
                                return null;
                            }
                        })}
                    </div>
                </div>
            );
        }
        return null;
    })}
</section>








            {/* <section className="py-16 px-16">
                {dataSub.map((service: any, index: any) => {
                    // Ensure service object has subServices property and it's not empty
                    //if (service.exampleServicesSection && service.exampleServicesSection.exampleService) {
                    if (index === 0) {
                        return (
                            <div className="container mx-auto" key={index}>
                                <h2 className="text-3xl font-bold mb-8">{service.serviceTitleSub}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {dataSub.map((subService: any, subIndex: any) => (
                                        <div key={subIndex} className="bg-white shadow-md p-6 rounded-lg">
                                            <h3 className="text-xl font-semibold mb-4">{subService.urlPathSub}</h3>
                                            <p className="text-gray-700">{subService.serviceDescSub}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                        //l  }
                    }
                    return null;
                })}
            </section> */}





            {/* Tools & Technology Section */}
            <section className="py-16 px-16">
                {data.map((service: any, index: any) => {

                    // Ensure service object has toolsTechSection property and it's not empty
                    if (service.toolsTechSection && service.toolsTechSection.toolsTech) {
                        if (index === 8) {
                            return (
                                <div className="container mx-auto" key={index}>
                                    <h2 className="text-3xl font-bold mb-8">{service.toolsTechSection.toolsTechHeading}</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {service.toolsTechSection.toolsTech.map((tool: any, toolIndex: any) => (
                                            <div

                                                key={toolIndex}
                                            >
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
                            );
                        }
                    }
                    return null;
                })}
            </section>


            {/* Example Value of Service (Use Cases) Section */}
            <section className="bg-gray-200 py-16 px-16">
                {data.map((service: any, index: any) => {

                    // Ensure service object has toolsTechSection property and it's not empty
                    if (service.exampleServicesSection && service.exampleServicesSection.exampleService) {
                        if (index === 8) {
                            return (
                                <div className="container mx-auto" key={index}>
                                    <h2 className="text-3xl font-bold mb-8">{service.exampleServicesSection.exampleServiceHeading}</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {service.exampleServicesSection.exampleService.map((example: any, exampleIndex: any) => (
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
                            );
                        }
                    }
                    return null;
                })}
            </section>

            {/* Typical Project Cycle Stages Section */}
            <section className="py-16 px-16">
                {data.map((service: any, index: any) => {
                    if (service.projectCycleSection && service.projectCycleSection.projectCycle) {
                        if (index === 8) {
                            return (
                                <div key={index} className="container mx-auto">
                                    <h2 className="text-3xl font-bold mb-8">{service.projectCycleSection.projectCycleHaeding}</h2>
                                    <ul className="list-disc list-inside">
                                        {service.projectCycleSection.projectCycle.map((cycle: any, index: any) => (
                                            <li key={index} className="mb-4">
                                                {cycle.detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        }
                    }
                    return null;
                })}
            </section>


            {/* Service Options Section */}
            <section className="bg-gray-200 px-16 py-16">
                {data.map((service: any, index: any) => {
                    if (service.deliveryOptionSection && service.deliveryOptionSection.deliveryOption) {
                        if (index === 8) {
                            return (
                                <div key={index} className="container mx-auto">
                                    <h2 className="text-3xl font-bold mb-8">{service.deliveryOptionSection.deliveryOptionHaeding}</h2>
                                    <ul className="list-disc list-inside">
                                        {service.deliveryOptionSection.deliveryOption.map((cycle: any, index: any) => (
                                            <li key={index} className="mb-4">
                                                {cycle.detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        }
                    }
                    return null;
                })}
            </section>


            {/* Special Offers Section */}
            <section className="py-16 px-16">
                {data.map((service: any, index: any) => {
                    if (index === 8) {
                        return (
                            <div key={index} className="container mx-auto">
                                <h2 className="text-3xl font-bold mb-8">{service.specialOffersSection.offerHeading}</h2>
                                <div className="bg-white shadow-md p-6 rounded-lg">
                                    <p className="text-xl font-semibold mb-4">{service.specialOffersSection.specialOffer}</p>
                                </div>
                            </div>
                        )
                    }

                })}

            </section>

            {/* Summary Message about Service Section */}
            <section className="bg-gray-200 py-16 px-16">
                {data.map((service: any, index: any) => {
                    if (index === 8) {
                        return (
                            <div key={index} className="container mx-auto">
                                <h2 className="text-3xl font-bold mb-8">{service.summarySection.summaryHeading}</h2>
                                <p className="text-xl text-center">{service.summarySection.summaryMessage}</p>
                            </div>
                        )
                    }
                })}

            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-16">
                {data.map((service: any, index: any) => {
                    if (index === 8) {
                        return (
                            <div key={index} className="container mx-auto text-center">
                                <h2 className="text-3xl font-bold mb-4">{service.callToActionSection.callToActionHeading}</h2>
                                <p className="text-lg mb-8">{service.callToActionSection.callToAction}</p>
                            </div>
                        )
                    }
                })}
            </section>

            {/* Contact Section */}
            <section className="py-16 px-16 bg-gray-200">
                {data.map((service: any, index: any) => {
                    if (index === 8) {
                        return (
                            <div key={index} className="container mx-auto text-center">
                                <h2 className="text-3xl font-bold mb-4">{service.contactSection.contactUsHeading}</h2>

                                <p className="text-lg text-center">
                                    {service.contactSection.contactUsDesc}
                                    {/* To learn more about our services or to schedule a consultation, please email us at{' '}
                            <a href="mailto:contact@codeautomation.ai" className="text-blue-500 font-bold">
                                contact@codeautomation.ai
                            </a>{' '}
                            or call us at <span className="font-bold">(123) 456-7890</span>. */}
                                </p>
                                <p className="text-blue-500 font-bold">
                                    {service.contactSection.contactEmail}
                                </p>
                                <p className="font-bold">
                                    {service.contactSection.contactPhone}
                                </p>
                                <p className="font-bold">
                                    {service.contactSection.contactLink}
                                </p>
                            </div>)
                    }
                })}

            </section>



        </div>

    )
}
