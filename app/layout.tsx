import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Timmynuel Creatures® | Graphic Designer & Visual Creative",
  description:
    "Explore the creative portfolio of Timmynuel Creatures, featuring graphic design, visual identities, campaigns and creative work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}