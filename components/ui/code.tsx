'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeProps {
  language: string;
  children: string;
}

export function Code({ language, children }: CodeProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      customStyle={{
        borderRadius: '0.5rem',
        padding: '1rem',
        fontSize: '0.9rem',
      }}
      showLineNumbers
    >
      {children.trim()}
    </SyntaxHighlighter>
  );
}