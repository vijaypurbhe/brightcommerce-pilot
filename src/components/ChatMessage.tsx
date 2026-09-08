import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

const ChatMessage = ({ role, content, isStreaming }: ChatMessageProps) => {
  if (role === "user") {
    return (
      <div className="text-sm leading-relaxed text-right">
        <span className="inline-block bg-primary/10 text-primary px-3 py-2 rounded-lg max-w-[85%] text-left">
          {content}
        </span>
      </div>
    );
  }

  return (
    <div className="text-sm leading-relaxed">
      <div className="bg-secondary/50 rounded-lg p-3 text-foreground max-w-none text-sm leading-relaxed
        [&_p]:my-1.5 [&_ul]:my-1.5 [&_ol]:my-1.5 [&_li]:my-1
        [&_table]:w-full [&_table]:text-sm [&_table]:border-collapse [&_table]:my-2
        [&_th]:px-2.5 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:border [&_th]:border-border/50 [&_th]:bg-secondary/80 [&_th]:text-foreground
        [&_td]:px-2.5 [&_td]:py-2 [&_td]:border [&_td]:border-border/50 [&_td]:text-muted-foreground
        [&_strong]:text-foreground [&_strong]:font-semibold
        [&_h1]:text-base [&_h1]:font-bold [&_h1]:mt-3 [&_h1]:mb-1.5 [&_h1]:text-foreground
        [&_h2]:text-sm [&_h2]:font-bold [&_h2]:mt-3 [&_h2]:mb-1.5 [&_h2]:text-foreground
        [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:mt-2 [&_h3]:mb-1 [&_h3]:text-foreground
        [&_code]:bg-secondary [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[11px] [&_code]:font-mono">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        {isStreaming && (
          <span className="inline-block w-1.5 h-4 bg-primary ml-1 animate-pulse" />
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
