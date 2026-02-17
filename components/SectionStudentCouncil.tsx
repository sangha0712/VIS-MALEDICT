import React from 'react';
import { ChevronRight, Home, Users, Megaphone, Star, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';

interface SectionStudentCouncilProps {
  onGoHome: () => void;
}

const SectionStudentCouncil: React.FC<SectionStudentCouncilProps> = ({ onGoHome }) => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
       
       {/* Breadcrumb Header */}
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">학생회 소개</h2>
             <p className="text-school-sub mt-2 text-sm">학생들의 권익을 보호하고 교내 질서를 수호하는 자치 기구입니다.</p>
          </div>
          <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
             <span className="flex items-center cursor-pointer hover:text-school-orange transition-colors" onClick={onGoHome}>
                <Home className="w-3 h-3 mr-1"/> 홈
             </span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span>학생/학부모</span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span className="font-bold text-black">학생회</span>
          </div>
       </div>

       {/* Banner */}
       <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
             <div className="flex-1">
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-white/30">
                   제42대 학생회
                </div>
                <h3 className="text-4xl font-serif font-bold mb-4">"THE WATCHERS"</h3>
                <p className="text-blue-100 leading-relaxed max-w-xl">
                   저희 학생회 '왓쳐스(Watchers)'는 단순한 자치 활동을 넘어, 
                   예비 히어로들이 올바른 정의관을 확립하고 안전한 학교 생활을 
                   영위할 수 있도록 보이지 않는 곳에서 항상 깨어있겠습니다.
                </p>
             </div>
             <div className="w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20">
                <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-white" />
             </div>
          </div>
       </div>

       {/* Structure & President */}
       <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1 bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
             <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                <img src="https://picsum.photos/seed/nyx/200/200" alt="President" className="w-full h-full object-cover" />
             </div>
             <h4 className="text-xl font-bold text-gray-800">Seraphina Nyx</h4>
             <p className="text-school-orange font-bold text-sm mb-4">학생회장 (정보과 3학년)</p>
             <p className="text-gray-600 text-sm leading-relaxed italic">
                "힘에는 책임이 따릅니다. 하지만 그 책임을 혼자 짊어질 필요는 없습니다. 
                우리가 서로의 방패가 되어준다면, 강현은 그 어떤 요새보다 안전할 것입니다."
             </p>
          </div>

          <div className="md:col-span-2">
             <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-school-orange pl-3">조직도 및 주요 업무</h3>
             <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:border-blue-300 transition-colors">
                   <div className="flex items-center gap-2 mb-2 font-bold text-blue-800">
                      <ShieldCheck className="w-5 h-5" /> 선도부 (Enforcement)
                   </div>
                   <p className="text-sm text-gray-600">교내 이능력 오남용 감시, 등하교 지도, 교칙 위반자 징계 위원회 회부.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:border-purple-300 transition-colors">
                   <div className="flex items-center gap-2 mb-2 font-bold text-purple-800">
                      <Users className="w-5 h-5" /> 기획재정부 (Planning)
                   </div>
                   <p className="text-sm text-gray-600">축제(강현제) 및 대련 대회 기획, 동아리 예산 감사, 학생 복지 시설 관리.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:border-green-300 transition-colors">
                   <div className="flex items-center gap-2 mb-2 font-bold text-green-800">
                      <HeartHandshake className="w-5 h-5" /> 대외협력부 (Relations)
                   </div>
                   <p className="text-sm text-gray-600">ASH GUARD 본부 및 타 히어로 고교와의 교류, 지역 사회 봉사 활동 연계.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:border-red-300 transition-colors">
                   <div className="flex items-center gap-2 mb-2 font-bold text-red-800">
                      <Megaphone className="w-5 h-5" /> 홍보부 (Publicity)
                   </div>
                   <p className="text-sm text-gray-600">학교 소식지 'The Guardian' 발행, SNS 채널 운영, 입학 설명회 지원.</p>
                </div>
             </div>
          </div>
       </div>

       {/* Promises */}
       <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">제42대 학생회 주요 공약 이행 현황</h3>
          <div className="space-y-4">
             <div className="flex items-center justify-between bg-white p-4 rounded shadow-sm border-l-4 border-green-500">
                <div>
                   <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded mr-2">완료</span>
                   <span className="font-bold text-gray-800">야간 자율 훈련장 24시간 개방</span>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
             </div>
             <div className="flex items-center justify-between bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
                <div>
                   <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded mr-2">진행중</span>
                   <span className="font-bold text-gray-800">학생 식당 '에너지 회복식' 메뉴 다양화</span>
                </div>
                <div className="text-xs font-bold text-gray-400">75%</div>
             </div>
             <div className="flex items-center justify-between bg-white p-4 rounded shadow-sm border-l-4 border-gray-300">
                <div>
                   <span className="text-xs font-bold text-gray-600 bg-gray-200 px-2 py-0.5 rounded mr-2">예정</span>
                   <span className="font-bold text-gray-800">구형 시뮬레이터(VR) 전면 교체</span>
                </div>
                <div className="text-xs font-bold text-gray-400">예산 확보중</div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default SectionStudentCouncil;