import React, { useState } from 'react';
import { ChevronRight, Home, MapPin, Info, X } from 'lucide-react';

interface SectionMapProps {
  onGoHome: () => void;
}

interface Building {
  id: string;
  name: string;
  description: string;
  facilities: string[];
  pos: { top: string; left: string };
  color: string;
}

const SectionMap: React.FC<SectionMapProps> = ({ onGoHome }) => {
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);

  const buildings: Building[] = [
    {
      id: 'main',
      name: '본관 (Headquarters)',
      description: '학교 행정의 중심이자 일반 교과 수업이 이루어지는 곳입니다. 교장실, 행정실, 일반 교실이 위치해 있습니다. 중앙 광장을 마주보고 있습니다.',
      facilities: ['교무실', '행정실', '방송실', '이사장실'],
      pos: { top: '45%', left: '50%' },
      color: 'bg-blue-600'
    },
    {
      id: 'arena',
      name: '제1전술훈련관 (The Arena)',
      description: '실전 모의 전투 훈련을 위한 최첨단 시설입니다. 돔 형태의 경기장 내부에는 홀로그램 시뮬레이션실과 대규모 대련장이 갖춰져 있습니다.',
      facilities: ['대련장', '사격장', '무기고', '전술분석실'],
      pos: { top: '35%', left: '75%' },
      color: 'bg-red-600'
    },
    {
      id: 'dorm',
      name: '생활관 (Barracks)',
      description: '학생들의 거주 공간입니다. 전원 기숙사 생활이 원칙이며, 24시간 보안 시스템이 가동됩니다. 북쪽 숲과 인접해 있어 조용합니다.',
      facilities: ['학생식당', '체력단련실', '의무실', '휴게실'],
      pos: { top: '20%', left: '35%' },
      color: 'bg-green-600'
    },
    {
      id: 'lab',
      name: '특수연구동 (R&D Center)',
      description: '이능력 분석 및 아티팩트 연구가 진행되는 곳입니다. 지하 벙커와 연결되어 있으며 출입 권한이 없는 학생은 접근할 수 없습니다.',
      facilities: ['이능력측정실', '장비개발실', '사이버보안센터', '도서관'],
      pos: { top: '65%', left: '75%' },
      color: 'bg-purple-600'
    },
    {
      id: 'field',
      name: '대운동장 (Parade Ground)',
      description: '기초 체력 훈련 및 각종 행사가 열리는 야외 운동장입니다. 아침 점호가 이곳에서 실시됩니다.',
      facilities: ['육상트랙', '장애물코스', '조례대'],
      pos: { top: '70%', left: '30%' },
      color: 'bg-yellow-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 animate-in fade-in duration-500">
      
       {/* Breadcrumb Header */}
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">강현지도 (Campus Map)</h2>
             <p className="text-school-sub mt-2 text-sm">대학교 규모의 최첨단 훈련 시설을 갖춘 강현 캠퍼스 안내입니다.</p>
          </div>
          <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
             <span 
                className="flex items-center cursor-pointer hover:text-school-orange transition-colors" 
                onClick={onGoHome}
             >
                <Home className="w-3 h-3 mr-1"/> 홈
             </span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span>강현광장</span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span className="font-bold text-black">강현지도</span>
          </div>
       </div>

       <div className="flex flex-col lg:flex-row gap-6">
          {/* Detailed Map Visualization Area */}
          <div className="flex-1 bg-[#F5F5F5] rounded-xl overflow-hidden border border-gray-300 relative h-[600px] shadow-inner group select-none">
             
             {/* Map Background Layer (Flat Street Map Style) */}
             <div className="absolute inset-0 bg-[#F2F4F7]">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                
                {/* Roads */}
                {/* Main Horizontal Road */}
                <div className="absolute top-[55%] left-0 w-full h-12 bg-white border-y-2 border-gray-300 shadow-sm"></div>
                {/* Main Vertical Road */}
                <div className="absolute top-0 left-[45%] h-full w-12 bg-white border-x-2 border-gray-300 shadow-sm"></div>
                {/* Intersection Cleanup */}
                <div className="absolute top-[55%] left-[45%] w-12 h-12 bg-white z-0"></div>

                {/* Secondary Roads */}
                <div className="absolute top-[25%] left-0 w-[45%] h-6 bg-white border-y border-gray-300"></div>
                <div className="absolute top-[55%] right-0 w-[30%] h-32 bg-gray-100 border border-gray-300 transform -skew-x-12 origin-top-left"></div>

                {/* Campus Zones (Blocks) */}
                {/* Main Building Block */}
                <div className="absolute top-[40%] left-[45%] w-40 h-24 bg-[#E8EAED] border border-[#DADCE0] rounded transform -translate-x-1/2 -translate-y-1/2 shadow-sm"></div>
                
                {/* Arena Block (Dome shape hint) */}
                <div className="absolute top-[30%] left-[70%] w-40 h-40 bg-[#E8EAED] border border-[#DADCE0] rounded-full shadow-sm"></div>

                {/* Dorm Block */}
                <div className="absolute top-[15%] left-[30%] w-24 h-32 bg-[#E8EAED] border border-[#DADCE0] rounded shadow-sm"></div>
                
                {/* Lab Block */}
                <div className="absolute top-[60%] left-[70%] w-32 h-32 bg-[#E8EAED] border border-[#DADCE0] rounded-lg transform rotate-6 shadow-sm"></div>

                {/* Field (Green Zone) */}
                <div className="absolute top-[65%] left-[20%] w-48 h-32 bg-[#E6F4EA] border border-[#CEEAD6] rounded-xl shadow-inner">
                   <div className="absolute top-1/2 left-1/2 w-[90%] h-[90%] border-2 border-dashed border-white/60 transform -translate-x-1/2 -translate-y-1/2 rounded-lg"></div>
                </div>

                {/* Park/Forest Area */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E6F4EA] border-b border-l border-[#CEEAD6] rounded-bl-[80px]"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#E6F4EA] border-t border-r border-[#CEEAD6] rounded-tr-[60px]"></div>

                {/* Water (Han River hint) */}
                <div className="absolute bottom-4 right-[-5%] w-64 h-24 bg-[#AECBFA] transform -rotate-12 rounded-full opacity-50"></div>

                {/* Main Gate Area Label */}
                <div className="absolute bottom-4 left-[45%] -translate-x-1/2 bg-white/90 px-4 py-1 rounded-full border border-gray-300 shadow-md z-10 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                    <span className="text-xs font-bold text-gray-800">정문 (Main Gate)</span>
                </div>
             </div>

             {/* Interactive Building Markers */}
             {buildings.map((b) => (
                <button
                   key={b.id}
                   onClick={() => setSelectedBuilding(b)}
                   style={{ top: b.pos.top, left: b.pos.left }}
                   className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/marker z-10 transition-transform duration-300 ${selectedBuilding?.id === b.id ? 'scale-110 z-30' : 'hover:scale-110'}`}
                >
                   {/* Marker Icon */}
                   <div className={`p-3 md:p-4 rounded-full ${b.color} text-white shadow-2xl border-4 border-white relative ring-4 ring-black/5`}>
                      <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                      {/* Pulse Effect for selected */}
                      {selectedBuilding?.id === b.id && (
                        <span className="absolute inset-0 rounded-full bg-white opacity-50 animate-ping"></span>
                      )}
                   </div>
                   
                   {/* Building Label */}
                   <span className="mt-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg text-gray-800 whitespace-nowrap border border-gray-200 group-hover/marker:bg-school-orange group-hover/marker:text-white transition-colors">
                      {b.name.split(' ')[0]}
                   </span>
                </button>
             ))}

             {/* Compass & Legend */}
             <div className="absolute top-6 right-6 bg-white/95 p-4 rounded-xl backdrop-blur-md text-xs text-gray-600 border border-gray-200 shadow-lg pointer-events-none z-20">
                <div className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center mb-3 mx-auto relative bg-gray-50">
                    <span className="font-serif font-bold text-red-600 absolute -top-2 bg-white px-1">N</span>
                    <div className="w-0.5 h-3/4 bg-red-500/50 absolute top-1.5 transform"></div>
                    <div className="w-3/4 h-0.5 bg-gray-400 absolute transform"></div>
                </div>
                <div className="space-y-2 font-medium">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-600 rounded-full shadow-sm"></div>교육/행정</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-600 rounded-full shadow-sm"></div>전술훈련</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-600 rounded-full shadow-sm"></div>거주구역</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-purple-600 rounded-full shadow-sm"></div>연구시설</div>
                </div>
             </div>
          </div>

          {/* Details Sidebar / Overlay for Mobile */}
          <div className={`
              lg:w-80 bg-white border-2 border-school-orange rounded-xl shadow-xl overflow-hidden flex flex-col
              fixed lg:static bottom-4 left-4 right-4 lg:bottom-auto lg:left-auto lg:right-auto z-40
              transition-all duration-300
              ${selectedBuilding ? 'translate-y-0 opacity-100' : 'translate-y-[120%] lg:translate-y-0 lg:opacity-50 lg:pointer-events-none'}
          `}>
             <div className="bg-school-orange p-4 flex justify-between items-center text-white">
                 <h3 className="font-bold text-lg">{selectedBuilding?.name || "건물 정보"}</h3>
                 <button onClick={() => setSelectedBuilding(null)} className="lg:hidden hover:bg-white/20 rounded p-1">
                     <X className="w-5 h-5" />
                 </button>
             </div>
             
             {selectedBuilding ? (
                 <div className="p-6 overflow-y-auto max-h-[40vh] lg:max-h-none">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 pb-4 border-b border-gray-100">
                       {selectedBuilding.description}
                    </p>
                    
                    <h4 className="font-bold text-gray-700 mb-3 flex items-center text-sm">
                       <Info className="w-4 h-4 mr-2 text-school-orange" />
                       주요 시설
                    </h4>
                    <ul className="space-y-2">
                       {selectedBuilding.facilities.map((facility, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded border border-gray-100">
                             <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                             {facility}
                          </li>
                       ))}
                    </ul>
                 </div>
             ) : (
                 <div className="p-6 h-full flex flex-col items-center justify-center text-gray-400 text-center">
                    <MapPin className="w-12 h-12 mb-4 text-gray-300" />
                    <p className="text-sm">지도의 건물을 클릭하여<br/>상세 시설 정보를 확인하세요.</p>
                 </div>
             )}
          </div>
       </div>

       {/* Facility List Table */}
       <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-gray-800 pl-4">전체 시설 현황</h3>
          <div className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow-sm">
             <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700 uppercase">
                   <tr>
                      <th className="px-6 py-4">건물명</th>
                      <th className="px-6 py-4">위치</th>
                      <th className="px-6 py-4">이용 대상</th>
                      <th className="px-6 py-4">비고</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                   {buildings.map((b) => (
                      <tr key={b.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedBuilding(b)}>
                         <td className="px-6 py-4 font-bold text-gray-800">{b.name}</td>
                         <td className="px-6 py-4 text-gray-600">캠퍼스 {b.id === 'main' ? '중앙' : b.id === 'arena' ? '동편' : b.id === 'dorm' ? '북편' : b.id === 'lab' ? '서편' : '남편'}</td>
                         <td className="px-6 py-4 text-gray-600">{b.id === 'lab' || b.id === 'arena' ? '허가된 인원' : '전체 학생'}</td>
                         <td className="px-6 py-4 text-xs text-gray-500">{b.id === 'lab' ? '보안등급 A 필요' : '-'}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>

       <div className="mt-12 text-center">
          <button 
             onClick={onGoHome}
             className="px-8 py-3 bg-gray-100 text-gray-600 rounded-full font-bold hover:bg-gray-200 transition-colors border border-gray-300"
          >
             메인 화면으로 돌아가기
          </button>
       </div>
    </div>
  );
};

export default SectionMap;