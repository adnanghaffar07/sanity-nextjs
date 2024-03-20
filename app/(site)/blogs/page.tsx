import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
export default function Blogs() {
  return (
    <div>
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
        <video className="absolute top-0 left-0 object-cover absolute inset-0 size-full" width="100%" height="100%" muted autoPlay>
          <source src="./for-blogs.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-85"></div>
        <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
          <div className="lg:absolute lg:top-[350px]">
            <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 max-md:max-w-full">
              <h2 className="title capitalize">
                &quot;Our Blogs&quot;
              </h2>
            </div>
            <div className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
              Your gateway to thought-provoking articles that spark curiosity and ignite your passions.
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-auto relative">
        <img
            loading="lazy"
            src="/intersect-left.png"
            className="aspect-[1.22] absolute left-0 top-20 lg:block hidden"
          />
          <div className="flex flex-col self-center w-full xl:max-w-[1272px] max-w-[991px] max-md:max-w-full relative z-10 mx-auto">
            <div className="lg:px-10 px-5 w-full">
              <div className="xl:flex gap-10 lg:pt-16 lg:pb-10 pt-8 pb-8">
                <div className="xl:w-5/12 w-full rounded-3xl shadow-md shadow-slate-400 bg-[#F3F3F3] mb-10 xl:mb-0">
                  <div className="w-full xl:min-h-[300px] relative rounded-3xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-left-top rounded-3xl xl:block hidden"
                      style={{
                      backgroundImage: `url(/why-work-with-web-design.jpg)`
                      }}
                      ></div>
                      <img
                        loading="lazy"
                        src="/why-work-with-web-design.jpg"
                        className="w-full block xl:hidden"
                      />
                  </div>
                  <div className="pb-4 pt-8 px-5">
                    <div className="lg:text-2xl text-xl">20 Feb 2024</div>
                    <div className="md:text-2xl font-medium text-xl">20 tips Why you should work with a Web design company in 2024</div>
                    <div className=""><hr className="bg-black my-2 h-px w-full border-0" /></div>
                    <div className="">
                      <p className="font-light text-base">This article discusses the benefits of working with a web design company. It provides tips on why you should work with a web design company, how a website can be the foundation of any digital marketing campaign, and how a website can be the focal point for all digital marketing initiatives.</p>
                    </div>
                  </div>                  
                </div>
                <div className="xl:w-7/12 gap-10 flex flex-col">
                  <div className="rounded-3xl shadow-md shadow-slate-400 bg-[#F3F3F3]">
                    <div className="md:flex gap-3">
                      <div className="md:w-[282px] relative rounded-3xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-[length:105%] bg-center rounded-3xl border border-black xl:block hidden"
                          style={{
                          backgroundImage: `url(/finding-the-best.png)`
                          }}
                          ></div>
                           <img
                            loading="lazy"
                            src="/finding-the-best.jpg"
                            className="w-full block xl:hidden"
                          />
                      </div>
                      <div className="md:w-7/12 self-center xl:pr-5 xl:pl-0 xl:py-0 px-5 py-5 xl:min-h-[288px] justify-center flex flex-col">
                        <div className="text-lg">21 Feb 2024</div>
                        <div className="text-xl font-medium">Finding the Best Web Development Company for your Project</div>
                        <div className=""><hr className="bg-black my-2 h-px w-full border-0" /></div>
                        <div className="">
                          <p className="font-light md:text-sm text-base">Nowadays, finding a perfect fit for your company&rsquo;s project is difficult. Here are some tips on hiring a web design and development company for your project. Hiring a web development company is not difficult. Finding one that is a perfect fit for you and can understand and satisfy your needs is difficult, though.</p>
                        </div>
                      </div>                    
                    </div>                  
                  </div>
                  <div className="rounded-3xl shadow-md shadow-slate-400 bg-[#F3F3F3]">
                    <div className="md:flex gap-5">
                      <div className="md:w-[282px] relative rounded-3xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-left-top rounded-3xl xl:block hidden"
                          style={{
                          backgroundImage: `url(/img-sanity-nextjs.jpg)`
                          }}
                          ></div>
                          <img
                            loading="lazy"
                            src="/img-sanity-nextjs.jpg"
                            className="w-full block xl:hidden"
                          />
                      </div>
                      <div className="md:w-7/12 self-center xl:pr-5 xl:pl-5 xl:py-0 px-5 py-5 xl:min-h-[288px] justify-center flex flex-col">
                        <div className="text-lg">26 Feb 2024</div>
                        <div className="text-xl font-medium">Creating a portfolio website with sanity and next.js</div>
                        <div className=""><hr className="bg-black my-2 h-px w-full border-0" /></div>
                        <div className="">
                          <p className="font-light md:text-sm text-base">In this blog, we will put together a detailed guide to help you build a functional and beautiful portfolio using Sanity and Next.js. Thus, this article will explain what Sanity is and why it is essential to our project.</p>
                        </div>
                      </div>                    
                    </div>                  
                  </div>
                </div>                
              </div>
              <div className="w-full mb-10">
                <div className="rounded-3xl shadow-md shadow-slate-400 bg-[#F3F3F3]">
                  <div className="xl:flex gap-5">
                    <div className="xl:w-7/12">
                      <img
                        loading="lazy"
                        src="/develop-a-successful.jpg"
                        className="w-full rounded-3xl"
                      />
                    </div>
                    <div className="xl:w-5/12 self-center xl:py-3 py-10 xl:pr-10 xl:pl-0 px-5">
                      <div className="md:text-2xl text-lg">19 Feb 2024</div>
                      <div className="md:text-3xl text-xl font-medium">How to develop a successful mobile strategy for your company</div>
                      <div className=""><hr className="bg-black my-2 h-px w-full border-0" /></div>
                      <div className="">
                        <p className="font-light md:text-2xl text-base">It is uncommon to meet someone who does not use a smartphone or other mobile gadget. We rely on mobile applications to be productive at work, on the go, and even home. They have become a staple of our existence.</p>
                      </div>
                    </div>                    
                  </div>                  
                </div>
              </div>
              <div className="flex md:justify-end justify-center gap-3 mb-5 lg:mb-0">
                <div className='bg-[#002244] rounded-full w-6 h-6 flex justify-center items-center flex-col cursor-pointer'>
                  <AiOutlineArrowLeft size={18} className='text-white' />
                </div>
                <div className='bg-[#002244] rounded-full w-6 h-6 flex justify-center items-center flex-col cursor-pointer'>
                <AiOutlineArrowRight size={18} className='text-white' />
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="/ellipse-2.png"
            className="aspect-[1.22] absolute -bottom-96 right-0 lg:block hidden"
          />
      </div>
    </div>
  );
}

