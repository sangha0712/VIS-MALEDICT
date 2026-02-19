import React from 'react';
import { ChevronRight, Home, Brain, Sparkles, Microscope, GraduationCap, Atom } from 'lucide-react';

interface SectionGiftedProps {
  onGoHome: () => void;
}

const SectionGifted: React.FC<SectionGiftedProps> = ({ onGoHome }) => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
       
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">강현 영재 교육원</h2>
             <p className="text-school-sub mt-2 text-sm">조기 발현된 이능력 영재들을 위한 특수 심화 교육 기관입니다.</p>
          </div>
          <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
             <span className="flex items-center cursor-pointer hover:text-school-orange transition-colors" onClick={onGoHome}>
                <Home className="w-3 h-3 mr-1"/> 홈
             </span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span>교육/훈련</span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span className="font-bold text-black">영재교육원</span>
          </div>
       </div>

       {/* Hero Section */}
       <div className="relative rounded-2xl overflow-hidden bg-purple-900 text-white min-h-[300px] flex items-center justify-center text-center p-8 mb-12">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="relative z-10 max-w-2xl">
             <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-purple-400">
                <Brain className="w-8 h-8 text-purple-200" />
             </div>
             <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Unleash Your Potential</h3>
             <p className="text-purple-100 text-base md:text-lg">
                "재능은 발견하는 것이 아니라, 다듬어지는 것입니다."<br/>
                국내 유일의 이능력 제어 및 응용 영재 프로그램을 만나보세요.
             </p>
          </div>
       </div>

       {/* Curriculum Cards */}
       <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-purple-500 transition-all group">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-500 transition-colors">
                   <Sparkles className="w-6 h-6 text-purple-600 group-hover:text-white" />
                </div>
                <h4 className="font-bold text-lg text-gray-800">이능력 제어 기초</h4>
             </div>
             <p className="text-sm text-gray-600 leading-relaxed">
                불안정한 조기 발현 능력을 안정화시키는 명상 및 호흡법 훈련. 
                초등 5-6학년 대상 주말 집중 코스.
             </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-purple-500 transition-all group">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-500 transition-colors">
                   <Atom className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <h4 className="font-bold text-lg text-gray-800">초상 물리학</h4>
             </div>
             <p className="text-sm text-gray-600 leading-relaxed">
                자신의 능력이 물리 법칙에 미치는 영향을 수식으로 이해하고, 
                효율을 극대화하는 이론 수업. 중등부 대상.
             </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-purple-500 transition-all group">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-pink-50 rounded-lg group-hover:bg-pink-500 transition-colors">
                   <Microscope className="w-6 h-6 text-pink-600 group-hover:text-white" />
                </div>
                <h4 className="font-bold text-lg text-gray-800">아티팩트 감정</h4>
             </div>
             <p className="text-sm text-gray-600 leading-relaxed">
                고대 유물 및 마력 깃든 아이템을 식별하고 안전하게 다루는 법을 
                배우는 실습 위주의 심화 과정.
             </p>
          </div>
       </div>

       {/* Admission Info */}
       <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
             <GraduationCap className="w-6 h-6 text-school-orange" />
             <h3 className="text-xl font-bold text-gray-800">2084학년도 선발 안내</h3>
          </div>
          <div className="space-y-4">
             <div className="flex flex-col md:flex-row gap-2 md:gap-4 border-b border-gray-200 pb-4">
                <div className="w-32 font-bold text-gray-700">모집 대상</div>
                <div className="flex-1 text-sm text-gray-600">
                   전국 초등학교 5학년 ~ 중학교 2학년 학생 중<br/>
                   국가 이능력 관리국 등록 등급 C급 이상인 자
                </div>
             </div>
             <div className="flex flex-col md:flex-row gap-2 md:gap-4 border-b border-gray-200 pb-4">
                <div className="w-32 font-bold text-gray-700">전형 일정</div>
                <div className="flex-1 text-sm text-gray-600">
                   원서 접수: 2084. 09. 01 ~ 09. 15<br/>
                   심층 면접 및 영재성 검사: 2084. 10. 10
                </div>
             </div>
             <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <div className="w-32 font-bold text-gray-700">특전</div>
                <div className="flex-1 text-sm text-gray-600">
                   수료 시 강현고등학교 입학 가산점 부여<br/>
                   우수 수료자는 ASH GUARD 유스 팀 추천 기회 제공
                </div>
             </div>
          </div>
          <div className="mt-8 text-center">
             <button className="bg-school-orange text-white px-8 py-3 rounded font-bold hover:bg-orange-600 transition-colors shadow-md w-full md:w-auto">
                모집 요강 다운로드
             </button>
          </div>
       </div>
    </div>
  );
};

export default SectionGifted;