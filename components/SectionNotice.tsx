import React, { useState } from 'react';
import { ChevronRight, Home, Megaphone, FileText, Utensils, HeartPulse, Calendar, Image, Newspaper, AlertTriangle, Download, ExternalLink, Zap } from 'lucide-react';

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
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <h3 className="text-xl font-bold text-gray-800">공지사항</h3>
                <div className="flex gap-2 w-full md:w-auto">
                   <input type="text" placeholder="검색어 입력" className="border border-gray-300 px-3 py-1 text-sm rounded flex-1 md:flex-none" />
                   <button className="bg-gray-800 text-white px-3 py-1 text-sm rounded">검색</button>
                </div>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-sm text-left border-t border-gray-800 min-w-[600px]">
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
                     <tr className="hover:bg-gray-50 cursor-pointer">
                        <td className="px-4 py-3 text-center text-gray-500">94</td>
                        <td className="px-4 py-3">교내 이능력 폭주 사고 관련 안전 수칙 강화 안내</td>
                        <td className="px-4 py-3 text-center text-gray-600">생활안전부</td>
                        <td className="px-4 py-3 text-center text-gray-500">2084.04.28</td>
                     </tr>
                     <tr className="hover:bg-gray-50 cursor-pointer">
                        <td className="px-4 py-3 text-center text-gray-500">93</td>
                        <td className="px-4 py-3">야간 자율 훈련장 이용 시간 변경 (심야 빌런 출몰 대비)</td>
                        <td className="px-4 py-3 text-center text-gray-600">훈련교육부</td>
                        <td className="px-4 py-3 text-center text-gray-500">2084.04.25</td>
                     </tr>
                     <tr className="hover:bg-gray-50 cursor-pointer">
                        <td className="px-4 py-3 text-center text-gray-500">92</td>
                        <td className="px-4 py-3">불법 아티팩트 소지 자진 신고 기간 운영</td>
                        <td className="px-4 py-3 text-center text-gray-600">학생부</td>
                        <td className="px-4 py-3 text-center text-gray-500">2084.04.20</td>
                     </tr>
                  </tbody>
               </table>
             </div>
          </div>
        );
      case 'NEWSLETTER':
         return (
            <div className="space-y-6">
               <h3 className="text-xl font-bold text-gray-800 border-l-4 border-school-orange pl-3 mb-4">가정통신문</h3>
               <div className="grid gap-4">
                  {[
                     { title: '2084학년도 1학기 수업료 및 학교운영지원비 납부 안내', date: '2084.05.01' },
                     { title: '학생 정신건강(PTSD) 검사 및 상담 동의서', date: '2084.04.28' },
                     { title: '교외 체험학습(빌런 대응 현장 실습) 참가 신청서', date: '2084.04.20' },
                     { title: '학교폭력 예방 및 이능력 오남용 방지 교육 안내', date: '2084.04.15' },
                     { title: '신형 방호복 구매 신청 안내', date: '2084.04.10' }
                  ].map((item, idx) => (
                     <div key={idx} className="border border-gray-200 p-4 rounded-lg flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center gap-3">
                           <FileText className="w-5 h-5 text-gray-400" />
                           <span className="text-gray-700 font-medium">{item.title}</span>
                        </div>
                        <div className="flex items-center gap-4">
                           <span className="text-xs text-gray-500">{item.date}</span>
                           <Download className="w-4 h-4 text-gray-400 hover:text-school-orange" />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         );
      case 'MEAL':
         return (
            <div className="space-y-6">
               <div className="bg-orange-50 border border-orange-200 p-4 rounded text-center mb-6">
                  <Utensils className="w-8 h-8 text-school-orange mx-auto mb-2" />
                  <h3 className="font-bold text-gray-800">금주의 에너지 식단 (Energy Meal)</h3>
                  <p className="text-sm text-gray-600">훈련으로 소모된 칼로리와 에테르를 보충하는 고영양 식단입니다.</p>
               </div>
               <div className="grid md:grid-cols-5 gap-4">
                  {['월', '화', '수', '목', '금'].map((day, idx) => (
                     <div key={day} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-100 p-2 text-center font-bold text-gray-700">{day}요일</div>
                        <div className="p-4 text-sm text-gray-600 space-y-2 min-h-[150px]">
                           <p><span className="font-bold text-blue-600">[조식]</span><br/>현미밥, 소고기미역국, 계란말이</p>
                           <div className="border-t border-dashed border-gray-200 my-2"></div>
                           <p><span className="font-bold text-school-orange">[중식]</span><br/>{idx === 2 ? '★특식★' : ''} {['제육볶음', '돈까스', '에테르회복스튜', '닭갈비', '생선구이'][idx]}</p>
                           <div className="border-t border-dashed border-gray-200 my-2"></div>
                           <p><span className="font-bold text-purple-600">[석식]</span><br/>참치마요덮밥, 우동국물</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         );
      case 'HEALTH':
         return (
            <div className="space-y-6">
               <h3 className="text-xl font-bold text-gray-800 border-l-4 border-school-orange pl-3 mb-4">보건 소식 (Medical Center)</h3>
               
               {/* Emergency Alert */}
               <div className="bg-red-50 border border-red-200 p-5 rounded-lg flex items-start gap-4 animate-pulse">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                     <h4 className="font-bold text-red-700 text-lg">['레드 더스트' 주의보] 불법 약물 교내 반입 절대 금지</h4>
                     <p className="text-sm text-gray-700 mt-2">
                        최근 시중에서 유통되는 불법 이능력 증폭제 '레드 더스트'는 심각한 뇌 손상과 영구적인 에테르 회로 파괴를 유발합니다.<br/>
                        투약 시 환각 및 폭주 증상이 나타나며, 발견 즉시 보건실 신고 바랍니다. (익명 보장)
                     </p>
                  </div>
               </div>

               <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                     <div className="flex items-center gap-2 mb-3">
                        <HeartPulse className="w-5 h-5 text-green-600" />
                        <h4 className="font-bold text-gray-800">트라우마(PTSD) 상담 프로그램</h4>
                     </div>
                     <p className="text-sm text-gray-600 mb-4">
                        빌런 습격이나 훈련 중 사고로 인한 심리적 외상을 치료합니다.<br/>
                        전문 멘탈 케어 힐러가 상주하고 있습니다.
                     </p>
                     <button className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded font-bold">상담 예약하기</button>
                  </div>

                  <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                     <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-5 h-5 text-blue-600" />
                        <h4 className="font-bold text-gray-800">에테르 탈진(Burnout) 예방 수칙</h4>
                     </div>
                     <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
                        <li>무리한 이능력 연사 금지</li>
                        <li>일일 에테르 총량의 80% 이상 소모 시 휴식 필수</li>
                        <li>두통, 오한 발생 시 즉시 리젠 포드(Regen-Pod) 사용</li>
                     </ul>
                  </div>
               </div>
            </div>
         );
      case 'CALENDAR':
         return (
            <div className="space-y-6">
               <h3 className="text-xl font-bold text-gray-800 border-l-4 border-school-orange pl-3 mb-4">주요 학사 일정 (2084)</h3>
               <div className="space-y-4">
                  {[
                     { month: '4월', day: '15', title: '제1차 대테러 모의 훈련 (Code: RED)', type: '훈련' },
                     { month: '4월', day: '28', title: '중간고사 (필기 및 이능력 실기)', type: '시험' },
                     { month: '5월', day: '05', title: '어린이날 행사 지원 (히어로과 봉사)', type: '봉사' },
                     { month: '5월', day: '15', title: '스승의 날 및 순직 교사 추모식', type: '행사' },
                     { month: '5월', day: '25', title: '춘계 체육대회 (능력 사용 제한)', type: '행사' },
                     { month: '6월', day: '06', title: '현충일 합동 위령제', type: '행사' },
                     { month: '6월', day: '20', title: '기말고사 및 ASH GUARD 1차 선발', type: '시험' },
                  ].map((event, idx) => (
                     <div key={idx} className="flex items-center border-b border-gray-100 pb-4">
                        <div className="w-20 flex-shrink-0 text-center">
                           <span className="block text-xs text-gray-500">{event.month}</span>
                           <span className="block text-2xl font-bold text-gray-800">{event.day}</span>
                        </div>
                        <div className="flex-1">
                           <span className={`text-[10px] px-2 py-0.5 rounded text-white font-bold mr-2 ${
                              event.type === '훈련' ? 'bg-red-500' : 
                              event.type === '시험' ? 'bg-blue-500' : 
                              event.type === '봉사' ? 'bg-green-500' : 'bg-gray-500'
                           }`}>
                              {event.type}
                           </span>
                           <span className="font-medium text-gray-800">{event.title}</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         );
      case 'PRESS':
         return (
            <div className="space-y-6">
               <h3 className="text-xl font-bold text-gray-800 border-l-4 border-school-orange pl-3 mb-4">언론 보도</h3>
               <div className="grid gap-4">
                  {[
                     { press: '데일리 히어로', title: '빌런 범죄 15% 증가... "고교생 히어로 투입 시급"', date: '2084.05.01' },
                     { press: '대한일보', title: '[사설] 무능력자 차별 논란, 강현고 입시 제도 개선 필요하다', date: '2084.04.28' },
                     { press: 'KBC 뉴스', title: '강현고 학생들, 도심 화재 현장서 시민 50명 구조 쾌거', date: '2084.04.20' },
                     { press: '월간 이능력', title: '특집: 차세대 S급 유망주, 강현고 학생회장을 만나다', date: '2084.04.10' },
                     { press: '시사 포커스', title: '그들은 왜 가면을 쓰는가? 학생 자경단(Vigilante)의 명과 암', date: '2084.03.15' }
                  ].map((news, idx) => (
                     <div key={idx} className="border border-gray-200 p-4 rounded-lg hover:bg-gray-50 cursor-pointer group">
                        <div className="flex justify-between items-start">
                           <div>
                              <span className="text-xs font-bold text-school-orange mb-1 block">{news.press}</span>
                              <h4 className="font-bold text-gray-800 group-hover:underline">{news.title}</h4>
                           </div>
                           <ExternalLink className="w-4 h-4 text-gray-400" />
                        </div>
                        <p className="text-right text-xs text-gray-400 mt-2">{news.date}</p>
                     </div>
                  ))}
               </div>
            </div>
         );
      case 'GALLERY':
         return (
             <div className="space-y-6">
                 <h3 className="text-xl font-bold text-gray-800 border-l-4 border-school-orange pl-3 mb-4">포토 갤러리</h3>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {[1,2,3,4,5,6,7,8].map((i) => (
                         <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group cursor-pointer">
                             <img src={`https://picsum.photos/seed/school${i}/300/300`} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-bold p-2 text-center">
                                 2084학년도 춘계 훈련 현장 {i}
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
         );
      default:
        return null;
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
          <div className="col-span-4 md:col-span-1">
             <ul className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:gap-0 border-b md:border-b-0 border-gray-200 md:border-t-2 md:border-school-orange pb-4 md:pb-0 no-scrollbar">
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
                      className={`flex-shrink-0 px-4 py-2 md:p-4 md:border-b border-gray-200 cursor-pointer flex items-center gap-3 transition-colors rounded-full md:rounded-none text-sm md:text-base ${activeTab === item.id ? 'bg-school-orange text-white md:bg-school-orange md:text-white font-bold' : 'bg-gray-100 md:bg-white text-gray-600 hover:bg-gray-200 md:hover:bg-gray-50'}`}
                   >
                      <item.icon className="w-4 h-4 hidden md:block" />
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

export default SectionNotice;