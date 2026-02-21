import React, { useState } from 'react';
import { ChevronRight, Home, Zap, Activity, Sword, Target, MonitorPlay } from 'lucide-react';

interface SectionTrainingProps {
  onGoHome: () => void;
  initialTab?: string;
}

type TabType = 'CURRICULUM' | 'HERO' | 'GENERAL' | 'AFTER_SCHOOL' | 'ONLINE';

const SectionTraining: React.FC<SectionTrainingProps> = ({ onGoHome, initialTab }) => {
  const [activeTab, setActiveTab] = useState<TabType>((initialTab as TabType) || 'HERO');

  const getTabLabel = (tab: TabType) => {
    switch (tab) {
      case 'CURRICULUM': return '교육과정 안내';
      case 'HERO': return '히어로 실전 훈련';
      case 'GENERAL': return '일반 교과 과정';
      case 'AFTER_SCHOOL': return '방과후 전술 심화';
      case 'ONLINE': return '온라인 전술 학습';
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
      
       {/* Breadcrumb Header */}
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">{getTabLabel(activeTab)}</h2>
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
             <span>교육/훈련</span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span className="font-bold text-black">{getTabLabel(activeTab)}</span>
          </div>
       </div>

       <div className="grid md:grid-cols-4 gap-8">
          {/* Menu Column: Horizontal Scroll on Mobile, Vertical Sidebar on Desktop */}
          <div className="col-span-4 md:col-span-1">
             <ul className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:gap-0 border-b md:border-b-0 border-gray-200 md:border-t-2 md:border-school-orange pb-4 md:pb-0 no-scrollbar">
                {[
                   { id: 'CURRICULUM', label: '교육과정 안내' },
                   { id: 'HERO', label: '히어로 실전 훈련' },
                   { id: 'GENERAL', label: '일반 교과 과정' },
                   { id: 'AFTER_SCHOOL', label: '방과후 전술 심화' },
                   { id: 'ONLINE', label: '온라인 전술 학습' }
                ].map((item) => (
                   <li 
                      key={item.id}
                      onClick={() => setActiveTab(item.id as TabType)}
                      className={`flex-shrink-0 px-4 py-2 md:p-4 md:border-b border-gray-200 cursor-pointer transition-colors rounded-full md:rounded-none text-sm md:text-base ${activeTab === item.id ? 'bg-school-orange text-white md:bg-school-orange md:text-white font-bold' : 'bg-gray-100 md:bg-white text-gray-600 hover:bg-gray-200 md:hover:bg-gray-50'}`}
                   >
                      {item.label}
                   </li>
                ))}
             </ul>
             
             <button onClick={onGoHome} className="hidden md:block w-full mt-4 py-3 border border-gray-300 text-gray-600 rounded bg-gray-50 hover:bg-gray-100 transition-colors font-bold text-sm">
                메인 화면으로 이동
             </button>
          </div>

          <div className="col-span-4 md:col-span-3 min-h-[500px]">
             
             {/* CONTENT RENDER */}
             {activeTab === 'CURRICULUM' && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-8">
                   <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">3-Track System</h3>
                      <p className="text-gray-600 mb-6">
                         학생 개인의 재능과 목표에 맞춰 3가지 전문 트랙을 운영합니다.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                         <div className="bg-white p-4 rounded border border-gray-100 shadow-sm text-center">
                            <div className="font-bold text-red-600 text-lg mb-2">Combat Track</div>
                            <p className="text-xs text-gray-500">전투 요원 양성<br/>(히어로전술과)</p>
                         </div>
                         <div className="bg-white p-4 rounded border border-gray-100 shadow-sm text-center">
                            <div className="font-bold text-blue-600 text-lg mb-2">Intel Track</div>
                            <p className="text-xs text-gray-500">정보 분석/수사<br/>(특수수사과)</p>
                         </div>
                         <div className="bg-white p-4 rounded border border-gray-100 shadow-sm text-center">
                            <div className="font-bold text-green-600 text-lg mb-2">Support Track</div>
                            <p className="text-xs text-gray-500">구조/지원/연구<br/>(레스큐지원과)</p>
                         </div>
                      </div>
                   </div>
                </div>
             )}

             {activeTab === 'HERO' && (
                <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
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
                             강현고는 24시간 가동되는 AI 대전 시스템과 VR 시뮬레이터를 통해 
                             어떤 돌발 상황에서도 시민을 구하고 적을 제압할 수 있는 
                             전술적 유연성을 기릅니다.
                          </p>
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
                            자신의 능력이 100% 이해하고 폭주 없이 제어하는 법을 배웁니다.
                         </p>
                      </div>
                      <div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-school-orange hover:shadow-lg transition-all group">
                         <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                            <Target className="w-6 h-6 text-blue-500 group-hover:text-white" />
                         </div>
                         <h4 className="font-bold text-lg mb-2">전술적 상황 판단</h4>
                         <p className="text-sm text-gray-600 leading-relaxed">
                            인질 구출, 시가전, 재난 현장 등 최적의 판단을 내리는 전술적 사고 능력 배양.
                         </p>
                      </div>
                      <div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-school-orange hover:shadow-lg transition-all group">
                         <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                            <Activity className="w-6 h-6 text-green-500 group-hover:text-white" />
                         </div>
                         <h4 className="font-bold text-lg mb-2">팀워크 & 연계기</h4>
                         <p className="text-sm text-gray-600 leading-relaxed">
                            ASH GUARD의 기본 단위인 4인 1조 분대 전술 숙달.
                         </p>
                      </div>
                   </div>
                </div>
             )}

             {activeTab === 'GENERAL' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                   <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">정규 교과 과정</h3>
                      <p className="text-gray-600 mb-4">
                         경찰대 및 일반 대학 진학을 위한 국/영/수/사/과 집중 이수 과정을 운영합니다.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                         <li>국어: 문학, 독서, 화법과 작문</li>
                         <li>영어: 수능 영어, 실무 회화 (Global Policing)</li>
                         <li>수학: 미적분, 확률과 통계 (탄도학 기초)</li>
                         <li>탐구: 물리학, 생명과학, 정치와 법, 윤리와 사상</li>
                      </ul>
                   </div>
                </div>
             )}

             {activeTab === 'AFTER_SCHOOL' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                   <h3 className="text-xl font-bold text-gray-800">방과후 전술 심화 프로그램</h3>
                   <div className="grid md:grid-cols-2 gap-4">
                      {[
                         { title: 'CQB 마스터 클래스', time: '월/수 19:00', instructor: 'Kaelen Voss' },
                         { title: '사이버 보안 실습', time: '화/목 19:00', instructor: 'Seraphina Nyx (특강)' },
                         { title: '고대어 해독 기초', time: '금 17:00', instructor: 'Elias Thorne' },
                         { title: '드론 조종 자격증반', time: '토 10:00', instructor: '외부 강사' }
                      ].map((item, idx) => (
                         <div key={idx} className="border border-gray-200 p-4 rounded bg-white hover:border-school-orange transition-colors cursor-pointer">
                            <div className="flex justify-between mb-2">
                               <span className="font-bold text-gray-800">{item.title}</span>
                               <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{item.time}</span>
                            </div>
                            <p className="text-sm text-gray-500">지도: {item.instructor}</p>
                         </div>
                      ))}
                   </div>
                </div>
             )}

             {activeTab === 'ONLINE' && (
                <div className="py-20 text-center border border-gray-200 bg-gray-50 rounded-lg animate-in fade-in slide-in-from-right-4 duration-500">
                   <MonitorPlay className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                   <h3 className="text-xl font-bold text-gray-700 mb-2">E-Learning Center</h3>
                   <p className="text-gray-500 mb-6">재학생 전용 온라인 강의 플랫폼입니다.</p>
                   <button 
                      className="bg-school-orange text-white px-6 py-2 rounded font-bold hover:bg-orange-600"
                      onClick={() => alert('LMS(학습관리시스템)에 접속합니다.')}
                   >
                      LMS 접속
                   </button>
                </div>
             )}
          </div>
       </div>
    </div>
  );
};

export default SectionTraining;