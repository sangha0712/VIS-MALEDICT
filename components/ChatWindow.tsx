import React, { useState, useEffect, useRef } from 'react';
import { Send, X, AlertTriangle } from 'lucide-react';
import { Character, Message } from '../types';
import { createCharacterChat } from '../services/geminiService';
import { Chat } from '@google/genai';

interface ChatWindowProps {
  character: Character;
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ character, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chat session
    const session = createCharacterChat(character);
    if (session) {
      chatSessionRef.current = session;
    } else {
      setError("시스템 오류: 관리자에게 문의하세요.");
    }
    
    // Initial greeting simulation
    setMessages([
      {
        id: 'init',
        role: 'model',
        text: `안녕하세요. ${character.name}입니다. 무엇을 도와드릴까요?`,
        timestamp: new Date()
      }
    ]);
  }, [character]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await chatSessionRef.current.sendMessage({ message: userMsg.text });
      const text = response.text || "...";

      const modelMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: text,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: Message = {
        id: Date.now().toString(),
        role: 'model',
        text: "통신 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 font-sans">
      <div className="w-full max-w-md h-[700px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-gray-300">
        
        {/* Header - Intranet Style */}
        <div className="bg-school-orange p-4 flex justify-between items-center shadow-md">
          <div className="flex items-center gap-3">
             <div className="relative">
                <img src={character.avatarUrl} alt="Avatar" className="w-10 h-10 rounded-full bg-white p-0.5 border border-white/30" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border border-white"></div>
             </div>
             <div className="text-white">
                <h3 className="font-bold text-sm">{character.name}</h3>
                <p className="text-[11px] opacity-80">{character.role} | 교내망 접속중</p>
             </div>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Area - Clean Style */}
        <div className="flex-1 overflow-y-auto p-4 bg-blue-50/50 space-y-4">
          <div className="text-center text-xs text-gray-400 my-4">
             <span>----- 2084년 5월 12일 수요일 -----</span>
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] px-4 py-2.5 rounded-lg text-sm shadow-sm relative ${
                  msg.role === 'user' 
                    ? 'bg-yellow-300 text-black rounded-tr-none' 
                    : `bg-white text-gray-800 border border-gray-200 rounded-tl-none ${msg.isError ? 'text-red-500' : ''}`
                }`}
              >
                <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                <span className={`text-[10px] block mt-1 text-right ${msg.role === 'user' ? 'text-black/50' : 'text-gray-400'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 px-4 py-3 rounded-lg rounded-tl-none shadow-sm flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          {error && (
            <div className="flex justify-center my-4">
              <div className="flex items-center gap-2 text-red-600 bg-red-50 px-3 py-1 rounded border border-red-100 text-xs">
                <AlertTriangle className="w-3 h-3" />
                <span>{error}</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white p-3 border-t border-gray-200">
           <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="메시지를 입력하세요..."
              className="flex-1 bg-gray-100 text-gray-800 px-3 py-2 rounded border border-gray-200 focus:outline-none focus:border-school-orange text-sm transition-colors"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-school-orange hover:bg-orange-600 text-white p-2 rounded transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
           </div>
           <div className="text-[10px] text-gray-400 mt-2 text-center">
              학교 인트라넷 보안 정책에 따라 대화 내용이 기록될 수 있습니다.
           </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;