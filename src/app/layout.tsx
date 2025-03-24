import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Küresel Hedefler - Nitelikli Eğitim",
  description: "Kapsayıcı ve eşitlikçi nitelikli eğitimi sağlamak ve herkes için yaşam boyu öğrenme fırsatlarını teşvik etmek.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
