import React from 'react'

export const portableTextComponents = {
  marks: {
    link: ({ children, value }: any) => {
      const target = value?.openInNewTab ? '_blank' : '_self';
      return (
        <a href={value?.href} target={target} rel="noopener noreferrer" className="text-blue-600 underline">
          {children}
        </a>
      );
    }
  }
};
