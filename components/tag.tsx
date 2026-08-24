import { cn } from "@/lib/utils";

const sizes = {
  sm: "text-[10px] px-2 py-0.5 rounded",
  md: "text-xs px-2.5 py-1 rounded-md bg-muted",
} as const;

type TagSize = keyof typeof sizes;

export function Tag({
  children,
  size = "sm",
  className,
}: {
  children: React.ReactNode;
  size?: TagSize;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono border border-border text-muted-foreground",
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagList({
  tags,
  size,
  className,
}: {
  tags: readonly string[];
  size?: TagSize;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {tags.map((tag) => (
        <Tag key={tag} size={size}>
          {tag}
        </Tag>
      ))}
    </div>
  );
}
