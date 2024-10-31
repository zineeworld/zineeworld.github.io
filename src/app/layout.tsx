import type { Metadata } from "next";
import "@assets/styles/styles.scss";
import { link } from "fs";

export const metadata: Metadata = {
  title: "ZINEEWORLD",
  description: "10+ years Markup Developer, Hyein Oh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="ko">
    <head>
      <link href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"/>
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
