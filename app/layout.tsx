import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNav } from "@/components/site-nav";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.smnthjm08.dev"),
  title: "Sumanth JM — Backend Engineer, Solana / Rust Developer",
  description:
    "Backend engineer building production enterprise systems — ERP integration, financial workflow, and audit-critical data paths — alongside Solana programs and the infrastructure around them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressContentEditableWarning
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        dmSans.variable,
        jetbrainsMono.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen px-6 py-10">
            <div className="flex flex-col max-w-2xl mx-auto w-full gap-6">
              <SiteNav />
              <Separator />
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
