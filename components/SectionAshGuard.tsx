import React, { useState } from 'react';
import { ChevronRight, Home, Shield, Users, Lock, Zap, Award, HelpCircle, Check, X, Star, GraduationCap, FileText } from 'lucide-react';

interface SectionAshGuardProps {
  onGoHome: () => void;
  initialTab?: string;
}

type TabType = 'SYSTEM' | 'RECRUIT' | 'UNI' | 'COUNSELING' | 'GRADUATES';

const SectionAshGuard: React.FC<SectionAshGuardProps> = ({ onGoHome, initialTab }) => {
  const [activeTab, setActiveTab] = useState<TabType>((initialTab as TabType) || 'SYSTEM');

  const getTabLabel = (tab: TabType) => {
    switch (tab) {
      case 'SYSTEM': return 'ASH GUARD 연계 시스템';
      case 'RECRUIT': return '채용 공고';
      case 'UNI': return '경찰/특수대학 진학';
      case 'COUNSELING': return '진로상담실';
      case 'GRADUATES': return '졸업생 현황';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
       case 'RECRUIT':
          return (
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800">ASH GUARD 채용 공고</h3>
                <div className="space-y-4">
                   {[
                      { title: '2084년 상반기 정규 요원 공채 (강현고 전형 포함)', dday: 'D-5', badge: '채용중' },
                      { title: '전략분석팀 인턴십 (3학년 대상)', dday: 'D-12', badge: '접수중' },
                      { title: '사이버 보안팀 경력직 수시 채용', dday: '상시', badge: '상시' }
                   ].map((item, idx) => (
                      <div key={idx} className="border border-gray-200 p-5 rounded-lg flex justify-between items-center hover:bg-gray-50 cursor-pointer group">
                         <div>
                            <span className="bg-school-orange text-white text-xs px-2 py-0.5 rounded mr-2 font-bold">{item.badge}</span>
                            <span className="font-bold text-gray-800 group-hover:text-school-orange">{item.title}</span>
                         </div>
                         <div className="text-red-500 font-bold">{item.dday}</div>
                      </div>
                   ))}
                </div>
             </div>
          );
       case 'UNI':
          return (
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800">경찰대 및 특수대학 진학</h3>
                <div className="grid md:grid-cols-2 gap-4">
                   <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-serif font-bold text-blue-800">KNP</div>
                         <h4 className="font-bold text-lg text-gray-800">경찰대학 (KNP)</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                         강현고 특별 전형: 정원의 15% 배정<br/>
                         졸업 후 경위 임관 (일반 경찰)
                      </p>
                      <button className="text-xs bg-gray-100 px-3 py-1 rounded">입시요강 보기</button>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center font-serif font-bold text-purple-800">KMA</div>
                         <h4 className="font-bold text-lg text-gray-800">국방마법대학</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                         군 특수부대 장교 양성<br/>
                         마법/이능력 전술학과 우선 선발
                      </p>
                      <button className="text-xs bg-gray-100 px-3 py-1 rounded">입시요강 보기</button>
                   </div>
                </div>
             </div>
          );
       case 'COUNSELING':
          return (
             <div className="py-20 text-center bg-gray-50 border border-gray-200 rounded-lg">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-700 mb-2">진로 상담 신청</h3>
                <p className="text-gray-500 mb-6">로그인 후 상담 신청이 가능합니다.</p>
                <button className="bg-school-orange text-white px-6 py-2 rounded font-bold hover:bg-orange-600">
                   로그인 페이지로 이동
                </button>
             </div>
          );
       case 'GRADUATES':
          return (
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800">자랑스러운 강현인</h3>
                <div className="grid md:grid-cols-3 gap-4">
                   {[
                      { name: '김철수', role: 'ASH GUARD 제1팀장', year: '1회 졸업' },
                      { name: '이영희', role: '국립과학수사연구원 소장', year: '3회 졸업' },
                      { name: '박민수', role: 'S급 히어로 "썬더"', year: '5회 졸업' }
                   ].map((grad, idx) => (
                      <div key={idx} className="text-center p-4 border border-gray-200 rounded bg-white">
                         <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
                         <div className="font-bold text-gray-800">{grad.name}</div>
                         <div className="text-xs text-school-orange font-bold mb-1">{grad.role}</div>
                         <div className="text-xs text-gray-400">{grad.year}</div>
                      </div>
                   ))}
                </div>
             </div>
          );
       default: // SYSTEM
          return (
             <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="bg-gray-900 text-white rounded-2xl p-8 relative overflow-hidden">
                   <h3 className="text-2xl font-bold mb-4">강현에서 시작하는 가장 빠른 히어로의 길</h3>
                   <p className="text-gray-300">
                      강현고등학교는 대한민국 유일의 ASH GUARD 공식 지정 양성 기관입니다.
                      졸업과 동시에 여러분은 '준비된 요원'으로 인정받게 됩니다.
                   </p>
                </div>
             </div>
          );
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">{getTabLabel(activeTab)}</h2>
          </div>
          <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
             <span className="flex items-center cursor-pointer hover:text-school-orange transition-colors" onClick={onGoHome}>
                <Home className="w-3 h-3 mr-1"/> 홈
             </span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span>진로/ASH GUARD</span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span className="font-bold text-black">{getTabLabel(activeTab)}</span>
          </div>
       </div>

       <div className="grid md:grid-cols-4 gap-8">
          <div className="hidden md:block col-span-1">
             <ul className="border-t-2 border-school-orange">
                {[
                   { id: 'SYSTEM', label: 'ASH GUARD 연계 시스템' },
                   { id: 'RECRUIT', label: '채용 공고' },
                   { id: 'UNI', label: '경찰/특수대학 진학' },
                   { id: 'COUNSELING', label: '진로상담실' },
                   { id: 'GRADUATES', label: '졸업생 현황' }
                ].map((item) => (
                   <li 
                      key={item.id}
                      onClick={() => setActiveTab(item.id as TabType)}
                      className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${activeTab === item.id ? 'bg-school-orange text-white font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                   >
                      {item.label}
                   </li>
                ))}
             </ul>
             <button onClick={onGoHome} className="w-full mt-4 py-3 border border-gray-300 text-gray-600 rounded bg-gray-50 hover:bg-gray-100 transition-colors font-bold text-sm">
                메인 화면으로 이동
             </button>
          </div>
          <div className="col-span-3 min-h-[500px]">
             {renderContent()}
          </div>
       </div>
    </div>
  );
};

export default SectionAshGuard;