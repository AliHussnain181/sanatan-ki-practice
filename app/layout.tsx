import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Sanatan Ki Practice - Ancient Wisdom for Personal Growth and Inner Peace",
  description: "Explore the timeless wisdom of Sanatan Dharma and its spiritual practices",
  keywords:"Sanatan Dharma, Hinduism,Linduism,Sanatan Ki Practice, Hindutva,Spiritual practices, Yoga, Meditation, Mantras, Personal growth, Inner peace, Spiritual awakening, Divine connection, Indian spirituality, Ancient wisdom, Traditional practices, Lifestyle, Rituals, Devotion, Bhakti, Self-realization, Enlightenment"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
