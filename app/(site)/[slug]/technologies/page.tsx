import { getBannercontent } from "@/sanity/sanity-utils";
import { getBannerbox1content } from "@/sanity/sanity-utils";

export default function Technologies() {
  return (
    <div>
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[850px] max-md:max-w-full">
        <video className="absolute top-0 left-0 object-cover absolute inset-0 size-full" width="100%" height="100%" muted autoPlay>
          <source src="./for-blogs.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-85"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 pt-12 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[350px]">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-36 max-md:max-w-full">
              {/* &quot;Transforming Businesses through{" "}
              <span className="text-yellow-400">Generative AI</span>&quot; */}
              {/* {bannercontent.map((bannercontent) => (
                <h2 className="title capitalize" key={bannercontent._id}>
                    {bannercontent.name}
                </h2>
              ))} */}
              <h2 className="title capitalize">
                &quot;Transforming Businesses Through Generative AI&quot;
              </h2>
            </div>
            <div className="lg:text-2xl text-base text-center max-md:mt-10 max-md:max-w-full">
              Explore with us, and let&rsquo;s pioneer the next era of innovation
              together.
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
      <div className="flex justify-center items-center lg:px-10 md:px-5 lg:py-32 py-16 w-full text-black bg-[#F3F3F3] leading-[100%] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1582px] max-md:my-10 max-md:max-w-full">
          <div className="self-center text-6xl max-md:max-w-full max-md:text-4xl">
            Our Top Services
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-20 text-xl font-semibold whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="text-center py-8 bg-white rounded-2xl shadow-sm max-md:px-5">
              Web Development
            </div>
            <div className="text-center py-8 bg-white rounded-2xl shadow-sm max-md:px-5">
              Software Development
            </div>
            <div className="text-center py-8 bg-white rounded-2xl shadow-sm max-md:pr-5">
              QA Automation Testing
            </div>
            <div className="text-center py-8 bg-white rounded-2xl shadow-sm max-md:px-5">
              Ai/ML Services
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto relative">
        <img
            loading="lazy"
            src="/ellipse-1.png"
            className="aspect-[1.22] absolute left-0 top-0"
          />
      <div className="flex flex-col self-center mt-20 w-full max-w-[1624px]  mx-auto max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full lg:px-10 px-5 relative">
          
          <div className="flex gap-5 pb-32 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full self-center">
              <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl font-medium max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Our Core Expertise
                </div>
                <div className="mt-11 lg:text-xl text-base font-light max-md:mt-10 max-md:max-w-full xl:pr-36">
                  CodeAutomation offers 24/7 assistance from skilled professionals to ensure the quality of your IT projects.CodeAutomation is committed to guaranteeing optimal security and adherence to your business requirements. Our customized solutions and comprehensive support keep your organization running smoothly, from disaster recovery to cybersecurity, managed IT services and e-commerce solutions.
                </div>
                <div className="flex items-start self-stretch pr-16 text-base lg:text-3xl font-medium whitespace-nowrap max-w-[616px] text-sky-950 max-md:pr-5 mt-12">
                  <a href="" className="cursor flex overflow-hidden relative gap-2.5 px-7 py-3 aspect-[6.66] max-md:px-5 items-center bg-[#F7E022] rounded-lg shadow">
                    <div className="relative grow self-center">
                      Explore Our Technologies
                    </div>
                    <img
                      loading="lazy"
                      src="/btn-arrow.svg"
                      className="aspect-[1.22] lg:w-[38px] w-[20px]"
                    />
                  </a>
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
      <div className="flex flex-col self-center w-full mx-auto max-md:max-w-full bg-[#F3F3F3] lg:py-32 py-16 lg:px-10 px-5">
        <div className="self-center font-medium text-black max-md:text-4xl text-6xl font-medium max-md:text-4xl max-md:leading-10 max-w-[1582px] mx-auto">
          Our Work
        </div>
        <div className="lg:mt-16 mt-4 text-xl font-light text-center text-black lg:px-10 md:px-5 max-w-[1582px] mx-auto">
          Explore the tangible results of our dedication and proficiency in our portfolio. Each project is a testament to our commitment to excellence. Check out our case studies and witness how we&rsquo;ve helped businesses like yours succeed.
        </div>
        <div className="self-center mt-16 w-full max-md:mt-10 max-w-[1582px] mx-auto">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow lg:text-3xl md:text-xl text-base text-zinc-100 max-md:mt-10 max-md:max-w-full gap-5">
                <div className="flex overflow-hidden relative flex-col justify-center w-full font-medium shadow-sm max-md:max-w-full rounded-3xl">
                  <img
                    loading="lazy"
                    srcSet="/image-16.jpg"
                    className="size-full rounded-3xl"
                  />
                  <div className="absolute top-0 left-0 w-full h-full px-8 pb-7 rounded-3xl shadow-sm bg-black bg-opacity-50 max-md:px-5 max-md:max-w-full flex items-end">
                    <span className="font-bold text-zinc-100">
                      Bubblehouse - E Commerce (NFTs)
                    </span>
                  </div>
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center w-full font-medium shadow-sm max-md:max-w-full rounded-3xl">
                  <img
                    loading="lazy"
                    srcSet="/image-21.jpg"
                    className="size-full rounded-3xl"
                  />
                  <div className="absolute top-0 left-0 w-full h-full px-8 pb-7 rounded-3xl shadow-sm bg-black bg-opacity-50 max-md:px-5 max-md:max-w-full flex items-end">
                    <span className="font-bold text-zinc-100">Vested Finance - Fintech</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow md:text-xl text-base font-bold whitespace-nowrap text-zinc-100 max-md:mt-10 max-md:max-w-full rounded-3xl lg:gap-3 gap-5">
                <div className="flex overflow-hidden relative flex-col justify-center rounded-3xl w-full shadow-sm max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="/image-17.jpg"
                    className="size-full rounded-3xl"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-end pt-60 pr-16 pb-4 pl-5 rounded-3xl shadow-sm bg-black bg-opacity-50 max-md:pt-10 max-md:pr-5 max-md:max-w-full">
                    Getdandy - Ai Product
                  </div>
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center rounded-3xl w-full shadow-sm max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="/image-19.jpg"
                      className="size-full rounded-3xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-end pt-60 pr-16 pb-4 pl-5 rounded-3xl shadow-sm bg-black bg-opacity-50 max-md:pt-10 max-md:pr-5 max-md:max-w-full">
                      PublicInput - Community Engagement
                    </div>
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center rounded-3xl shadow-sm max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="/image-20.jpg"
                      className="size-full rounded-3xl"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-end pt-60 pr-16 pb-4 pl-5 rounded-3xl shadow-sm bg-black bg-opacity-50 max-md:pt-10 max-md:pr-5 max-md:max-w-full">
                      Tracely - Location Tracking App
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-between max-md:flex-wrap mt-10">
            <div className="flex items-center lg:text-3xl text-base font-medium whitespace-nowrap order-2 md:order-1">
              <a href="" className="cursor flex overflow-hidden relative gap-2.5 px-7 py-3 aspect-[6.66] max-md:px-5 items-center bg-[#F7E022] rounded-lg shadow">
                    <div className="relative grow self-center">
                      Explore Our Portfolio
                    </div>
                    <img
                      loading="lazy"
                      src="/btn-arrow.svg"
                      className="aspect-[1.22] lg:w-[38px] w-[20px]"
                    />
                  </a>
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
        <div className="w-full text-6xl font-medium text-black max-md:max-w-full max-md:text-4xl lg:pt-20 pt-16">
          Why Work With Us
        </div>
        <div className="px-px mt-14 w-full max-md:mt-10 max-md:max-w-full">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 max-md:flex-col">
            <div className="flex flex-col max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-2.5 items-center pr-5 w-full text-black whitespace-nowrap bg-white rounded-md shadow shadow-slate-400">
                <div className="bg-[#F3F3F3] rounded-md p-3 flex h-100">
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
                  <div className="text-7xl font-extrabold max-md:text-4xl flex">
                    200
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9ff7ffac79e9fae530070485265b9bf15e638aa9e88607ffd777b210da457c?"
                      className="self-stretch my-auto aspect-[1.09] fill-black w-[13px] lg:-top-6 -top-2 lg:-right-2 -right-1 relative"
                    />
                  </div>
                </div>                
              </div>
            </div>
            <div className="flex flex-col max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-2.5 items-center pr-5 w-full text-black whitespace-nowrap bg-white rounded-md shadow shadow-slate-400">
                <div className="bg-[#F3F3F3] rounded-md p-3">
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
                  <div className="text-7xl font-extrabold max-md:text-4xl flex">
                    350
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9ff7ffac79e9fae530070485265b9bf15e638aa9e88607ffd777b210da457c?"
                      className="self-stretch my-auto aspect-[1.09] fill-black w-[13px] lg:-top-6 -top-2 lg:-right-2 -right-1 relative"
                    />
                  </div>
                </div>                              
              </div>
            </div>
            <div className="flex flex-col max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-2.5 items-center pr-5 w-full text-black whitespace-nowrap bg-white rounded-md shadow shadow-slate-400">
                <div className="bg-[#F3F3F3] rounded-md p-3">
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
                  <div className="text-7xl font-extrabold max-md:text-4xl flex">
                    300
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9ff7ffac79e9fae530070485265b9bf15e638aa9e88607ffd777b210da457c?"
                      className="self-stretch my-auto aspect-[1.09] fill-black w-[13px] lg:-top-6 -top-2 lg:-right-2 -right-1 relative"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-2.5 items-center pr-5 w-full text-black whitespace-nowrap bg-white rounded-md shadow shadow-slate-400">
                <div className="bg-[#F3F3F3] rounded-md p-3">
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
                  <div className="text-7xl font-extrabold max-md:text-4xl flex">
                    150<span className="text-4xl self-end">k</span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9ff7ffac79e9fae530070485265b9bf15e638aa9e88607ffd777b210da457c?"
                      className="self-stretch my-auto aspect-[1.09] fill-black w-[13px] lg:-top-6 -top-2 lg:-right-2 -right-1 relative"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-start lg:px-10 md:px-5 w-full font-medium text-black lg:min-h-[1080px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eab17cdfecdbecdda0ad9573680507be4c6761ddbf50995db409eace183d8ab6?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eab17cdfecdbecdda0ad9573680507be4c6761ddbf50995db409eace183d8ab6?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eab17cdfecdbecdda0ad9573680507be4c6761ddbf50995db409eace183d8ab6?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eab17cdfecdbecdda0ad9573680507be4c6761ddbf50995db409eace183d8ab6?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eab17cdfecdbecdda0ad9573680507be4c6761ddbf50995db409eace183d8ab6?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eab17cdfecdbecdda0ad9573680507be4c6761ddbf50995db409eace183d8ab6?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eab17cdfecdbecdda0ad9573680507be4c6761ddbf50995db409eace183d8ab6?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eab17cdfecdbecdda0ad9573680507be4c6761ddbf50995db409eace183d8ab6?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
          className="object-cover absolute inset-0 size-full hidden lg:block"
        />
        <img
            loading="lazy"
            src="/ellipse-1.png"
            className="lg:aspect-[1.22] absolute left-0 md:top-48 md:w-full w-24 top-16"
          />
        <div className="w-full max-w-[1582px] mx-auto">

          
          <div className="flex relative flex-col lg:mt-80 my-20 lg:mb-11 lg:ml-16 max-w-full w-[813px] max-md:my-10">
            <div className="text-6xl max-md:max-w-full max-md:text-4xl">
              Our Distinctive Way
            </div>
            <div className="lg:mt-8 mt-4 text-xl font-light max-md:max-w-full lg:pr-32">
              Work with CodeAutomation, where collaboration, creativity, and precision intersect. Our unique approach to project execution  blends cutting-edge technology with a human touch.
            </div>
            <div className="flex items-start self-stretch pr-16 whitespace-nowrap max-w-[616px] text-sky-950 max-md:pr-5 lg:mt-16 mt-8 lg:text-3xl text-base font-medium">
            <a href="/" className="cursor flex overflow-hidden relative gap-2.5 px-7 py-3 aspect-[6.66] max-md:px-5 items-center bg-[#F7E022] rounded-lg shadow">
                      <div className="relative grow self-center">
                      Explore our Services
                      </div>
                      <img
                        loading="lazy"
                        src="/btn-arrow.svg"
                        className="aspect-[1.22] lg:w-[38px] w-[20px]"
                      />
                    </a>
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="/img-our-way.jpg"
            className="object-cover inset-0 w-full lg:hidden block"
          />
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[1582px] mx-auto pb-32">
        <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 lg:px-20 px-10 lg:mt-11 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 pb-6 mx-auto w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10">
              <div className="flex z-10 gap-5 justify-between items-start mt-0">
                <div className="flex-auto self-end mt-10 text-2xl font-medium leading-6 text-black max-md:mt-10">
                  Project Initiation
                </div>
                <div className="flex flex-col flex-1 justify-center self-start -mt-10">
                  <div className="flex justify-center items-center px-4 w-24 h-24 bg-white rounded-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e06a953d2b12819c328b7856df7297b2c237c518892fa897eafb85e00ced39e?"
                      className="w-full aspect-[1.09]"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2.5 text-sm font-light leading-4 text-justify text-black">
                Our team of development, UX design, and analysis experts can
                assist in creating new product concepts or improving existing
                performance.
              </div>
            </div>
          </div>
          <div className="flex flex-col  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-7 pb-7 mx-auto w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:pl-5 max-md:mt-10">
              <div className="flex z-10 gap-5 justify-between items-start mt-0">
                <div className="self-end mt-10 text-2xl font-medium leading-6 text-black max-md:mt-10">
                  Design
                </div>
                <div className="flex justify-center items-center self-start px-5 w-24 h-24 bg-white rounded-full max-md:pl-5 -mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e27351cdef1346bafe3d18f5e0c002c781d6f5cfc694e39225cd3b6a00874e5?"
                    className="w-full aspect-[1.04]"
                  />
                </div>
              </div>
              <div className="mt-2.5 text-sm font-light leading-4 text-justify text-black">
                Our talented design team creates visually appealing digital user
                experiences to solve practical issues and enhance key business
                metrics.
              </div>
            </div>
          </div>
          <div className="flex flex-col  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10">
              <div className="flex z-10 justify-center items-center self-end px-5 mr-6 w-24 h-24 bg-white rounded-full max-md:pr-5 max-md:mr-2.5 -mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fb7a8838ae43aeb6e3fda9b3773993bee23b60d69788543a0e8c918cd4ef36f?"
                  className="w-full aspect-[1.02]"
                />
              </div>
              <div className="flex flex-col px-7 text-black max-md:px-5">
                <div className="text-2xl font-medium leading-6">
                  Development
                </div>
                <div className="mt-2.5 text-sm font-light leading-4 text-justify">
                  We create efficient, secure apps for your company, by a
                  product strategy, assembling a skilled team, and starting
                  coding to give your brand a competitive edge.
                </div>
              </div>
            </div>
          </div>
        
          <div className="flex flex-col  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10">
              <div className="flex z-10 justify-center items-center self-end px-4 mr-5 w-24 h-24 bg-white rounded-full max-md:mr-2.5 -mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6b42f096ae127b6c0db8f6a7b08b39c23b22179ce2b09c3d355129d25549fee?"
                  className="w-full aspect-[1.02]"
                />
              </div>
              <div className="flex flex-col px-5 text-black">
                <div className="text-2xl font-medium leading-6">Automate</div>
                <div className="mt-3.5 text-sm font-light leading-4 text-justify">
                  Product testing, also known as consumer or comparative testing, measures a product&rsquo;s characteristics or capabilities to develop goods that meet specific technical criteria.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10">
              <div className="flex z-10 justify-center items-center self-end px-8 mr-3.5 w-24 h-24 bg-white rounded-full max-md:px-5 max-md:mr-2.5 -mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/959a6985ac95c743a93b95368cfb330ff373e0725372de8195d6270929065ba6?"
                  className="w-full aspect-[0.58]"
                />
              </div>
              <div className="flex flex-col pr-3.5 pl-7 text-black max-md:pl-5">
                <div className="text-2xl font-medium leading-6">Launch</div>
                <div className="mt-3.5 text-sm font-light leading-4 text-justify">
                  The final product is launched after client approval, fostering
                  growth for both companies. Our industry continuously improves,
                  and we ensure project safety.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pb-6 w-full bg-gray-200 rounded-3xl shadow-sm backdrop-blur-[6.5px] max-md:mt-10">
              <div className="flex z-10 justify-center items-center self-end px-5 mr-6 w-24 h-24 bg-white rounded-full max-md:mr-2.5 -mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/19a903a5ee526b51ff93d213159f9d2866831e839a1d122133e785207a4f1b59?"
                  className="w-full aspect-[1.02]"
                />
              </div>
              <div className="flex flex-col px-7 text-black max-md:px-5">
                <div className="text-2xl font-medium leading-6">
                  Archives and Artifacts
                </div>
                <div className="mt-3 text-sm font-light leading-4 text-justify">
                  You are the project owner, entitled to our as-built
                  documentation, specifications, test scripts, and release
                  scripts for future analysis or development.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 bg-[#F3F3F3] lg:py-32 py-16 relative overflow-hidden">
        <img
            loading="lazy"
            srcSet="/icon-quote-start.svg"
            className="absolute top-10 -left-2 w-24 h-24 z-20"
        />
        <div className="w-full text-6xl font-medium text-black max-md:max-w-full max-md:text-4xl text-center">
          Our Testimonials
        </div>
        <div className="self-center mt-6 text-2xl text-center text-black max-md:max-w-full">
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
          <div className="flex justify-center lg:text-3xl text-base font-normal whitespace-nowrap lg:mt-36 mt-40">
            <a href="" className="cursor flex overflow-hidden relative gap-2.5 px-7 py-3 aspect-[6.66] max-md:px-5 items-center bg-[#F7E022] rounded-lg shadow">
                    <div className="relative grow self-center">
                    Check out Clutch
                    </div>
                    <img
                      loading="lazy"
                      src="/btn-arrow.svg"
                      className="aspect-[1.22] lg:w-[38px] w-[20px]"
                    />
                  </a>
            </div>
        </div>
        <img
            loading="lazy"
            srcSet="/icon-quote-end.svg"
            className="absolute bottom-10 -right-3 w-24 h-24 z-20"
        />
      </div>
      <div className="flex gap-5 max-md:flex-wrap lg:px-10 lg:py-24 py-8 md:px-5 w-full mx-auto relative">
      <img
            loading="lazy"
            src="/ellipse-2.png"
            className="aspect-[1.22] absolute right-0 top-80"
          />
        <div className="flex flex-col flex-1 px-5 text-xl max-w-[1582px] relative z-10">
          <div className="text-6xl font-medium text-black max-md:max-w-full max-md:text-4xl">
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
                      <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244"/>
                    </svg>
                    
                    <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244"/>
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
                  <span className="px-6 py-7 rounded-xl bg-[#1D92FB] bg-opacity-80 max-md:px-5 max-md:max-w-full flex gap-3 text-white font-normal marker:content-none hover:cursor-pointer justify-between text-xl flex flex-grow">What types of industries have CodeAutomation work with?</span>
                  </div>
                  
                  <div className="w-1/12 justify-center align-center flex">
                    <svg className="block group-open:hidden" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244"/>
                    </svg>
                    
                    <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244"/>
                    </svg>
                  </div>
                  
                </summary>
                <article className="px-4 py-4">
                  <div className="w-11/12 text-base">
                    <p className="mb-2">CodeAutomation&rsquo;s extensive experience spans a broad spectrum of industries and sectors, allowing us to adapt and tailor our services to the unique requirements of each. Some of the industries we have worked with include:</p>
                    <ul className="mb-3">
                      <li className="mb-3"><strong>Healthcare:</strong> In the healthcare industry, we&rsquo;ve contributed to the development of innovative software solutions, electronic health records (EHR), telemedicine platforms, and healthcare management systems to improve patient care and optimize workflows.</li>
                      <li className="mb-3"><strong>Manufacturing and Logistics:</strong> Working with manufacturing and logistics companies, we&rsquo;ve implemented solutions for supply chain management, inventory control, and production optimization. Our aim is to increase operational efficiency and reduce costs.</li>
                      <li className="mb-3"><strong>Education:</strong> In the education sector, we&rsquo;ve developed e-learning platforms, school management systems, and educational technology solutions. We focus on creating tools that facilitate learning and improve administrative processes.</li>
                      <li className="mb-3"><strong>Automotive:</strong> CodeAutomation has worked with the automotive industry on projects ranging from software for vehicle diagnostics to manufacturing process optimization. We help automotive companies embrace digital transformation for enhanced performance..</li>
                      <li className="mb-3"><strong>Energy and Utilities:</strong> We&rsquo;ve collaborated with energy and utility companies to create software solutions for monitoring, control, and optimization. Our work contributes to improving resource management and sustainability practices.</li>
                      <li className="mb-3"><strong>Government and Public Sector:</strong> CodeAutomation has experience working with government agencies on projects that involve digital transformation, citizen services, and data management. We prioritize security and compliance in these projects.</li>
                      <li className="mb-3"><strong>Entertainment and Media:</strong> Our involvement in the entertainment and media industry includes developing content management systems, streaming platforms, and digital distribution solutions to enhance user engagement and content delivery.</li>
                    </ul>
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
                      <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244"/>
                    </svg>
                    
                    <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244"/>
                    </svg>
                  </div>
                  
                </summary>
                <article className="px-4 py-4">
                  <div className="w-11/12 text-base">
                    <p className="mb-2">CodeAutomation&rsquo;s highly skilled workforce is strategically located across multiple global offices and remote locations to provide efficient and 24/7 support to our clients. While our main offices are situated in the USA, Canada, and Pakistan, we also have a distributed team of remote professionals collaborating from different parts of the world. This global presence ensures that we can cater to clients from diverse geographical regions and time zones, offering them the benefits of both local expertise and a global talent pool.</p>
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
                      <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244"/>
                    </svg>
                    
                    <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244"/>
                    </svg>
                  </div>
                  
                </summary>
                <article className="px-4 py-4">
                  <div className="w-11/12 text-base">
                    <p className="mb-2">CodeAutomation&rsquo;s comprehensive suite of testing services is designed to cover every aspect of software quality assurance, including:</p>
                      <ul className="mb-3">
                        <li className="mb-3"><strong>Functional Testing:</strong> We rigorously assess software functionality to ensure it meets specified requirements and functions as expected.</li>
                        <li className="mb-3"><strong>Performance Testing:</strong> Our performance testing evaluates system responsiveness, scalability, and stability under various conditions to optimize application performance.</li>
                        <li className="mb-3"><strong>Security Testing:</strong> We conduct security assessments to identify vulnerabilities and protect against potential threats, ensuring data integrity and user privacy.</li>
                        <li className="mb-3"><strong>Automated Testing:</strong> We utilize automation frameworks to increase testing efficiency, reduce human error, and accelerate release cycles.</li>
                        <li className="mb-3"><strong>Regression Testing:</strong> We perform regression tests to verify that new code changes do not negatively impact existing functionality.</li>
                      </ul>
                      <p>Our testing approach is thorough, and we employ a range of testing methodologies, including manual testing, automated testing, and continuous integration and continuous delivery (CI/CD) pipelines, to ensure that your software is reliable and defects-free.</p>
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
                      <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244"/>
                    </svg>
                    
                    <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244"/>
                    </svg>
                  </div>
                  
                </summary>
                <article className="px-4 py-4">
                  <div className="w-11/12 text-base">
                    <p className="mb-2">CodeAutomation&rsquo;s development process is structured and iterative, built around industry best practices. Here&rsquo;s a simplified overview of our typical development lifecycle:</p>
                    <ul className="mb-3">
                      <li className="mb-3"><strong>Requirements Gathering:</strong> We work closely with our clients to gather detailed project requirements, ensuring a clear understanding of goals and expectations.</li>
                      <li className="mb-3"><strong>Design:</strong> Our experienced designers create wireframes and prototypes to visualize the software&rsquo;s user interface and functionality.</li>
                      <li className="mb-3"><strong>Development:</strong> Our skilled developers write clean, maintainable code using best practices and relevant technologies.</li>
                      <li className="mb-3"><strong>Testing:</strong> Rigorous testing is conducted at multiple stages, including unit testing, integration testing, and user acceptance testing (UAT).</li>
                      <li className="mb-3"><strong>Deployment:</strong> We deploy the software to a production environment, ensuring a smooth transition from development to the live environment.</li>
                      <li className="mb-3"><strong>Maintenance:</strong> Post-launch, we offer ongoing maintenance and support, addressing any issues, implementing updates, and optimizing performance.</li>
                    </ul>
                    <p>Throughout the process, CodeAutomation emphasizes transparent communication with our clients, offering regular updates and opportunities for feedback to ensure that the final product aligns with their vision and objectives.</p>
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
                      <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244"/>
                    </svg>
                    
                    <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244"/>
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
                  <span className="px-6 py-7 rounded-xl bg-[#1D92FB] bg-opacity-80 max-md:px-5 max-md:max-w-full flex gap-3 text-white font-normal marker:content-none hover:cursor-pointer justify-between text-xl flex flex-grow">Does CodeAutomation offer maintenance and support services after project completion?</span>
                  </div>
                  
                  <div className="w-1/12 justify-center align-center flex">
                    <svg className="block group-open:hidden" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244"/>
                    </svg>
                    
                    <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244"/>
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
                      <path d="M20.8704 13.2H13.3104V20.96H8.03043V13.2H0.47043V8.32H8.03043V0.56H13.3104V8.32H20.8704V13.2Z" fill="#002244"/>
                    </svg>
                    
                    <svg className="hidden group-open:block" width="17" height="6" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.9904 0.36V5.08H0.0304298V0.36H16.9904Z" fill="#002244"/>
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

