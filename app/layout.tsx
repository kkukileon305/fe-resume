import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const font = Noto_Sans_KR({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "이다익 | FE Resume",
  description: "이다익의 이력서입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={`${font.className} min-h-dvh relative`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
