import React, { useState } from 'react';
import { ChevronRight, Home, Shield, Users, Lock, Zap, Award, HelpCircle, Check, X, Star } from 'lucide-react';

interface SectionAshGuardProps {
  onGoHome: () => void;
}

const SectionAshGuard: React.FC<SectionAshGuardProps> = ({ onGoHome }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "이능력이 없는 학생(Non-Awakened)도 ASH GUARD 트랙을 밟을 수 있나요?",
      a: "네, 가능합니다. ASH GUARD는 전투 요원뿐만 아니라 전략 분석가, 사이버 보안관, 현장 지휘관 등 다양한 직군을 필요로 합니다. 비능력자는 '전술지휘' 또는 '특수수사' 트랙을 통해 장교로 임관할 수 있습니다."
    },
    {
      q: "훈련 중 부상을 당하면 어떻게 처리되나요?",
      a: "본교는 ASH GUARD 본부와 동일한 수준의 '재생 의료 포드(Regen-Pod)'를 보유하고 있습니다. 훈련 중 발생하는 모든 부상은 학교 측에서 100% 무상 치료하며, 후유증이 남을 경우 국가유공자법에 준하여 보상합니다."
    },
    {
      q: "졸업 후 의무 복무 기간이 있나요?",
      a: "강현고 특별 전형으로 임관 시, 혜택(대학 등록금 전액 지원, 소위 임관 등)을 받는 대신 4년의 의무 복무 기간이 주어집니다. 이후에는 자유롭게 전역하거나 장기 복무로 전환할 수 있습니다."
    },
    {
      q: "재학 중 실제 작전에 투입되기도 하나요?",
      a: "원칙적으로 미성년자의 실전 투입은 금지되어 있으나, 3학년 2학기 '인턴십 과정' 중에는 멘토 요원의 감독 하에 '안전 등급 C' 이하의 저위험 현장에 투입되어 현장 경험을 쌓게 됩니다."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
      
       {/* Breadcrumb Header */}
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">ASH GUARD 연계 시스템</h2>
             <p className="text-school-sub mt-2 text-sm">세계 최고의 히어로 기관과 함께하는 엘리트 양성 코스입니다.</p>
          </div>
          <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
             <span 
                className="flex items-center cursor-pointer hover:text-school-orange transition-colors" 
                onClick={onGoHome}
             >
                <Home className="w-3 h-3 mr-1"/> 홈
             </span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span className="font-bold text-black">ASH GUARD</span>
          </div>
       </div>

       {/* 1. Partnership System Overview */}
       <section className="mb-16">
          <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-school-orange opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                   <div className="flex items-center gap-2 text-school-orange font-bold mb-2">
                      <Shield className="w-5 h-5" />
                      <span>STRATEGIC PARTNERSHIP</span>
                   </div>
                   <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                      강현에서 시작하는<br/>
                      <span className="text-school-orange">가장 빠른 히어로의 길</span>
                   </h3>
                   <p className="text-gray-300 leading-relaxed mb-6">
                      강현고등학교는 대한민국 유일의 ASH GUARD 공식 지정 양성 기관입니다.<br/>
                      2075년 체결된 '인재 양성 MOU'에 따라, 본교의 교육 과정은 
                      ASH GUARD 신입 요원 훈련소(Boot Camp) 과정과 100% 연동됩니다.<br/>
                      졸업과 동시에 여러분은 '준비된 요원'으로 인정받게 됩니다.
                   </p>
                   <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                         <div className="bg-school-orange/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-school-orange" /></div>
                         <span className="font-bold">현역 S급~A급 요원의 멘토링 및 특강</span>
                      </li>
                      <li className="flex items-center gap-3">
                         <div className="bg-school-orange/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-school-orange" /></div>
                         <span className="font-bold">ASH GUARD 전술 네트워크(G-Net) 접속 권한</span>
                      </li>
                      <li className="flex items-center gap-3">
                         <div className="bg-school-orange/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-school-orange" /></div>
                         <span className="font-bold">최신 프로토타입 장비(슈트, 가젯) 우선 지급</span>
                      </li>
                   </ul>
                </div>

                {/* Custom Police/ASH GUARD Badge Visualization */}
                <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-xl p-1 backdrop-blur-sm border border-white/20 h-full min-h-[300px] flex items-center justify-center relative overflow-hidden group">
                    {/* Abstract Background Texture */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    
                    {/* Glowing Effect behind the badge */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-500/20 rounded-full blur-3xl"></div>

                    {/* Badge Construction */}
                    <div className="relative z-10 flex flex-col items-center transform transition-transform duration-500 group-hover:scale-105">
                        <div className="w-48 h-56 relative flex items-center justify-center">
                             {/* Shield Base */}
                             <Shield className="w-full h-full text-yellow-500 fill-blue-900 absolute drop-shadow-2xl" strokeWidth={1} />
                             
                             {/* Inner Content */}
                             <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                                <span className="font-serif font-bold text-yellow-500 text-sm tracking-widest mb-1">POLICE</span>
                                <Star className="w-16 h-16 text-gray-200 fill-gray-200 drop-shadow-md mb-1" />
                                <div className="flex flex-col items-center">
                                    <span className="font-sans font-black text-white text-2xl tracking-tighter leading-none">ASH</span>
                                    <span className="font-sans font-black text-white text-xl tracking-tighter leading-none">GUARD</span>
                                </div>
                                <span className="font-sans font-bold text-yellow-500 text-[9px] tracking-[0.2em] uppercase mt-2">Special Tactics</span>
                             </div>
                        </div>
                        
                        <div className="mt-6 text-center">
                             <h4 className="text-xl font-serif font-bold text-white tracking-widest border-b-2 border-yellow-500 pb-1 inline-block">OFFICIAL PARTNER</h4>
                             <p className="text-blue-300 text-[10px] mt-1 uppercase tracking-widest">Ganghyeon High School</p>
                        </div>
                    </div>
                </div>
             </div>
          </div>
       </section>

       {/* 2. Comparison Table */}
       <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
             <span className="w-2 h-8 bg-gray-800 mr-3"></span>
             일반 채용 vs 강현고 특별 전형 비교
          </h3>
          <div className="overflow-x-auto bg-white rounded-xl shadow-soft border border-gray-200">
             <table className="w-full text-center">
                <thead>
                   <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="py-5 px-4 text-gray-500 font-medium">구분</th>
                      <th className="py-5 px-4 text-gray-800 text-lg font-bold w-1/3">일반 공채 (성인)</th>
                      <th className="py-5 px-4 text-school-orange text-lg font-bold w-1/3 bg-orange-50/50 border-x border-orange-100">강현고 졸업생 (특별 전형)</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                   <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-bold text-gray-600">임관 계급</td>
                      <td className="py-4 px-4 text-gray-600">훈련생 (Trainee)</td>
                      <td className="py-4 px-4 text-school-orange font-bold bg-orange-50/30 border-x border-orange-50">소위 (Lieutenant)</td>
                   </tr>
                   <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-bold text-gray-600">필수 교육 기간</td>
                      <td className="py-4 px-4 text-gray-600">1년 (기초 군사 훈련 포함)</td>
                      <td className="py-4 px-4 text-school-orange font-bold bg-orange-50/30 border-x border-orange-50">면제 (고교 3년 인정)</td>
                   </tr>
                   <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-bold text-gray-600">보직 선택</td>
                      <td className="py-4 px-4 text-gray-600">성적순 랜덤 배치</td>
                      <td className="py-4 px-4 text-school-orange font-bold bg-orange-50/30 border-x border-orange-50">우선 선택권 부여</td>
                   </tr>
                   <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-bold text-gray-600">장비 등급</td>
                      <td className="py-4 px-4 text-gray-600">Standard (C급)</td>
                      <td className="py-4 px-4 text-school-orange font-bold bg-orange-50/30 border-x border-orange-50">Elite (A~B급)</td>
                   </tr>
                   <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-bold text-gray-600">초봉 (연)</td>
                      <td className="py-4 px-4 text-gray-600">4,500만원</td>
                      <td className="py-4 px-4 text-school-orange font-bold bg-orange-50/30 border-x border-orange-50">6,800만원 + @</td>
                   </tr>
                </tbody>
             </table>
          </div>
       </section>

       {/* 3. Common Questions (Accordion) */}
       <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
             <span className="w-2 h-8 bg-gray-800 mr-3"></span>
             자주 묻는 질문 (FAQ)
          </h3>
          <div className="grid gap-4">
             {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm hover:border-school-orange transition-colors">
                   <button 
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-800 hover:bg-gray-50"
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                   >
                      <span className="flex items-center gap-3">
                         <HelpCircle className="w-5 h-5 text-school-orange" />
                         {faq.q}
                      </span>
                      <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFaq === index ? 'rotate-90' : ''}`} />
                   </button>
                   <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-40 border-t border-gray-100' : 'max-h-0'}`}>
                      <div className="p-5 bg-gray-50 text-gray-600 text-sm leading-relaxed">
                         {faq.a}
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </section>

       {/* Bottom CTA */}
       <div className="mt-16 text-center bg-school-orange/10 rounded-xl p-8 border border-school-orange/20">
          <p className="text-lg font-bold text-gray-800 mb-4">ASH GUARD와 함께할 준비가 되셨습니까?</p>
          <button className="bg-school-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg">
             신입생 모집요강 확인하기
          </button>
       </div>
    </div>
  );
};

export default SectionAshGuard;