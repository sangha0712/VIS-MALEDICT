import React, { useState } from 'react';
import { ChevronRight, Home, Users, MessageCircle, Search, Heart, ShieldAlert } from 'lucide-react';

interface SectionStudentLifeProps {
  onGoHome: () => void;
  initialTab?: string;
}

type TabType = 'CLUBS' | 'BAMBOO' | 'LOST_FOUND' | 'PARENTS' | 'VIOLENCE';

const SectionStudentLife: React.FC<SectionStudentLifeProps> = ({ onGoHome, initialTab }) => {
  const [activeTab, setActiveTab] = useState<TabType>((initialTab as TabType) || 'CLUBS');

  const getTabLabel = (tab: TabType) => {
    switch (tab) {
      case 'CLUBS': return '동아리 활동';
      case 'BAMBOO': return '대나무숲 (익명)';
      case 'LOST_FOUND': return '분실물 센터';
      case 'PARENTS': return '학부모회';
      case 'VIOLENCE': return '학교폭력신고';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'CLUBS':
         return (
            <div className="space-y-6">
               <h3 className="text-xl font-bold text-gray-800 border-l-4 border-school-orange pl-3 mb-4">주요 동아리 안내</h3>
               <div className="grid md:grid-cols-2 gap-4">
                  {[
                     { name: 'Tactical OPS', cat: '학술/전술', desc: '소대 단위 전술 연구 및 모의전' },
                     { name: 'Artifact Hunters', cat: '탐사', desc: '고대 유물 발굴 및 감정 연구' },
                     { name: 'Code: Breaker', cat: '정보/해킹', desc: '사이버 보안 및 암호 해독' },
                     { name: 'Healer\'s Hand', cat: '봉사/의료', desc: '지역 사회 의료 봉사 및 응급처치' }
                  ].map((club, idx) => (
                     <div key={idx} className="border border-gray-200 p-5 rounded-lg hover:shadow-md transition-shadow bg-white">
                        <div className="flex justify-between items-start mb-2">
                           <h4 className="font-bold text-lg text-gray-800">{club.name}</h4>
                           <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{club.cat}</span>
                        </div>
                        <p className="text-sm text-gray-600">{club.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         );
      case 'VIOLENCE':
         return (
            <div className="bg-red-50 border border-red-200 p-8 rounded-xl text-center">
               <ShieldAlert className="w-16 h-16 text-red-600 mx-auto mb-4" />
               <h3 className="text-2xl font-bold text-red-700 mb-4">학교폭력 및 가혹행위 신고</h3>
               <p className="text-gray-700 mb-8 max-w-xl mx-auto">
                  강현고등학교는 학교폭력에 대해 <strong>무관용 원칙</strong>을 적용합니다.<br/>
                  신고자의 신원은 철저히 보장되며, 가해자는 즉시 분리 조치됩니다.
               </p>
               <div className="flex justify-center gap-4">
                  <button className="bg-red-600 text-white px-8 py-3 rounded font-bold hover:bg-red-700 shadow-lg">
                     익명 신고하기
                  </button>
                  <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded font-bold hover:bg-gray-50">
                     상담 신청
                  </button>
               </div>
            </div>
         );
      default:
         return (
            <div className="py-20 text-center bg-gray-50 border border-gray-200 rounded-lg">
               <p className="text-gray-500">회원 공개 게시판입니다. 로그인 후 이용해주세요.</p>
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
             <span>학생/학부모</span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span className="font-bold text-black">{getTabLabel(activeTab)}</span>
          </div>
       </div>

       <div className="grid md:grid-cols-4 gap-8">
          <div className="hidden md:block col-span-1">
             <ul className="border-t-2 border-school-orange text-sm font-medium">
                {[
                   { id: 'CLUBS', label: '동아리 활동', icon: Users },
                   { id: 'BAMBOO', label: '대나무숲', icon: MessageCircle },
                   { id: 'LOST_FOUND', label: '분실물 센터', icon: Search },
                   { id: 'PARENTS', label: '학부모회', icon: Heart },
                   { id: 'VIOLENCE', label: '학교폭력신고', icon: ShieldAlert }
                ].map((item) => (
                   <li 
                      key={item.id}
                      onClick={() => setActiveTab(item.id as TabType)}
                      className={`p-4 border-b border-gray-200 cursor-pointer flex items-center gap-3 transition-colors ${activeTab === item.id ? 'bg-school-orange text-white font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                   >
                      <item.icon className="w-4 h-4" />
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

export default SectionStudentLife;