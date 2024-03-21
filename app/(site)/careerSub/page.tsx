'use client'
import React, { useState, ChangeEvent } from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';


export default function CareerSub() {

    const [fileName, setFileName] = useState<string>('');

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setFileName(file.name);
      }
    };
    return (
      <div>

        <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-[700px] max-md:max-w-full">
          <img className="absolute top-0 left-0 object-cover absolute inset-0 size-full" src="/career-sub.jpg" alt="lifeatca" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-75"></div>
          <div className="flex relative flex-col items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow">
            <div className="lg:absolute lg:top-[350px]">
              <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
                <h2 className="title capitalize">
                  &quot;Java Developer&quot;
                </h2>
              </div>
              <div className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
                Apply now to be a part of our unique adventure in CodeAutomation.
              </div>
            </div>
          </div>
        </div>


        <div className="max-w-full mx-auto relative">
          <img
            loading="lazy"
            src="/intersect-left.png"
            className="aspect-[1.22] absolute -left-5 top-5 lg:block hidden"
          />
          <div className="flex flex-col self-center w-full xl:max-w-[1582px] relative z-10 mx-auto">
            <div className="lg:px-10 px-5 w-full py-16">
              <div className='xl:text-5xl lg:text-4xl text-2xl font-normal xl:mb-16 mb-8 xl:w-7/12'>
                Java Developer (Female) Onsite Experience 2 to 3 years
              </div>
              <div className='mb-10'>
                <div className='xl:text-4xl lg:text-2xl text-xl text-[#024] font-semibold mb-5'>
                  Job Description
                </div>
                <div className=''>
                  <p className='xl:text-xl lg:text-xl text-l font-light mb-5'>We are seeking a talented and motivated Java Developer to join our dynamic team. The ideal candidate for this position should have 2 to 3 years of experience in Java development and be passionate about creating high-quality, robust, and efficient software solutions. As part of our team, you will contribute to the design, development, and maintenance of Java-based applications that power our organization&rsquo;s success. Your skills and expertise will play a vital role in shaping our software systems and helping us achieve our goals. </p>
                </div>
              </div>
              <div className='mb-10'>
                <div className='xl:text-4xl lg:text-2xl text-xl font-semibold mb-5 text-[#024]'>
                  Key Responsibilities
                </div>
                <div className=''>
                  <ul className='list-disc xl:text-xl lg:text-xl text-l font-light mb-5 pl-5'>
                    <li>Collaborate with the development team to design and implement Java-based applications.</li>
                    <li>Write clean, maintainable, and efficient code.</li>
                    <li>Debug and resolve software defects and issues.</li>
                    <li>Perform code reviews and provide constructive feedback.</li>
                    <li>Work on new feature development and enhancement of existing systems.</li>
                    <li>Contribute to system documentation and technical specifications.</li>
                    <li>Stay updated on emerging technologies and industry best practices.</li>
                    <li>Participate in the full software development lifecycle, from concept to deployment.</li>
                  </ul>
                </div>
              </div>
              <div className='mb-10'>
                <div className='xl:text-4xl lg:text-2xl text-xl font-semibold mb-5 text-[#024]'>
                  Requirements
                </div>
                <div className=''>
                  <ul className='list-disc xl:text-xl lg:text-xl text-l font-light mb-5 pl-5'>
                    <li>Bachelor&rsquo;s degree in Computer Science, Software Engineering, or a related field.</li>
                    <li>2 to 3 years of professional experience in Java development.</li>
                    <li>Strong knowledge of Java, J2EE, and related technologies.</li>
                    <li>Experience with Java frameworks (Spring, Hibernate, etc.).</li>
                    <li>Proficiency in object-oriented design and programming.</li>
                    <li>Solid understanding of database management systems (SQL and NoSQL).</li>
                    <li>Familiarity with web services (REST, SOAP) and API integration.</li>
                    <li>Version control systems (e.g., Git) and code branching strategies.</li>
                    <li>Problem-solving skills and attention to detail.</li>
                    <li>Excellent communication and teamwork skills.</li>
                    <li>Proven ability to work effectively in a fast-paced, collaborative environment.</li>
                  </ul>
                </div>
              </div>
              <div className='mb-10'>
                <div className='xl:text-4xl lg:text-2xl text-xl font-semibold mb-5 text-[#024]'>
                  Qualifications
                </div>
                <div className=''>
                  <ul className='list-disc xl:text-xl lg:text-xl text-l font-light mb-5 pl-5'>
                    <li>Female candidates are encouraged to apply to promote diversity and inclusivity in our organization.</li>
                    <li>Demonstrated ability to work effectively in a team and individually.</li>
                    <li>Strong analytical and problem-solving skills.</li>
                    <li>Commitment to staying up-to-date with the latest industry trends and technologies.</li>
                    <li>Strong interpersonal and communication skills.</li>
                    <li>Adaptability and willingness to learn and apply new skills.</li>
                    <li>Strong organization and time management skills.</li>
                  </ul>
                </div>
              </div>
              <div className='mb-5'>
                <div className="cursor-pointer inline-flex gap-2 items-center relative text-[#024]">
                  <input
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                  />
                  <AiOutlinePaperClip size={24} /> Upload CV/Resume
                </div>
                {fileName && <p className="text-sm text-gray-500">{fileName}</p>}
              </div>
              <div className=''>
                <button className="self-center text-lg text-center text-black bg-[#F7E022] flex justify-center rounded-xl px-10 py-2 shadow-md shadow-slate-400 cursor-pointer">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="/ellipse-2.png"
            className="aspect-[1.22] absolute bottom-0 right-0 lg:block hidden"
          />
        </div>
      </div>
    );
  }

