import React, { useState } from 'react';
import { ChevronRight, Home, Megaphone, FileText, Utensils, HeartPulse, Calendar, Image, Newspaper } from 'lucide-react';

interface SectionNoticeProps {
  onGoHome: () => void;
  initialTab?: string;
}

type TabType = 'NOTICE' | 'NEWSLETTER' | 'MEAL' | 'HEALTH' | 'CALENDAR' | 'GALLERY' | 'PRESS';

const SectionNotice: React.FC<SectionNoticeProps> = ({ onGoHome, initialTab }) => {
  const [activeTab, setActiveTab] = useState<TabType>((initialTab as TabType) || 'NOTICE');

  const getTabLabel = (tab: TabType) => {
    switch (tab) {
      case 'NOTICE': return '공지사항';
      case 'NEWSLETTER': return '가정통신문';
      case 'MEAL': return '주간식단표';
      case 'HEALTH': return '보건소식';
      case 'CALENDAR': return '학사일정';
      case 'GALLERY': return '포토갤러리';
      case 'PRESS': return '언론보도';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'NOTICE':
        return (
          <div className="space-y-4">
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">공지사항</h3>
                <div className="flex gap-2">
                   <input type="text" placeholder="검색어 입력" className="border border-gray-300 px-3 py-1 text-sm rounded" />
                   <button className="bg-gray-800 text-white px-3 py-1 text-sm rounded">검색</button>
                </div>
             </div>
             <table className="w-full text-sm text-left border-t border-gray-800">
                <thead className="bg-gray-100 text-gray-700">
                   <tr>
                      <th className="px-4 py-3 w-16 text-center">No</th>
                      <th className="px-4 py-3">제목</th>
                      <th className="px-4 py-3 w-24 text-center">작성자</th>
                      <th className="px-4 py-3 w-24 text-center">작성일</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                   {[1,2,3,4,5].map(i => (
                      <tr key={i} className="hover:bg-gray-50 cursor-pointer">
                         <td className="px-4 py-3 text-center text-gray-500">{100-i}</td>
                         <td className="px-4 py-3">
                            <span className="bg-school-orange/10 text-school-orange text-xs px-2 py-0.5 rounded mr-2 font-bold">중요</span>
                            2084학년도 {i}학기 주요 학사 일정 안내
                         </td>
                         <td className="px-4 py-3 text-center text-gray-600">교무기획부</td>
                         <td className="px-4 py-3 text-center text-gray-500">2084.05.{10-i}</td>
                      </tr>
                   ))}
                   {[6,7,8,9,10].map(i => (
                      <tr key={i} className="hover:bg-gray-50 cursor-pointer">
                         <td className="px-4 py-3 text-center text-gray-500">{100-i}</td>
                         <td className="px-4 py-3">제{42-i}회 교내 전술 경연대회 결과 발표</td>
                         <td className="px-4 py-3 text-center text-gray-600">훈련교육부</td>
                         <td className="px-4 py-3 text-center text-gray-500">2084.04.{30-i}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
        );
      case 'MEAL':
         return (
            <div className="space-y-6">
               <div className="bg-orange-50 border border-orange-200 p-4 rounded text-center mb-6">
                  <Utensils className="w-8 h-8 text-school-orange mx-auto mb-2" />
                  <h3 className="font-bold text-gray-800">금주의 에너지 식단 (Energy Meal)</h3>
                  <p className="text-sm text-gray-600">훈련으로 소모된 칼로리와 마나를 보충하는 고영양 식단입니다.</p>
               </div>
               <div className="grid md:grid-cols-5 gap-4">
                  {['월', '화', '수', '목', '금'].map((day, idx) => (
                     <div key={day} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-100 p-2 text-center font-bold text-gray-700">{day}요일</div>
                        <div className="p-4 text-sm text-gray-600 space-y-2 min-h-[150px]">
                           <p><span className="font-bold text-blue-600">[조식]</span><br/>현미밥, 소고기미역국, 계란말이</p>
                           <div className="border-t border-dashed border-gray-200 my-2"></div>
                           <p><span className="font-bold text-school-orange">[중식]</span><br/>{idx === 2 ? '★특식★' : ''} {['제육볶음', '돈까스', '마나회복스튜', '닭갈비', '생선구이'][idx]}</p>
                           <div className="border-t border-dashed border-gray-200 my-2"></div>
                           <p><span className="font-bold text-purple-600">[석식]</span><br/>참치마요덮밥, 우동국물</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         );
      default:
        return (
           <div className="flex flex-col items-center justify-center py-20 text-gray-400 bg-gray-50 rounded-xl border border-gray-200">
              <Megaphone className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-lg font-bold">게시물을 준비 중입니다.</p>
              <p className="text-sm">해당 게시판은 현재 업데이트 예정입니다.</p>
           </div>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">{getTabLabel(activeTab)}</h2>
             <p className="text-school-sub mt-2 text-sm">강현고등학교의 다양한 소식을 전해드립니다.</p>
          </div>
          <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
             <span className="flex items-center cursor-pointer hover:text-school-orange transition-colors" onClick={onGoHome}>
                <Home className="w-3 h-3 mr-1"/> 홈
             </span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span>알림마당</span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span className="font-bold text-black">{getTabLabel(activeTab)}</span>
          </div>
       </div>

       <div className="grid md:grid-cols-4 gap-8">
          <div className="hidden md:block col-span-1">
             <ul className="border-t-2 border-school-orange text-sm font-medium">
                {[
                   { id: 'NOTICE', label: '공지사항', icon: Megaphone },
                   { id: 'NEWSLETTER', label: '가정통신문', icon: FileText },
                   { id: 'MEAL', label: '주간식단표', icon: Utensils },
                   { id: 'HEALTH', label: '보건소식', icon: HeartPulse },
                   { id: 'CALENDAR', label: '학사일정', icon: Calendar },
                   { id: 'GALLERY', label: '포토갤러리', icon: Image },
                   { id: 'PRESS', label: '언론보도', icon: Newspaper }
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

export default SectionNotice;