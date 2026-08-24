import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-3 text-center py-16">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        404
      </span>
      <h1 className="text-xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="text-sm text-foreground hover:text-primary transition-colors duration-200 mt-2"
      >
        ← Back home
      </Link>
    </div>
  );
}
