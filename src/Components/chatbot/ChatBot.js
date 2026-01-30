import React, { useState, useEffect, useRef } from "react";
import { faqData } from "./faqData";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const chatEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  // Welcome message
  useEffect(() => {
    if (open && chat.length === 0) {
      setChat([
        {
          bot: "Hi 👋 Welcome to RasoiOnCall! How can I help you today?",
        },
      ]);
    }
  }, [open, chat.length]);

  // Send message
  const sendMessage = () => {
    if (!message.trim()) return;

    const userMsg = message.toLowerCase();
    setChat((prev) => [...prev, { user: message }]);
    setMessage("");

    const matchedFAQ = faqData.find((faq) =>
      faq.keywords.some((word) => userMsg.includes(word))
    );

    setTimeout(() => {
      if (matchedFAQ) {
        setChat((prev) => [...prev, { bot: matchedFAQ.answer }]);
      } else {
        setChat((prev) => [
          ...prev,
          {
            bot: "Sorry, I couldn't understand that. Please choose a topic or contact support.",
          },
        ]);
      }
    }, 500);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-orange-500 text-white w-14 h-14 rounded-full shadow-lg text-2xl z-50"
      >
        💬
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-xl flex flex-col z-50">
          {/* Header */}
          <div className="bg-orange-500 text-white p-3 rounded-t-xl font-semibold">
            RasoiOnCall Support
          </div>

          {/* Messages */}
          <div className="h-64 p-3 overflow-y-auto space-y-2 text-sm">
            {chat.map((c, i) => (
              <div key={i}>
                {c.user && (
                  <div className="text-right bg-orange-100 p-2 rounded">
                    {c.user}
                  </div>
                )}
                {c.bot && (
                  <div className="text-left bg-gray-100 p-2 rounded">
                    {c.bot}
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t">
            <input
              className="flex-1 px-2 py-2 text-sm outline-none"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-orange-500 text-white px-4"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;