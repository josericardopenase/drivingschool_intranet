import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pepito",
  description: "Pepito autoescuelas eco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className="w-full  h-[100vh] items-center flex flex-col ">
      <Header></Header>

      <div className="max-w-[1200px] w-full p-4">
          {children}
      </div>
      </body>
      </html>
);
}
