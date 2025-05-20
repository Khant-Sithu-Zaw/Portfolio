import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  title: "Khant Sithu Zaw- Developer Portfolio",
  description:
    "Developer of both Frontend & Backend Developer from Myanmar.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Frontend Developer",
    "Java Developer",
    "Php Developer",
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Khant Sithu Zaw",
              jobTitle: "Web Developer",
              sameAs: [
                "https://www.linkedin.com/in/khant-si-thu-zaw-935372308/",
                "https://github.com/Khant-Sithu-Zaw",
              ],
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
            `,
          }}
        />

      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden scroll-smooth`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
