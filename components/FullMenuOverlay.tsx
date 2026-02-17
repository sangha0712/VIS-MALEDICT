import React from 'react';
import { X, ChevronRight } from 'lucide-react';

interface FullMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: any, tab?: string) => void;
}

const FullMenuOverlay: React.FC<FullMenuOverlayProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  const handleLink = (view: string, tab?: string) => {
    onNavigate(view, tab);
    onClose();
  };

  const menuGroups = [
    {
      title: "학교소개",
      items: [
        { label: "학교연혁", view: "HISTORY", tab: "HISTORY" },
        { label: "설립이념", view: "HISTORY", tab: "PHILOSOPHY" },
        { label: "교표/상징", view: "HISTORY", tab: "BADGE" },
        { label: "오시는길", view: "HISTORY", tab: "LOCATION" },
        { label: "강현지도 (Campus Map)", view: "MAP", tab: undefined },
        { label: "학교장 인사말", view: "HISTORY", tab: "PRINCIPAL" },
        { label: "조직도", view: "HISTORY", tab: "ORGANIZATION" },
        { label: "시설현황", view: "HISTORY", tab: "FACILITY_STATUS" }
      ]
    },
    {
      title: "알림마당",
      items: [
        { label: "공지사항", view: "NOTICE", tab: "NOTICE" },
        { label: "가정통신문", view: "NOTICE", tab: "NEWSLETTER" },
        { label: "주간식단표 (Energy Meal)", view: "NOTICE", tab: "MEAL" },
        { label: "보건소식 (Regen-Center)", view: "NOTICE", tab: "HEALTH" },
        { label: "학사일정", view: "NOTICE", tab: "CALENDAR" },
        { label: "포토갤러리", view: "NOTICE", tab: "GALLERY" },
        { label: "언론보도", view: "NOTICE", tab: "PRESS" }
      ]
    },
    {
      title: "교육/훈련",
      items: [
        { label: "교육과정 안내", view: "TRAINING", tab: "CURRICULUM" },
        { label: "히어로 실전 훈련", view: "TRAINING", tab: "HERO" },
        { label: "일반 교과 과정", view: "TRAINING", tab: "GENERAL" },
        { label: "방과후 전술 심화", view: "TRAINING", tab: "AFTER_SCHOOL" },
        { label: "온라인 전술 학습", view: "TRAINING", tab: "ONLINE" },
        { label: "도서관 (Artifacts)", view: "LIBRARY", tab: undefined },
        { label: "영재교육원", view: "GIFTED_EDU", tab: undefined }
      ]
    },
    {
      title: "입학/행정",
      items: [
        { label: "신입생 모집요강", view: "ADMISSION", tab: "GUIDE" },
        { label: "입학원서 접수", view: "ADMISSION", tab: "FORM" },
        { label: "합격자 조회", view: "ADMISSION", tab: "RESULT" },
        { label: "전입/전출 안내", view: "ACADEMIC_INFO", tab: "ADMISSION_TRANSFER" },
        { label: "휴학/복학 신청", view: "ACADEMIC_INFO", tab: "LEAVE_RETURN" },
        { label: "민원/증명서 발급", view: "ACADEMIC_INFO", tab: "CERTIFICATE" },
        { label: "교육비 납입", view: "ACADEMIC_INFO", tab: "TUITION" }
      ]
    },
    {
      title: "학생/학부모",
      items: [
        { label: "학생회 소개", view: "STUDENT_COUNCIL", tab: undefined },
        { label: "교원 소개", view: "CHARACTER", tab: undefined },
        { label: "동아리 활동", view: "STUDENT_LIFE", tab: "CLUBS" },
        { label: "대나무숲 (익명)", view: "STUDENT_LIFE", tab: "BAMBOO" },
        { label: "분실물 센터", view: "STUDENT_LIFE", tab: "LOST_FOUND" },
        { label: "학부모회", view: "STUDENT_LIFE", tab: "PARENTS" },
        { label: "학교폭력신고", view: "STUDENT_LIFE", tab: "VIOLENCE" }
      ]
    },
    {
      title: "진로/ASH GUARD",
      items: [
        { label: "ASH GUARD 연계 시스템", view: "ASHGUARD", tab: "SYSTEM" },
        { label: "채용 공고", view: "ASHGUARD", tab: "RECRUIT" },
        { label: "경찰/특수대학 진학", view: "ASHGUARD", tab: "UNI" },
        { label: "진로상담실", view: "ASHGUARD", tab: "COUNSELING" },
        { label: "졸업생 현황", view: "ASHGUARD", tab: "GRADUATES" }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex justify-end transition-opacity duration-300">
      {/* Drawer */}
      <div className="w-full max-w-5xl bg-white h-full shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-school-orange text-white sticky top-0 z-10">
          <div>
             <h2 className="text-2xl font-bold font-serif">전체 메뉴 (Site Map)</h2>
             <p className="text-white/80 text-sm mt-1">강현고등학교의 모든 서비스를 한눈에 확인하세요.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <X className="w-8 h-8" />
          </button>
        </div>
        
        {/* Menu Grid */}
        <div className="p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-12 gap-y-10 bg-gray-50/50 flex-1">
          {menuGroups.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 border-b-2 border-school-orange pb-2 mb-4 flex items-center">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => handleLink(item.view, item.tab)}
                      className="text-gray-600 hover:text-school-orange hover:translate-x-1 transition-all flex items-center text-sm py-1 w-full text-left"
                    >
                      <ChevronRight className="w-3 h-3 mr-2 text-gray-300" />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Info Bar */}
        <div className="bg-gray-800 text-gray-400 p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h4 className="font-bold text-white mb-4">강현고등학교</h4>
                   <p className="text-sm leading-relaxed">
                      (04521) 서울특별시 강현구 히어로대로 119<br/>
                      교무실: 02-123-4567 | 행정실: 02-123-4568 | 팩스: 02-123-4569
                   </p>
                </div>
                <div className="flex flex-col md:items-end justify-center gap-4">
                    <div className="flex gap-4">
                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-bold transition-colors">개인정보처리방침</button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-bold transition-colors">이메일무단수집거부</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose}></div>
    </div>
  );
};

export default FullMenuOverlay;