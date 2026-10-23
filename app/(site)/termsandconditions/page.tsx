import type { Metadata } from 'next'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import { getTermsPage } from '@/sanity/lib/site-pages'
import SanityImage from '@/components/ui/SanityImage'

export const revalidate = 300

export const metadata: Metadata = {
  title: "Terms & Conditions | CodeAutomation",
  description: "CodeAutomation.ai is a leading software development company specialized in custom software development services.",
  alternates: {
    canonical: "https://codeautomation.ai/termsandconditions",
  },
  openGraph: {
    type: "website",
    url: "https://codeautomation.ai/termsandconditions",
    title: "Terms & Conditions | CodeAutomation",
    description: "CodeAutomation.ai is a leading software development company specialized in custom software development services.",
    images: [
      {
        url: "https://codeautomation.ai/thankyou.jpg",
        width: 1200,
        height: 630,
        alt: "CodeAutomation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | CodeAutomation",
    description: "CodeAutomation.ai is a leading software development company specialized in custom software development services.",
    images: ["https://codeautomation.ai/thankyou.jpg"],
  },
}

const components: PortableTextComponents = {
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6">{children}</ol>,
  },
  block: {
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
    normal: ({ children }) => <p className="mb-4">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#'
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          {children}
        </a>
      )
    },
  },
}

export default async function TermsPage() {
  const data = await getTermsPage()
  if (!data) notFound()

  return (
    <section>
      {/* Hero Section */}
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <SanityImage image={data.heroImage} alt="terms and conditions" fill priority sizes="100vw" className="object-cover" />
        <div className="flex relative flex-col items-center lg:px-20 px-5 pt-12 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[350px]">
            <h1 className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-36 max-md:max-w-full">
              {data.title}
            </h1>
            <h2 className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
              {data?.heroText}
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-10 max-w-4xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg mb-10">
        {data.lastUpdated && (
          <p className="text-gray-600 mb-4">
            Last updated: {format(new Date(data.lastUpdated), 'MMMM dd, yyyy')}
          </p>
        )}
        <div className="prose max-w-none prose-blue prose-lg text-gray-700">
          {data.content && <PortableText value={data.content} components={components} />}
        </div>
      </div>
    </section>
  )
}
