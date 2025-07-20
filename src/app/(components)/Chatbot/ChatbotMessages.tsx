import type { ChatbotNode } from "../../../types/Chatbot.type";

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
                <ol className="pl-5 list-disc space-y-1">
                    {node.text.map((line, i) => (
                        <li key={i}>{line}</li>
                    ))}
                </ol>
            );
        }
        return <div>{node.text}</div>;
    };

    return (
        <div className="self-start bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 shadow text-gray-800 max-w-full text-sm select-text">
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
