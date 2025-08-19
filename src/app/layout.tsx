import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";

export const metadata: Metadata = {
  title: "GoGo-Shop",
  description: "Your easiest online shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
