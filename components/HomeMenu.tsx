import React, { useState } from 'react';
import { Megaphone, Calendar, Users, BookOpen, PenTool, ExternalLink, Star, Shield, Target, Crosshair } from 'lucide-react';

interface HomeMenuProps {
  onNavigate: (view: 'CHARACTER' | 'HISTORY' | 'ADMISSION') => void;
}

const HomeMenu: React.FC<HomeMenuProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'NOTICE' | 'RECRUIT' | 'TRAINING'>('NOTICE');

  const notices = [
    { id: 1, title: '2077년도 ASH GUARD 조기 특채 합격자 명단 공고', date: '2077-02-15', new: true },
    { id: 2, title: '[필독] 제2훈련장 모의 시가전 훈련 일정 안내 (소음 주의)', date: '2077-02-14', new: true },
    { id: 3, title: '3학년 졸업생 히어로 면허(B급 이상) 자격시험 대비 특강', date: '2077-02-10', new: false },
    { id: 4, title: '개인 전술 장비(파워슈트/아티팩트) 정기 검사 안내', date: '2077-02-01', new: false },
    { id: 5, title: '교내 이능력 폭주 사고 예방 수칙', date: '2077-01-28', new: false },
  ];

  return (
    <div className="w-full">
      {/* Quick Links Banner Section */}
      <div className="bg-gray-50 py-10 border-b border-gray-200">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Column 1 & 2: Notice Board */}
            <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-soft border border-gray-100">
               <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
                  <div className="flex gap-4 text-lg font-bold">
                     <button 
                        onClick={() => setActiveTab('NOTICE')}
                        className={`${activeTab === 'NOTICE' ? 'text-school-orange' : 'text-gray-400'} hover:text-school-orange transition-colors`}
                     >
                        공지사항
                     </button>
                     <button 
                        onClick={() => setActiveTab('RECRUIT')}
                        className={`${activeTab === 'RECRUIT' ? 'text-school-orange' : 'text-gray-400'} hover:text-school-orange transition-colors`}
                     >
                        채용/진로
                     </button>
                     <button 
                        onClick={() => setActiveTab('TRAINING')}
                        className={`${activeTab === 'TRAINING' ? 'text-school-orange' : 'text-gray-400'} hover:text-school-orange transition-colors`}
                     >
                        훈련일정
                     </button>
                  </div>
                  <button className="text-gray-400 hover:text-black">
                     <ExternalLink className="w-4 h-4" />
                  </button>
               </div>
               
               <ul className="space-y-3">
                  {notices.map((notice) => (
                     <li key={notice.id} className="flex justify-between items-center text-sm group cursor-pointer">
                        <div className="flex items-center gap-2 overflow-hidden">
                           <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-school-orange"></span>
                           <span className="truncate text-gray-700 group-hover:underline group-hover:text-school-orange max-w-[280px] md:max-w-[350px]">
                              {notice.title}
                           </span>
                           {notice.new && <span className="bg-red-600 text-white text-[10px] px-1 rounded font-bold">N</span>}
                        </div>
                        <span className="text-gray-400 text-xs whitespace-nowrap font-mono">{notice.date}</span>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Column 3: Popup Zone (Visual) */}
            <div className="md:col-span-1 bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden relative group cursor-pointer h-64 md:h-auto">
               <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1 z-10 rounded-br-lg">
                  ASH GUARD
               </div>
               <img src="https://picsum.photos/seed/special_forces/400/300" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="Recruit" />
               <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
                  <p className="font-bold text-lg">히어로 면허 필기시험</p>
                  <p className="text-xs text-gray-300 mt-1">강현고 고사장: 제1체육관</p>
               </div>
            </div>

            {/* Column 4: Quick Links Banner */}
            <div className="md:col-span-1 flex flex-col gap-4 h-full">
               <div className="flex-1 bg-blue-50 rounded-xl shadow-soft border border-blue-100 p-6 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-blue-100 transition-colors" onClick={() => onNavigate('ADMISSION')}>
                  <div className="bg-blue-100 p-3 rounded-full mb-3 text-blue-600">
                     <Shield className="w-8 h-8 fill-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">ASH GUARD<br/>트랙 신청</h3>
                  <button className="mt-3 bg-blue-600 text-white text-xs px-4 py-1.5 rounded-full font-bold hover:bg-blue-700 transition-colors">
                     지원하기
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* Main Shortcuts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
         <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <button onClick={() => onNavigate('HISTORY')} className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:border-school-orange hover:shadow-md transition-all group h-32">
               <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-2 group-hover:bg-school-orange group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
               </div>
               <span className="font-bold text-gray-700 text-sm">학교소개</span>
            </button>
            <button onClick={() => onNavigate('ADMISSION')} className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:border-school-orange hover:shadow-md transition-all group h-32">
               <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-2 group-hover:bg-school-orange group-hover:text-white transition-colors">
                  <PenTool className="w-6 h-6" />
               </div>
               <span className="font-bold text-gray-700 text-sm">입학/전학 안내</span>
            </button>
            <button onClick={() => onNavigate('CHARACTER')} className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:border-school-orange hover:shadow-md transition-all group h-32">
               <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center mb-2 group-hover:bg-school-orange group-hover:text-white transition-colors">
                  <Users className="w-6 h-6" />
               </div>
               <span className="font-bold text-gray-700 text-sm">교관/교사 소개</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:border-school-orange hover:shadow-md transition-all group h-32">
               <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-2 group-hover:bg-school-orange group-hover:text-white transition-colors">
                  <Crosshair className="w-6 h-6" />
               </div>
               <span className="font-bold text-gray-700 text-sm">모의전투 신청</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:border-school-orange hover:shadow-md transition-all group h-32">
               <div className="w-12 h-12 bg-gray-50 text-gray-500 rounded-full flex items-center justify-center mb-2 group-hover:bg-school-orange group-hover:text-white transition-colors">
                  <Calendar className="w-6 h-6" />
               </div>
               <span className="font-bold text-gray-700 text-sm">학사/훈련 일정</span>
            </button>
         </div>
      </div>

       {/* Banner Slider Section */}
       <div className="bg-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4">
             <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-700">주요 협력 기관</h3>
                <div className="flex gap-1">
                   <button className="w-6 h-6 border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:text-black">&lt;</button>
                   <button className="w-6 h-6 border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:text-black">&gt;</button>
                </div>
             </div>
             <div className="flex gap-4 overflow-hidden">
                <div className="flex-1 bg-white border border-gray-200 p-3 flex items-center justify-center text-center text-xs font-bold text-gray-600 h-16 shadow-sm">
                   ASH GUARD<br/>본부
                </div>
                <div className="flex-1 bg-white border border-gray-200 p-3 flex items-center justify-center text-center text-xs font-bold text-gray-600 h-16 shadow-sm">
                   국가대테러<br/>대책위원회
                </div>
                <div className="flex-1 bg-white border border-gray-200 p-3 flex items-center justify-center text-center text-xs font-bold text-gray-600 h-16 shadow-sm">
                   특수경찰청
                </div>
                <div className="flex-1 bg-white border border-gray-200 p-3 flex items-center justify-center text-center text-xs font-bold text-gray-600 h-16 shadow-sm">
                   국립과학수사<br/>연구원
                </div>
                <div className="flex-1 bg-white border border-gray-200 p-3 flex items-center justify-center text-center text-xs font-bold text-gray-600 h-16 shadow-sm">
                   한국이능력자<br/>협회
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default HomeMenu;