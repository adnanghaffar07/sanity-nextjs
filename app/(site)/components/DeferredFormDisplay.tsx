"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const FormDisplay = dynamic(() => import("./FormDisplay"), { ssr: false });

const DeferredFormDisplay = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => setShouldRender(true));
    } else {
      setTimeout(() => setShouldRender(true), 2000); // fallback for Safari
    }
  }, []);

  return shouldRender ? <FormDisplay /> : null;
};

export default DeferredFormDisplay;
