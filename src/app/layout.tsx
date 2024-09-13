import type { Metadata } from "next";
import "./globals.css";
import { Footer, TopNavbar } from "@/components/shared";

export const metadata: Metadata = {
  title: "Anchor Informatics",
  description: "IT Consulting Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <div className="top-0 fixed w-full z-50">
          <TopNavbar />
        </div>
        <div className="pt-32 h-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
