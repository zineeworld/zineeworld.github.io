"use client";

import { useEffect, ReactNode } from "react";
import hljs from "highlight.js";
// import "highlight.js/styles/default.css";
// import "highlight.js/styles/github-dark-dimmed.min.css";
import "highlight.js/styles/atom-one-dark.css";

export type CodeBlockProps = {
  children: ReactNode
  language?: String
}
export const CodeBlock = (
  {
    children,
    language
  }: CodeBlockProps) => {

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className={language ? `language-${language}` : ""}>
        {children}
      </code>
    </pre>
  );
}
