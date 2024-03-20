import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="mt-[215px]">
        <h1>
          Bubblehouse <span>(e-commerce Store)</span>
        </h1>

        <div className="mt-[47px]">
          <Image
            src={"/casesubpage-bubblehouse.png"}
            alt="project bubble-house"
            width={700}
            height={900}
          />
        </div>
      </section>
    </>
  );
};

export default page;
