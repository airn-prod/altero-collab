import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Altero Labs";
const description =
  "Altero Labs is a software development company based in Bali. We specialize in AI, blockchain, and web development.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: " %s | Altero Labs",
  },
  description,
  icons: {
    icon: "/altero-icon.svg",
  },
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@alterolabs",
  },
  metadataBase: new URL("https://www.altero.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
