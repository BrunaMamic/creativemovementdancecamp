/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import "../globals.scss";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Open_Sans } from "next/font/google";
import { League_Spartan } from "next/font/google";
import local from "next/font/local";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/react";

const sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--sans",
});

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--spartan",
});

const sego = local({
  src: [{ path: "../../../public/static/fonts/SEGO.otf" }],
  variable: "--sego",
});

export const metadata: Metadata = {
  title: "Creative movement dance camp",
  description: "Where creativity meets movement",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en")) {
    notFound();
  }
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={` ${sans.variable} ${sego.variable} ${spartan.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ locale: "en" }];
}
