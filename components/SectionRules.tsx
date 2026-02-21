import React from 'react';
import { ChevronRight, Home, Gavel, AlertTriangle, CheckCircle, FileText } from 'lucide-react';

interface SectionRulesProps {
  onGoHome: () => void;
}

const SectionRules: React.FC<SectionRulesProps> = ({ onGoHome }) => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-school-text">이능력 사용 규정</h2>
          <p className="text-school-sub mt-2 text-sm">안전한 학교 생활을 위한 강현고등학교 교칙 및 이능력 관리 지침입니다.</p>
        </div>
        <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
          <span className="flex items-center cursor-pointer hover:text-school-orange transition-colors" onClick={onGoHome}>
            <Home className="w-3 h-3 mr-1"/> 홈
          </span>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="font-bold text-black">규정 안내</span>
        </div>
      </div>

      <div className="space-y-8">
        {/* Warning Box */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
          <h3 className="text-red-800 font-bold text-lg flex items-center gap-2 mb-2">
            <AlertTriangle className="w-6 h-6" />
            제1원칙: 교내 무단 이능력 사용 금지
          </h3>
          <p className="text-red-700 text-sm leading-relaxed">
            허가된 훈련 구역(Training Zone) 외의 장소(복도, 교실, 식당 등)에서 이능력을 사용하는 것은 엄격히 금지됩니다.<br/>
            위반 시 벌점 부과 및 이능력 제어 장치(PCD) 강제 출력 제한 조치가 취해질 수 있습니다.
          </p>
        </div>

        {/* Rules List */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              허용 범위
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5"></span>
                수업 및 훈련 중 교관의 통제 하에 이루어지는 사용
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5"></span>
                긴급 상황(화재, 붕괴, 빌런 침입 등) 발생 시 인명 구조 목적
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5"></span>
                동아리 활동 중 승인된 구역 내에서의 연구 목적 사용
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
              <Gavel className="w-5 h-5 text-red-500" />
              처벌 규정
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5"></span>
                <strong>경고:</strong> 실수에 의한 경미한 발동 (피해 없음)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5"></span>
                <strong>근신 3일:</strong> 고의적 사용 또는 위협 행위
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5"></span>
                <strong>퇴학:</strong> 이능력을 사용한 상해 입힘 또는 범죄 악용
              </li>
            </ul>
          </div>
        </div>

        {/* Download */}
        <div className="bg-gray-100 p-6 rounded-xl flex items-center justify-between">
          <div>
            <h4 className="font-bold text-gray-800">2084학년도 학생 생활 규정집 (전체)</h4>
            <p className="text-xs text-gray-500 mt-1">최종 개정일: 2084. 03. 01</p>
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded font-bold text-sm hover:bg-gray-50 text-gray-700">
            <FileText className="w-4 h-4" /> PDF 다운로드
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionRules;
