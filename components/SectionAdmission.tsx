import React, { useState } from 'react';
import { ChevronRight, Home, Download, AlertCircle, Shield, CheckCircle, FileText } from 'lucide-react';

interface SectionAdmissionProps {
  onGoHome: () => void;
}

const SectionAdmission: React.FC<SectionAdmissionProps> = ({ onGoHome }) => {
  const [activeTab, setActiveTab] = useState<'GUIDE' | 'FORM' | 'RESULT'>('GUIDE');
  const [status, setStatus] = useState<'IDLE' | 'PROCESSING' | 'COMPLETED'>('IDLE');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('PROCESSING');
    setTimeout(() => setStatus('COMPLETED'), 2000);
  };

  if (status === 'COMPLETED') {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="bg-white border-2 border-school-orange p-10 rounded-lg shadow-lg inline-block">
            <h2 className="text-2xl font-bold text-school-text mb-4">지원서가 접수되었습니다</h2>
            <p className="text-gray-600 mb-8">
                예비 요원님의 지원서(접수번호: GH-2084-009)가 ASH GUARD 인사 시스템으로 전송되었습니다.<br/>
                1차 서류 합격 여부는 문자메시지로 개별 통보됩니다.
            </p>
            <div className="flex gap-4 justify-center">
              <button 
                  onClick={() => setStatus('IDLE')}
                  className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-black transition-colors"
              >
                  추가 접수하기
              </button>
              <button 
                  onClick={onGoHome}
                  className="bg-school-orange text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors"
              >
                  메인으로 이동
              </button>
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
                            {status === 'PROCESSING' ? '암호화 전송중...' : '지원서 제출'}
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

          </div>
       </div>
    </div>
  );
};

export default SectionAdmission;