import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { format } from 'date-fns'
import { serverClient } from '@/sanity/lib/sanity/serverClient'
import { urlForImage } from '@/sanity/lib/image'

export const metadata = {
  title: "Software Development Company in the USA | CodeAutomation",
  description: "CodeAutomation.ai is a leading software development company specialized in custom software development services.",
  alternates: {
    canonical: "https://codeautomation.ai/termsandconditions",
  },
}

const getData = async () => {
  return await serverClient.fetch(`*[_type == "terms"][0]{
    title,
    heroImage,
    heroText,
    content,
    lastUpdated
  }`)
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

const TermsPage = async () => {
  const data = await getData()
  return (
    <section>
      {/* Hero Section */}
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        {data.heroImage && (
          <Image
            src={urlForImage(data.heroImage).toString()}
            alt="terms and conditions"
            fill
            className="object-cover absolute inset-0"

          />
        )}
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
          <PortableText value={data.content} components={components} />
        </div>
      </div>
    </section>
  )
}

export default TermsPage
