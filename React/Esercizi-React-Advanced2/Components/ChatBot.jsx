import  { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ChatBot() {
  const [userMessage, setUserMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [trigger, setTrigger] = useState(0);

  const { data } = useSWR(trigger ? "https://mocki.io/v1/d76d8621-0033-4531-ae94-5b0f26290f85" : null, fetcher);

  useEffect(() => {
    if (data && data.risposta) {
      setChat((prev) => [...prev, { sender: 'bot', text: data.risposta }]);
    }
  }, [data]);

  const handleSend = () => {
    if (!userMessage.trim()) return;

    setChat((prev) => [...prev, { sender: 'utente', text: userMessage }]);
    setUserMessage('');
    setTrigger((prev) => prev + 1);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-blue-600 text-white text-lg font-semibold">
        Chat con il Bot
      </div>
      <div className="h-96 overflow-y-auto p-4 space-y-2 bg-gray-50">
        {chat.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'utente' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-4 py-2 rounded-lg max-w-xs text-sm ${msg.sender === 'utente' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex p-4 border-t border-gray-200 bg-white">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Scrivi un messaggio..."
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Invia
        </button>
      </div>
    </div>
  );
}
