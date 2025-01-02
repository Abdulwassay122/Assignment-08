import React from 'react';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';

import { TypedObject } from '@portabletext/types';

interface StyledPortableTextProps {
  value: TypedObject | TypedObject[];
}

const components: PortableTextReactComponents = {
  types: {
    image: ({ value }: { value: { url: string; alt?: string } }) => (
      <img
        src={value.url}
        alt={value.alt || ''}
        className="rounded-lg shadow-md"
      />
    ),
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-3xl font-semibold mb-3">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-2xl font-medium mb-2">{children}</h3>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-base leading-7 mb-4">{children}</p>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 pl-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({
      value,
      children,
    }: {
      value?: { href?: string };
      children: React.ReactNode;
    }) => (
      <a
        href={value?.href}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

const StyledPortableText: React.FC<StyledPortableTextProps> = ({ value }) => {
  return <PortableText value={value} components={components} />;
};

export default StyledPortableText;
