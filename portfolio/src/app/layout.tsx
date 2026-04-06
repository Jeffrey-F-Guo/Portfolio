import type { Metadata } from "next";
import "./globals.css";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import { GlowingOrbs } from "@/components/GlowingOrbs";

export const metadata: Metadata = {
  title: "Jeffrey's Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GlowingOrbs />
        <ScrollAnimator />
        {children}
      </body>
    </html>
  );
}
