import React, { useState } from 'react';
import { ChevronRight, Home, Search, BookOpen, Lock, FolderLock, Wifi, AlertTriangle, Users } from 'lucide-react';

interface SectionLibraryProps {
  onGoHome: () => void;
}

const SectionLibrary: React.FC<SectionLibraryProps> = ({ onGoHome }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
       
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">아티팩트 도서관</h2>
             <p className="text-school-sub mt-2 text-sm">일반 도서부터 위험 등급이 지정된 금서까지 보관된 지식의 보고입니다.</p>
          </div>
          <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
             <span className="flex items-center cursor-pointer hover:text-school-orange transition-colors" onClick={onGoHome}>
                <Home className="w-3 h-3 mr-1"/> 홈
             </span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span>교육/훈련</span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span className="font-bold text-black">도서관</span>
          </div>
       </div>

       {/* Search Bar Visual */}
       <div className="bg-gray-100 p-8 rounded-xl mb-12 flex flex-col items-center">
          <div className="w-full max-w-2xl relative">
             <input 
                type="text" 
                placeholder="도서명, 저자, 또는 아티팩트 ID를 입력하세요..." 
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-school-orange shadow-sm text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
             />
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
          </div>
          <div className="flex gap-2 mt-4 text-xs text-gray-500">
             <span>인기 검색어:</span>
             <span className="bg-white px-2 py-1 rounded border cursor-pointer hover:text-school-orange">기초 에테르학</span>
             <span className="bg-white px-2 py-1 rounded border cursor-pointer hover:text-school-orange">던전 생태계</span>
             <span className="bg-white px-2 py-1 rounded border cursor-pointer hover:text-school-orange text-red-500">금지된 주술(열람불가)</span>
          </div>
       </div>

       {/* Floor Guide */}
       <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* 2F */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
             <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">2F</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">일반 열람실</span>
             </div>
             <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> 일반 교양 및 전공 서적</li>
                <li className="flex items-center gap-2"><Wifi className="w-4 h-4" /> 디지털 미디어 센터</li>
                <li className="flex items-center gap-2"><Users className="w-4 h-4" /> 그룹 스터디룸</li>
             </ul>
          </div>

          {/* 1F */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
             <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">1F</h3>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">로비 / 간행물</span>
             </div>
             <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> 신착 도서 코너</li>
                <li className="flex items-center gap-2"><Lock className="w-4 h-4" /> 대출/반납 데스크</li>
                <li className="flex items-center gap-2"><Search className="w-4 h-4" /> 정보 검색대</li>
             </ul>
          </div>

          {/* B1 */}
          <div className="border-2 border-red-100 bg-red-50/30 rounded-lg p-6 relative overflow-hidden group">
             <div className="absolute -right-4 -top-4 bg-red-500 text-white text-xs py-1 px-8 rotate-45 font-bold shadow-sm">
                RESTRICTED
             </div>
             <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-red-800">B1</h3>
                <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                   <Lock className="w-3 h-3" /> 특수 자료실
                </span>
             </div>
             <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><FolderLock className="w-4 h-4" /> 아티팩트 도감 (원본)</li>
                <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> 위험 등급 마도서</li>
                <li className="flex items-center gap-2 text-xs text-red-600 font-bold mt-2 pt-2 border-t border-red-200">
                   ※ 보안 등급 B 이상 출입 가능
                </li>
             </ul>
          </div>
       </div>

       {/* Digital Access Banner */}
       <div className="bg-slate-800 text-white rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
             <h3 className="text-xl font-bold mb-2">E-Library 접속 안내</h3>
             <p className="text-slate-300 text-sm">
                재학생은 개인 단말기(PCD)를 통해 24시간 전자도서관을 이용할 수 있습니다.<br/>
                외부 접속 시 2단계 생체 인증이 필요합니다.
             </p>
          </div>
          <button className="mt-4 md:mt-0 bg-school-orange hover:bg-orange-600 px-6 py-3 rounded font-bold transition-colors">
             전자도서관 로그인
          </button>
       </div>
    </div>
  );
};

export default SectionLibrary;