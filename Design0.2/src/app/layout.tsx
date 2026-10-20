import type { Metadata, Viewport } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ShopProvider } from "@/components/shop/ShopProvider";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { FloatingActions } from "@/components/shop/FloatingActions";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — End-to-End STEM Solutions`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: ["STEM education", "robotics lab", "AI for schools", "coding", "IoT", "NEP 2020", "i3 Labs"],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#F6F5F2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-dvh overflow-x-clip">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[70] -translate-y-24 rounded-full bg-ink px-4 py-2 text-sm text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        <Providers>
          <ShopProvider>
            <ScrollProgress />
            <Navbar />
            {/* pt-10 = height of the announcement bar that sits above the fixed navbar */}
            <main id="main" className="pt-10">{children}</main>
            <Footer />
            <FloatingActions />
            <CartDrawer />
          </ShopProvider>
        </Providers>
      </body>
    </html>
  );
}
