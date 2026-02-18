import React, { useState } from 'react';
import { Megaphone, Calendar, Users, BookOpen, PenTool, ExternalLink, Star, Shield, Target, Crosshair, Briefcase, Dumbbell, Library, Monitor, GraduationCap, Gavel, Radio, HeartPulse, FileText } from 'lucide-react';

interface HomeMenuProps {
  onNavigate: (view: 'CHARACTER' | 'HISTORY' | 'ADMISSION' | 'ACADEMIC_INFO') => void;
}

const HomeMenu: React.FC<HomeMenuProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'NOTICE' | 'RECRUIT' | 'TRAINING'>('NOTICE');

  const notices = [
    { id: 1, title: '2084학년도 1학기 중간고사 일정 및 부정행위(이능력 사용) 단속 안내', date: '2084-04-10', new: true, category: '학사' },
    { id: 2, title: '[필독] 교내 이능력 제어 장치(PCD) 정기 펌웨어 업데이트', date: '2084-04-08', new: true, category: '시설' },
    { id: 3, title: '제13회 ASH GUARD 배 전국 고교 전술 대회 우승 축하', date: '2084-04-01', new: false, category: '뉴스' },
    { id: 4, title: '도서관 "고대 아티팩트" 섹션 열람 제한 구역 설정 (보안등급 B 이상)', date: '2084-03-25', new: false, category: '도서' },
    { id: 5, title: '[경고] 외부인 출입 통제 강화 (테러 경보 단계 "Code: ORANGE" 격상)', date: '2084-03-15', new: false, category: '보안' },
  ];

  const recruits = [
    { id: 1, title: 'ASH GUARD 전략분석팀 하계 인턴십 모집 (3학년 대상)', date: '2084-04-12', new: true, category: '인턴' },
    { id: 2, title: '경찰청 사이버수사국 특채 설명회 (화이트해커 트랙)', date: '2084-04-05', new: true, category: '특채' },
    { id: 3, title: '글로벌 민간군사기업(PMC) "블랙스톤" 졸업 예정자 채용 공고', date: '2084-03-30', new: false, category: '채용' },
    { id: 4, title: '국립 이능력 연구소 연구 보조원 모집 (물리학/마법학 전공)', date: '2084-03-20', new: false, category: '아르바이트' },
    { id: 5, title: 'S급 히어로 에이전시 "오로라" 스카우트 팀 학교 방문 일정', date: '2084-03-10', new: false, category: '스카우트' },
  ];

  const trainings = [
    { id: 1, title: '5월 1주차: 대테러 시가전 모의 훈련 (전학년 필수)', date: '2084-05-01', new: true, category: '전술' },
    { id: 2, title: '5월 2주차: 수중 전술 및 심해 인명 구조 실습 (레스큐과)', date: '2084-05-08', new: false, category: '실습' },
    { id: 3, title: '5월 3주차: 사이버 방어 및 딥다이브 해킹 대응 훈련 (정보과)', date: '2084-05-15', new: false, category: '사이버' },
    { id: 4, title: '5월 4주차: 야간 산악 침투 및 생존 훈련 (히어로전술과)', date: '2084-05-22', new: false, category: '야전' },
    { id: 5, title: '[특강] 레전드 히어로 "썬더볼트" 초청 실전 전술 세미나', date: '2084-05-25', new: false, category: '특강' },
  ];

  const getActiveList = () => {
    switch (activeTab) {
      case 'NOTICE': return notices;
      case 'RECRUIT': return recruits;
      case 'TRAINING': return trainings;
      default: return notices;
    }
  };

  const activeList = getActiveList();

  const iconLinks = [
    { label: "아티팩트 도서관", icon: Library, color: "bg-cyan-100 text-cyan-600" },
    { label: "강현 알리미", icon: Megaphone, color: "bg-blue-100 text-blue-600" },
    { label: "히어로 랭킹 포털", icon: Monitor, color: "bg-purple-100 text-purple-600" },
    { label: "작전 지휘 통제실", icon: Gavel, color: "bg-slate-100 text-slate-600" },
    { label: "G-NET (전술망)", icon: Radio, color: "bg-rose-100 text-rose-600" },
    { label: "이능력 사용 규정", icon: GraduationCap, color: "bg-green-100 text-green-600" },
    { label: "장비/치료비 청구", icon: FileText, color: "bg-yellow-100 text-yellow-600" },
  ];

  return (
    <div className="w-full">
      {/* Quick Links Banner Section */}
      <div className="bg-gray-50 py-10 border-b border-gray-200">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Column 1 & 2: Main Board */}
            <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-soft border border-gray-100 min-h-[300px]">
               <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2 overflow-x-auto">
                  <div className="flex gap-2 md:gap-4 text-sm md:text-lg font-bold flex-nowrap">
                     <button 
                        onClick={() => setActiveTab('NOTICE')}
                        className={`flex items-center gap-1 whitespace-nowrap px-2 py-1 rounded transition-colors ${activeTab === 'NOTICE' ? 'bg-school-orange/10 text-school-orange' : 'text-gray-400 hover:text-school-orange'}`}
                     >
                        <Megaphone className="w-4 h-4" /> 공지사항
                     </button>
                     <button 
                        onClick={() => setActiveTab('RECRUIT')}
                        className={`flex items-center gap-1 whitespace-nowrap px-2 py-1 rounded transition-colors ${activeTab === 'RECRUIT' ? 'bg-school-orange/10 text-school-orange' : 'text-gray-400 hover:text-school-orange'}`}
                     >
                        <Briefcase className="w-4 h-4" /> 채용/진로
                     </button>
                     <button 
                        onClick={() => setActiveTab('TRAINING')}
                        className={`flex items-center gap-1 whitespace-nowrap px-2 py-1 rounded transition-colors ${activeTab === 'TRAINING' ? 'bg-school-orange/10 text-school-orange' : 'text-gray-400 hover:text-school-orange'}`}
                     >
                        <Dumbbell className="w-4 h-4" /> 훈련일정
                     </button>
                  </div>
                  <button className="text-gray-400 hover:text-black hidden md:block">
                     <ExternalLink className="w-4 h-4" />
                  </button>
               </div>
               
               <ul className="space-y-3">
                  {activeList.map((item) => (
                     <li key={item.id} className="flex justify-between items-start md:items-center text-sm group cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors flex-col md:flex-row gap-1 md:gap-0">
                        <div className="flex items-center gap-2 overflow-hidden w-full">
                           <span className="text-[10px] font-bold text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded min-w-[40px] text-center flex-shrink-0">
                             {item.category}
                           </span>
                           <span className="truncate text-gray-700 group-hover:text-school-orange font-medium flex-1">
                              {item.title}
                           </span>
                           {item.new && <span className="bg-red-600 text-white text-[10px] px-1 rounded font-bold animate-pulse flex-shrink-0">N</span>}
                        </div>
                        <span className="text-gray-400 text-xs whitespace-nowrap font-mono self-end md:self-auto">{item.date}</span>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Column 3: Popup Zone (Visual) */}
            <div className="md:col-span-1 bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden relative group cursor-pointer h-48 md:h-auto">
               <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1 z-10 rounded-br-lg">
                  D-DAY
               </div>
               <img src="https://picsum.photos/seed/special_forces/400/300" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" alt="Recruit" />
               <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
                  <p className="font-bold text-lg">제52회 히어로 면허 필기시험</p>
                  <p className="text-xs text-gray-300 mt-1">2084. 06. 12 (토) | 제1체육관</p>
               </div>
            </div>

            {/* Column 4: Quick Links Banner */}
            <div className="md:col-span-1 flex flex-col gap-4 h-auto md:h-full">
               <div className="flex-1 bg-blue-50 rounded-xl shadow-soft border border-blue-100 p-6 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-blue-100 transition-colors" onClick={() => onNavigate('ADMISSION')}>
                  <div className="bg-blue-100 p-3 rounded-full mb-3 text-blue-600">
                     <Shield className="w-8 h-8 fill-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">ASH GUARD<br/>트랙 신청</h3>
                  <button className="mt-3 bg-blue-600 text-white text-xs px-4 py-1.5 rounded-full font-bold hover:bg-blue-700 transition-colors">
                     지원하기 (2084)
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* Main Shortcuts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
         <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            <button onClick={() => onNavigate('HISTORY')} className="flex flex-col items-center justify-center p-4 md:p-6 bg-white border border-gray-200 rounded-lg hover:border-school-orange hover:shadow-md transition-all group h-28 md:h-32">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-2 group-hover:bg-school-orange group-hover:text-white transition-colors">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
               </div>
               <span className="font-bold text-gray-700 text-xs md:text-sm">학교소개</span>
            </button>
            <button onClick={() => onNavigate('ACADEMIC_INFO')} className="flex flex-col items-center justify-center p-4 md:p-6 bg-white border border-gray-200 rounded-lg hover:border-school-orange hover:shadow-md transition-all group h-28 md:h-32">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-2 group-hover:bg-school-orange group-hover:text-white transition-colors">
                  <PenTool className="w-5 h-5 md:w-6 md:h-6" />
               </div>
               <span className="font-bold text-gray-700 text-xs md:text-sm">입학/전학 안내</span>
            </button>
            <button onClick={() => onNavigate('CHARACTER')} className="flex flex-col items-center justify-center p-4 md:p-6 bg-white border border-gray-200 rounded-lg hover:border-school-orange hover:shadow-md transition-all group h-28 md:h-32">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center mb-2 group-hover:bg-school-orange group-hover:text-white transition-colors">
                  <Users className="w-5 h-5 md:w-6 md:h-6" />
               </div>
               <span className="font-bold text-gray-700 text-xs md:text-sm">교관/교사 소개</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 md:p-6 bg-white border border-gray-200 rounded-lg hover:border-school-orange hover:shadow-md transition-all group h-28 md:h-32">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-2 group-hover:bg-school-orange group-hover:text-white transition-colors">
                  <Crosshair className="w-5 h-5 md:w-6 md:h-6" />
               </div>
               <span className="font-bold text-gray-700 text-xs md:text-sm">모의전투 신청</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 md:p-6 bg-white border border-gray-200 rounded-lg hover:border-school-orange hover:shadow-md transition-all group h-28 md:h-32">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 text-gray-500 rounded-full flex items-center justify-center mb-2 group-hover:bg-school-orange group-hover:text-white transition-colors">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6" />
               </div>
               <span className="font-bold text-gray-700 text-xs md:text-sm">학사/훈련 일정</span>
            </button>
         </div>
      </div>

      {/* Circle Icon Links (Footer Style) */}
      <div className="bg-white py-10 border-t border-gray-200">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-3 md:grid-cols-7 gap-6 text-center">
               {iconLinks.map((link, idx) => (
                  <button key={idx} className="flex flex-col items-center group cursor-pointer" onClick={() => alert("현재 준비 중인 서비스입니다.")}>
                     <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 shadow-sm transition-transform group-hover:-translate-y-1 group-hover:shadow-md ${link.color}`}>
                        <link.icon className="w-7 h-7 md:w-8 md:h-8" />
                     </div>
                     <span className="text-xs font-bold text-gray-600 group-hover:text-school-orange transition-colors">
                        {link.label}
                     </span>
                  </button>
               ))}
            </div>
         </div>
      </div>

       {/* Banner Slider Section */}
       <div className="bg-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4">
             <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-700">주요 협력 기관</h3>
                <div className="flex gap-1">
                   <button className="w-6 h-6 border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:text-black">&lt;</button>
                   <button className="w-6 h-6 border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:text-black">&gt;</button>
                </div>
             </div>
             <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                <div className="flex-1 min-w-[120px] bg-white border border-gray-200 p-3 flex items-center justify-center text-center text-xs font-bold text-gray-600 h-16 shadow-sm rounded">
                   ASH GUARD<br/>본부
                </div>
                <div className="flex-1 min-w-[120px] bg-white border border-gray-200 p-3 flex items-center justify-center text-center text-xs font-bold text-gray-600 h-16 shadow-sm rounded">
                   국가대테러<br/>대책위원회
                </div>
                <div className="flex-1 min-w-[120px] bg-white border border-gray-200 p-3 flex items-center justify-center text-center text-xs font-bold text-gray-600 h-16 shadow-sm rounded">
                   특수경찰청
                </div>
                <div className="flex-1 min-w-[120px] bg-white border border-gray-200 p-3 flex items-center justify-center text-center text-xs font-bold text-gray-600 h-16 shadow-sm rounded">
                   국립과학수사<br/>연구원
                </div>
                <div className="flex-1 min-w-[120px] bg-white border border-gray-200 p-3 flex items-center justify-center text-center text-xs font-bold text-gray-600 h-16 shadow-sm rounded">
                   한국이능력자<br/>협회
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default HomeMenu;