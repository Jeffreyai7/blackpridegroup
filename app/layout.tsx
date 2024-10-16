import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lusitana } from "next/font/google";
import "./globals.css";
import Covertemplate from "./Components/templates/covertemplate";


export const metadata: Metadata = {
  title: "Black Pride Group",
  description: "innovations and inventions that rule the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`$ antialiased`}
      >
        <Covertemplate>
        {children}
        </Covertemplate>
      </body>
    </html>
  );
}
