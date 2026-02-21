import React, { useState } from 'react';
import { ChevronRight, Home, Radio, Send, Lock, Wifi } from 'lucide-react';

interface SectionGNetProps {
  onGoHome: () => void;
}

const SectionGNet: React.FC<SectionGNetProps> = ({ onGoHome }) => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Tactical_Leader', role: '교관', time: '10:00', text: '금일 14:00 제3훈련장에서 합동 전술 훈련 예정. 전원 집합.' },
    { id: 2, user: 'Alpha_1', role: '학생장', time: '10:05', text: '알겠습니다. 2학년 전술과 인원 파악 완료했습니다.' },
    { id: 3, user: 'Medic_01', role: '의료반', time: '10:10', text: '현장 의료 지원 대기 중입니다. 부상자 발생 시 즉시 호출 바랍니다.' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages([...messages, {
      id: Date.now(),
      user: 'Cadet_You',
      role: '생도',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: inputText
    }]);
    setInputText('');
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-school-text flex items-center gap-2">
            <Radio className="w-8 h-8 text-school-orange" />
            G-NET (전술통신망)
          </h2>
          <p className="text-school-sub mt-2 text-sm">교내 작전 및 훈련용 보안 통신 네트워크입니다.</p>
        </div>
        <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
          <span className="flex items-center cursor-pointer hover:text-school-orange transition-colors" onClick={onGoHome}>
            <Home className="w-3 h-3 mr-1"/> 홈
          </span>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="font-bold text-black">G-NET</span>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 flex flex-col h-[600px]">
        {/* Header */}
        <div className="bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-mono font-bold">SECURE CHANNEL: #TACTICAL_MAIN</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Lock className="w-3 h-3" />
            <span>ENCRYPTED (AES-256)</span>
            <Wifi className="w-3 h-3 ml-2" />
            <span>SIGNAL: 100%</span>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-900/50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.user === 'Cadet_You' ? 'items-end' : 'items-start'}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-bold ${msg.role === '교관' ? 'text-red-400' : msg.role === '의료반' ? 'text-green-400' : 'text-blue-400'}`}>
                  [{msg.role}]
                </span>
                <span className="text-xs text-gray-400 font-mono">{msg.user}</span>
                <span className="text-[10px] text-gray-600">{msg.time}</span>
              </div>
              <div className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                msg.user === 'Cadet_You' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-gray-700 text-gray-200 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-gray-800 border-t border-gray-700">
          <div className="flex gap-2">
            <input 
              type="text" 
              className="flex-1 bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-school-orange font-mono text-sm"
              placeholder="메시지를 입력하십시오..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="bg-school-orange hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-[10px] text-gray-500 mt-2 text-center">
            ※ 보안 위반 시 군법 회부될 수 있습니다. 통신 보안을 준수하십시오.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionGNet;
