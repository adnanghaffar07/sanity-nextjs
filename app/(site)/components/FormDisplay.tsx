"use client";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
const CalendlyForm = dynamic(
  () => import("./Calendlyform"),
  {
    suspense: true,
  }
);

const FormDisplay = () => {
  return (
    <Suspense fallback={<p>Loading Form ...</p>}>
      <CalendlyForm />
    </Suspense>
  );
};

export default FormDisplay;
