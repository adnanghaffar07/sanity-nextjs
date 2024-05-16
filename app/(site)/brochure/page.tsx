import React from 'react';
import { client } from "../../../sanity/lib/client";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'logicalServices'] | order(_createdAt asc)`;
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
  try {
    const fetchData = await client.fetch(querySub);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const Services = async () => {
  const data = await getData();
  const dataSub = await getSubData();
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-center mt-28">Brochure Downloads</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-[1240px] mx-auto my-12 sm:my-12">
        {data.map((service: any) => (
          <Link href={`/services/${service.urlPath}`} key={service._id}>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105 h-full">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">{service.serviceCardTitle}</h3>
                <ul>
                  {service.subServices &&
                    service.subServices.map((subServiceRef: any) => {
                      const subService = dataSub.find((item: any) => item._id === subServiceRef._ref);
                      return (
                        <li key={subServiceRef._key} className="flex items-center text-purple-700 mb-2 hover:underline cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M13.78 10.22a.75.75 0 0 0-1.06 1.06l2.5 2.5H3.75a.75.75 0 1 0 0 1.5h11.47l-2.5 2.5a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25z" clipRule="evenodd" />
                          </svg>
                          {subService && subService.serviceCardSub}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Services;
