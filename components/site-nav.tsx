"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
];

export function SiteNav() {
  const pathname = usePathname();

  // "/" only matches the home link; section routes also match their detail pages.
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : href.startsWith("/#")
        ? false
        : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="flex items-center justify-between">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="gap-1">
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink
                asChild
                active={isActive(link.href)}
                className="px-2.5 py-1 text-sm text-muted-foreground hover:text-foreground data-active:bg-accent data-active:text-accent-foreground data-active:font-medium transition-colors duration-200"
              >
                <Link href={link.href}>{link.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </header>
  );
}
