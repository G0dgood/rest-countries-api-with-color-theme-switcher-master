import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "Browse countries around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunitoSans.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
