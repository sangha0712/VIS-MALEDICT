import React, { useState } from 'react';
import { CHARACTERS } from './constants';
import { Character } from './types';
import CharacterCard from './components/CharacterCard';
import ChatWindow from './components/ChatWindow';
import HomeMenu from './components/HomeMenu';
import SectionHistory from './components/SectionHistory';
import SectionAdmission from './components/SectionAdmission';
import SectionMap from './components/SectionMap';
import SectionAshGuard from './components/SectionAshGuard';
import SectionTraining from './components/SectionTraining';
import SectionAcademicInfo from './components/SectionAcademicInfo';
import SectionStudentCouncil from './components/SectionStudentCouncil';
import SectionGifted from './components/SectionGifted';
import SectionLibrary from './components/SectionLibrary';
import SectionNotice from './components/SectionNotice';
import SectionStudentLife from './components/SectionStudentLife';
import FullMenuOverlay from './components/FullMenuOverlay';
import { Search, Menu, ChevronRight, Home, User, LogIn, Shield, Phone, Lock } from 'lucide-react';

type ViewState = 'HOME' | 'CHARACTER' | 'HISTORY' | 'ADMISSION' | 'MAP' | 'ASHGUARD' | 'TRAINING' | 'ACADEMIC_INFO' | 'STUDENT_COUNCIL' | 'GIFTED_EDU' | 'LIBRARY' | 'NOTICE' | 'STUDENT_LIFE';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [currentTab, setCurrentTab] = useState<string | undefined>(undefined);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filters = ['All', 'ASH GUARD (예비역)', '특수수사과', '외부 초빙 강사', '학교 시설팀'];

  const filteredCharacters = activeFilter === 'All' 
    ? CHARACTERS 
    : CHARACTERS.filter(c => c.faction === activeFilter);

  const handleNavigate = (view: ViewState, tab?: string) => {
    setCurrentView(view);
    setCurrentTab(tab);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'HOME':
        return <HomeMenu onNavigate={(view) => handleNavigate(view)} />;
      
      case 'HISTORY':
        return <SectionHistory onGoHome={() => handleNavigate('HOME')} initialTab={currentTab} />;

      case 'ADMISSION':
        return <SectionAdmission onGoHome={() => handleNavigate('HOME')} />;

      case 'ACADEMIC_INFO':
        return <SectionAcademicInfo onGoHome={() => handleNavigate('HOME')} initialTab={currentTab} />;

      case 'MAP':
        return <SectionMap onGoHome={() => handleNavigate('HOME')} />;

      case 'ASHGUARD':
        return <SectionAshGuard onGoHome={() => handleNavigate('HOME')} initialTab={currentTab} />;

      case 'TRAINING':
        return <SectionTraining onGoHome={() => handleNavigate('HOME')} initialTab={currentTab} />;
        
      case 'STUDENT_COUNCIL':
        return <SectionStudentCouncil onGoHome={() => handleNavigate('HOME')} />;

      case 'GIFTED_EDU':
        return <SectionGifted onGoHome={() => handleNavigate('HOME')} />;

      case 'LIBRARY':
        return <SectionLibrary onGoHome={() => handleNavigate('HOME')} />;

      case 'NOTICE':
        return <SectionNotice onGoHome={() => handleNavigate('HOME')} initialTab={currentTab} />;

      case 'STUDENT_LIFE':
        return <SectionStudentLife onGoHome={() => handleNavigate('HOME')} initialTab={currentTab} />;

      case 'CHARACTER':
        return (
          <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
             {/* Sub Header */}
             <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
                <div>
                   <h2 className="text-3xl font-bold text-school-text">교직원 및 학생회 소개</h2>
                   <p className="text-school-sub mt-2 text-sm">미래의 ASH GUARD를 양성하는 강현의 주역들입니다.</p>
                </div>
                <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
                   <span 
                      className="flex items-center cursor-pointer hover:text-school-orange transition-colors" 
                      onClick={() => handleNavigate('HOME')}
                   >
                      <Home className="w-3 h-3 mr-1"/> 홈
                   </span>
                   <ChevronRight className="w-4 h-4 mx-1" />
                   <span>학교소개</span>
                   <ChevronRight className="w-4 h-4 mx-1" />
                   <span className="font-bold text-black">구성원소개</span>
                </div>
             </div>

             {/* Filter Tabs */}
             <div className="flex flex-wrap gap-1 mb-8 bg-gray-100 p-1 rounded-lg">
                {filters.map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-200
                      ${activeFilter === filter 
                        ? 'bg-school-orange text-white shadow-sm font-bold' 
                        : 'bg-white text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                      }`}
                  >
                    {filter === 'All' ? '전체보기' : filter}
                  </button>
                ))}
              </div>

            {/* Character Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCharacters.map(char => (
                <CharacterCard 
                  key={char.id} 
                  character={char} 
                  onSelect={setSelectedCharacter} 
                />
              ))}
            </section>

            {filteredCharacters.length === 0 && (
              <div className="text-center py-20 bg-gray-50 rounded border border-gray-200">
                  <p className="text-gray-500">해당 분류에 등록된 데이터가 없습니다.</p>
              </div>
            )}
            
            <div className="mt-12 text-center">
               <button 
                  onClick={() => handleNavigate('HOME')}
                  className="px-8 py-3 bg-gray-100 text-gray-600 rounded-full font-bold hover:bg-gray-200 transition-colors border border-gray-300"
               >
                  메인 화면으로 돌아가기
               </button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white text-school-text font-sans flex flex-col">
      {/* Top Utility Bar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-end text-xs text-gray-500 space-x-4">
          <span className="cursor-pointer hover:text-school-orange" onClick={() => handleNavigate('HOME')}>홈</span>
          <span className="w-[1px] h-3 bg-gray-300"></span>
          <span className="cursor-pointer hover:text-school-orange flex items-center gap-1"><LogIn className="w-3 h-3"/> 로그인</span>
          <span className="w-[1px] h-3 bg-gray-300"></span>
          <span className="cursor-pointer hover:text-school-orange flex items-center gap-1"><User className="w-3 h-3"/> 회원가입</span>
          <span className="w-[1px] h-3 bg-gray-300"></span>
          <span className="cursor-pointer hover:text-school-orange" onClick={() => setIsMenuOpen(true)}>사이트맵</span>
          <div className="ml-4 flex items-center bg-gray-100 rounded-full px-3 py-1">
             <input type="text" placeholder="통합검색" className="bg-transparent border-none text-xs focus:outline-none w-32" />
             <Search className="w-3 h-3 text-school-orange" />
          </div>
        </div>
      </div>

      {/* Main Header (Logo) */}
      <header className="bg-white py-6">
         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleNavigate('HOME')}>
               <div className="w-14 h-14 bg-gradient-to-br from-school-orange to-red-600 text-white rounded-full flex items-center justify-center font-serif font-bold text-2xl shadow-md border-4 border-orange-100 relative overflow-hidden">
                  <Shield className="w-8 h-8 absolute opacity-20" />
                  <span className="relative z-10">G</span>
               </div>
               <div className="flex flex-col">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 font-serif">강현고등학교</h1>
                  <span className="text-xs text-school-orange font-bold tracking-widest uppercase">Ganghyeon Special Police High School</span>
               </div>
            </div>
            
            <div className="hidden md:flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleNavigate('ASHGUARD')}>
               <Shield className="w-8 h-8 text-gray-400" />
               <div className="flex flex-col text-right">
                  <span className="text-[10px] text-gray-500 font-bold uppercase">National Partnership</span>
                  <span className="text-xs font-bold text-gray-700">ASH GUARD 지정 교육기관</span>
               </div>
            </div>
         </div>
      </header>

      {/* Orange Navbar */}
      <nav className="bg-school-orange shadow-md sticky top-0 z-40">
         <div className="max-w-7xl mx-auto px-4">
            <ul className="flex items-center justify-between md:justify-start md:space-x-12 h-14 text-white font-medium text-[15px]">
               <li className={`h-full flex items-center cursor-pointer border-b-4 ${currentView === 'HISTORY' ? 'border-white font-bold' : 'border-transparent hover:border-orange-300'}`} onClick={() => handleNavigate('HISTORY')}>
                  학교소개
               </li>
               <li className={`h-full flex items-center cursor-pointer border-b-4 ${currentView === 'MAP' ? 'border-white font-bold' : 'border-transparent hover:border-orange-300'}`} onClick={() => handleNavigate('MAP')}>
                  강현지도
               </li>
               <li className={`h-full flex items-center cursor-pointer border-b-4 ${currentView === 'TRAINING' ? 'border-white font-bold' : 'border-transparent hover:border-orange-300'}`} onClick={() => handleNavigate('TRAINING')}>
                  훈련/교육
               </li>
               <li className={`h-full flex items-center cursor-pointer border-b-4 ${currentView === 'CHARACTER' ? 'border-white font-bold' : 'border-transparent hover:border-orange-300'}`} onClick={() => handleNavigate('CHARACTER')}>
                  구성원소개
               </li>
               <li className={`h-full flex items-center cursor-pointer border-b-4 ${currentView === 'ASHGUARD' ? 'border-white font-bold' : 'border-transparent hover:border-orange-300'}`} onClick={() => handleNavigate('ASHGUARD')}>
                  ASH GUARD
               </li>
               <li className={`h-full flex items-center cursor-pointer border-b-4 ${currentView === 'ADMISSION' ? 'border-white font-bold' : 'border-transparent hover:border-orange-300'}`} onClick={() => handleNavigate('ADMISSION')}>
                  입학안내
               </li>
               <li 
                 className="hidden md:flex ml-auto items-center cursor-pointer bg-orange-600 px-4 h-full hover:bg-orange-700 transition-colors text-sm"
                 onClick={() => setIsMenuOpen(true)}
               >
                  <Menu className="w-5 h-5 mr-2" />
                  전체메뉴
               </li>
            </ul>
         </div>
      </nav>

      {/* Hero Banner (Only on Home) */}
      {currentView === 'HOME' && (
         <div className="relative w-full h-[450px] bg-gray-800 overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/police_academy/1920/600" 
              alt="Academy Panorama" 
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-20 text-white">
               <div className="max-w-7xl mx-auto w-full">
                  <span className="bg-red-600 px-3 py-1 text-xs font-bold rounded-sm mb-4 inline-block animate-pulse">ASH GUARD 인재 영입 진행 중</span>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg leading-tight">
                     정의를 향한 <span className="text-school-orange">뜨거운 심장</span>,<br/>
                     강현에서 시작됩니다.
                  </h2>
                  <p className="max-w-xl text-lg font-light text-gray-200 drop-shadow-md mb-8">
                     대한민국 특수경찰 양성의 요람, 강현고등학교.<br/>
                     국가 히어로 조직 ASH GUARD와 함께 안전한 사회를 만들어갑니다.
                  </p>
                  <div className="flex gap-4">
                     <button className="bg-school-orange hover:bg-orange-600 text-white px-6 py-3 rounded font-bold transition-colors shadow-lg" onClick={() => handleNavigate('ADMISSION', 'GUIDE')}>
                        신입생 모집요강
                     </button>
                     <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50 px-6 py-3 rounded font-bold transition-colors">
                        홍보영상 보기
                     </button>
                  </div>
               </div>
            </div>
         </div>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full bg-white">
           {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-[#2a2a2a] text-gray-400 py-12 border-t-4 border-school-orange text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
           <div className="flex flex-col gap-3">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center font-serif font-bold text-white mb-2">G</div>
              <div className="flex gap-4 text-white font-bold mb-2">
                 <span>개인정보처리방침</span>
                 <span className="w-[1px] bg-gray-600"></span>
                 <span>정보공개청구</span>
                 <span className="w-[1px] bg-gray-600"></span>
                 <span>ASH GUARD 채용</span>
              </div>
              <div className="flex flex-col gap-1 text-xs leading-relaxed">
                 <p>(04521) 서울특별시 강현구 히어로대로 119 강현고등학교</p>
                 <p className="flex items-center gap-4">
                    <span><Phone className="w-3 h-3 inline mr-1"/> 교무실: 02-XXX-XXXX</span>
                    <span><Lock className="w-3 h-3 inline mr-1"/> 훈련통제실: 02-XXX-XXXX</span>
                 </p>
                 <p className="mt-4 text-gray-500">Copyright © 2084 Ganghyeon Special Police High School. All Rights Reserved.</p>
              </div>
           </div>
           
           <div className="flex flex-col items-end gap-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Family Site</span>
              <div className="flex items-center gap-2">
                <select className="bg-[#444] text-white p-2 text-xs border border-gray-600 rounded w-48">
                   <option>관련기관 바로가기</option>
                   <option>ASH GUARD 본부</option>
                   <option>경찰청 특수수사국</option>
                   <option>국립 이능력 연구소</option>
                </select>
                <button className="bg-school-orange text-white px-3 py-2 text-xs rounded font-bold">GO</button>
              </div>
           </div>
        </div>
      </footer>

      {/* Full Menu Overlay */}
      <FullMenuOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={handleNavigate} 
      />

      {/* Chat Overlay */}
      {selectedCharacter && (
        <ChatWindow 
          character={selectedCharacter} 
          onClose={() => setSelectedCharacter(null)} 
        />
      )}
    </div>
  );
};

export default App;