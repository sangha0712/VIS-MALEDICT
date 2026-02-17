import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface SectionHistoryProps {
  onGoHome: () => void;
}

const SectionHistory: React.FC<SectionHistoryProps> = ({ onGoHome }) => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
      
       {/* Breadcrumb Header */}
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">학교연혁</h2>
             <p className="text-school-sub mt-2 text-sm">정의를 수호하는 강현의 발자취입니다.</p>
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
             <span className="font-bold text-black">학교연혁</span>
          </div>
       </div>

       <div className="grid md:grid-cols-4 gap-8">
          {/* Side Menu */}
          <div className="hidden md:block col-span-1">
             <ul className="border-t-2 border-school-orange">
                <li className="p-4 border-b border-gray-200 bg-school-orange text-white font-bold cursor-pointer">학교연혁</li>
                <li className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer text-gray-600">설립이념</li>
                <li className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer text-gray-600">교가/교표</li>
                <li className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer text-gray-600">오시는길</li>
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
          <div className="col-span-3 space-y-12">
             
             {/* Year Block */}
             <div>
                <h3 className="text-2xl font-bold text-school-orange mb-6 flex items-center">
                   <span className="w-2 h-8 bg-school-orange mr-3"></span>
                   2070년대
                </h3>
                <div className="border-l border-gray-200 ml-4 space-y-8 pb-4">
                   <div className="relative pl-8">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white border-2 border-school-orange rounded-full"></div>
                      <span className="font-bold text-lg text-gray-800 block mb-1">2077. 03. 01</span>
                      <p className="text-gray-600">제35회 입학식 (특수경찰과/히어로과 통합)</p>
                   </div>
                   <div className="relative pl-8">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white border-2 border-school-orange rounded-full"></div>
                      <span className="font-bold text-lg text-gray-800 block mb-1">2075. 05. 20</span>
                      <p className="text-gray-600">ASH GUARD 인재 양성 MOU 체결 (최우수 등급)</p>
                   </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white border-2 border-school-orange rounded-full"></div>
                      <span className="font-bold text-lg text-gray-800 block mb-1">2073. 11. 11</span>
                      <p className="text-gray-600">실전 전술 훈련장 '아레나' 준공</p>
                   </div>
                </div>
             </div>

             {/* Year Block */}
             <div>
                <h3 className="text-2xl font-bold text-gray-400 mb-6 flex items-center">
                   <span className="w-2 h-8 bg-gray-300 mr-3"></span>
                   2040년대
                </h3>
                 <div className="border-l border-gray-200 ml-4 space-y-8 pb-4">
                   <div className="relative pl-8">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="font-bold text-lg text-gray-600 block mb-1">2045. 01. 10</span>
                      <p className="text-gray-500">특수목적고등학교 지정 (치안/국방 분야)</p>
                   </div>
                   <div className="relative pl-8">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="font-bold text-lg text-gray-600 block mb-1">2042. 03. 01</span>
                      <p className="text-gray-500">강현고등학교 개교 (초대 교장: 치안총감 김정의)</p>
                   </div>
                </div>
             </div>
             
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