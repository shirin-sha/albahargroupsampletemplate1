import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./styles/bootstrap.scss";
import "./styles/custom.scss";
import "./globals.css";
import "aos/dist/aos.css";
import BootstrapClient from "@/components/BootstrapClient";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mohamed Abdulrahman Al-Bahar Group",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
        style={{ fontFamily: 'var(--font-manrope), "Manrope Fallback", sans-serif' }}
      >
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
