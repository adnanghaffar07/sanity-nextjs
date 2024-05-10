"use client";
import ProjectDiscussionContainer from "./project-discussion-form";

import React from "react";
import { usePathname } from "next/navigation";
import PartnershipForm from "./PartnershipForm";

const FormDisplay = () => {
  const currentPath = usePathname();
  return currentPath !== "/partnership-program" ? (
    <ProjectDiscussionContainer />
  ) : (
    <PartnershipForm />
  );
};

export default FormDisplay;
