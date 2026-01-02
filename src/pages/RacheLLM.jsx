import React, { useState } from 'react';

const RacheLLM = () => {
    const [messages, setMessages] = useState([
        { role: 'assistant', text: "Hi! I'm RacheLLM. Ask me anything about my work, design philosophy, or favorite coffee spots!" }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages(prev => [...prev, { role: 'user', text: input }]);
        setInput('');

        // Dummy response
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'assistant', text: "That's a great question! As an AI simulation of Rachel, I'd say... well, I'm still learning!" }]);
        }, 1000);
    };

    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-2xl mx-auto h-[calc(100vh-100px)] flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-6 mb-8 pr-4">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-black text-white rounded-br-none' : 'bg-gray-100 text-gray-900 rounded-bl-none'}`}>
                            <p className="text-sm">{msg.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSend} className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask RacheLLM..."
                    className="w-full p-4 pr-12 rounded-full border border-gray-200 focus:outline-none focus:border-black transition-colors"
                />
                <button type="submit" className="absolute right-2 top-2 p-2 bg-accent text-white rounded-full hover:bg-orange-600 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </form>
        </div>
    );
};

export default RacheLLM;
