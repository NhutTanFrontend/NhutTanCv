import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <meta name="description" content="Trang CV của Trần Lê Nhứt Tân" />
        <meta name="keywords" content="Trần Lê Nhứt Tân, CV, code web, design web, dịch vụ, thiết kế website" />
        <link rel="canonical" href="https://nhut-tan-cv.vercel.app/" />
        <script type="application/ld+json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="vi" />
        <meta name="robots" content="Trần Lê Nhứt Tân, CV, code web, design web, dịch vụ, thiết kế website" />
        <link rel="icon" href="./public/cv_cutted.png" type="image/png" />
        <link rel="apple-touch-icon" href="./public/cv_cutted.png" />
        <title>Trần Lê Nhứt Tân&apos;s Portfolio</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    );
}
