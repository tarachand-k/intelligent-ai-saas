import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/modal-provider";
import { ToasterProvider } from "@/components/toaster-provider";
import { CrispProvider } from "@/components/CrispProvider";
import QueryProvider from "@/components/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Intelligent",
  description: "AI platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <QueryProvider>
          <body className={inter.className}>
            <ModalProvider />
            <ToasterProvider />
            {children}
          </body>
        </QueryProvider>
      </html>
    </ClerkProvider>
  );
}
