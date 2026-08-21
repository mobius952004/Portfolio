import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AI_Chat } from "@/api/chatapi";
import ReactMarkdown from "react-markdown";

export default function AIChat({messages,setMessages,onClose}) {
    // 1. Initialize the state with the default greeting

    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef(null);

    const chatContainerRef = useRef(null);

    // 2. Click Outside Logic
    useEffect(() => {
        function handleClickOutside(event) {
            // Check if click occurred outside the chat box AND not on the floating bot button
            if (
                chatContainerRef.current && 
                !chatContainerRef.current.contains(event.target) &&
                !event.target.closest(".floating-bot-trigger") // Prevents toggle button conflicts
            ) {
                onClose();
            }
        }

        // Attach event listener
        document.addEventListener("mousedown", handleClickOutside);
        
        // Cleanup event listener when component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    // 2. Define contextual starter options
    const starterOptions = [
        "What AI and deep learning projects have you built?",
        "Tell me about the Multi chat application you have  build .",
        "What are your core full-stack technologies?"
    ];

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSend = async (text) => {
        if (!text.trim()) return;

        const userMessage = {
            role: "user",
            id: crypto.randomUUID().toString(),
            content: text.trim(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        try {
            const reply = await AI_Chat(text.trim());
            const aiMessage = {
                role: "assistant",
                id: crypto.randomUUID().toString(),
                content: reply
            };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error("Failed to fetch AI response:", error);
            const errorMessage = {
                role: "assistant",
                id:crypto.randomUUID().toString(),
                content: "System offline. Please contact me directly via email."
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div ref={chatContainerRef} className="flex flex-col h-[500px] w-full max-w-md bg-gray-950/80 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-2xl isolate">

            <div
                className="flex-1 p-4 overflow-y-auto overscroll-contain no-scrollbar space-y-4"
                data-lenis-prevent="true"
            >
                {/* 3. Render all messages in the standard document flow */}
                <div className="flex flex-col space-y-4 w-full">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === "user"
                                    ? "bg-purple-600 text-white rounded-br-sm"
                                    : "bg-gray-800 border border-gray-700 text-gray-200 rounded-bl-sm"
                                }`}>
                                {msg.role === "assistant" ? (
                                    <div className="prose prose-invert max-w-none text-sm break-words">
                                        <ReactMarkdown>
                                            {msg.content}
                                        </ReactMarkdown>
                                    </div>
                                ) : (
                                    msg.content
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 4. Render starter options ONLY if the welcome message is the only item in the array */}
                {messages.length === 1 && (
                    <div className="flex flex-col gap-2 mt-4 ml-2 animate-fade-in">
                        {starterOptions.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleSend(option)}
                                className="text-left px-4 py-2 text-sm text-gray-300 bg-gray-900 border border-gray-700 rounded-xl hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300 w-max max-w-[85%]"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                )}

                {isTyping && (
                    <div className="flex w-full justify-start mt-4">
                        <div className="flex space-x-1.5 items-center px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-2xl rounded-bl-sm shadow-sm w-max">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} className="h-1" />
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSend(inputValue);
                }}
                className="p-4 border-t border-gray-800 bg-gray-900/50 shrink-0"
            >
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 bg-gray-950 border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-200 focus:outline-none focus:border-purple-500"
                        disabled={isTyping}
                    />
                    <Button
                        type="submit"
                        disabled={isTyping || !inputValue.trim()}
                        className="bg-purple-600 hover:bg-purple-500 rounded-full px-6 text-white disabled:opacity-50"
                    >
                        Ask
                    </Button>
                </div>
            </form>
        </div>
    );
}