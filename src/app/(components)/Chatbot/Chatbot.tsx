"use client";
import { useRef, useEffect, useState } from "react";
import ChatbotButton from "./ChatbotButton";
import ChatbotPanel from "./ChatbotPanel";
import { BOT_FLOW, HI_ROOT } from "../../../utility/chatbot.util";
import type { ChatbotNode } from "../../../types/Chatbot.type";

const HELPER_MESSAGES = ["मदद चाहिए ?", "Need help?"];

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [history, setHistory] = useState<ChatbotNode[]>([BOT_FLOW]);
    const [showHelper, setShowHelper] = useState(false);
    const [helperMsgIdx, setHelperMsgIdx] = useState(0);
    const helperTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const helperIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const lang = history[1] === HI_ROOT ? "hi" : "en";
    const currentNode = history[history.length - 1];

    useEffect(() => {
        const showThenHide = () => {
            setHelperMsgIdx(Math.random() > 0.5 ? 0 : 1);
            setShowHelper(true);
            helperTimeoutRef.current = setTimeout(() => setShowHelper(false), 5000);
        };
        showThenHide();
        helperIntervalRef.current = setInterval(showThenHide, 5 * 60 * 1000);
        return () => {
            if (helperTimeoutRef.current) clearTimeout(helperTimeoutRef.current);
            if (helperIntervalRef.current) clearInterval(helperIntervalRef.current);
        };
    }, []);

    const handleOption = (next: ChatbotNode) => setHistory(h => [...h, next]);
    const handleGoBack = () => setHistory(h => h.length > 1 ? h.slice(0, h.length - 1) : h);
    const handleClose = () => {
        setOpen(false);
        setHistory([BOT_FLOW]);
    };

    return (
        <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
            {showHelper && !open && (
                <div className="mb-2 px-4 py-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-300 shadow text-sm animate-fade-in">
                    {HELPER_MESSAGES[helperMsgIdx]}
                </div>
            )}
            <ChatbotButton onClick={() => setOpen(v => !v)} />
            {open && (
                <ChatbotPanel
                    currentNode={currentNode}
                    history={history}
                    onOptionClick={handleOption}
                    onGoBack={handleGoBack}
                    onClose={handleClose}
                    language={lang}
                />
            )}
        </div>
    );
}
