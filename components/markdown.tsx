import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const components: Components = {
  p: ({ children }) => (
    <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
  ),

  h2: ({ children }) => (
    <h2 className="text-base font-semibold tracking-tight text-foreground mt-2">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="text-sm font-semibold tracking-tight text-foreground mt-2">
      {children}
    </h3>
  ),

  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors duration-200"
    >
      {children}
    </a>
  ),

  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-5 text-sm text-muted-foreground leading-relaxed space-y-1">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-5 text-sm text-muted-foreground leading-relaxed space-y-1">
      {children}
    </ol>
  ),

  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-border pl-3 text-sm text-muted-foreground italic">
      {children}
    </blockquote>
  ),

  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === "string" ? src : undefined}
      alt={alt ?? ""}
      className="rounded-lg border border-border w-full"
    />
  ),

  code: ({ className, children }) => {
    const isBlock = /language-/.test(className ?? "");
    if (isBlock) {
      return <code className={className}>{children}</code>;
    }
    return (
      <code className="text-xs bg-muted text-foreground px-1.5 py-0.5 rounded">
        {children}
      </code>
    );
  },

  pre: ({ children }) => (
    <pre className="text-xs leading-relaxed bg-muted border border-border rounded-lg p-4 overflow-x-auto">
      {children}
    </pre>
  ),
};

export function Markdown({ content }: { content: string }) {
  return (
    <div className="flex flex-col gap-3">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
