import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dumagro | Grond- & Afbraakwerken",
  description:
    "Dumagro is uw betrouwbare partner voor grondwerken, afbraakwerken, wegenwerken en meer in België. Professioneel, ervaren en veilig.",
  keywords: [
    "grondwerken",
    "afbraakwerken",
    "wegenwerken",
    "graafwerken",
    "drainage",
    "transport",
    "België",
    "aannemer",
  ],
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
