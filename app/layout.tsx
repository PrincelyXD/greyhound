import type { Metadata } from "next";

import "./globals.css";
import { Navigation } from "./components/Navigation";

import ReactLenis from "lenis/react";

export const metadata: Metadata = {
  title: "Greyhound – Smarter Systems for Real Estate Excellence",
  description:
    "Greyhound is a cutting-edge SaaS platform built for modern real estate businesses. From client onboarding and realtor linking to commission tracking, payments, and document automation—Greyhound delivers operational clarity at speed.",
  keywords: [
    "Greyhound",
    "Real estate SaaS",
    "estate management software",
    "property automation",
    "realtor dashboard",
    "installment tracking",
    "commission disbursement",
    "real estate CRM",
    "smart estate systems",
  ],
  authors: [{ name: "Greyhound Team" }],
  creator: "Greyhound",
  openGraph: {
    title: "Greyhound – Smarter Systems for Real Estate Excellence",
    description:
      "Greyhound transforms how estate companies operate—offering end-to-end systems for sales, realtor collaboration, payment plans, and document workflows.",
    url: "https://greyhound-steel.vercel.app/", 
    siteName: "Greyhound",
    images: [
      {
        url: "https://greyhound-steel.vercel.app/primary-logo.png", 
        width: 1200,
        height: 630,
        alt: "Greyhound – Real Estate SaaS Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greyhound – Reinventing Real Estate Operations",
    description:
      "Explore Greyhound: the all-in-one platform for real estate companies to streamline client management, payments, referrals, and realtor interactions.",
    images: ["https://greyhound-steel.vercel.app/primary-logo.png"], 
    creator: "@greyhound_saas", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className="absolute top-0 z-[-2] h-fit w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <Navigation />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
