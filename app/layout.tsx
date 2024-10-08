import type { Metadata } from "next"
import { Montserrat } from "next/font/google";
import "./globals.css"; 
import Header from "@/components/header"; 
import 'animate.css/animate.min.css';
import Footer from '../components/footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Tell FontAwesome to skip adding the CSS automatically

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});


export const metadata: Metadata = {
  title: "Yusra's Portfolio",
  description: "Generated by Yusra Saleem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${montserrat.variable} font-mont bg-white w-full min-h-screen`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
