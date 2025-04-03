import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "@/styles/globals.scss";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Setup Inicial NextJS com Vitest e React Testing Library",
  description: "Setup Inicial NextJS com Vitest e React Testing Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} container mx-auto`}>
        {children}
      </body>
    </html>
  );
}
