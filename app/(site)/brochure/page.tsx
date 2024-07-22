import React from 'react';
import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import Brochure from '../components/Brochure';

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
    <section className='px-6 md:px-16 py-10 md:py-16  -mb-24 bg-gradient-to-r from-[#F7E022] to-[#0a8ffc]'>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-white mt-20">Welcome to Our Brochure Downloads</h1>
        <p className="text-lg text-white mb-8">Explore our range of services and download brochures for more information.</p>
        <Brochure data={data} dataSub={dataSub} />
        <Link href="tel:+1-850-558-4691">
          <button className="inline-block bg-gray-800 opacity-0.6 text-white mb-18 font-semibold px-6 py-3 rounded-lg mt-8 mb-24 hover:bg-gradient-to-r from-[#0a8ffc] to-[#F7E022] hover:text-white transition duration-300 transform hover:scale-105">Contact Us</button>
        </Link>

      </div>
    </section>
  );
};

export default Services;
