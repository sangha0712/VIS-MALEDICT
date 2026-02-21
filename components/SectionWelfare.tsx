import React, { useState } from 'react';
import { ChevronRight, Home, FileText, Stethoscope, Wrench } from 'lucide-react';

interface SectionWelfareProps {
  onGoHome: () => void;
}

const SectionWelfare: React.FC<SectionWelfareProps> = ({ onGoHome }) => {
  const [activeTab, setActiveTab] = useState<'EQUIPMENT' | 'MEDICAL'>('EQUIPMENT');

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-school-text">장비/치료비 청구</h2>
          <p className="text-school-sub mt-2 text-sm">훈련 및 작전 중 발생한 손실에 대한 보상 청구 시스템입니다.</p>
        </div>
        <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
          <span className="flex items-center cursor-pointer hover:text-school-orange transition-colors" onClick={onGoHome}>
            <Home className="w-3 h-3 mr-1"/> 홈
          </span>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="font-bold text-black">복지/지원</span>
        </div>
      </div>

      <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-lg">
        <button 
          onClick={() => setActiveTab('EQUIPMENT')}
          className={`flex-1 py-3 rounded-md font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'EQUIPMENT' ? 'bg-white text-school-orange shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
        >
          <Wrench className="w-4 h-4" /> 장비 수리/교체 청구
        </button>
        <button 
          onClick={() => setActiveTab('MEDICAL')}
          className={`flex-1 py-3 rounded-md font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'MEDICAL' ? 'bg-white text-school-orange shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}
        >
          <Stethoscope className="w-4 h-4" /> 의료비 지원 신청
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          {activeTab === 'EQUIPMENT' ? <Wrench className="w-6 h-6 text-gray-600" /> : <Stethoscope className="w-6 h-6 text-red-500" />}
          {activeTab === 'EQUIPMENT' ? '장비 파손 경위서 작성' : '의료비 지원 신청서 작성'}
        </h3>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">학번 / 이름</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-school-orange" placeholder="예: 30101 홍길동" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">발생 일시</label>
              <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-school-orange" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {activeTab === 'EQUIPMENT' ? '파손 장비명 / 수량' : '진단명 / 병원명'}
            </label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-school-orange" placeholder={activeTab === 'EQUIPMENT' ? "예: 훈련용 강화 쉴드 / 1개" : "예: 마력 역류에 의한 화상 / 국립이능력병원"} />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {activeTab === 'EQUIPMENT' ? '파손 경위 (상세히)' : '사고 경위 (상세히)'}
            </label>
            <textarea rows={5} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-school-orange" placeholder="육하원칙에 의거하여 상세히 기술하십시오. 훈련 중 발생한 사고임을 증명해야 보상이 가능합니다."></textarea>
          </div>

          <div className="bg-gray-50 p-4 rounded text-xs text-gray-500">
            <p className="mb-1 font-bold">※ 증빙 서류 안내</p>
            <ul className="list-disc pl-4 space-y-1">
              {activeTab === 'EQUIPMENT' ? (
                <>
                  <li>파손된 장비 사진 1부</li>
                  <li>담당 교관 확인서 1부</li>
                </>
              ) : (
                <>
                  <li>진단서 및 진료비 영수증 사본</li>
                  <li>입퇴원 확인서 (해당 시)</li>
                </>
              )}
            </ul>
          </div>

          <button 
            className="w-full bg-school-orange text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            onClick={() => alert('신청서가 제출되었습니다.\n처리 결과는 [마이페이지]에서 확인 가능합니다.')}
          >
            <FileText className="w-5 h-5" /> 신청서 제출하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default SectionWelfare;
