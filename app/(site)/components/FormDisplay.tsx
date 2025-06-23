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

const FormDisplay = () => {
  const currentPath = usePathname();
  return currentPath !== "/partnership-program" ? (
    <Suspense fallback={<p>Loading Form ...</p>}>
      <CalendlyForm />
    </Suspense>
  ) : (
    <Suspense fallback={<p>Loading Form ...</p>}>
      <CalendlyForm />
    </Suspense>
  );
};

export default FormDisplay;
