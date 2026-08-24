import { RichText } from "@/components/rich-text";
import { cn } from "@/lib/utils";

export function BulletList({
  points,
  className,
}: {
  points: string[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "list-disc list-outside pl-4 flex flex-col gap-1.5",
        className,
      )}
    >
      {points.map((point, i) => (
        <li key={i} className="text-xs text-muted-foreground leading-relaxed">
          <RichText text={point} />
        </li>
      ))}
    </ul>
  );
}
