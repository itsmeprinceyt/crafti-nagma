import Link from "next/link";
import type { ChatbotNode } from "../../../types/Chatbot.type";

function renderLineWithLinks(line: string, key?: number) {
    const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|(\/[a-zA-Z0-9-_\/]*)/g;
    const parts = line.split(urlRegex);

    return (
        <span key={key}>
            {parts.map((part, idx) => {
                if (!part) return null;

                if (/^(https?:\/\/)/.test(part)) {
                    return (
                        <a
                            key={idx}
                            href={part}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-700 underline break-all hover:text-amber-600"
                        >
                            {part}
                        </a>
                    );
                }
                if (/^www\./.test(part)) {
                    const url = `https://${part}`;
                    return (
                        <a
                            key={idx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-700 underline break-all hover:text-amber-600"
                        >
                            {part}
                        </a>
                    );
                }
                if (/^\/[a-zA-Z0-9-_\/]+$/.test(part)) {
                    return (
                        <Link
                            key={idx}
                            href={part}
                            className="text-amber-700 underline break-all hover:text-amber-600"
                        >
                            {part}
                        </Link>
                    );
                }

                return part;
            })}
        </span>
    );
}

export default function ChatbotMessages({
    node,
    onOptionClick,
}: {
    node: ChatbotNode;
    onOptionClick: (next: ChatbotNode) => void;
}) {
    const renderText = () => {
        if (Array.isArray(node.text)) {
            return (
                <ol className="pl-5 list-decimal space-y-1">
                    {node.text.map((line, i) => (
                        <li key={i}>{renderLineWithLinks(line, i)}</li>
                    ))}
                </ol>
            );
        }
        return <div>{renderLineWithLinks(node.text as string)}</div>;
    };

    return (
        <div className="w-full bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 shadow text-gray-800 max-w-full text-sm select-text">
            {renderText()}
            {node.options && (
                <div className="flex flex-col mt-3 gap-2">
                    {node.options.map(opt => (
                        <button
                            key={opt.label}
                            onClick={() => onOptionClick(opt.next)}
                            className="text-left bg-white border border-amber-300 rounded-lg py-2 px-3 hover:bg-amber-100 text-amber-900 font-medium transition text-sm"
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
