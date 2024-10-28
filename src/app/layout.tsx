import type { Metadata } from "next";
import "@assets/styles/styles.scss";

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
    <body>
    {children}
    </body>
    </html>
  );
}
