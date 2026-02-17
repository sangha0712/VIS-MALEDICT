import React, { useState } from 'react';
import { ChevronRight, Home, Shield, Target, Users, MapPin, Bus, Train, Navigation } from 'lucide-react';

interface SectionHistoryProps {
  onGoHome: () => void;
}

type TabType = 'HISTORY' | 'PHILOSOPHY' | 'BADGE' | 'LOCATION';

const SectionHistory: React.FC<SectionHistoryProps> = ({ onGoHome }) => {
  const [activeTab, setActiveTab] = useState<TabType>('HISTORY');

  const renderContent = () => {
    switch (activeTab) {
      case 'HISTORY':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
             {/* Year Block: 2080s */}
             <div>
                <h3 className="text-2xl font-bold text-school-orange mb-6 flex items-center">
                   <span className="w-2 h-8 bg-school-orange mr-3"></span>
                   2080년대
                </h3>
                <div className="border-l border-gray-200 ml-4 space-y-8 pb-4">
                   <div className="relative pl-8">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white border-2 border-school-orange rounded-full"></div>
                      <span className="font-bold text-lg text-gray-800 block mb-1">2084. 03. 02</span>
                      <p className="text-gray-600">제42회 입학식 (역대 최대 규모 450명 입학)</p>
                   </div>
                   <div className="relative pl-8">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white border-2 border-school-orange rounded-full"></div>
                      <span className="font-bold text-lg text-gray-800 block mb-1">2083. 05. 20</span>
                      <p className="text-gray-600">제2캠퍼스(해상 전술 훈련장) 준공</p>
                   </div>
                   <div className="relative pl-8">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white border-2 border-school-orange rounded-full"></div>
                      <span className="font-bold text-lg text-gray-800 block mb-1">2081. 03. 01</span>
                      <p className="text-gray-600">인공지능 교관 시스템 'GHOST' v4.0 전면 도입</p>
                   </div>
                </div>
             </div>
             
             {/* Year Block: 2070s */}
             <div>
                <h3 className="text-2xl font-bold text-gray-500 mb-6 flex items-center">
                   <span className="w-2 h-8 bg-gray-300 mr-3"></span>
                   2070년대
                </h3>
                <div className="border-l border-gray-200 ml-4 space-y-8 pb-4">
                   <div className="relative pl-8">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full"></div>
                      <span className="font-bold text-lg text-gray-600 block mb-1">2077. 03. 01</span>
                      <p className="text-gray-500">특수경찰과/히어로과 통합 및 학제 개편</p>
                   </div>
                   <div className="relative pl-8">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full"></div>
                      <span className="font-bold text-lg text-gray-600 block mb-1">2075. 05. 20</span>
                      <p className="text-gray-500">ASH GUARD 인재 양성 MOU 체결 (최우수 등급 획득)</p>
                   </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white border-2 border-gray-400 rounded-full"></div>
                      <span className="font-bold text-lg text-gray-600 block mb-1">2073. 11. 11</span>
                      <p className="text-gray-500">실전 전술 훈련장 '아레나' 준공</p>
                   </div>
                </div>
             </div>

             {/* Year Block: 2040s */}
             <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-6 flex items-center">
                   <span className="w-2 h-8 bg-gray-300 mr-3"></span>
                   2040년대
                </h3>
                 <div className="border-l border-gray-200 ml-4 space-y-8 pb-4">
                   <div className="relative pl-8">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="font-bold text-lg text-gray-500 block mb-1">2045. 01. 10</span>
                      <p className="text-gray-400">특수목적고등학교 지정 (치안/국방 분야)</p>
                   </div>
                   <div className="relative pl-8">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="font-bold text-lg text-gray-500 block mb-1">2042. 03. 01</span>
                      <p className="text-gray-400">강현고등학교 개교 (초대 교장: 치안총감 김정의)</p>
                   </div>
                </div>
             </div>
          </div>
        );

      case 'PHILOSOPHY':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
             <div className="text-center py-10 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-3xl font-serif font-bold text-gray-800 mb-6">"정의로운 힘, 지혜로운 헌신"</h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                   강현고등학교는 초인적인 힘을 가진 이들이<br/>
                   그 힘을 올바르게 통제하고 사회를 위해 사용할 수 있도록 교육합니다.
                </p>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 hover:border-school-orange transition-colors group">
                   <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-school-orange transition-colors">
                      <Shield className="w-8 h-8 text-school-orange group-hover:text-white" />
                   </div>
                   <h4 className="text-xl font-bold mb-3">히어로 양성</h4>
                   <p className="text-gray-600 leading-relaxed">
                      단순한 전투 능력 배양을 넘어, 시민의 안전을 최우선으로 생각하는 
                      투철한 직업윤리와 희생정신을 갖춘 차세대 히어로를 양성합니다.
                      ASH GUARD와의 협력을 통해 실전과 동일한 환경에서 훈련합니다.
                   </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 hover:border-school-orange transition-colors group">
                   <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                      <Users className="w-8 h-8 text-blue-600 group-hover:text-white" />
                   </div>
                   <h4 className="text-xl font-bold mb-3">보다 나은 인재 양성</h4>
                   <p className="text-gray-600 leading-relaxed">
                      이능력 유무를 떠나 사회 구성원으로서의 책임을 다하고,
                      법과 질서를 존중하며 공동체의 발전에 기여하는 
                      지덕체를 겸비한 우수 인재를 배출합니다.
                   </p>
                </div>
             </div>

             <div className="bg-gray-800 text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between">
                <div>
                   <h4 className="text-xl font-bold mb-2">교육 목표 (Education Goals)</h4>
                   <ul className="space-y-2 text-gray-300">
                      <li>• 정의감과 도덕성에 기반한 인성 교육</li>
                      <li>• 상황 대처 능력 향상을 위한 실무 중심 교육</li>
                      <li>• 글로벌 치안 환경에 대응하는 융합 교육</li>
                   </ul>
                </div>
                <Target className="w-24 h-24 text-gray-700 md:mr-8 mt-6 md:mt-0" />
             </div>
          </div>
        );

      case 'BADGE':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
             <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-xl border border-gray-100">
                {/* Large Logo Representation */}
                <div className="w-48 h-48 bg-gradient-to-br from-school-orange to-red-600 text-white rounded-full flex items-center justify-center font-serif font-bold text-8xl shadow-2xl border-8 border-orange-100 relative overflow-hidden mb-10">
                  <Shield className="w-32 h-32 absolute opacity-20" />
                  <span className="relative z-10">G</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">강현(Ganghyeon)의 상징</h3>
                <p className="text-gray-500">School Badge & Identity</p>
             </div>

             <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 p-6 rounded-lg text-center">
                   <div className="text-school-orange font-bold text-lg mb-2">Shape</div>
                   <h4 className="font-bold text-gray-800 mb-2">방패 (Shield)</h4>
                   <p className="text-sm text-gray-600">
                      시민을 보호하고 악을 막아내는<br/>
                      ASH GUARD와 경찰의<br/>
                      수호 의지를 상징합니다.
                   </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg text-center">
                   <div className="text-school-orange font-bold text-lg mb-2">Color</div>
                   <h4 className="font-bold text-gray-800 mb-2">오렌지 (Safety Orange)</h4>
                   <p className="text-sm text-gray-600">
                      구조, 경고, 그리고<br/>
                      위험 속에서도 빛나는<br/>
                      희망과 용기를 의미합니다.
                   </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg text-center">
                   <div className="text-school-orange font-bold text-lg mb-2">Letter</div>
                   <h4 className="font-bold text-gray-800 mb-2">이니셜 G</h4>
                   <p className="text-sm text-gray-600">
                      강현(Ganghyeon)의 첫 글자이자<br/>
                      Guardian(수호자)의<br/>
                      중의적 의미를 담고 있습니다.
                   </p>
                </div>
             </div>
          </div>
        );

      case 'LOCATION':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
             <div className="bg-white p-1 rounded-xl border border-gray-200 shadow-soft">
                {/* Fake Map Visualization */}
                <div className="w-full h-[400px] bg-gray-200 rounded-lg relative overflow-hidden group">
                   <img src="https://picsum.photos/seed/mapo/1200/600" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" alt="Map" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-school-orange text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 animate-bounce">
                         <MapPin className="w-5 h-5" />
                         강현고등학교
                      </div>
                   </div>
                   <div className="absolute bottom-4 right-4 bg-white/90 p-2 text-xs rounded shadow text-gray-600">
                      Map Data ©2084 Naver Corp.
                   </div>
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-school-orange pl-3">주소 및 연락처</h3>
                   <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start gap-3">
                         <MapPin className="w-5 h-5 text-school-orange flex-shrink-0 mt-0.5" />
                         <div>
                            <p className="font-bold text-gray-800">도로명 주소</p>
                            <p>서울특별시 마포구 월드컵북로 404 강현고등학교 (우: 03925)</p>
                         </div>
                      </li>
                      <li className="flex items-start gap-3">
                         <Navigation className="w-5 h-5 text-school-orange flex-shrink-0 mt-0.5" />
                         <div>
                            <p className="font-bold text-gray-800">위치 설명</p>
                            <p>상암 DMC 랜드마크 타워 북서쪽 500m 지점 (ASH GUARD 제3지부 옆)</p>
                         </div>
                      </li>
                   </ul>
                </div>

                <div>
                   <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-school-orange pl-3">교통편 안내 (2084 기준)</h3>
                   <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start gap-3">
                         <Train className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                         <div>
                            <p className="font-bold text-gray-800">지하철/하이퍼튜브</p>
                            <p className="text-sm">
                               <span className="bg-orange-100 text-orange-800 px-1 rounded font-bold mr-1">6호선</span>
                               디지털미디어시티역 9번 출구 (도보 10분)<br/>
                               <span className="bg-blue-100 text-blue-800 px-1 rounded font-bold mr-1">GTX-E</span>
                               상암역 2번 출구 (셔틀버스 환승)
                            </p>
                         </div>
                      </li>
                      <li className="flex items-start gap-3">
                         <Bus className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                         <div>
                            <p className="font-bold text-gray-800">자율주행 버스</p>
                            <p className="text-sm">
                               간선 710, 271, 470 (강현고 입구 하차)<br/>
                               지선 7011, 7013 (후문 하차)
                            </p>
                         </div>
                      </li>
                   </ul>
                </div>
             </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getTabLabel = (tab: TabType) => {
    switch (tab) {
      case 'HISTORY': return '학교연혁';
      case 'PHILOSOPHY': return '설립이념';
      case 'BADGE': return '교표';
      case 'LOCATION': return '오시는길';
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
      
       {/* Breadcrumb Header */}
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">{getTabLabel(activeTab)}</h2>
             <p className="text-school-sub mt-2 text-sm">정의를 수호하는 강현의 발자취와 정신입니다.</p>
          </div>
          <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
             <span 
                className="flex items-center cursor-pointer hover:text-school-orange transition-colors" 
                onClick={onGoHome}
             >
                <Home className="w-3 h-3 mr-1"/> 홈
             </span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span>학교소개</span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span className="font-bold text-black">{getTabLabel(activeTab)}</span>
          </div>
       </div>

       <div className="grid md:grid-cols-4 gap-8">
          {/* Side Menu */}
          <div className="hidden md:block col-span-1">
             <ul className="border-t-2 border-school-orange">
                <li 
                   onClick={() => setActiveTab('HISTORY')}
                   className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${activeTab === 'HISTORY' ? 'bg-school-orange text-white font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                >
                   학교연혁
                </li>
                <li 
                   onClick={() => setActiveTab('PHILOSOPHY')}
                   className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${activeTab === 'PHILOSOPHY' ? 'bg-school-orange text-white font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                >
                   설립이념
                </li>
                <li 
                   onClick={() => setActiveTab('BADGE')}
                   className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${activeTab === 'BADGE' ? 'bg-school-orange text-white font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                >
                   교표
                </li>
                <li 
                   onClick={() => setActiveTab('LOCATION')}
                   className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${activeTab === 'LOCATION' ? 'bg-school-orange text-white font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                >
                   오시는길
                </li>
             </ul>
             
             {/* Back Button for Side Menu */}
             <button 
                onClick={onGoHome}
                className="w-full mt-4 py-3 border border-gray-300 text-gray-600 rounded bg-gray-50 hover:bg-gray-100 transition-colors font-bold text-sm"
             >
                메인 화면으로 이동
             </button>
          </div>

          {/* Main Content */}
          <div className="col-span-3 min-h-[500px]">
             {renderContent()}
             
             {/* Mobile Home Button */}
             <div className="md:hidden mt-8 text-center">
               <button 
                  onClick={onGoHome}
                  className="px-6 py-2 bg-gray-100 border border-gray-300 text-gray-600 rounded-full font-bold text-sm"
               >
                  메인으로 돌아가기
               </button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default SectionHistory;