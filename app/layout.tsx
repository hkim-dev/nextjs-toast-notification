import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToastProvider from "@/contexts/toastContext";
import "@/styles/globals.css";
import "@/styles/toast.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Toast Notification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main role="main" id="main">
          <ToastProvider>
            {children}
          </ToastProvider>
        </main>
      </body>
    </html>
  );
}