import React, { useState } from 'react';
import { ChevronRight, Home, FileText, UserPlus, ShieldAlert, Activity, CreditCard, Printer } from 'lucide-react';

interface SectionAcademicInfoProps {
  onGoHome: () => void;
  initialTab?: string;
}

type TabType = 'ADMISSION_TRANSFER' | 'LEAVE_RETURN' | 'DISCIPLINE' | 'CERTIFICATE' | 'TUITION';

const SectionAcademicInfo: React.FC<SectionAcademicInfoProps> = ({ onGoHome, initialTab }) => {
  const [activeTab, setActiveTab] = useState<TabType>((initialTab as TabType) || 'ADMISSION_TRANSFER');

  const getTabLabel = (tab: TabType) => {
    switch (tab) {
      case 'ADMISSION_TRANSFER': return '입학/전학 절차';
      case 'LEAVE_RETURN': return '휴학/복학 안내';
      case 'DISCIPLINE': return '징계/퇴학 규정';
      case 'CERTIFICATE': return '민원/증명서 발급';
      case 'TUITION': return '교육비 납입';
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
      
       {/* Breadcrumb Header */}
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">{getTabLabel(activeTab)}</h2>
             <p className="text-school-sub mt-2 text-sm">입학부터 졸업까지, 강현인의 신분 변동에 관한 규정 및 절차 안내입니다.</p>
          </div>
          <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
             <span 
                className="flex items-center cursor-pointer hover:text-school-orange transition-colors" 
                onClick={onGoHome}
             >
                <Home className="w-3 h-3 mr-1"/> 홈
             </span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span>입학안내</span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span className="font-bold text-black">{getTabLabel(activeTab)}</span>
          </div>
       </div>

       <div className="grid md:grid-cols-4 gap-8">
          {/* Menu Column: Horizontal Scroll on Mobile, Vertical Sidebar on Desktop */}
          <div className="col-span-4 md:col-span-1">
             <ul className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:gap-0 border-b md:border-b-0 border-gray-200 md:border-t-2 md:border-school-orange pb-4 md:pb-0 no-scrollbar">
                {[
                   { id: 'ADMISSION_TRANSFER', label: '입학/전학 절차' },
                   { id: 'LEAVE_RETURN', label: '휴학/복학 안내' },
                   { id: 'CERTIFICATE', label: '민원/증명서 발급' },
                   { id: 'TUITION', label: '교육비 납입' },
                   { id: 'DISCIPLINE', label: '징계/퇴학 규정' },
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

          {/* Main Content */}
          <div className="col-span-4 md:col-span-3 min-h-[500px]">
             
             {/* 1. ADMISSION & TRANSFER */}
             {activeTab === 'ADMISSION_TRANSFER' && (
                <div className="space-y-10 animate-in fade-in slide-in-from-right-2 duration-500">
                   <section>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-school-orange pl-3 flex items-center gap-2">
                         <UserPlus className="w-6 h-6 text-gray-600" /> 입학 (Admission)
                      </h3>
                      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                         <p className="text-gray-600 mb-4 leading-relaxed">
                            강현고등학교는 전기모집 특수목적고등학교로, 매년 11월 일반 전형과 특별 전형(ASH GUARD 추천, 이능력 특기자)을 통해 신입생을 선발합니다.
                         </p>
                      </div>
                   </section>
                </div>
             )}

             {/* 2. LEAVE & RETURN */}
             {activeTab === 'LEAVE_RETURN' && (
                <div className="space-y-10 animate-in fade-in slide-in-from-right-2 duration-500">
                   <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg flex items-center gap-3">
                      <Activity className="w-6 h-6 text-school-orange" />
                      <p className="text-sm text-gray-700 font-medium">
                         강현고등학교는 학생들의 신체적/정신적 회복을 위해 유연한 휴학 제도를 운영하고 있습니다.
                      </p>
                   </div>
                </div>
             )}

             {/* 3. CERTIFICATE */}
             {activeTab === 'CERTIFICATE' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-2 duration-500">
                   <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-school-orange pl-3">증명서 발급 안내</h3>
                   <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-6 rounded-lg text-center hover:border-school-orange cursor-pointer">
                         <Printer className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                         <h4 className="font-bold text-gray-800 mb-1">온라인 발급</h4>
                         <p className="text-sm text-gray-500">재학/성적/졸업 증명서 등<br/>(수수료 무료)</p>
                      </div>
                      <div className="border border-gray-200 p-6 rounded-lg text-center hover:border-school-orange cursor-pointer">
                         <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                         <h4 className="font-bold text-gray-800 mb-1">이능력 등급 인증서</h4>
                         <p className="text-sm text-gray-500">국가 관리국 연동<br/>(보안 토큰 필요)</p>
                      </div>
                   </div>
                </div>
             )}

             {/* 4. TUITION */}
             {activeTab === 'TUITION' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-2 duration-500">
                   <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-school-orange pl-3">교육비 납입 안내</h3>
                   <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-800 mb-2">2084학년도 1분기 납입 고지</h4>
                      <ul className="text-sm space-y-2 text-gray-600 mb-4">
                         <li>- 수업료: 전액 국비 지원 (특수목적고 지정)</li>
                         <li>- 학교운영지원비: 150,000원</li>
                         <li>- 급식비(석식): 95,000원</li>
                         <li>- 기숙사비: 250,000원</li>
                      </ul>
                      <div className="flex gap-2">
                         <button className="bg-school-orange text-white px-4 py-2 rounded text-sm font-bold flex items-center gap-2">
                            <CreditCard className="w-4 h-4" /> 납부 내역 조회
                         </button>
                      </div>
                   </div>
                </div>
             )}

             {/* 5. DISCIPLINE */}
             {activeTab === 'DISCIPLINE' && (
                <div className="space-y-10 animate-in fade-in slide-in-from-right-2 duration-500">
                   <div className="bg-red-50 border border-red-200 p-6 rounded-lg text-center">
                      <ShieldAlert className="w-12 h-12 text-red-600 mx-auto mb-3" />
                      <h3 className="text-xl font-bold text-red-700 mb-2">무관용 원칙 (Zero Tolerance)</h3>
                      <p className="text-gray-700 text-sm leading-relaxed max-w-2xl mx-auto">
                         <strong>교외에서의 무단 이능력 사용</strong> 및 <strong>민간인 위협 행위</strong>는 즉시 퇴학 사유가 됩니다.
                      </p>
                   </div>
                </div>
             )}

          </div>
       </div>
    </div>
  );
};

export default SectionAcademicInfo;