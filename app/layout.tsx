import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const teamDisplay = Syne({
  variable: "--font-team-display",
  subsets: ["latin"],
  display: "swap",
});

const teamBody = Manrope({
  variable: "--font-team-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Team Building 2026 | OS1 + OS3",
  description:
    "Landing page giới thiệu ba trò chơi nổi bật trong chương trình Team Building 2026 tại Hồ Chí Minh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${teamDisplay.variable} ${teamBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
