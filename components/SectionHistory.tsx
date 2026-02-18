import React, { useState } from 'react';
import { ChevronRight, Home, Shield, Users, MapPin, Bus, Train, Navigation, CornerDownRight, Building, Target } from 'lucide-react';

interface SectionHistoryProps {
  onGoHome: () => void;
  initialTab?: string;
}

type TabType = 'HISTORY' | 'PHILOSOPHY' | 'BADGE' | 'LOCATION' | 'PRINCIPAL' | 'ORGANIZATION' | 'FACILITY_STATUS';

const SectionHistory: React.FC<SectionHistoryProps> = ({ onGoHome, initialTab }) => {
  const [activeTab, setActiveTab] = useState<TabType>((initialTab as TabType) || 'HISTORY');

  const getTabLabel = (tab: TabType) => {
    switch (tab) {
      case 'HISTORY': return '학교연혁';
      case 'PHILOSOPHY': return '설립이념';
      case 'BADGE': return '교표/상징';
      case 'LOCATION': return '오시는길';
      case 'PRINCIPAL': return '학교장 인사말';
      case 'ORGANIZATION': return '조직도';
      case 'FACILITY_STATUS': return '시설현황';
    }
  };

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
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-6">"정의로운 힘, 지혜로운 헌신"</h3>
                <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
                   강현고등학교는 초인적인 힘을 가진 이들이<br/>
                   그 힘을 올바르게 통제하고 사회를 위해 사용할 수 있도록 교육합니다.
                </p>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-soft border border-gray-100 hover:border-school-orange transition-colors group">
                   <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-school-orange transition-colors">
                      <Shield className="w-8 h-8 text-school-orange group-hover:text-white" />
                   </div>
                   <h4 className="text-xl font-bold mb-3">히어로 양성</h4>
                   <p className="text-gray-600 leading-relaxed text-sm">
                      단순한 전투 능력 배양을 넘어, 시민의 안전을 최우선으로 생각하는 
                      투철한 직업윤리와 희생정신을 갖춘 차세대 히어로를 양성합니다.
                      ASH GUARD와의 협력을 통해 실전과 동일한 환경에서 훈련합니다.
                   </p>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-xl shadow-soft border border-gray-100 hover:border-school-orange transition-colors group">
                   <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                      <Users className="w-8 h-8 text-blue-600 group-hover:text-white" />
                   </div>
                   <h4 className="text-xl font-bold mb-3">보다 나은 인재 양성</h4>
                   <p className="text-gray-600 leading-relaxed text-sm">
                      이능력 유무를 떠나 사회 구성원으로서의 책임을 다하고,
                      법과 질서를 존중하며 공동체의 발전에 기여하는 
                      지덕체를 겸비한 우수 인재를 배출합니다.
                   </p>
                </div>
             </div>
          </div>
        );
      case 'PRINCIPAL':
         return (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
               <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-64 flex-shrink-0">
                     <img src="https://picsum.photos/seed/principal/300/400" alt="Principal" className="w-full rounded-lg shadow-lg" />
                     <div className="mt-4 text-center">
                        <p className="text-lg font-bold">제7대 교장</p>
                        <p className="text-2xl font-serif font-bold text-gray-800">이 강 현</p>
                        <p className="text-sm text-gray-500 mt-1">(전) ASH GUARD 총사령관</p>
                     </div>
                  </div>
                  <div className="flex-1">
                     <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-6">"여러분이 곧 대한민국의 방패입니다."</h3>
                     <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                        <p>
                           사랑하는 강현 가족 여러분, 그리고 미래의 히어로 여러분 안녕하십니까.
                           강현고등학교장 이강현입니다.
                        </p>
                        <p>
                           우리는 지금 대변혁의 시대에 살고 있습니다. 날로 강력해지는 위협 속에서,
                           단순히 힘이 센 영웅이 아닌, 올바른 정신과 냉철한 판단력을 갖춘 
                           '진정한 수호자'가 그 어느 때보다 절실히 요구되고 있습니다.
                        </p>
                        <p>
                           본교는 최첨단 훈련 시설과 최고의 교진을 바탕으로, 여러분의 잠재력을 
                           극한까지 끌어올릴 것입니다. 하지만 잊지 마십시오. 우리가 힘을 기르는 이유는 
                           타인 위에 군림하기 위함이 아니라, 가장 낮은 곳에서 가장 약한 이들을 지키기 위함입니다.
                        </p>
                        <p>
                           여러분의 뜨거운 심장이 이 사회의 희망이 될 수 있도록, 
                           저와 모든 교직원은 최선을 다해 지원하겠습니다.
                        </p>
                        <p className="pt-8 text-right font-serif">
                           2084. 03. 02<br/>
                           강현고등학교장 <strong>이 강 현</strong>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         );
      case 'ORGANIZATION':
         return (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 overflow-x-auto">
               <div className="border border-gray-200 rounded-xl p-8 bg-white text-center min-w-[600px]">
                  <div className="inline-block p-4 border-2 border-school-orange rounded-lg font-bold text-xl mb-8 shadow-sm">교장 (이강현)</div>
                  <div className="h-8 w-px bg-gray-400 mx-auto"></div>
                  <div className="h-px w-2/3 bg-gray-400 mx-auto mb-8"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div>
                        <div className="inline-block p-3 border border-gray-300 rounded bg-gray-50 font-bold mb-4">학교운영위원회</div>
                     </div>
                     <div className="relative">
                        <div className="h-8 w-px bg-gray-400 mx-auto absolute -top-8 left-1/2"></div>
                         <div className="inline-block p-3 border-2 border-blue-500 rounded font-bold mb-4">교감</div>
                         <div className="h-8 w-px bg-gray-400 mx-auto"></div>
                         <div className="h-px w-full bg-gray-400 mx-auto mb-8"></div>
                         <div className="grid grid-cols-4 gap-2 text-sm">
                            <div className="p-2 border rounded bg-white">교무기획부</div>
                            <div className="p-2 border rounded bg-white">훈련교육부</div>
                            <div className="p-2 border rounded bg-white">생활안전부</div>
                            <div className="p-2 border rounded bg-white">진로진학부</div>
                            <div className="p-2 border rounded bg-white">행정실</div>
                            <div className="p-2 border rounded bg-white">시설관리팀</div>
                            <div className="p-2 border rounded bg-white">정보보안팀</div>
                            <div className="p-2 border rounded bg-white">국제협력팀</div>
                         </div>
                     </div>
                     <div>
                        <div className="inline-block p-3 border border-gray-300 rounded bg-gray-50 font-bold mb-4">학부모회</div>
                     </div>
                  </div>
               </div>
            </div>
         );
      case 'FACILITY_STATUS':
         return (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
               <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
                  <p className="text-center text-gray-600 text-sm md:text-base">
                     강현고등학교는 150,000㎡ 부지에 최첨단 훈련 및 교육 시설을 갖추고 있습니다.<br/>
                     상세 위치는 <strong className="text-school-orange cursor-pointer hover:underline" onClick={() => { /* Navigate map */ }}>강현지도</strong> 메뉴에서 확인하실 수 있습니다.
                  </p>
               </div>
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded p-4">
                     <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><Building className="w-5 h-5"/> 일반 교사동</h4>
                     <ul className="text-sm space-y-2 text-gray-600">
                        <li>- 일반 강의실: 45실</li>
                        <li>- 특별 교실(과학/어학): 12실</li>
                        <li>- 대강당 (수용인원 1,000명)</li>
                        <li>- 중앙 도서관</li>
                     </ul>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                     <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><Target className="w-5 h-5 text-red-500"/> 전술 훈련동</h4>
                     <ul className="text-sm space-y-2 text-gray-600">
                        <li>- 제1전술훈련관 (아레나)</li>
                        <li>- 수중 전술 훈련장 (수심 20m)</li>
                        <li>- 사격장 (실탄/에너지탄)</li>
                        <li>- 시뮬레이션 센터 (VR)</li>
                     </ul>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                     <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><Home className="w-5 h-5 text-green-500"/> 생활관</h4>
                     <ul className="text-sm space-y-2 text-gray-600">
                        <li>- 수용 정원: 600명 (전교생 수용 가능)</li>
                        <li>- 2인 1실 (개인 욕실 완비)</li>
                        <li>- 학생 식당 / 매점</li>
                        <li>- 체력 단련실</li>
                     </ul>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                     <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-blue-500"/> 지원 시설</h4>
                     <ul className="text-sm space-y-2 text-gray-600">
                        <li>- 메디컬 센터 (Regen-Pod 보유)</li>
                        <li>- 장비 정비소 (Workshop)</li>
                        <li>- 이능력 측정실</li>
                        <li>- 대나무숲 산책로</li>
                     </ul>
                  </div>
               </div>
            </div>
         );
      case 'BADGE':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
             <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-xl border border-gray-100">
                {/* Large Logo Representation */}
                <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-school-orange to-red-600 text-white rounded-full flex items-center justify-center font-serif font-bold text-6xl md:text-8xl shadow-2xl border-8 border-orange-100 relative overflow-hidden mb-10">
                  <Shield className="w-20 h-20 md:w-32 md:h-32 absolute opacity-20" />
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
                {/* Detailed Street Map Visualization */}
                <div className="w-full h-[300px] md:h-[450px] bg-[#e5e7eb] rounded-lg relative overflow-hidden group">
                   
                   {/* Han River Area */}
                   <div className="absolute bottom-0 left-0 w-full h-1/4 bg-[#a5bfdd] flex items-center justify-center">
                      <span className="text-white font-bold opacity-50 text-xl tracking-widest">HAN RIVER</span>
                   </div>
                   
                   {/* Land / Grid */}
                   <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                   
                   {/* Major Roads */}
                   <div className="absolute top-[30%] left-0 w-full h-6 bg-white border-y border-gray-300"></div> {/* Horizontal Road (World Cup Blvd) */}
                   <div className="absolute top-0 right-[30%] h-full w-8 bg-white border-x border-gray-300"></div> {/* Vertical Road */}

                   {/* Locations */}
                   
                   {/* School Location */}
                   <div className="absolute top-[20%] right-[32%] z-10 flex flex-col items-center">
                      <div className="bg-school-orange text-white px-4 py-2 rounded-lg font-bold shadow-xl border-2 border-white flex items-center gap-2 animate-bounce">
                         <MapPin className="w-5 h-5" />
                         <span className="hidden md:inline">강현고등학교</span>
                         <span className="md:hidden">강현고</span>
                      </div>
                      <div className="w-1 h-8 bg-gray-800"></div>
                      <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                   </div>

                   {/* Subway Station */}
                   <div className="absolute top-[35%] right-[10%] flex flex-col items-center group/station cursor-pointer">
                      <div className="w-10 h-10 bg-yellow-500 rounded-full border-2 border-white shadow-md flex items-center justify-center font-bold text-white text-xs z-10">
                         DMC
                      </div>
                      <span className="bg-white/90 text-xs px-2 py-0.5 rounded shadow mt-1 font-bold">디지털미디어시티역</span>
                   </div>

                   {/* Bus Stop */}
                   <div className="absolute top-[32%] right-[25%] flex flex-col items-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full border border-white shadow-sm flex items-center justify-center text-white">
                         <Bus className="w-3 h-3" />
                      </div>
                   </div>

                   {/* Landmark: World Cup Park */}
                   <div className="absolute top-[10%] left-[10%] w-32 md:w-40 h-24 md:h-32 bg-green-200/50 rounded-xl border border-green-300 flex items-center justify-center">
                      <span className="text-green-800 font-bold text-xs">월드컵공원</span>
                   </div>

                   {/* Landmark: ASH GUARD HQ */}
                   <div className="absolute top-[50%] right-[35%] w-24 md:w-32 h-16 md:h-24 bg-slate-700 rounded-lg border border-slate-600 flex items-center justify-center shadow-lg">
                      <div className="text-center">
                        <Shield className="w-4 h-4 md:w-6 md:h-6 text-gray-400 mx-auto mb-1" />
                        <span className="text-gray-200 font-bold text-[8px] md:text-[10px]">ASH GUARD<br/>제3지부</span>
                      </div>
                   </div>

                   <div className="absolute bottom-4 right-4 bg-white/90 p-2 text-xs rounded shadow text-gray-600 z-20">
                      2084 Mapo-gu Digital Map
                   </div>
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-school-orange pl-3">주소 및 연락처</h3>
                   <ul className="space-y-4 text-gray-600 text-sm md:text-base">
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
                            <p>상암 DMC 랜드마크 타워 북서쪽 500m 지점<br/>(ASH GUARD 제3지부 및 월드컵공원 인접)</p>
                         </div>
                      </li>
                   </ul>
                </div>

                <div>
                   <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-school-orange pl-3">교통편 안내 (2084 기준)</h3>
                   <ul className="space-y-4 text-gray-600 text-sm md:text-base">
                      <li className="flex items-start gap-3">
                         <Train className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                         <div>
                            <p className="font-bold text-gray-800">지하철/하이퍼튜브</p>
                            <p className="text-sm">
                               <span className="bg-orange-100 text-orange-800 px-1 rounded font-bold mr-1">6호선</span>
                               <span className="bg-cyan-100 text-cyan-800 px-1 rounded font-bold mr-1">경의중앙</span>
                               <span className="bg-blue-100 text-blue-800 px-1 rounded font-bold mr-1">공항철도</span>
                               디지털미디어시티역 9번 출구 (도보 10분)
                            </p>
                         </div>
                      </li>
                      <li className="flex items-start gap-3">
                         <Bus className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                         <div>
                            <p className="font-bold text-gray-800">자율주행 버스</p>
                            <p className="text-sm">
                               <CornerDownRight className="w-3 h-3 inline mr-1" />
                               정류장 ID: 14-205 (강현고교.ASH GUARD 지부) 하차
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

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
      
       {/* Breadcrumb Header */}
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-2xl md:text-3xl font-bold text-school-text">{getTabLabel(activeTab)}</h2>
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
          {/* Menu Column: Horizontal Scroll on Mobile, Vertical Sidebar on Desktop */}
          <div className="col-span-4 md:col-span-1">
             <ul className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:gap-0 border-b md:border-b-0 border-gray-200 md:border-t-2 md:border-school-orange pb-4 md:pb-0 no-scrollbar">
                {[
                   { id: 'HISTORY', label: '학교연혁' },
                   { id: 'PHILOSOPHY', label: '설립이념' },
                   { id: 'BADGE', label: '교표/상징' },
                   { id: 'LOCATION', label: '오시는길' },
                   { id: 'PRINCIPAL', label: '학교장 인사말' },
                   { id: 'ORGANIZATION', label: '조직도' },
                   { id: 'FACILITY_STATUS', label: '시설현황' }
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
             {renderContent()}
          </div>
       </div>
    </div>
  );
};

export default SectionHistory;