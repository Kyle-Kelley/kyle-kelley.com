import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import {
  provideHeadless,
  SearchHeadlessProvider,
  HeadlessConfig,
  Environment
} from "@yext/search-headless-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Portfolio",
  description: "Created by Kyle Kelley",
};

// interface Headless extends HeadlessConfig {
//   apiKey: string,
//   locale: string,
//   environment: Environment.SANDBOX
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // const config: HeadlessConfig = {
  //   apiKey: 'd7ccfc255334f2132bb3371195f24981',
  //   locale: 'en',
  //   environment: Environment.SANDBOX
  // }
  // const searcher = provideHeadless(config);
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          {children}
      </body>
    </html>
  );
}
