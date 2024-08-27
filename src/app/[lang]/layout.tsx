import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "../globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Bella",
  description: "Unleash the Power of AI in Crypto Trading",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v3" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
