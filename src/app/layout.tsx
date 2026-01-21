import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junk Removal Services in Worcester | Two Men and a Junk Truck",
  description: "Affordable junk removal Worcester, MA rely on. Fast service, fair pricing, and local professionals you can trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
