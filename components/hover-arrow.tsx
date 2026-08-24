import { ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

/**
 * Arrow that fades and slides in on hover of the closest `group` ancestor.
 * Place inside a link that already carries `group`.
 */
export function HoverArrow({ className }: { className?: string }) {
  return (
    <ArrowUpRightIcon
      className={cn(
        "w-3 h-3 text-primary opacity-0 -translate-x-0.5 transition-opacity duration-200",
        "group-hover:opacity-100 group-hover:translate-x-0",
        className,
      )}
    />
  );
}
