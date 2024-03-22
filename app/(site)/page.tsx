import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <video className="absolute top-0 left-0 object-cover absolute inset-0 size-full" width="100%" height="100%" muted autoPlay>
          <source src="./for-blogs.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-85"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 pt-12 w-full max-md:px-5 max-md:max-w-full flex-grow">

          <div className="lg:absolute lg:top-[250px]">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-36 max-md:max-w-full">
              <h2 className="title capitalize" style={{ lineHeight: "1.3" }}>
                &quot;Transforming Businesses Through Generative AI&quot;
              </h2>
            </div>
            <div className="lg:text-2xl text-base text-center max-md:mt-10 max-md:max-w-full" style={{ lineHeight: "1.6" }}>
              Explore with us, and let&rsquo;s pioneer the next era of innovation together.
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 text-base mt-10 lg:mt-auto max-md:max-w-full text-center max-w-[1400px]">
            <div className="flex flex-col flex-1 items-center mt-1.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/789bfcc0ff0740879ffd9bb8daac0f8ec8d0cba214fd374e4e36ffb26087e184?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
                className="self-center aspect-[1.12] w-[65px]"
              />
              {/* {bannerbox1content.map((bannerbox1content) => (
                <div className="box-content text-wrap leading-[40px] mt-8" key={bannerbox1content._id}>
                    {bannerbox1content.name}
                </div>
              ))} */}
              {/* {bannerbox1content.content} */}
              <div className="self-stretch lg:mt-11 mt-3 text-wrap">
                We are trusted by 200 global clients and offer innovative software solutions tailored to specific needs and markets.</div>
            </div>
            <div className="flex flex-col flex-1 items-center mt-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd11565216251ba7edf5d297e866d2f669890e35a17a2a5f0451e15e47a8f1e0?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
                className="self-center aspect-square w-[58px]"
              />
              <div className="self-stretch lg:mt-11 mt-3">
                We&rsquo;ve completed over 350 projects, demonstrating our expertise in providing creative software products around the world.
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4dba27be0f0ef0e7f2222766f9380cd600d6c52ecf6d4faf7f8c09b0bf153bd?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
                className="self-center aspect-square w-[58px]"
              />
              <div className="lg:mt-11 mt-3  text-wrap">
                We professionally assessed 300 apps to assure high-quality and reliable software solutions for our clients.</div>
            </div>
            <div className="flex flex-col flex-1 items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d94d3acf8211d9d93fa767bd062c760909c92d44aa2ffe4184b9e68836f0611?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
                className="self-center aspect-[0.89] w-[52px]"
              />
              <div className="lg:mt-11 mt-3  text-wrap">
                Over 150k bugs have been addressed, ensuring that our clients&rsquo; software solutions are reliable and trustworthy.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:px-10 md:px-5 lg:py-16 py-16 w-full text-black bg-[#F3F3F3] leading-[100%] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1582px] max-md:my-10 max-md:max-w-full">
          <div className="self-center xl:text-4xl lg:text-3xl text-3xl font-medium max-md:max-w-full">
            Our Top Services
          </div>

          <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 xl:mt-12 text-xl font-bold whitespace-nowrap max-md:flex-wrap mt-10 max-md:max-w-full">
     
              <div className="text-center py-4 px-6 bg-white rounded-lg shadow-md max-md:p-3">
                Web Development
              </div>
              <div className="text-center py-4 px-6 bg-white rounded-lg shadow-md max-md:p-3">
                App Development
              </div>
              <div className="text-center py-4 px-6 bg-white rounded-lg shadow-md max-md:p-3">
                QA Automation Testing
              </div>
              <div className="text-center py-4 px-6 bg-white rounded-lg shadow-md max-md:p-3">
                AI/ML Services
              </div>
          
          </div>

        </div>
      </div>
      <div className="max-w-full mx-auto relative">
        <img
          loading="lazy"
          src="/ellipse-1.png"
          className="aspect-[1.22] absolute left-0 top-0 lg:block hidden"
        />
        <img
          loading="lazy"
          src="/ellipse-1.png"
          className="absolute left-0 top-0 w-40 lg:hidden block"
        />
        <div className="flex flex-col self-center mt-16 w-full max-w-[1624px]  mx-auto max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full lg:px-10 px-5 relative">

            <div className="flex gap-5 pb-16 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full self-center">
                <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                  <div className="xl:text-4xl lg:text-3xl text-3xl font-medium max-md:max-w-full">
                    Our Core Expertise
                  </div>
                  <div className="xl:mt-11 lg:text-xl text-base font-light mt-5 max-md:max-w-full xl:pr-36">
                    CodeAutomation offers 24/7 assistance from skilled professionals to ensure the quality of your IT projects. CodeAutomation is committed to guaranteeing optimal security and adherence to your business requirements. Our customized solutions and comprehensive support keep your organization running smoothly, from disaster recovery to cybersecurity, managed IT services, and e-commerce solutions.<br />
                    Our goal is to support your endeavors. At CodeAutomation, we are proud of our comprehensive knowledge of the full scope of IT services developed over the years.                  </div>
                  <div className="flex items-start self-stretch pr-8 text-base xl:text-xl lg:text-lg font-medium whitespace-nowrap max-w-[450px]  max-md:pr-5 mt-12">
                    <Link href="/technologies" className="cursor flex overflow-hidden relative gap-2 px-6 py-3 items-center bg-[#F7E022] rounded-lg shadow-md">
                      <div className="relative grow self-center">
                        Explore Our Technologies
                      </div>
                      <img
                        loading="lazy"
                        src="/btn-arrow.svg"
                        className="w-[22px] h-[26.8px]" // Adjust the width and height
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pr-4 pb-3.5 w-full bg-sky-500 rounded-3xl max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/73846796fe711256ba598c1f188a0e34c785ed0201b7ea9e6ebc86ca1250f52f?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
                    className="z-10 mt-0 w-full aspect-[0.78] max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-center w-full mx-auto max-md:max-w-full bg-[#F3F3F3] lg:py-16 py-16 lg:px-10 px-5">
          <div className="self-center font-medium text-black xl:text-4xl lg:text-3xl text-3xl max-w-[1582px] mx-auto">
            Our Work
          </div>
          <div className="lg:mt-8 mt-4 text-xl font-light text-center text-black lg:px-10 md:px-5 max-w-[1582px] mx-auto">
            Explore the tangible results of our dedication and proficiency in our portfolio. Each project is a testament to our commitment to excellence. Check out our case studies and witness how we&rsquo;ve helped businesses like yours succeed.
          </div>
          <div className="self-center mt-16 w-full max-md:mt-10 max-w-[1582px] mx-auto">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow lg:text-2xl md:text-xl text-base text-zinc-100 max-md:mt-10 max-md:max-w-full gap-10">
                  <div className="flex overflow-hidden relative flex-col justify-center w-full font-medium shadow-md max-md:max-w-full rounded-3xl">
                    <img
                      loading="lazy"
                      srcSet="/image-16.jpg"
                      className="size-full rounded-3xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full px-8 pb-7 rounded-3xl shadow-md bg-black bg-opacity-50 max-md:px-5 max-md:max-w-full flex items-end">
                      <span className="font-bold text-zinc-100">
                        Bubblehouse - E Commerce (NFTs)
                      </span>
                    </div>
                  </div>
                  <div className="flex overflow-hidden relative flex-col justify-center w-full font-medium shadow-md max-md:max-w-full rounded-3xl">
                    <img
                      loading="lazy"
                      srcSet="/image-21.jpg"
                      className="size-full rounded-3xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full px-8 pb-7 rounded-3xl shadow-md bg-black bg-opacity-50 max-md:px-5 max-md:max-w-full flex items-end">
                      <span className="font-bold text-zinc-100">Vested Finance - Fintech</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow md:text-xl text-base font-bold whitespace-nowrap text-zinc-100 max-md:mt-10 max-md:max-w-full rounded-3xl lg:gap-5 gap-10">
                  <div className="flex overflow-hidden relative flex-col justify-center rounded-3xl w-full shadow-md max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="/image-17.jpg"
                      className="size-full rounded-3xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-end pt-60 pr-16 pb-4 pl-5 rounded-3xl shadow-md bg-black bg-opacity-50 max-md:pt-10 max-md:pr-5 max-md:max-w-full">
                      Getdandy - Ai Product
                    </div>
                  </div>
                  <div className="flex overflow-hidden relative flex-col justify-center rounded-3xl w-full shadow-md max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="/image-19.jpg"
                      className="size-full rounded-3xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-end pt-60 pr-16 pb-4 pl-5 rounded-3xl shadow-md bg-black bg-opacity-50 max-md:pt-10 max-md:pr-5 max-md:max-w-full">
                      PublicInput - Community Engagement
                    </div>
                  </div>
                  <div className="flex overflow-hidden relative flex-col justify-center rounded-3xl shadow-md max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="/image-20.jpg"
                      className="size-full rounded-3xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-end pt-60 pr-16 pb-4 pl-5 rounded-3xl shadow-md bg-black bg-opacity-50 max-md:pt-10 max-md:pr-5 max-md:max-w-full">
                      Tracely - Location Tracking App
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-between max-md:flex-wrap mt-10">
              <div className="flex items-center text-base xl:text-xl lg:text-xl font-medium whitespace-nowrap order-2 md:order-1">
                <Link href="/blogs" className="cursor flex overflow-hidden relative gap-2 px-6 py-3 items-center  bg-[#F7E022] rounded-lg shadow-md">
                  <div className="relative grow self-center">
                    Explore Our Portfolio
                  </div>
                  <img
                    loading="lazy"
                    src="/btn-arrow.svg"
                    className="w-[22px] h-[26.8px]"
                  />
                </Link>
              </div>


              <div className="flex gap-4 px-5 my-auto order-1 md:order-2 justify-end">
                <div className="rounded-2xl bg-sky-950 lg:h-[21px] md:h-[11px] lg:w-[108px] w-[54px]" />
                <div className="bg-sky-800 rounded-2xl lg:h-[21px] md:h-[11px] lg:w-[108px] w-[54px]" />
                <div className="bg-sky-800 rounded-2xl lg:h-[21px] md:h-[11px] lg:w-[108px] w-[54px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:px-10 px-5  mx-auto max-w-[1582px]">
          <div className="w-full xl:text-4xl lg:text-3xl text-3xl font-medium text-black max-md:max-w-full max-md:text-4xl lg:pt-20 pt-16">
            Why Work With Us
          </div>
          <div className="px-px mt-14 w-full max-md:mt-10 max-md:max-w-full">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 max-md:flex-col">
              <div className="flex flex-col max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-2.5 items-center pr-5 w-full text-black whitespace-nowrap bg-white rounded-md shadow shadow-slate-400">
                  <div className="bg-[#F3F3F3] rounded-md p-3 h-full flex flex-col justify-center flex h-100">
                    <img
                      loading="lazy"
                      srcSet="/Group-17-1.svg"
                      className="self-stretch max-w-full aspect-[0.9] w-[68px]"
                    />
                  </div>
                  <div className="flex flex-col flex-1 self-stretch my-auto">
                    <div className="text-lg font-medium leading-6 uppercase">
                      Global Client
                    </div>
                    <div className="xl:text-5xl font-extrabold lg:text-4xl md:text-4xl text-5xl flex">
                      200+
                      {/* <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9ff7ffac79e9fae530070485265b9bf15e638aa9e88607ffd777b210da457c?"
                        className="self-stretch my-auto aspect-[1.09] fill-black w-[13px] xl:-top-6 lg:-top-2 -top-2 lg:-right-2 -right-1 relative"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-2.5 items-center pr-5 w-full text-black whitespace-nowrap bg-white rounded-md shadow shadow-slate-400">
                  <div className="bg-[#F3F3F3] rounded-md p-3 h-full flex flex-col justify-center">
                    <img
                      loading="lazy"
                      srcSet="/Group-22-4.svg"
                      className="self-stretch max-w-full aspect-[0.9] w-[68px]"
                    />
                  </div>
                  <div className="flex flex-col flex-1 self-stretch my-auto">
                    <div className="text-lg font-medium leading-6 uppercase">
                      Projects
                    </div>
                    <div className="xl:text-5xl font-extrabold lg:text-4xl md:text-4xl text-5xl flex">
                      350+
                      {/* <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9ff7ffac79e9fae530070485265b9bf15e638aa9e88607ffd777b210da457c?"
                        className="self-stretch my-auto aspect-[1.09] fill-black w-[13px] xl:-top-6 lg:-top-2 -top-2 lg:-right-2 -right-1 relative"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-2.5 items-center pr-5 w-full text-black whitespace-nowrap bg-white rounded-md shadow shadow-slate-400">
                  <div className="bg-[#F3F3F3] rounded-md p-3 h-full flex flex-col justify-center">
                    <img
                      loading="lazy"
                      srcSet="/Group-27-3.svg"
                      className="self-stretch max-w-full aspect-[0.9] w-[68px]"
                    />
                  </div>
                  <div className="flex flex-col flex-1 self-stretch my-auto">
                    <div className="text-lg font-medium leading-6 uppercase">
                      Apps tested
                    </div>
                    <div className="xl:text-5xl font-extrabold lg:text-4xl md:text-4xl text-5xl flex">
                      300+
                      {/* <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9ff7ffac79e9fae530070485265b9bf15e638aa9e88607ffd777b210da457c?"
                        className="self-stretch my-auto aspect-[1.09] fill-black w-[13px] xl:-top-6 lg:-top-2 -top-2 lg:-right-2 -right-1 relative"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-2.5 items-center pr-5 w-full text-black whitespace-nowrap bg-white rounded-md shadow shadow-slate-400">
                  <div className="bg-[#F3F3F3] rounded-md p-3 h-full flex flex-col justify-center">
                    <img
                      loading="lazy"
                      srcSet="/Group-28-2.svg"
                      className="self-stretch max-w-full aspect-[0.9] w-[68px]"
                    />
                  </div>
                  <div className="flex flex-col flex-1 self-stretch my-auto">
                    <div className="text-lg font-medium leading-6 uppercase">
                      Bugs Resolved
                    </div>
                    <div className="xl:text-5xl font-extrabold lg:text-4xl md:text-4xl text-5xl flex">
                      150<span className="text-3xl self-end">k</span>+
                      {/* <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9ff7ffac79e9fae530070485265b9bf15e638aa9e88607ffd777b210da457c?"
                        className="self-stretch my-auto aspect-[1.09] fill-black w-[13px] xl:-top-6 lg:-top-2 -top-2 lg:-right-2 -right-1 relative"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative flex-col justify-center items-start lg:px-10 md:px-5 w-full font-medium text-black py-8 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="/ellipse-1.png"
            className="lg:aspect-[1.22] absolute left-0 md:top-24 top-16 lg:block hidden"
          />
          <img
            loading="lazy"
            src="/ellipse-1.png"
            className="lg:aspect-[1.22] absolute left-0 md:top-24 top-16 w-24 lg:hidden block"
          />
          <div className="w-full max-w-[1582px] mx-auto md:flex">

            <div className="flex relative flex-col md:w-7/12 w-full self-end">
              <div className="xl:text-4xl lg:text-3xl text-3xl">
                Our Distinctive Way
              </div>
              <div className="lg:mt-8 mt-4 lg:text-xl text-lg font-light max-md:max-w-full lg:pr-32">
                Work with CodeAutomation, where collaboration, creativity, and precision intersect. Our unique approach to project execution blends cutting-edge technology with a human touch. Our specialized experts with top certifications aim to develop innovative options that assist companies in achieving growth goals in the digital era.              </div>
              <div className="flex items-start self-stretch pr-8 text-base xl:text-xl lg:text-lg font-medium whitespace-nowrap max-w-[450px]  max-md:pr-5 mt-12">
                <Link href="/services" className="cursor flex overflow-hidden relative gap-2 px-6 py-3 items-center bg-[#F7E022] rounded-lg shadow-md">
                  <div className="relative grow self-center">
                    Explore Our Services
                  </div>
                  <img
                    loading="lazy"
                    src="/btn-arrow.svg"
                    className="w-[22px] h-[26.8px]" // Adjust the width and height
                  />
                </Link>
              </div>
            </div>
            <div className="md:w-5/12 w-full">
              <img

                src="/img-our-distinctive-way.jpg"
                className="object-cover size-full"
              />
            </div>

          </div>
        </div>
        <div className="flex flex-col w-full max-w-[1582px] mx-auto pb-32">
          <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 lg:px-10 px-10 lg:mt-11 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 pb-6 mx-auto w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                <div className="flex z-10 gap-5 justify-between items-start mt-0">
                  <div className="flex-auto self-end mt-10 text-2xl font-medium leading-6 text-black max-md:mt-10">
                    Project Initiation
                  </div>
                  <div className="flex flex-col flex-1 justify-center self-start absolute -top-10 right-5">
                    <div className="flex justify-center items-center px-4 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e06a953d2b12819c328b7856df7297b2c237c518892fa897eafb85e00ced39e?"
                        className="w-full aspect-[1.09]"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-sm font-light text-justify text-black">
                  Our team of development, UX design, and analysis experts can
                  assist in creating new product concepts or improving existing
                  performance.
                </div>
              </div>
            </div>
            <div className="flex flex-col  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-7 pb-7 mx-auto w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:pl-5 max-md:mt-10 relative">
                <div className="flex z-10 gap-5 justify-between items-start mt-0">
                  <div className="self-end mt-10 text-2xl font-medium leading-6 text-black max-md:mt-10">
                    Design
                  </div>
                  <div className="flex justify-center items-center self-start px-5 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 max-md:pl-5 absolute -top-10 right-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e27351cdef1346bafe3d18f5e0c002c781d6f5cfc694e39225cd3b6a00874e5?"
                      className="w-full aspect-[1.04]"
                    />
                  </div>
                </div>
                <div className="mt-3 text-sm font-light text-justify text-black">
                  Our talented design team creates visually appealing digital user
                  experiences to solve practical issues and enhance key business
                  metrics.
                </div>
              </div>
            </div>
            <div className="flex flex-col  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                <div className="flex z-10 justify-center items-center self-end px-5 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 max-md:pr-5 absolute -top-10 right-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fb7a8838ae43aeb6e3fda9b3773993bee23b60d69788543a0e8c918cd4ef36f?"
                    className="w-full aspect-[1.02]"
                  />
                </div>
                <div className="flex flex-col px-7 text-black max-md:px-5">
                  <div className="text-2xl font-medium leading-6 mt-10">
                    Development
                  </div>
                  <div className="mt-3 text-sm font-light text-justify">
                    We create efficient, secure apps for your company, by a
                    product strategy, assembling a skilled team, and starting
                    coding to give your brand a competitive edge.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                <div className="flex z-10 justify-center items-center self-end px-4 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 absolute -top-10 right-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6b42f096ae127b6c0db8f6a7b08b39c23b22179ce2b09c3d355129d25549fee?"
                    className="w-full aspect-[1.02]"
                  />
                </div>
                <div className="flex flex-col px-5 text-black">
                  <div className="text-2xl font-medium leading-6 mt-10">Automate</div>
                  <div className="mt-3 text-sm font-light text-justify">
                    Product testing, also known as consumer or comparative testing, measures a product&rsquo;s characteristics or capabilities to develop goods that meet specific technical criteria.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                <div className="flex z-10 justify-center items-center self-end px-8 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 max-md:px-5 absolute -top-10 right-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/959a6985ac95c743a93b95368cfb330ff373e0725372de8195d6270929065ba6?"
                    className="w-full aspect-[0.58]"
                  />
                </div>
                <div className="flex flex-col pr-3.5 pl-7 text-black max-md:pl-5">
                  <div className="text-2xl font-medium leading-6 mt-10">Launch</div>
                  <div className="mt-3 text-sm font-light text-justify">
                    The final product is launched after client approval, fostering
                    growth for both companies. Our industry continuously improves,
                    and we ensure project safety.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10 relative">
                <div className="flex z-10 justify-center items-center self-end px-5 w-20 h-20 bg-white rounded-full shadow shadow-slate-500 border border-slate-300 absolute -top-10 right-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/19a903a5ee526b51ff93d213159f9d2866831e839a1d122133e785207a4f1b59?"
                    className="w-full aspect-[1.02]"
                  />
                </div>
                <div className="flex flex-col px-7 text-black max-md:px-5">
                  <div className="text-2xl font-medium leading-6 mt-10">
                    Archives and Artifacts
                  </div>
                  <div className="mt-3 text-sm font-light text-justify">
                    You are the project owner, entitled to our as-built
                    documentation, specifications, test scripts, and release
                    scripts for future analysis or development.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-5 bg-[#F3F3F3] lg:py-16 py-16 relative overflow-hidden">
          <img
            loading="lazy"
            srcSet="/icon-quote-start.svg"
            className="absolute top-10 -left-2 w-24 h-24 z-20"
          />
          <div className="w-full xl:text-4xl lg:text-3xl text-3xl font-medium text-black max-md:max-w-full text-center">
            Our Testimonials
          </div>
          <div className="self-center xl:mt-6 mt-3 lg:text-2xl text-xl text-center text-black max-md:max-w-full">
            Discover what our clients are saying about CodeAutomation
          </div>
          <div className="mt-14 max-w-screen-lg mx-auto max-md:mt-10 max-md:max-w-full px-5 md:px-0">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-32">
              <div className="flex flex-col max-md:ml-0 max-md:w-full relative min-h-[255px] md:min-w-[381px] min-w-full">
                <div className="flex flex-col grow pt-7 md:pr-20 px-10 w-full rounded-2xl backdrop-blur-[6.5px] bg-[#1D92FB] max-md:max-w-full">
                  <div className="self-end text-3xl font-medium text-white">
                    Clients Speaking
                  </div>
                  <div className="flex z-10 flex-col py-7 px-5 w-full bg-white rounded-2xl shadow-sm backdrop-blur-[6.5px] max-md:pr-5 max-md:max-w-full absolute md:-bottom-20 md:top-auto top-20 -bottom-auto md:-left-20 -left-10 md:h-[260px]">
                    <div className="text-sm leading-5 text-justify text-black">
                      Product testing, also known as consumer testing or comparative
                      testing, is the measurement of a product&rsquo;s characteristics or
                      capabilities. It aids in the development of goods that adhere
                      to predetermined technical criteria.
                    </div>
                    <div className="flex gap-3 justify-between mt-8 max-md:mr-1.5">
                      <div className="flex justify-center items-center px-1 rounded-xl aspect-square h-[68px] w-[68px]">
                        <img
                          loading="lazy"
                          srcSet="/Vector.png"
                          className="w-full aspect-square"
                        />
                      </div>
                      <div className="grow self-end text-xl font-light whitespace-nowrap text-sky-950 max-md:mt-10">
                        CEO & Founder Nichols
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full relative min-h-[255px] md:min-w-[381px] min-w-full">
                <div className="flex flex-col grow pt-7 md:pr-20 px-10 w-full rounded-2xl backdrop-blur-[6.5px] bg-[#1D92FB] max-md:max-w-full">
                  <div className="self-end text-3xl font-medium text-white">
                    Clients Speaking
                  </div>
                  <div className="flex z-10 flex-col py-7 px-5 w-full bg-white rounded-2xl shadow-sm backdrop-blur-[6.5px] max-md:pr-5 max-md:max-w-full absolute md:-bottom-20 md:top-auto top-20 -bottom-auto md:-left-20 -left-10 md:h-[260px]">
                    <div className="text-sm leading-5 text-justify text-black">
                      CodeAutomation.ai tests supported the client&rsquo;s fast feature
                      deployment processes, saving them hours of manual and
                      expensive testing with 5-10 minutes of automated tests. Their
                      team also impressed the client with their flexibility and
                      excellent workflow.
                    </div>
                    <div className="flex gap-3 justify-between mt-4 max-md:mr-1">
                      <div className="flex justify-center items-center px-1 rounded-xl aspect-square w-[58px] h-[58px]">
                        <img
                          loading="lazy"
                          srcSet="/Vector-2.png"
                          className="aspect-square"
                        />
                      </div>
                      <div className="flex flex-col flex-1 self-start mt-3 text-sky-950">
                        <div className="text-3xl font-medium whitespace-nowrap">
                          Irv Shapiro
                        </div>
                        <div className="text-lg font-light leading-6">
                          Founder & CTO, MakeWithTech
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center text-base xl:text-xl lg:text-xl font-medium whitespace-nowrap lg:mt-36 mt-40">
              <Link href="" className="cursor flex overflow-hidden relative gap-2.5 px-8 py-3 items-center  bg-[#F7E022] rounded-lg shadow-md">
                <div className="relative grow self-center">
                  Check out Clutch
                </div>
                <img
                  loading="lazy"
                  src="/btn-arrow.svg"
                  className="w-[22px] h-[26.8px]"
                />
              </Link>
            </div>

          </div>
          <img
            loading="lazy"
            srcSet="/icon-quote-end.svg"
            className="absolute bottom-10 -right-3 w-24 h-24 z-20"
          />
        </div>
        <div className="flex gap-5 max-md:flex-wrap lg:px-10 lg:py-16 py-8 md:px-5 w-full mx-auto relative">
          <img
            loading="lazy"
            src="/ellipse-2.png"
            className="aspect-[1.22] absolute right-0 top-80"
          />
          <div className="flex flex-col flex-1 px-5 text-xl ml-8 relative z-10">
            <div className="xl:text-4xl lg:text-3xl text-3xl font-medium text-black max-md:max-w-full mt-4">
              Our FAQs
            </div>
            <ul className="mt-10 flex flex-col gap-4">
              <li>
                <details className="group">
                  <summary className="flex justify-between items-center flex-grow">
                    <div className="w-11/12 text-base">
                      <span className="px-6 py-7 rounded-xl bg-[#1D92FB] bg-opacity-80 max-md:px-5 max-md:max-w-full flex gap-3 text-white font-normal marker:content-none hover:cursor-pointer justify-between text-xl flex flex-grow">What technologies and programming languages does CodeAutomation specialize in for development and testing?</span>
                    </div>

                    <div className="w-1/12 justify-center align-center flex">
                      <svg className="block group-open:hidden" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244" />
                      </svg>

                      <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244" />
                      </svg>
                    </div>

                  </summary>
                  <article className="px-4 py-4">
                    <div className="w-11/12 text-base">
                      <p className="mb-2">CodeAutomations expertise covers a wide range of technologies and programming languages, including but not limited to Java, Python, JavaScript, .NET, PHP, Ruby on Rails, Selenium, Playwright, Katalon, AltUnity, and more. We adapt to the specific needs of each project.</p>

                    </div>
                  </article>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="flex justify-between items-center flex-grow">
                    <div className="w-11/12 text-base">
                      <span className="px-6 py-7 rounded-xl bg-[#1D92FB] bg-opacity-80 max-md:px-5 max-md:max-w-full flex gap-3 text-white font-normal marker:content-none hover:cursor-pointer justify-between text-xl flex flex-grow">What types of industries have CodeAutomation work with?</span>
                    </div>

                    <div className="w-1/12 justify-center align-center flex">
                      <svg className="block group-open:hidden" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244" />
                      </svg>

                      <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244" />
                      </svg>
                    </div>

                  </summary>
                  <article className="px-4 py-4">
                    <div className="w-11/12 text-base">
                      <p className="mb-2">CodeAutomation has experience working with clients across various industries, such as healthcare, finance, e-commerce, Tech, telecommunications, and more. Our diverse portfolio demonstrates our adaptability and versatility.</p>

                    </div>
                  </article>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="flex justify-between items-center flex-grow">
                    <div className="w-11/12 text-base">
                      <span className="px-6 py-7 rounded-xl bg-[#1D92FB] bg-opacity-80 max-md:px-5 max-md:max-w-full flex gap-3 text-white font-normal marker:content-none hover:cursor-pointer justify-between text-xl flex flex-grow">Where are CodeAutomation&rsquo;s employees located?</span>
                    </div>

                    <div className="w-1/12 justify-center align-center flex">
                      <svg className="block group-open:hidden" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244" />
                      </svg>

                      <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244" />
                      </svg>
                    </div>

                  </summary>
                  <article className="px-4 py-4">
                    <div className="w-11/12 text-base">
                      <p className="mb-2">CodeAutomation’s talented team of professionals is strategically located across multiple global offices to ensure around-the-clock support and timely project deliveries. Our main offices are in the USA, Canada, and Pakistan, but we also have remote team members collaborating from different parts of the world.</p>
                    </div>
                  </article>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="flex justify-between items-center flex-grow">
                    <div className="w-11/12 text-base">
                      <span className="px-6 py-7 rounded-xl bg-[#1D92FB] bg-opacity-80 max-md:px-5 max-md:max-w-full flex gap-3 text-white font-normal marker:content-none hover:cursor-pointer justify-between text-xl flex flex-grow">What types of testing services does CodeAutomation offer?</span>
                    </div>

                    <div className="w-1/12 justify-center align-center flex">
                      <svg className="block group-open:hidden" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244" />
                      </svg>

                      <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244" />
                      </svg>
                    </div>

                  </summary>
                  <article className="px-4 py-4">
                    <div className="w-11/12 text-base">
                      <p className="mb-2">CodeAutomation offers a comprehensive suite of testing services, including functional testing, performance testing, security testing, automated testing, regression testing, and more. Our goal is to ensure your software is reliable and bug-free.</p>

                    </div>
                  </article>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="flex justify-between items-center flex-grow">
                    <div className="w-11/12 text-base">
                      <span className="px-6 py-7 rounded-xl bg-[#1D92FB] bg-opacity-80 max-md:px-5 max-md:max-w-full flex gap-3 text-white font-normal marker:content-none hover:cursor-pointer justify-between text-xl flex flex-grow">Can you provide a brief overview of CodeAutomation&rsquo;s development process?</span>
                    </div>

                    <div className="w-1/12 justify-center align-center flex">
                      <svg className="block group-open:hidden" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244" />
                      </svg>

                      <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244" />
                      </svg>
                    </div>

                  </summary>
                  <article className="px-4 py-4">
                    <div className="w-11/12 text-base">
                      <p className="mb-2">CodeAutomation’s development process follows industry best practices, including requirements gathering, design, development, testing, deployment, and maintenance. We emphasize collaboration and client communication at every stage to ensure project success.</p>

                    </div>
                  </article>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="flex justify-between items-center flex-grow">
                    <div className="w-11/12 text-base">
                      <span className="px-6 py-7 rounded-xl bg-[#1D92FB] bg-opacity-80 max-md:px-5 max-md:max-w-full flex gap-3 text-white font-normal marker:content-none hover:cursor-pointer justify-between text-xl flex flex-grow">How does CodeAutomation ensure the security of client data and intellectual property?</span>
                    </div>

                    <div className="w-1/12 justify-center align-center flex">
                      <svg className="block group-open:hidden" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244" />
                      </svg>

                      <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244" />
                      </svg>
                    </div>

                  </summary>
                  <article className="px-4 py-4">
                    <div className="w-11/12 text-base">
                      <p className="mb-2">CodeAutomation takes data security and client confidentiality seriously. Our team adheres to strict security protocols, and we are open to signing Non-Disclosure Agreements (NDAs) to protect your sensitive information.</p>

                    </div>
                  </article>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="flex justify-between items-center flex-grow">
                    <div className="w-11/12 text-base">
                      <span className="px-6 py-7 rounded-xl bg-[#1D92FB] bg-opacity-80 max-md:px-5 max-md:max-w-full flex gap-3 text-white font-normal marker:content-none hover:cursor-pointer justify-between text-xl flex flex-grow">Does CodeAutomation offer maintenance and support services after project completion?</span>
                    </div>

                    <div className="w-1/12 justify-center align-center flex">
                      <svg className="block group-open:hidden" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244" />
                      </svg>

                      <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244" />
                      </svg>
                    </div>

                  </summary>
                  <article className="px-4 py-4">
                    <div className="w-11/12 text-base">
                      <p className="mb-2">CodeAutomation boasts a diverse and highly skilled team of developers and testers with expertise in various technologies and programming languages. Our specialization includes but is not limited to:</p>
                      <ul className="mb-3">
                        <li className="mb-3"><strong>Programming Languages:</strong> CodeAutomation is proficient in languages such as Java, Python, JavaScript, .NET, PHP, Ruby on Rails, and more. Our developers are not only knowledgeable in these languages but also keep up with the latest advancements to ensure our clients receive cutting-edge solutions.</li>
                        <li className="mb-3"><strong>Frameworks and Tools:</strong> CodeAutomation leverages popular development frameworks and tools like Angular, Node.js, Vue.js, React Native, React.js, Spring Boot, Django, and others to accelerate development while maintaining code quality.</li>
                        <li className="mb-3"><strong>Testing Technologies:</strong> Our testing experts are well-versed in various testing technologies and frameworks, including Selenium, Cypress, Playwright, Protractor, Katalon, Postman, Rest Assured, JUnit, JIRA, Appium, and many more, to ensure comprehensive test coverage and automation.</li>
                        <li className="mb-3"><strong>CRM/CMS implementation and customization:</strong> CodeAutomation is proficient in languages such as Javascript, Aura, LWCs, Apex, Flows, Rest API, Java and more. Our developers are not only knowledgeable in these languages but also keep up with the latest advancements to ensure our clients receive cutting-edge solutions.</li>
                        <li className="mb-3"><strong>AI/ML languages:</strong> We leverage our clients with AI/ML services and languages are: NumPy, SciPy,  Pandas, PyTorch, matlab, Ruby on rails, Fortran, Golang, R language.</li>
                      </ul>
                    </div>
                  </article>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="flex justify-between items-center flex-grow">
                    <div className="w-11/12 text-base">
                      <span className="px-6 py-7 rounded-xl bg-[#1D92FB] bg-opacity-80 max-md:px-5 max-md:max-w-full flex gap-3 text-white font-normal marker:content-none hover:cursor-pointer justify-between text-xl flex flex-grow">What is CodeAutomations pricing model and engagement process?</span>
                    </div>

                    <div className="w-1/12 justify-center align-center flex">
                      <svg className="block group-open:hidden" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244" />
                      </svg>

                      <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244" />
                      </svg>
                    </div>

                  </summary>
                  <article className="px-4 py-4">
                    <div className="w-11/12 text-base">
                      <p className="mb-2">CodeAutomation&rsquo;s pricing model and engagement process are flexible and tailored to each client&rsquo;s unique requirements. We understand that every project is different, and we aim to provide a transparent and collaborative approach. Here&rsquo;s an overview of our typical engagement process:</p>
                      <ul className="mb-3">
                        <li className="mb-3"><strong>Initial Consultation:</strong> We begin with an in-depth discussion to understand your project&rsquo;s goals, scope, and specific requirements.</li>
                        <li className="mb-3"><strong>Project Proposal:</strong> Following the consultation, we provide a detailed project proposal, including a breakdown of costs, timelines, and deliverables.</li>
                        <li className="mb-3"><strong>Agreement:</strong> Upon mutual agreement on the proposal, we formalize the engagement with a contract that outlines roles, responsibilities, and terms.</li>
                        <li className="mb-3"><strong>Development and Testing:</strong> The development phase begins with regular communication and updates to inform you of progress.</li>
                        <li className="mb-3"><strong>Testing and Quality Assurance:</strong> Rigorous testing and quality assurance processes are carried out to ensure the final product meets your expectations.</li>
                        <li className="mb-3"><strong>Deployment and Launch:</strong> We deploy the software to the production environment, ensuring a smooth transition to the live environment.</li>
                        <li className="mb-3"><strong>Post-Launch Support:</strong> We provide ongoing support, maintenance, and updates as needed to ensure your software remains reliable and up-to-date.</li>
                      </ul>
                      <p>Our pricing structure can be based on various models, including fixed-price contracts or hourly rates, depending on your project&rsquo;s needs and preferences. We are committed to transparency and work collaboratively with our clients to ensure a successful partnership.</p>
                    </div>
                  </article>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

