import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Technical Interview",
  description: "Transaction categorization exercise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
