"use client";

import GetInTouchButton from "@/components/buttons/get-in-touch-button";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 max-w-3xl mx-auto border-t">
      <div className="mx-auto px-4 py-2 md:py-4">
        <div className="flex items-center justify-between transition-all duration-300">
          <Link href="/" className="font-semibold tracking-tight text-sm">
            © 2026 Sumanth.{" "}
          </Link>

          <GetInTouchButton className="hidden sm:flex" />

          <Link
            href="/"
            className="sm:hidden p-2 rounded-full border bg-primary border-border/40  backdrop-blur hover:bg-background transition"
            aria-label="Collaborate"
          >
            <Icon icon="lucide:arrow-up-right" width={18} height={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
