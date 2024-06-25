"use client";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { usePathname } from "next/navigation";
const ProjectDiscussionContainer = dynamic(
  () => import("./project-discussion-form"),
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
      <ProjectDiscussionContainer />
    </Suspense>
  ) : (
    <Suspense fallback={<p>Loading Form ...</p>}>
      <PartnershipForm />
    </Suspense>
  );
};

export default FormDisplay;
