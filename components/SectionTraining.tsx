import React, { useState } from 'react';
import { ChevronRight, Home, Zap, Book, Brain, Activity, Sword, Target, Eye } from 'lucide-react';

interface SectionTrainingProps {
  onGoHome: () => void;
}

const SectionTraining: React.FC<SectionTrainingProps> = ({ onGoHome }) => {
  const [activeTab, setActiveTab] = useState<'HERO' | 'GENERAL'>('HERO');

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
      
       {/* Breadcrumb Header */}
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">훈련/교육 과정</h2>
             <p className="text-school-sub mt-2 text-sm">지성(Mind)과 힘(Force)의 균형을 추구하는 강현만의 커리큘럼입니다.</p>
          </div>
          <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
             <span 
                className="flex items-center cursor-pointer hover:text-school-orange transition-colors" 
                onClick={onGoHome}
             >
                <Home className="w-3 h-3 mr-1"/> 홈
             </span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span className="font-bold text-black">훈련/교육</span>
          </div>
       </div>

       {/* Toggle Switch */}
       <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-full flex gap-1">
             <button 
                onClick={() => setActiveTab('HERO')}
                className={`px-8 py-2 rounded-full font-bold transition-all ${activeTab === 'HERO' ? 'bg-school-orange text-white shadow-md' : 'text-gray-500 hover:text-gray-800'}`}
             >
                히어로 실전 교육
             </button>
             <button 
                onClick={() => setActiveTab('GENERAL')}
                className={`px-8 py-2 rounded-full font-bold transition-all ${activeTab === 'GENERAL' ? 'bg-school-orange text-white shadow-md' : 'text-gray-500 hover:text-gray-800'}`}
             >
                일반/소양 교육
             </button>
          </div>
       </div>

       {/* HERO TRAINING CONTENT */}
       {activeTab === 'HERO' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-left-4 duration-500">
             
             {/* 1. Intro Card */}
             <div className="bg-gray-900 text-white p-8 rounded-xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden shadow-xl">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                 <div className="z-10 flex-1">
                    <div className="flex items-center gap-2 text-yellow-400 font-bold mb-2">
                       <Sword className="w-5 h-5" />
                       <span>COMBAT & TACTICS</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">"실전보다 더 실전 같은 훈련"</h3>
                    <p className="text-gray-300 leading-relaxed">
                       히어로가 된다는 것은 단순히 강한 힘을 갖는 것이 아닙니다. 
                       강현고는 24시간 가동되는 AI 대전 시스템과 VR 시뮬레이터를 통해 
                       어떤 돌발 상황에서도 시민을 구하고 적을 제압할 수 있는 
                       전술적 유연성을 기릅니다.
                    </p>
                 </div>
                 <div className="z-10 w-full md:w-1/3 aspect-video bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
                    <div className="text-center">
                       <Activity className="w-12 h-12 text-red-500 mx-auto mb-2 animate-pulse" />
                       <span className="text-xs font-mono text-gray-400">LIVE SIMULATION..</span>
                    </div>
                 </div>
             </div>

             {/* 2. Core Modules Grid */}
             <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-school-orange hover:shadow-lg transition-all group">
                   <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors">
                      <Zap className="w-6 h-6 text-red-500 group-hover:text-white" />
                   </div>
                   <h4 className="font-bold text-lg mb-2">이능력 제어 및 응용</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                      자신의 능력을 100% 이해하고 폭주 없이 제어하는 법을 배웁니다. 
                      단순 출력이 아닌 정밀 조작과 창의적 활용에 중점을 둡니다.
                   </p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-school-orange hover:shadow-lg transition-all group">
                   <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                      <Target className="w-6 h-6 text-blue-500 group-hover:text-white" />
                   </div>
                   <h4 className="font-bold text-lg mb-2">전술적 상황 판단</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                      인질 구출, 시가전, 재난 현장 등 다양한 시나리오에서 
                      최적의 판단을 내리는 전술적 사고 능력을 배양합니다.
                   </p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-school-orange hover:shadow-lg transition-all group">
                   <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                      <Activity className="w-6 h-6 text-green-500 group-hover:text-white" />
                   </div>
                   <h4 className="font-bold text-lg mb-2">팀워크 & 연계기</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                      다른 속성의 이능력자와 협력하여 시너지를 내는 법을 익힙니다. 
                      ASH GUARD의 기본 단위인 4인 1조 분대 전술을 숙달합니다.
                   </p>
                </div>
             </div>

             {/* 3. Year Roadmap */}
             <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-school-orange pl-3">학년별 로드맵</h3>
                <div className="relative border-l-2 border-gray-200 ml-4 space-y-8">
                   <div className="relative pl-8">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-gray-300"></div>
                      <h4 className="font-bold text-lg text-gray-800">1학년: Foundation (기초)</h4>
                      <p className="text-gray-600 text-sm mt-1">기초 체력 단련, 이능력 발현 원리 이론, 제식 훈련, PCD(제어장치) 적응</p>
                   </div>
                   <div className="relative pl-8">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-school-orange"></div>
                      <h4 className="font-bold text-lg text-gray-800">2학년: Application (응용/심화)</h4>
                      <p className="text-gray-600 text-sm mt-1">학과별 전공 심화, 모의 전투(PvP), 팀 전술 훈련, 장비 커스터마이징</p>
                   </div>
                   <div className="relative pl-8">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-red-500"></div>
                      <h4 className="font-bold text-lg text-gray-800">3학년: Field Experience (실전)</h4>
                      <p className="text-gray-600 text-sm mt-1">ASH GUARD 인턴십, 현장 실습, 히어로 면허 취득, 졸업 과제(작전 설계)</p>
                   </div>
                </div>
             </div>
          </div>
       )}

       {/* GENERAL EDUCATION CONTENT */}
       {activeTab === 'GENERAL' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
             
             {/* 1. Intro */}
             <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl text-center">
                 <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">"올바른 정신이 강력한 힘을 이끕니다"</h3>
                 <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    히어로는 법 위에 군림하는 존재가 아닙니다. 
                    강현고등학교는 초인법, 범죄 심리학, 그리고 일반 교과 과정을 통해 
                    사회 구성원으로서의 책임감과 지성을 갖춘 인재를 양성합니다.
                 </p>
             </div>

             {/* 2. Subject List */}
             <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Book className="w-5 h-5 text-school-orange" />
                      특수 교양 필수
                   </h3>
                   <ul className="space-y-4">
                      <li className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                         <div className="font-bold text-gray-800 mb-1">초인법개론 (Superhuman Law)</div>
                         <p className="text-xs text-gray-500">이능력 사용의 법적 허용 범위, 과잉 진압의 기준, 민형사상 책임에 대한 법률적 이해.</p>
                      </li>
                      <li className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                         <div className="font-bold text-gray-800 mb-1">범죄 심리학 및 협상</div>
                         <p className="text-xs text-gray-500">빌런의 심리 분석, 인질극 상황에서의 대화 기법, 위기 협상론.</p>
                      </li>
                      <li className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                         <div className="font-bold text-gray-800 mb-1">이능력학의 역사</div>
                         <p className="text-xs text-gray-500">대각성(The Great Awakening) 이후의 사회 변화와 히어로 제도의 변천사.</p>
                      </li>
                   </ul>
                </div>

                <div>
                   <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-blue-500" />
                      일반 교과 (수능/내신)
                   </h3>
                   <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-full">
                      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                         경찰대 진학 또는 일반 대학 진학을 희망하는 학생들을 위해 
                         교육부 지정 정규 고등학교 교과 과정을 충실히 이행합니다.
                         야간 자율 학습실(독서실)은 24시간 개방됩니다.
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-sm font-bold text-gray-700">
                         <div className="bg-gray-100 p-2 rounded text-center">국어</div>
                         <div className="bg-gray-100 p-2 rounded text-center">영어 (Global comms)</div>
                         <div className="bg-gray-100 p-2 rounded text-center">수학 (탄도학 기초)</div>
                         <div className="bg-gray-100 p-2 rounded text-center">과학 (물리/생물)</div>
                         <div className="bg-gray-100 p-2 rounded text-center">한국사</div>
                         <div className="bg-gray-100 p-2 rounded text-center">제2외국어</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       )}
    </div>
  );
};

export default SectionTraining;