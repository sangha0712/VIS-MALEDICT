import React, { useState } from 'react';
import { ChevronRight, Home, FileText, Shield, Briefcase, CheckCircle, ArrowRight, Star, Clock, MapPin, Phone } from 'lucide-react';

interface SectionAshGuardProps {
  onGoHome: () => void;
  initialTab?: string;
}

type TabType = 'SYSTEM' | 'RECRUIT' | 'UNI' | 'COUNSELING' | 'GRADUATES';

const SectionAshGuard: React.FC<SectionAshGuardProps> = ({ onGoHome, initialTab }) => {
  const [activeTab, setActiveTab] = useState<TabType>((initialTab as TabType) || 'SYSTEM');

  const getTabLabel = (tab: TabType) => {
    switch (tab) {
      case 'SYSTEM': return 'ASH GUARD 연계 시스템';
      case 'RECRUIT': return '채용 공고';
      case 'UNI': return '경찰/특수대학 진학';
      case 'COUNSELING': return '진로상담실';
      case 'GRADUATES': return '졸업생 현황';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
       case 'SYSTEM':
          return (
             <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 relative overflow-hidden shadow-lg">
                   <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                         <Shield className="w-8 h-8 text-school-orange" />
                         <h3 className="text-2xl font-bold">ASH GUARD 공식 파트너십</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed max-w-2xl">
                         강현고등학교는 대한민국 유일의 <span className="text-school-orange font-bold">ASH GUARD 공식 지정 양성 기관</span>입니다.
                         본교의 교육 과정은 ASH GUARD의 실전 전술 매뉴얼을 기반으로 설계되었으며, 
                         우수 졸업생은 별도의 시험 없이 정규 요원으로 즉시 채용되는 특전을 누립니다.
                      </p>
                   </div>
                   <Shield className="absolute -right-10 -bottom-20 w-64 h-64 text-white/5 rotate-12" />
                </div>

                {/* Process Steps */}
                <div>
                   <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-school-orange" />
                      인재 양성 프로세스
                   </h4>
                   <div className="grid md:grid-cols-3 gap-6">
                      {[
                         { step: '01', title: '잠재력 발굴', desc: '입학 시 정밀 이능력 측정 및 적성 검사를 통해 특화 병과(전투/수사/지원)를 조기에 설정합니다.' },
                         { step: '02', title: '실전 위탁 교육', desc: '2학년 2학기부터 실제 ASH GUARD 작전 구역에서 현직 요원과 함께 멘토링 실습을 진행합니다.' },
                         { step: '03', title: '다이렉트 임관', desc: '졸업 인증 평가 상위 30% 이내 학생은 7급 공무원 대우로 ASH GUARD에 즉시 임관합니다.' }
                      ].map((item, idx) => (
                         <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                            <div className="text-4xl font-black text-gray-100 absolute top-2 right-4 group-hover:text-orange-50 transition-colors">{item.step}</div>
                            <div className="relative z-10">
                               <h5 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h5>
                               <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Benefits */}
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                   <h4 className="text-lg font-bold text-gray-800 mb-4">강현고 재학생 특전</h4>
                   <ul className="grid md:grid-cols-2 gap-3">
                      {[
                         'ASH GUARD 전용 장비 및 아티팩트 대여',
                         '작전 중 부상 시 국립 이능력자 병원 무상 치료',
                         '졸업 후 임관 시 호봉 인정 (2년)',
                         '우수 학생 해외 파견 연수 (국제 히어로 연맹)'
                      ].map((benefit, idx) => (
                         <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-school-orange flex-shrink-0" />
                            {benefit}
                         </li>
                      ))}
                   </ul>
                </div>
             </div>
          );

       case 'RECRUIT':
          return (
             <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex justify-between items-end mb-2">
                   <h3 className="text-xl font-bold text-gray-800">진행 중인 채용 공고</h3>
                   <span className="text-xs text-gray-500">※ 본교생은 교내 추천 전형으로 지원 가능합니다.</span>
                </div>

                <div className="space-y-4">
                   {[
                      { 
                         id: 1,
                         title: '2084년 상반기 정규 요원 공채 (강현고 전형)', 
                         dept: '전술타격팀 / 특수수사팀',
                         dday: 'D-5', 
                         badge: '채용중',
                         color: 'bg-red-100 text-red-700',
                         desc: '신체등급 A급 이상 또는 이능력 3단계 이상 보유자'
                      },
                      { 
                         id: 2,
                         title: '전략분석팀 하계 인턴십', 
                         dept: '정보분석실',
                         dday: 'D-12', 
                         badge: '접수중',
                         color: 'bg-blue-100 text-blue-700',
                         desc: '3학년 재학생 대상, 데이터 분석 능력 우수자 우대'
                      },
                      { 
                         id: 3,
                         title: '아티팩트 관리국 연구원 수시 채용', 
                         dept: '장비개발부',
                         dday: '상시', 
                         badge: '상시',
                         color: 'bg-gray-100 text-gray-700',
                         desc: '고대어 해독 가능자 및 이능공학 이수자'
                      },
                      { 
                         id: 4,
                         title: '대테러 대응팀 현장직 (특채)', 
                         dept: '제3기동대',
                         dday: '마감임박', 
                         badge: 'D-1',
                         color: 'bg-orange-100 text-orange-700',
                         desc: '실전 모의고사 상위 1% 이내 기록 보유자'
                      }
                   ].map((item) => (
                      <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-5 hover:border-school-orange hover:shadow-md transition-all cursor-pointer group">
                         <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                               <span className={`text-xs px-2 py-1 rounded font-bold ${item.color}`}>{item.badge}</span>
                               <span className="text-sm text-gray-500 font-medium">{item.dept}</span>
                            </div>
                            <div className="text-school-orange font-bold text-sm">{item.dday}</div>
                         </div>
                         <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-school-orange transition-colors">{item.title}</h4>
                         <p className="text-sm text-gray-600">{item.desc}</p>
                         <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                            <button className="text-sm font-bold text-gray-500 flex items-center gap-1 group-hover:text-school-orange">
                               상세 요강 확인 <ArrowRight className="w-4 h-4" />
                            </button>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          );

       case 'UNI':
          return (
             <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div>
                   <h3 className="text-xl font-bold text-gray-800 mb-4">주요 진학 대학</h3>
                   <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 bg-blue-900 text-white rounded-full flex items-center justify-center font-serif font-bold text-lg shadow-md">KNP</div>
                            <div>
                               <h4 className="font-bold text-lg text-gray-800">국립경찰대학 (KNP)</h4>
                               <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">특수수사학과</span>
                            </div>
                         </div>
                         <ul className="text-sm text-gray-600 space-y-2 mb-4">
                            <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-blue-500" /> 강현고 특별 전형: 정원의 15% 배정</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-blue-500" /> 졸업 후 경위 임관 (엘리트 코스)</li>
                         </ul>
                         <button className="w-full py-2 text-xs font-bold bg-gray-50 text-gray-600 rounded hover:bg-gray-100">입시요강 다운로드</button>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 bg-purple-900 text-white rounded-full flex items-center justify-center font-serif font-bold text-lg shadow-md">KMA</div>
                            <div>
                               <h4 className="font-bold text-lg text-gray-800">국방이능대학</h4>
                               <span className="text-xs text-purple-600 font-bold bg-purple-50 px-2 py-0.5 rounded">전술이능학과</span>
                            </div>
                         </div>
                         <ul className="text-sm text-gray-600 space-y-2 mb-4">
                            <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-purple-500" /> 군 특수부대 장교(소위) 임관</li>
                            <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-purple-500" /> S급 이능력자 전액 장학금 지원</li>
                         </ul>
                         <button className="w-full py-2 text-xs font-bold bg-gray-50 text-gray-600 rounded hover:bg-gray-100">입시요강 다운로드</button>
                      </div>
                   </div>
                </div>

                {/* Stats */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                   <h4 className="text-lg font-bold text-gray-800 mb-6">2083학년도 진학 현황</h4>
                   <div className="space-y-4">
                      {[
                         { label: 'ASH GUARD 조기 임관', pct: '45%', width: 'w-[45%]', color: 'bg-school-orange' },
                         { label: '경찰대학 및 특수목적대', pct: '30%', width: 'w-[30%]', color: 'bg-blue-600' },
                         { label: '일반대학 (이능력 관련 학과)', pct: '20%', width: 'w-[20%]', color: 'bg-gray-500' },
                         { label: '해외 유학 및 기타', pct: '5%', width: 'w-[5%]', color: 'bg-gray-300' }
                      ].map((stat, idx) => (
                         <div key={idx}>
                            <div className="flex justify-between text-sm font-bold text-gray-700 mb-1">
                               <span>{stat.label}</span>
                               <span>{stat.pct}</span>
                            </div>
                            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                               <div className={`h-full ${stat.color} rounded-full`} style={{ width: stat.width }}></div>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          );

       case 'COUNSELING':
          return (
             <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="grid md:grid-cols-2 gap-8">
                   {/* Left: Info */}
                   <div className="space-y-6">
                      <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                         <h3 className="text-xl font-bold text-gray-800 mb-2">진로 상담실 운영 안내</h3>
                         <p className="text-sm text-gray-600 mb-4">
                            학생 여러분의 적성과 이능력 특성에 맞는 최적의 진로를 설계해 드립니다.
                            모든 상담 내용은 철저히 비밀이 보장됩니다.
                         </p>
                         <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-700">
                               <Clock className="w-4 h-4 text-school-orange" />
                               <span>운영 시간: 평일 09:00 ~ 20:00</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-700">
                               <MapPin className="w-4 h-4 text-school-orange" />
                               <span>위치: 본관 3층 제2상담실</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-700">
                               <Phone className="w-4 h-4 text-school-orange" />
                               <span>문의: 02-123-4567 (내선 301)</span>
                            </div>
                         </div>
                      </div>

                      <div>
                         <h4 className="font-bold text-gray-800 mb-3">상담 선생님</h4>
                         <div className="space-y-3">
                            <div className="flex items-center gap-4 p-3 bg-white border border-gray-200 rounded-lg">
                               <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                  <img src="https://picsum.photos/seed/rubia-cover/100/100" alt="Teacher" className="w-full h-full object-cover" />
                               </div>
                               <div>
                                  <div className="font-bold text-gray-800">루비아 선생님</div>
                                  <div className="text-xs text-gray-500">3학년 담임 / 심리 상담 전문</div>
                               </div>
                               <button className="ml-auto text-xs bg-school-orange text-white px-3 py-1.5 rounded font-bold hover:bg-orange-600">예약하기</button>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-white border border-gray-200 rounded-lg">
                               <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                  <img src="https://picsum.photos/seed/doyoon-cover/100/100" alt="Teacher" className="w-full h-full object-cover" />
                               </div>
                               <div>
                                  <div className="font-bold text-gray-800">강도윤 교장</div>
                                  <div className="text-xs text-gray-500">특별 진로 상담 (매주 수요일)</div>
                               </div>
                               <button className="ml-auto text-xs bg-gray-800 text-white px-3 py-1.5 rounded font-bold hover:bg-gray-700">예약하기</button>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Right: Form */}
                   <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                         <FileText className="w-5 h-5 text-school-orange" />
                         상담 예약 신청
                      </h3>
                      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                         <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1">학번/이름</label>
                            <input type="text" className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-school-orange" placeholder="예: 30101 홍길동" />
                         </div>
                         <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1">상담 유형</label>
                            <select className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-school-orange">
                               <option>진로/진학 상담</option>
                               <option>이능력 적성 상담</option>
                               <option>교우관계/심리 상담</option>
                               <option>기타</option>
                            </select>
                         </div>
                         <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1">희망 날짜</label>
                            <input type="date" className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-school-orange" />
                         </div>
                         <div>
                            <label className="block text-xs font-bold text-gray-500 mb-1">상담 내용 요약</label>
                            <textarea rows={4} className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-school-orange" placeholder="상담받고 싶은 내용을 간단히 적어주세요."></textarea>
                         </div>
                         <button className="w-full bg-school-orange text-white font-bold py-3 rounded hover:bg-orange-600 transition-colors">
                            예약 신청하기
                         </button>
                      </form>
                   </div>
                </div>
             </div>
          );

       case 'GRADUATES':
          return (
             <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="text-center mb-8">
                   <h3 className="text-2xl font-bold text-gray-800 mb-2">명예의 전당</h3>
                   <p className="text-gray-500">세계를 수호하는 강현의 자랑스러운 얼굴들입니다.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                   {[
                      { 
                         name: '김철수', 
                         role: 'ASH GUARD 제1팀장', 
                         year: '1회 졸업', 
                         desc: '최연소 팀장 승진, "붉은 혜성" 작전 지휘',
                         img: 'https://picsum.photos/seed/grad1/200/200'
                      },
                      { 
                         name: '이영희', 
                         role: '국립과학수사연구원 소장', 
                         year: '3회 졸업', 
                         desc: '이능력 범죄 분석의 일인자',
                         img: 'https://picsum.photos/seed/grad2/200/200'
                      },
                      { 
                         name: '박민수', 
                         role: 'S급 히어로 "썬더"', 
                         year: '5회 졸업', 
                         desc: '시민이 뽑은 가장 신뢰하는 히어로 1위',
                         img: 'https://picsum.photos/seed/grad3/200/200'
                      }
                   ].map((grad, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group text-center p-6">
                         <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-gray-100 group-hover:border-school-orange transition-colors">
                            <img src={grad.img} alt={grad.name} className="w-full h-full object-cover" />
                         </div>
                         <h4 className="font-bold text-lg text-gray-800 mb-1">{grad.name}</h4>
                         <div className="text-xs font-bold text-school-orange mb-2 bg-orange-50 inline-block px-2 py-0.5 rounded">{grad.role}</div>
                         <p className="text-sm text-gray-500 mb-4">{grad.year}</p>
                         <p className="text-sm text-gray-600 italic">"{grad.desc}"</p>
                      </div>
                   ))}
                </div>

                {/* Recent News */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-8">
                   <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      동문 소식
                   </h4>
                   <ul className="space-y-3">
                      {[
                         '[승진] 12회 졸업생 최민호, ASH GUARD 중앙본부 부본부장 취임',
                         '[수상] 15회 졸업생 정수진, 올해의 용감한 시민상 수상',
                         '[개업] 8회 졸업생 박준형, 이능력자 전문 법률 사무소 개소',
                         '[소식] 강현고 총동창회, 모교 발전기금 10억원 기탁'
                      ].map((news, idx) => (
                         <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 hover:text-school-orange cursor-pointer transition-colors">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                            {news}
                         </li>
                      ))}
                   </ul>
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
             <p className="text-school-sub mt-2 text-sm">여러분의 꿈을 현실로 만드는 강현의 진로 지원 시스템입니다.</p>
          </div>
          <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
             <span className="flex items-center cursor-pointer hover:text-school-orange transition-colors" onClick={onGoHome}>
                <Home className="w-3 h-3 mr-1"/> 홈
             </span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span>진로/ASH GUARD</span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span className="font-bold text-black">{getTabLabel(activeTab)}</span>
          </div>
       </div>

       <div className="grid md:grid-cols-4 gap-8">
          {/* Menu Column */}
          <div className="col-span-4 md:col-span-1">
             <ul className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:gap-0 border-b md:border-b-0 border-gray-200 md:border-t-2 md:border-school-orange pb-4 md:pb-0 no-scrollbar">
                {[
                   { id: 'SYSTEM', label: 'ASH GUARD 연계 시스템' },
                   { id: 'RECRUIT', label: '채용 공고' },
                   { id: 'UNI', label: '경찰/특수대학 진학' },
                   { id: 'COUNSELING', label: '진로상담실' },
                   { id: 'GRADUATES', label: '졸업생 현황' }
                ].map((item) => (
                   <li 
                      key={item.id}
                      onClick={() => setActiveTab(item.id as TabType)}
                      className={`flex-shrink-0 px-4 py-3 md:p-4 md:border-b border-gray-200 cursor-pointer transition-all rounded-lg md:rounded-none text-sm md:text-base flex items-center justify-between group
                         ${activeTab === item.id 
                            ? 'bg-school-orange text-white md:bg-school-orange md:text-white font-bold shadow-md md:shadow-none' 
                            : 'bg-gray-50 md:bg-white text-gray-600 hover:bg-gray-100'}`}
                   >
                      {item.label}
                      <ChevronRight className={`w-4 h-4 hidden md:block transition-transform ${activeTab === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />
                   </li>
                ))}
             </ul>
             
             <div className="hidden md:block mt-8 bg-gray-100 p-4 rounded-lg border border-gray-200">
                <h5 className="font-bold text-gray-800 mb-2 text-sm">문의사항</h5>
                <p className="text-xs text-gray-600 mb-1">진로지도부</p>
                <p className="text-lg font-bold text-school-orange">02-123-4567</p>
             </div>

             <button onClick={onGoHome} className="hidden md:block w-full mt-4 py-3 border border-gray-300 text-gray-600 rounded bg-white hover:bg-gray-50 transition-colors font-bold text-sm">
                메인 화면으로 이동
             </button>
          </div>
          
          {/* Content Column */}
          <div className="col-span-4 md:col-span-3 min-h-[500px]">
             {renderContent()}
          </div>
       </div>
    </div>
  );
};

export default SectionAshGuard;