import type { Metadata } from "next";
import "./globals.css";
import Covertemplate from "./Components/templates/covertemplate";
import { inter } from "./fonts/fonts";


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
        className={`${inter.className} antialiased`}
      >
        <Covertemplate>
        {children}
        </Covertemplate>
      </body>
    </html>
  );
}
