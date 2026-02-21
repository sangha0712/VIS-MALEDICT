import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Home, AlertCircle, Shield, FileText, Zap, Award, Search, Loader2 } from 'lucide-react';

interface SectionAdmissionProps {
  onGoHome: () => void;
}

const SectionAdmission: React.FC<SectionAdmissionProps> = ({ onGoHome }) => {
  const [activeTab, setActiveTab] = useState<'GUIDE' | 'FORM' | 'RESULT'>('GUIDE');
  const [status, setStatus] = useState<'IDLE' | 'SCANNING' | 'COMPLETED'>('IDLE');
  
  // Scanning Animation States
  const [progress, setProgress] = useState({ intro: 0, grade: 0, force: 0 });
  const [logs, setLogs] = useState<string[]>([]);
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, message]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SCANNING');
    setLogs(['입학 심사 시스템에 접속 중입니다...', '지원자 데이터를 암호화하여 전송합니다.']);
    
    let pIntro = 0;
    let pGrade = 0;
    let pForce = 0;
    
    const interval = setInterval(() => {
        // 1. 자기소개서 분석
        if (pIntro < 100) {
            pIntro += Math.random() * 8;
            if (pIntro > 100) pIntro = 100;
            
            if (pIntro > 20 && pIntro < 30 && !logs.includes('자기소개서 문맥 분석 중...')) addLog('자기소개서 문맥 분석 중...');
            if (pIntro > 60 && pIntro < 70 && !logs.includes('핵심 키워드 추출: [정의], [노력], [책임감]')) addLog('핵심 키워드 추출: [정의], [노력], [책임감]');
            if (pIntro === 100 && !logs.includes('인성 평가 모듈: 적합 판정.')) addLog('인성 평가 모듈: 적합 판정.');
        } 
        // 2. 내신 성적 스캔 (자기소개서 완료 후)
        else if (pGrade < 100) {
            pGrade += Math.random() * 10;
            if (pGrade > 100) pGrade = 100;

            if (pGrade > 10 && pGrade < 20 && !logs.includes('NEIS 교육행정정보 시스템 연동 중...')) addLog('NEIS 교육행정정보 시스템 연동 중...');
            if (pGrade > 80 && pGrade < 90 && !logs.includes('중학교 3개년 성적 데이터 수신 완료.')) addLog('중학교 3개년 성적 데이터 수신 완료.');
            if (pGrade === 100 && !logs.includes('학업 성취도 분석: 상위 30% (Average)')) addLog('학업 성취도 분석: 상위 30% (Average)');
        }
        // 3. 포스 측정 (내신 완료 후)
        else if (pForce < 100) {
            pForce += Math.random() * 4; // 천천히 올라감
            if (pForce > 100) pForce = 100;

            if (pForce > 5 && pForce < 10 && !logs.includes('원격 파장 측정기(Remote-Scanner) 활성화...')) addLog('원격 파장 측정기(Remote-Scanner) 활성화...');
            if (pForce > 40 && pForce < 50 && !logs.includes('원격 신호 간섭 발생... 정밀 측정 불가.')) addLog('원격 신호 간섭 발생... 정밀 측정 불가.');
            if (pForce > 80 && pForce < 90 && !logs.includes('현장 측정 필요 대상으로 분류됨.')) addLog('현장 측정 필요 대상으로 분류됨.');
            if (pForce === 100 && !logs.includes('잠재력 측정 보류.')) addLog('잠재력 측정 보류.');
        }

        setProgress({ intro: Math.floor(pIntro), grade: Math.floor(pGrade), force: Math.floor(pForce) });

        if (pIntro >= 100 && pGrade >= 100 && pForce >= 100) {
            clearInterval(interval);
            addLog('최종 합격 여부를 판정하고 있습니다...');
            setTimeout(() => {
                setStatus('COMPLETED');
            }, 1500);
        }
    }, 50);
  };

  if (status === 'SCANNING') {
     return (
        <div className="max-w-2xl mx-auto py-20 px-4 animate-in fade-in duration-500">
           <div className="bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden relative">
              
              {/* Header */}
              <div className="bg-gray-50 border-b border-gray-200 p-8 text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100 relative">
                      <Shield className="w-10 h-10 text-school-orange animate-pulse" />
                      <div className="absolute inset-0 border-4 border-school-orange/20 rounded-full animate-spin-slow" style={{ animationDuration: '3s' }}></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-serif">입학 심사 진행 중</h3>
                  <p className="text-sm text-gray-500 mt-2">제출하신 서류와 잠재력을 정밀 분석하고 있습니다.<br/>잠시만 기다려주세요.</p>
              </div>

              {/* Body */}
              <div className="p-8 space-y-8">
                  {/* Step 1: Self Intro */}
                  <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm font-bold text-gray-700">
                          <span className="flex items-center gap-2">
                              <FileText className={`w-5 h-5 ${progress.intro === 100 ? 'text-school-orange' : 'text-gray-400'}`} />
                              자기소개서 AI 분석
                          </span>
                          <span className={progress.intro === 100 ? "text-school-orange" : "text-gray-500"}>{progress.intro}%</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-school-orange transition-all duration-300 ease-out" style={{ width: `${progress.intro}%` }}></div>
                      </div>
                  </div>

                  {/* Step 2: Grades */}
                  <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm font-bold text-gray-700">
                          <span className="flex items-center gap-2">
                               <Award className={`w-5 h-5 ${progress.grade === 100 ? 'text-school-orange' : 'text-gray-400'}`} />
                              NEIS 학업 성취도 조회
                          </span>
                          <span className={progress.grade === 100 ? "text-school-orange" : "text-gray-500"}>{progress.grade}%</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-school-orange transition-all duration-300 ease-out" style={{ width: `${progress.grade}%` }}></div>
                      </div>
                  </div>

                  {/* Step 3: Force */}
                  <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm font-bold text-gray-700">
                          <span className="flex items-center gap-2">
                              <Zap className={`w-5 h-5 ${progress.force > 0 ? 'text-school-orange animate-pulse' : 'text-gray-400'}`} />
                              잠재력(Force) 파장 측정
                          </span>
                          <span className="text-gray-500">{progress.force}%</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                              className="h-full bg-school-orange transition-all duration-300 ease-out" 
                              style={{ width: `${progress.force}%` }}
                          ></div>
                      </div>
                  </div>
                  
                  {/* Status Message Area */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                       <div className="flex items-center justify-center gap-3 text-sm text-gray-600 bg-gray-50 py-3 rounded-lg border border-gray-100">
                          <Loader2 className="w-4 h-4 text-school-orange animate-spin" />
                          <span className="font-medium animate-pulse">{logs[logs.length - 1] || '시스템 대기 중...'}</span>
                       </div>
                  </div>
              </div>
           </div>
        </div>
     );
  }

  if (status === 'COMPLETED') {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 animate-in zoom-in-95 duration-700">
        <div className="bg-white border-4 border-school-orange p-8 md:p-12 rounded-lg shadow-2xl relative overflow-hidden">
            {/* Background Seal */}
            <Shield className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-school-orange/5 rotate-12" />

            <div className="relative z-10 text-center">
               <div className="inline-block bg-school-orange text-white px-4 py-1 rounded-full text-sm font-bold mb-6 shadow-md">
                  2084학년도 신입생 선발 결과
               </div>
               
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">최종 합격</h2>
               <p className="text-2xl text-school-orange font-serif font-bold mb-8">ACCEPTED</p>

               <div className="w-20 h-1 bg-gray-200 mx-auto mb-8"></div>

               <div className="grid md:grid-cols-3 gap-6 text-left max-w-2xl mx-auto mb-10">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                     <div className="flex items-center gap-2 mb-2 text-blue-600 font-bold">
                        <FileText className="w-5 h-5" /> 자기소개서
                     </div>
                     <div className="text-2xl font-bold text-gray-800">88<span className="text-sm text-gray-500 font-normal">/100</span></div>
                     <p className="text-xs text-gray-500 mt-1">"진정성 있는 서술"</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                     <div className="flex items-center gap-2 mb-2 text-green-600 font-bold">
                        <Award className="w-5 h-5" /> 내신 성적
                     </div>
                     <div className="text-2xl font-bold text-gray-800">상위 30<span className="text-sm text-gray-500 font-normal">%</span></div>
                     <p className="text-xs text-gray-500 mt-1">"성실한 학업 수행"</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-inner">
                     <div className="flex items-center gap-2 mb-2 text-gray-600 font-bold">
                        <Zap className="w-5 h-5" /> 포스(Force)
                     </div>
                     <div className="text-2xl font-bold text-gray-600">등급 미정</div>
                     <p className="text-xs text-gray-500 mt-1 font-bold">"교내에서 측정 예정입니다"</p>
                  </div>
               </div>

               <p className="text-gray-700 leading-relaxed mb-8 text-lg font-medium">
                  귀하의 잠재력과 성실함을 높이 평가하였습니다.<br/>
                  강현고등학교는 귀하와 함께 성장하기를 기대합니다.<br/>
                  입학을 진심으로 환영합니다.
               </p>

               <div className="flex flex-col md:flex-row gap-4 justify-center">
                 <button 
                     onClick={() => alert('등록금 납부 페이지로 이동합니다.')}
                     className="bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-colors shadow-lg"
                 >
                     입학 등록금 납부
                 </button>
                 <button 
                     onClick={onGoHome}
                     className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors"
                 >
                     메인으로 이동
                 </button>
               </div>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
      
       {/* Breadcrumb Header */}
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">
                {activeTab === 'GUIDE' ? '신입생 모집요강' : activeTab === 'FORM' ? '입학원서접수' : '합격자조회'}
             </h2>
             <p className="text-school-sub mt-2 text-sm">국가의 미래를 책임질 ASH GUARD 예비 요원을 모집합니다.</p>
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
             <span className="font-bold text-black">
                {activeTab === 'GUIDE' ? '모집요강' : activeTab === 'FORM' ? '원서접수' : '합격자조회'}
             </span>
          </div>
       </div>

       <div className="grid md:grid-cols-4 gap-8">
          {/* Menu Column: Horizontal Scroll on Mobile, Vertical Sidebar on Desktop */}
          <div className="col-span-4 md:col-span-1">
             <ul className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:gap-0 border-b md:border-b-0 border-gray-200 md:border-t-2 md:border-school-orange pb-4 md:pb-0 no-scrollbar">
                {[
                    { id: 'GUIDE', label: '모집요강' },
                    { id: 'FORM', label: '원서접수' },
                    { id: 'PRACTICAL', label: '실기시험 안내' },
                    { id: 'RESULT', label: '합격자조회' }
                ].map((item) => (
                    <li 
                        key={item.id}
                        onClick={() => setActiveTab(item.id as any)}
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

          {/* Main Content Area */}
          <div className="col-span-4 md:col-span-3">
             
             {/* GUIDE TAB CONTENT */}
             {activeTab === 'GUIDE' && (
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
                   
                   {/* Intro Banner */}
                   <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h3 className="text-xl font-bold text-school-text mb-2 flex items-center gap-2">
                         <Shield className="w-6 h-6 text-school-orange" />
                         2084학년도 신입생 선발 기준 안내
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                         본교는 성적뿐만 아니라 정의감, 희생정신, 그리고 실전 전투 능력을 종합적으로 평가합니다.<br/>
                         ASH GUARD 트랙 지원자는 별도의 신체 능력 측정 및 이능력 등급 심사를 통과해야 합니다.
                      </p>
                   </div>

                   {/* Admission Schedule */}
                   <section>
                      <h4 className="text-lg font-bold border-l-4 border-school-orange pl-3 mb-4 text-gray-800">전형 일정</h4>
                      <div className="overflow-x-auto">
                         <table className="w-full text-sm text-center border-t border-gray-800 min-w-[500px]">
                            <thead className="bg-gray-100 text-gray-700 font-bold">
                               <tr>
                                  <th className="py-3 border-b border-gray-300">구분</th>
                                  <th className="py-3 border-b border-gray-300">일정</th>
                                  <th className="py-3 border-b border-gray-300">비고</th>
                               </tr>
                            </thead>
                            <tbody>
                               <tr>
                                  <td className="py-3 border-b border-gray-200">원서 접수</td>
                                  <td className="py-3 border-b border-gray-200">2084.02.01 (월) ~ 02.28 (일)</td>
                                  <td className="py-3 border-b border-gray-200">온라인 접수 원칙</td>
                               </tr>
                               <tr>
                                  <td className="py-3 border-b border-gray-200">실기 전형 (1차)</td>
                                  <td className="py-3 border-b border-gray-200">2084.03.05 (금)</td>
                                  <td className="py-3 border-b border-gray-200">체력검정 / 기초전투</td>
                               </tr>
                               <tr>
                                  <td className="py-3 border-b border-gray-200">면접 및 능력심사</td>
                                  <td className="py-3 border-b border-gray-200">2084.03.10 (수)</td>
                                  <td className="py-3 border-b border-gray-200">이능력자 필수</td>
                               </tr>
                            </tbody>
                         </table>
                      </div>
                   </section>

                   {/* Cut-off Table */}
                   <section>
                      <h4 className="text-lg font-bold border-l-4 border-school-orange pl-3 mb-4 text-gray-800">작년(2083) 합격 커트라인</h4>
                      <p className="text-xs text-gray-500 mb-2">* 합격선은 매년 변동될 수 있으며, 참고용으로만 활용하시기 바랍니다.</p>
                      <div className="overflow-x-auto">
                         <table className="w-full text-sm text-center border-t border-gray-800 min-w-[600px]">
                            <thead className="bg-gray-100 text-gray-700 font-bold">
                               <tr>
                                  <th className="py-3 border-b border-gray-300">모집단위</th>
                                  <th className="py-3 border-b border-gray-300">내신 성적 (상위 %)</th>
                                  <th className="py-3 border-b border-gray-300">실기 점수 (1000점 만점)</th>
                                  <th className="py-3 border-b border-gray-300">특이 사항</th>
                               </tr>
                            </thead>
                            <tbody>
                               <tr className="hover:bg-orange-50 transition-colors">
                                  <td className="py-4 border-b border-gray-200 font-bold text-school-orange">히어로전술과</td>
                                  <td className="py-4 border-b border-gray-200">상위 8% 이내</td>
                                  <td className="py-4 border-b border-gray-200">880점 이상</td>
                                  <td className="py-4 border-b border-gray-200 text-xs text-gray-500">신체등급 A등급 필수</td>
                               </tr>
                               <tr className="hover:bg-orange-50 transition-colors">
                                  <td className="py-4 border-b border-gray-200 font-bold text-blue-600">특수수사과</td>
                                  <td className="py-4 border-b border-gray-200">상위 2% 이내</td>
                                  <td className="py-4 border-b border-gray-200">750점 이상</td>
                                  <td className="py-4 border-b border-gray-200 text-xs text-gray-500">IQ 140 이상 권장</td>
                               </tr>
                               <tr className="hover:bg-orange-50 transition-colors">
                                  <td className="py-4 border-b border-gray-200 font-bold text-green-600">레스큐지원과</td>
                                  <td className="py-4 border-b border-gray-200">상위 15% 이내</td>
                                  <td className="py-4 border-b border-gray-200">820점 이상</td>
                                  <td className="py-4 border-b border-gray-200 text-xs text-gray-500">응급처치 자격 가산점</td>
                               </tr>
                            </tbody>
                         </table>
                      </div>
                   </section>

                   {/* Apply Button */}
                   <div className="flex justify-center pt-8">
                      <button 
                         onClick={() => setActiveTab('FORM')}
                         className="bg-school-orange text-white text-lg font-bold px-12 py-4 rounded shadow-lg hover:bg-orange-600 transition-transform hover:-translate-y-1 flex items-center gap-2"
                      >
                         <FileText className="w-6 h-6" />
                         원서 접수 바로가기
                      </button>
                   </div>
                </div>
             )}

             {/* FORM TAB CONTENT */}
             {activeTab === 'FORM' && (
                <div className="animate-in fade-in slide-in-from-right-2 duration-500">
                   {/* Info Box */}
                   <div className="bg-gray-50 border border-gray-200 p-4 mb-8 flex items-start gap-3 text-sm text-gray-600">
                      <AlertCircle className="w-5 h-5 text-school-orange flex-shrink-0" />
                      <div>
                         <p className="font-bold mb-1 text-gray-800">지원자 필독 사항</p>
                         <ul className="list-disc pl-4 space-y-1">
                            <li>본교 졸업생 상위 10%는 ASH GUARD 정규직으로 우선 채용됩니다.</li>
                            <li>이능력 보유자는 '특기자 전형'으로 지원해야 하며, 측정 기록표를 첨부해야 합니다.</li>
                            <li>신원 조회 시 결격 사유(범죄 경력 등)가 발견될 경우 합격이 취소됩니다.</li>
                         </ul>
                      </div>
                   </div>

                   <form onSubmit={handleSubmit} className="border-t-2 border-gray-800">
                      <table className="w-full text-sm border-b border-gray-200">
                         <tbody>
                            <tr>
                               <th className="bg-gray-100 p-4 text-left font-bold border-b border-gray-200 w-32 md:w-48">성명</th>
                               <td className="p-4 border-b border-gray-200">
                                  <input required type="text" className="border border-gray-300 px-2 py-1.5 w-full md:w-64 focus:outline-none focus:border-school-orange" placeholder="실명 기재" />
                               </td>
                            </tr>
                            <tr>
                               <th className="bg-gray-100 p-4 text-left font-bold border-b border-gray-200">주민등록번호</th>
                               <td className="p-4 border-b border-gray-200">
                                   <input type="text" className="border border-gray-300 px-2 py-1.5 w-full md:w-64 focus:outline-none focus:border-school-orange" placeholder="예: 20680101-3xxxxxx" />
                               </td>
                            </tr>
                            <tr>
                               <th className="bg-gray-100 p-4 text-left font-bold border-b border-gray-200">지원전형</th>
                               <td className="p-4 border-b border-gray-200">
                                  <div className="flex flex-wrap gap-4">
                                     <label className="flex items-center gap-1 cursor-pointer">
                                        <input type="radio" name="type" className="accent-school-orange" defaultChecked /> 일반전형(필기/체력)
                                     </label>
                                     <label className="flex items-center gap-1 cursor-pointer">
                                        <input type="radio" name="type" className="accent-school-orange" /> 특기자전형(이능력)
                                     </label>
                                     <label className="flex items-center gap-1 cursor-pointer">
                                        <input type="radio" name="type" className="accent-school-orange" /> 국가유공자전형
                                     </label>
                                  </div>
                               </td>
                            </tr>
                            <tr>
                               <th className="bg-gray-100 p-4 text-left font-bold border-b border-gray-200">희망학과</th>
                               <td className="p-4 border-b border-gray-200">
                                   <select className="border border-gray-300 px-2 py-1.5 w-full md:w-64 focus:outline-none focus:border-school-orange">
                                      <option>학과 선택</option>
                                      <option>히어로전술과 (Hero Combat)</option>
                                      <option>특수수사과 (Investigation)</option>
                                      <option>레스큐지원과 (Rescue & Support)</option>
                                   </select>
                               </td>
                            </tr>
                            <tr>
                               <th className="bg-gray-100 p-4 text-left font-bold border-b border-gray-200">자기소개서</th>
                               <td className="p-4 border-b border-gray-200">
                                  <textarea rows={5} className="border border-gray-300 w-full p-2 focus:outline-none focus:border-school-orange" placeholder="지원 동기, 자신의 정의관, 입학 후 포부를 서술하시오."></textarea>
                               </td>
                            </tr>
                         </tbody>
                      </table>

                      <div className="mt-8 flex justify-center gap-2">
                         <button type="button" className="px-6 py-2.5 border border-gray-300 bg-white text-gray-700 font-bold rounded hover:bg-gray-50">임시저장</button>
                         <button type="submit" className="px-6 py-2.5 bg-school-orange text-white font-bold rounded hover:bg-orange-600 shadow-md">
                            지원서 제출 및 심사 시작
                         </button>
                      </div>
                   </form>
                   
                   <div className="mt-8 text-center">
                     <button 
                        onClick={() => setActiveTab('GUIDE')}
                        className="text-sm text-gray-500 underline hover:text-school-orange"
                     >
                        &lt; 모집요강 다시보기
                     </button>
                   </div>
                </div>
             )}
             
             {/* RESULT TAB CONTENT (Placeholder for manual navigation if needed) */}
             {activeTab === 'RESULT' && (
                <div className="text-center py-20 border border-gray-200 rounded-lg bg-gray-50">
                    <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-700 mb-2">합격자 조회</h3>
                    <p className="text-gray-500">원서 접수 시 발급된 수험번호로 조회 가능합니다.</p>
                </div>
             )}

          </div>
       </div>
    </div>
  );
};

export default SectionAdmission;