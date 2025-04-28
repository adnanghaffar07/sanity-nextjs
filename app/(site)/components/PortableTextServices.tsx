import React from 'react'

export const portableTextComponents = {
  marks: {
    link: ({ children, value }: any) => {
      const target = value?.openInNewTab ? '_blank' : '_self';
      return (
        <a
          href={value?.href}
          target={target}
          rel={value?.openInNewTab ? "noopener noreferrer" : undefined}
          className="text-blue-600 underline"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-5 text-black">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="mb-2">{children}</li>
    ),
  },
};
