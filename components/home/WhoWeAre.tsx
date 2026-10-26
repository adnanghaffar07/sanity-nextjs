import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-[50%] md:px-4">
          <Image
            src="/who-we-ar.jpeg"
            alt="Software Development Company"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="lg:w-[50%] ">
          <h2 className="xl:text-4xl lg:text-3xl text-[#3C3C3C] text-3xl font-semibold">Who We Are</h2>
          <p className="xl:mt-11 lg:text-lg text-base text-[#3C3C3C] mt-5 max-md:max-w-full tracking-normal">
            We are a professional IT software development company specializing in building and managing
            high-performing remote software engineering teams. Since our establishment in 2018, we have been committed
            to delivering customized software solutions designed to meet the specific business objectives of our
            clients.
            <br />
            <br />
            Driven by excellence and innovation, we combine deep technical expertise with a client-centric approach to
            deliver reliable, scalable, and efficient digital solutions. Through continuous research and development, we
            ensure that every product and application we create leverages the latest technologies to provide lasting
            value and measurable results.
          </p>
        </div>
      </div>
    </div>
  );
}
