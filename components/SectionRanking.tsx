import React, { useState } from 'react';
import { ChevronRight, Home, Trophy, TrendingUp, Star, User, Medal } from 'lucide-react';

interface SectionRankingProps {
  onGoHome: () => void;
}

const SectionRanking: React.FC<SectionRankingProps> = ({ onGoHome }) => {
  const [activeTab, setActiveTab] = useState<'STUDENT' | 'PRO'>('STUDENT');

  const studentRankings = [
    { rank: 1, name: '김철수', grade: '3학년', class: '전술과', score: 2850, ability: '염동력 (A+)' },
    { rank: 2, name: '이영희', grade: '3학년', class: '마법과', score: 2790, ability: '화염 마법 (A)' },
    { rank: 3, name: '박민준', grade: '2학년', class: '전술과', score: 2720, ability: '신체 강화 (S)' },
    { rank: 4, name: '최지수', grade: '3학년', class: '정보과', score: 2680, ability: '초고속 연산 (A)' },
    { rank: 5, name: '정태양', grade: '2학년', class: '히어로과', score: 2650, ability: '빛 조작 (A-)' },
  ];

  const proRankings = [
    { rank: 1, name: '썬더볼트', agency: '오로라', score: 15400, type: '전투계' },
    { rank: 2, name: '미스틱', agency: '매직 타워', score: 14200, type: '마법계' },
    { rank: 3, name: '아이언 월', agency: 'ASH GUARD', score: 13800, type: '방어계' },
    { rank: 4, name: '쉐도우', agency: '프리랜서', score: 13500, type: '첩보계' },
    { rank: 5, name: '닥터 힐', agency: '생명의 손', score: 13100, type: '지원계' },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-school-text">히어로 랭킹 포털</h2>
          <p className="text-school-sub mt-2 text-sm">교내 학생 랭킹 및 국내 프로 히어로 실시간 순위입니다.</p>
        </div>
        <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
          <span className="flex items-center cursor-pointer hover:text-school-orange transition-colors" onClick={onGoHome}>
            <Home className="w-3 h-3 mr-1"/> 홈
          </span>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="font-bold text-black">랭킹 포털</span>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveTab('STUDENT')}
          className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${activeTab === 'STUDENT' ? 'bg-school-orange text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
        >
          <User className="w-5 h-5" /> 교내 랭킹 (Monthly)
        </button>
        <button 
          onClick={() => setActiveTab('PRO')}
          className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${activeTab === 'PRO' ? 'bg-blue-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
        >
          <Star className="w-5 h-5" /> 프로 히어로 랭킹
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-bold text-xl text-gray-800 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            {activeTab === 'STUDENT' ? '2084년 5월 교내 종합 랭킹' : '대한민국 히어로 통합 랭킹 (실시간)'}
          </h3>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> 업데이트: 방금 전
          </span>
        </div>
        
        <div className="divide-y divide-gray-100">
          {(activeTab === 'STUDENT' ? studentRankings : proRankings).map((item: any, idx) => (
            <div key={idx} className="p-6 flex items-center hover:bg-gray-50 transition-colors group">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full font-black text-xl mr-6 ${
                item.rank === 1 ? 'bg-yellow-100 text-yellow-600' :
                item.rank === 2 ? 'bg-gray-200 text-gray-600' :
                item.rank === 3 ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'
              }`}>
                {item.rank}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                  {item.rank <= 3 && <Medal className="w-4 h-4 text-yellow-500" />}
                </div>
                <p className="text-sm text-gray-500">
                  {activeTab === 'STUDENT' ? `${item.grade} | ${item.class} | ${item.ability}` : `${item.agency} 소속 | ${item.type}`}
                </p>
              </div>

              <div className="text-right">
                <div className="font-bold text-school-orange text-xl">{item.score.toLocaleString()} P</div>
                <div className="text-xs text-gray-400">랭킹 포인트</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionRanking;
