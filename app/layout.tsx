import "./globals.css";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";

const body = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display"
});

const basePath = process.env.BASE_PATH || "";

export const metadata = {
  title: "DapIT - About",
  description:
    "A single-page about site for a product-minded engineer and designer.",
  icons: {
    icon: `${basePath}/D_192x192.png`
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
