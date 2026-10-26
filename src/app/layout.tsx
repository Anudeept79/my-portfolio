import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/site";
import { Preloader } from "@/components/Preloader";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

// Share images need absolute URLs; Vercel provides the production domain at build.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://anudeep-thota-portfolio-21.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.title}`,
  description: profile.subtitle,
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.subtitle,
    type: "website",
    images: [{ url: "/og/default.jpg", width: 1200, height: 630, alt: `${profile.name} — ${profile.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.subtitle,
    images: ["/og/default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${dmMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
