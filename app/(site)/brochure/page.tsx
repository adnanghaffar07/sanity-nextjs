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
    <section className='px-6 md:px-16 py-10 md:py-16 '>
      <h1 className="text-4xl font-bold mb-8 text-center mt-28">Brochure Downloads</h1>
      <Brochure data={data} dataSub={dataSub} />
     
    </section>
  );
};

export default Services;
