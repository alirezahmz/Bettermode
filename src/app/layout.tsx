'use client'

import client from "@/services/apollo";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ApolloProvider client={client}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
      </ApolloProvider>
    </html>
  );
}
