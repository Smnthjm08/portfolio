"use client";

import GetInTouchButton from "@/components/buttons/get-in-touch-button";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full max-w-4xl mx-auto border-t mt-12 mb-8 px-2 sm:px-4">
      <div className="mx-auto px-0 sm:px-4 py-2 md:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 transition-all duration-300">
          <Link href="/" className="font-semibold tracking-tight text-sm mb-2 sm:mb-0">
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
