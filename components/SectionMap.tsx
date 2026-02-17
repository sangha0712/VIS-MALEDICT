import React, { useState } from 'react';
import { ChevronRight, Home, MapPin, Info } from 'lucide-react';

interface SectionMapProps {
  onGoHome: () => void;
}

interface Building {
  id: string;
  name: string;
  description: string;
  facilities: string[];
  gridArea: string;
  color: string;
}

const SectionMap: React.FC<SectionMapProps> = ({ onGoHome }) => {
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);

  const buildings: Building[] = [
    {
      id: 'main',
      name: '본관 (Headquarters)',
      description: '학교 행정의 중심이자 일반 교과 수업이 이루어지는 곳입니다. 교장실, 행정실, 일반 교실이 위치해 있습니다.',
      facilities: ['교무실', '행정실', '방송실', '이사장실'],
      gridArea: 'row-start-3 row-end-5 col-start-3 col-end-5',
      color: 'bg-blue-600'
    },
    {
      id: 'arena',
      name: '제1전술훈련관 (The Arena)',
      description: '실전 모의 전투 훈련을 위한 최첨단 시설입니다. 홀로그램 시뮬레이션실과 대규모 대련장이 갖춰져 있습니다.',
      facilities: ['대련장', '사격장', '무기고', '전술분석실'],
      gridArea: 'row-start-2 row-end-4 col-start-6 col-end-8',
      color: 'bg-red-600'
    },
    {
      id: 'dorm',
      name: '생활관 (Barracks)',
      description: '학생들의 거주 공간입니다. 전원 기숙사 생활이 원칙이며, 24시간 보안 시스템이 가동됩니다.',
      facilities: ['학생식당', '체력단련실', '의무실', '휴게실'],
      gridArea: 'row-start-1 row-end-3 col-start-2 col-end-4',
      color: 'bg-green-600'
    },
    {
      id: 'lab',
      name: '특수연구동 (R&D Center)',
      description: '이능력 분석 및 아티팩트 연구가 진행되는 곳입니다. 출입 권한이 없는 학생은 접근할 수 없습니다.',
      facilities: ['이능력측정실', '장비개발실', '사이버보안센터', '도서관'],
      gridArea: 'row-start-4 row-end-6 col-start-6 col-end-8',
      color: 'bg-purple-600'
    },
    {
      id: 'field',
      name: '대운동장 (Parade Ground)',
      description: '기초 체력 훈련 및 각종 행사가 열리는 야외 운동장입니다. 아침 점호가 이곳에서 실시됩니다.',
      facilities: ['육상트랙', '장애물코스', '조례대'],
      gridArea: 'row-start-5 row-end-7 col-start-2 col-end-5',
      color: 'bg-yellow-600'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
      
       {/* Breadcrumb Header */}
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">강현지도 (Campus Map)</h2>
             <p className="text-school-sub mt-2 text-sm">강현고등학교의 캠퍼스 배치도 및 시설 안내입니다.</p>
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

       <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Visualization Area */}
          <div className="lg:col-span-2 bg-gray-100 p-4 rounded-xl shadow-inner border border-gray-300 relative overflow-hidden h-[500px] flex items-center justify-center">
             
             {/* Map Grid Background */}
             <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-2 p-8 opacity-90">
                {/* Roads/Paths (Visual Only) */}
                <div className="row-start-1 row-end-9 col-start-5 col-end-6 bg-gray-300 rounded-sm opacity-50"></div>
                <div className="row-start-4 row-end-5 col-start-1 col-end-9 bg-gray-300 rounded-sm opacity-50"></div>

                {/* Buildings */}
                {buildings.map((b) => (
                   <button
                      key={b.id}
                      onClick={() => setSelectedBuilding(b)}
                      className={`${b.gridArea} ${b.color} text-white font-bold rounded-lg shadow-lg transform transition-all hover:scale-105 hover:z-10 flex flex-col items-center justify-center p-2 text-center border-2 border-white/20`}
                   >
                      <MapPin className="w-6 h-6 mb-1" />
                      <span className="text-xs md:text-sm">{b.name.split(' ')[0]}</span>
                   </button>
                ))}

                {/* Entrance */}
                <div className="row-start-8 row-end-9 col-start-5 col-end-6 flex items-center justify-center">
                   <div className="bg-gray-800 text-white text-[10px] px-2 py-1 rounded">정문</div>
                </div>
             </div>
             
             {/* Compass */}
             <div className="absolute top-4 right-4 w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-500 font-serif font-bold opacity-50 pointer-events-none">
                <div className="absolute top-0 text-xs">N</div>
                <div className="w-0.5 h-full bg-gray-400"></div>
                <div className="h-0.5 w-full bg-gray-400 absolute"></div>
             </div>
          </div>

          {/* Details Sidebar */}
          <div className="lg:col-span-1 space-y-4">
             <div className="bg-white border-2 border-school-orange rounded-xl p-6 shadow-lg h-full">
                {selectedBuilding ? (
                   <div className="animate-in fade-in duration-300">
                      <div className="flex items-center gap-2 mb-4">
                         <div className={`w-3 h-8 ${selectedBuilding.color} rounded-sm`}></div>
                         <h3 className="text-xl font-bold text-gray-800">{selectedBuilding.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 border-b border-gray-100 pb-4">
                         {selectedBuilding.description}
                      </p>
                      
                      <h4 className="font-bold text-gray-700 mb-3 flex items-center text-sm">
                         <Info className="w-4 h-4 mr-2 text-school-orange" />
                         주요 시설
                      </h4>
                      <ul className="space-y-2">
                         {selectedBuilding.facilities.map((facility, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded">
                               <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                               {facility}
                            </li>
                         ))}
                      </ul>
                   </div>
                ) : (
                   <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center">
                      <MapPin className="w-12 h-12 mb-4 text-gray-300" />
                      <p>지도의 건물을 클릭하여<br/>상세 정보를 확인하세요.</p>
                   </div>
                )}
             </div>
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