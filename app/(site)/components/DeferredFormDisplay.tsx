"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const FormDisplay = dynamic(() => import("./FormDisplay"), { ssr: false });

const DeferredFormDisplay = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const currentPath = usePathname();
  
  useEffect(() => {
    // Hide Calendly form on specific paths
    const shouldHideFormOnPath = 
      currentPath === "/partnership-program" ||
      currentPath === "/services/marketing-automation-services" ||
      currentPath?.startsWith("/services/marketing-automation-services/");
    
    if (shouldHideFormOnPath) {
      setShouldRender(false);
      return;
    }

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => setShouldRender(true));
    } else {
      setTimeout(() => setShouldRender(true), 2000); // fallback for Safari
    }
  }, [currentPath]);

  return shouldRender ? <FormDisplay /> : null;
};

export default DeferredFormDisplay;
