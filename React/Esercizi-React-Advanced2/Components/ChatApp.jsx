import  { useState, useRef, useEffect } from 'react';

export function ChatApp() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Ciao! Come posso aiutarti?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll automatico
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMessage = {
      id: messages.length + 1,
      text: trimmed
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto border border-gray-300 flex flex-col h-[500px] rounded shadow-md">
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map(msg => (
          <div
            key={msg.id}
            className="bg-blue-100 text-gray-800 px-4 py-2 rounded mb-2 w-fit max-w-full"
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex p-4 border-t border-gray-300 bg-white">
        <input
          type="text"
          placeholder="Scrivi un messaggio..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Invia
        </button>
      </div>
    </div>
  );
}
