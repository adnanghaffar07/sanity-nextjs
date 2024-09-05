// pages/index.js

import Link from "next/link";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import ScrollButton from "../../components/valueBluePrint";
import MobileAppServiceSection from "../../components/mobileAppServiceAccordian";
import SecondMobileServiceAcc from "../../components/SecondMobileServiceAccordian";
import ButtonScrollToSection from "../../components/ButtonScrollToSection";

async function getData(params: string) {
  const query = `*[_type == 'logicalServices' && urlPath == '${params}'][0]`;
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

async function getLogoData() {
  const queryLogo = `*[_type == 'techLogos'] | order(_createdAt asc)`;
  try {
    const fetchData = await client.fetch(queryLogo);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}


// Updated generateMetadata function
export async function generateMetadata({
  params,
}: {
  params: { service: string };
}) {
  const data = await getData(params.service); // Ensure to pass params.service to getData
  const defaultTitle = "Code Automation - Custom Software and Mobile Development Company in USA";
  const defaultDescription = "Custom Software and Mobile Development Company in USA";
  const defaultKeywords = "CodeAutomation.ai";

  const title = data.webSeoMetadata?.title || defaultTitle;
  const description = data.webSeoMetadata?.description || defaultDescription;
  const keywords = data.webSeoMetadata?.keywords?.join(", ") || defaultKeywords;

  const facebookMeta = data.facebookCards || {};
  const twitterMeta = data.twitterCards || {};
  const linkedInMeta = data.linkedInCards || {};
  const pinterestMeta = data.pinterestCards || {};
  const whatsappMeta = data.whatsappCards || {};
  const telegramMeta = data.telegramCards || {};
  return {
    title,
    description,
    keywords,
    openGraph: {
      type: facebookMeta.facebookType || "website",
      url: facebookMeta.facebookUrl || "https://codeautomation.ai",
      title: facebookMeta.facebookTitle || title,
      description: facebookMeta.facebookDescription || description,
      images: [
        {
          url: urlForImage(data.heroImage).toString(),
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterMeta.twitterTitle || title,
      description: twitterMeta.twitterDescription || description,
      images: [
        {
          url: urlForImage(data.heroImage).toString(),
          alt: title,
        }
      ],
    },
    linkedIn: {
      title: linkedInMeta.linkedInTitle || title,
      description: linkedInMeta.linkedInDescription || description,
      image: urlForImage(data.heroImage).toString(),
      url: linkedInMeta.linkedInUrl || "https://codeautomation.ai",
    },
    pinterest: {
      title: pinterestMeta.pinterestTitle || title,
      description: pinterestMeta.pinterestDescription || description,
      url: pinterestMeta.pinterestUrl || "https://codeautomation.ai",
    },
    whatsapp: {
      title: whatsappMeta.whatsappTitle || title,
      description: whatsappMeta.whatsappDescription || description,
      url: whatsappMeta.whatsappUrl || "https://codeautomation.ai",
    },
    telegram: {
      title: telegramMeta.telegramTitle || title,
      description: telegramMeta.telegramDescription || description,
      url: telegramMeta.telegramUrl || "https://codeautomation.ai",
    }
  };
}

export default async function service({
  params,
}: {
  params: { service: string };
}) {
  const data = await getData(params.service);
  const dataSub = await getSubData();
  const dataLogo = await getLogoData();

  return (
  <div>Homr</div>
  );
}
