"use client";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { usePathname } from "next/navigation";
const CalendlyForm = dynamic(
  () => import("./Calendlyform"),
  {
    suspense: true,
  }
);
const PartnershipForm = dynamic(() => import("./PartnershipForm"), {
  suspense: true,
});

const FormDisplay = () => {
  const currentPath = usePathname();
  return currentPath !== "/partnership-program" ? (
    <Suspense fallback={<p>Loading Form ...</p>}>
      <CalendlyForm />
    </Suspense>
  ) : (
    <Suspense fallback={<p>Loading Form ...</p>}>
      {/* <div className="lg:max-w[506px] ml-auto mr-auto -mb-12 relative z-10 lg:px-0 px-5"> */}
      {/* <PartnershipForm /> */}
      <CalendlyForm />
      {/* </div> */}
    </Suspense>
  );
};

export default FormDisplay;
