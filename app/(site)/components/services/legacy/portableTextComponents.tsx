import type { PortableTextComponents } from "@portabletext/react";

// Rich text styles for the legacy service and sub-service pages.
export const portableTextComponents: PortableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const newTab = Boolean(value?.openInNewTab);
      return (
        <a href={value?.href} target={newTab ? "_blank" : "_self"} rel={newTab ? "noopener noreferrer" : undefined} className="text-blue-600 underline">
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 text-black">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
  },
};
