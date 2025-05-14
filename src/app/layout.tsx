import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastProvider } from "@/components/providers/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Küresel Hedefler",
  description: "Küresel Hedefler, yoksulluğu ortadan kaldırmak, gezegenimizi korumak ve tüm insanların barış ve refah içinde yaşamasını sağlamak için evrensel eylem çağrısıdır.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="stylesheet"
          href="https://ext.same-assets.com/3646222951/1095630407.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <style>
          {`
            @font-face {
              font-family: 'Giorgio Sans Bold';
              src: url('https://ext.same-assets.com/3646222951/1095630407.woff') format('woff');
              font-weight: bold;
              font-style: normal;
              font-display: swap;
            }

            body {
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }

            h1, h2, h3, h4, h5, h6, .title-font {
              font-family: 'Giorgio Sans Bold', sans-serif;
            }
          `}
        </style>
      </head>
      <body className={inter.className}>
        <ToastProvider />
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
