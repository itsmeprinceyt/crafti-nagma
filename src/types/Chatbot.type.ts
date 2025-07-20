export type ChatbotNode = {
    text: string | string[];
    options?: { label: string; next: ChatbotNode }[];
};