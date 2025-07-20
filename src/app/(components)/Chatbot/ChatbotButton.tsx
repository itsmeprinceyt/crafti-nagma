import Image from "next/image";

export default function ChatbotButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 border border-amber-700 shadow-lg text-white hover:bg-amber-700 transition text-2xl outline-none"
            onClick={onClick}
            aria-label="Open Chatbot"
            style={{ padding: 0 }}
        >
            <Image
                src="/Logo/robot-version.png"
                alt="Open Chatbot"
                width={56}
                height={56}
                priority
                className="rounded-full"
            />
        </button>
    );
}
