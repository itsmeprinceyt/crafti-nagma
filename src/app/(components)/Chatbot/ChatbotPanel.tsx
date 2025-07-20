import Image from "next/image";
import ChatbotMessages from "./ChatbotMessages";
import type { ChatbotNode } from "../../../types/Chatbot.type";

export default function ChatbotPanel({
    currentNode,
    history,
    onOptionClick,
    onGoBack,
    onClose,
    language
}: {
    currentNode: ChatbotNode;
    history: ChatbotNode[];
    onOptionClick: (next: ChatbotNode) => void;
    onGoBack: () => void;
    onClose: () => void;
    language: "en" | "hi";
}) {
    return (
        <div className="mt-4 bg-white border border-amber-500 rounded-xl shadow-2xl w-80 max-w-full px-4 py-3 flex flex-col items-stretch animate-fade-in">
            <div className="flex items-center mb-0.5">
                <Image
                    src="/Logo/robot-version.png"
                    alt="Bot"
                    width={32}
                    height={32}
                    className="mr-2 rounded-full"
                    priority
                />
                <div className="font-semibold text-amber-900 text-lg">Chatbot Assistant</div>
                <button
                    type="button"
                    className="text-amber-900 ml-auto text-xl hover:text-amber-600 transition"
                    onClick={onClose}
                    aria-label="Close"
                >×</button>
            </div>
            <div className="flex flex-col gap-4 mt-3">
                <ChatbotMessages node={currentNode} onOptionClick={onOptionClick} />
                {history.length > 1 && (
                    <button
                        type="button"
                        className="w-full bg-amber-50 border border-amber-200 p-1 px-5 py-2 rounded-lg shadow text-xs text-amber-600 active:bg-amber-100"
                        onClick={onGoBack}
                    >
                        {language === "hi" ? "पीछे जाइए" : "Go Back"}
                    </button>
                )}
            </div>
        </div>
    );
}
