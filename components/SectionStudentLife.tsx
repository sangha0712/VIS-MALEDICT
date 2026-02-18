import React, { useState } from 'react';
import { ChevronRight, Home, Users, MessageCircle, Search, Heart, ShieldAlert, ThumbsUp, MessageSquare, AlertCircle, ShoppingBag } from 'lucide-react';

interface SectionStudentLifeProps {
  onGoHome: () => void;
  initialTab?: string;
}

type TabType = 'CLUBS' | 'BAMBOO' | 'LOST_FOUND' | 'PARENTS' | 'VIOLENCE';

const SectionStudentLife: React.FC<SectionStudentLifeProps> = ({ onGoHome, initialTab }) => {
  const [activeTab, setActiveTab] = useState<TabType>((initialTab as TabType) || 'CLUBS');

  const getTabLabel = (tab: TabType) => {
    switch (tab) {
      case 'CLUBS': return '동아리 활동';
      case 'BAMBOO': return '대나무숲 (익명)';
      case 'LOST_FOUND': return '분실물 센터';
      case 'PARENTS': return '학부모회';
      case 'VIOLENCE': return '학교폭력신고';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'CLUBS':
         return (
            <div className="space-y-6">
               <h3 className="text-xl font-bold text-gray-800 border-l-4 border-school-orange pl-3 mb-4">주요 동아리 안내</h3>
               <div className="grid md:grid-cols-2 gap-4">
                  {[
                     { name: 'Tactical OPS', cat: '학술/전술', desc: '소대 단위 전술 연구 및 모의전' },
                     { name: 'Artifact Hunters', cat: '탐사', desc: '고대 유물 발굴 및 감정 연구' },
                     { name: 'Code: Breaker', cat: '정보/해킹', desc: '사이버 보안 및 암호 해독' },
                     { name: 'Healer\'s Hand', cat: '봉사/의료', desc: '지역 사회 의료 봉사 및 응급처치' },
                     { name: 'Psyche', cat: '연구', desc: '정신계 이능력 방어 기제 연구' },
                     { name: 'Mecha-nics', cat: '기술', desc: '서포트 기어 및 드론 개조' }
                  ].map((club, idx) => (
                     <div key={idx} className="border border-gray-200 p-5 rounded-lg hover:shadow-md transition-shadow bg-white">
                        <div className="flex justify-between items-start mb-2">
                           <h4 className="font-bold text-lg text-gray-800">{club.name}</h4>
                           <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{club.cat}</span>
                        </div>
                        <p className="text-sm text-gray-600">{club.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         );
      case 'BAMBOO':
         return (
            <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-4 rounded text-center mb-4">
                   <p className="text-sm text-green-800 font-bold flex items-center justify-center gap-2">
                      <AlertCircle className="w-4 h-4"/>
                      ※ 대나무숲은 철저한 익명성이 보장되나, 명예훼손 및 허위사실 유포 시 교칙에 따라 처벌받을 수 있습니다.
                   </p>
                </div>
                
                <div className="space-y-4">
                   <div className="border border-gray-200 p-5 rounded-lg bg-white shadow-sm">
                      <div className="flex justify-between items-center mb-3">
                         <span className="font-bold text-school-orange">#34824번째_외침</span>
                         <span className="text-xs text-gray-400">방금 전</span>
                      </div>
                      <p className="text-gray-800 mb-4 leading-relaxed">
                         야 솔직히 F급이나 무능력자들은 일반고 전학 가야 되는 거 아님?<br/>
                         세금 들여서 훈련시켜봤자 빌런 만나면 3초컷일 텐데 왜 굳이 여기서 버티면서 조별 과제 민폐 끼치냐? 진짜 이해 안 됨;;<br/>
                         특히 일반과 2학년 3반 너네 말이야 훈련장에서 알짱거리지 마라 다친다.
                      </p>
                      <div className="flex gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3">
                         <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3"/> 공감 1,240</span>
                         <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3"/> 댓글 342</span>
                      </div>
                   </div>

                   <div className="border border-gray-200 p-5 rounded-lg bg-white shadow-sm">
                      <div className="flex justify-between items-center mb-3">
                         <span className="font-bold text-school-orange">#34823번째_외침</span>
                         <span className="text-xs text-gray-400">15분 전</span>
                      </div>
                      <p className="text-gray-800 mb-4 leading-relaxed">
                         어제 시가전 모의 훈련에서 트롤짓한 1학년 누구냐? <br/>
                         광역기 쓰는데 아군 위치 확인도 안 하고 쏘면 어떡함? 내 쉴드 아니었으면 우리 분대 전멸이었어.<br/>
                         제발 기본은 하고 살자.
                      </p>
                      <div className="flex gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3">
                         <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3"/> 공감 89</span>
                         <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3"/> 댓글 12</span>
                      </div>
                   </div>

                   <div className="border border-gray-200 p-5 rounded-lg bg-white shadow-sm">
                      <div className="flex justify-between items-center mb-3">
                         <span className="font-bold text-school-orange">#34822번째_외침</span>
                         <span className="text-xs text-gray-400">1시간 전</span>
                      </div>
                      <p className="text-gray-800 mb-4 leading-relaxed">
                         요즘 빌런들 너무 설치는데 학교 밖에서 능력 써도 정당방위 인정해줘야 하는 거 아님?<br/>
                         어제 하교하다가 뒷골목에서 이상한 놈 마주쳤는데, 교칙 때문에 튀느라 진짜 죽을 뻔했다.<br/>
                         우리가 히어로 지망생이지 동네북이냐고.
                      </p>
                      <div className="flex gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3">
                         <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3"/> 공감 203</span>
                         <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3"/> 댓글 56</span>
                      </div>
                   </div>

                   <div className="border border-gray-200 p-5 rounded-lg bg-white shadow-sm">
                      <div className="flex justify-between items-center mb-3">
                         <span className="font-bold text-school-orange">#34821번째_외침</span>
                         <span className="text-xs text-gray-400">3시간 전</span>
                      </div>
                      <p className="text-gray-800 mb-4 leading-relaxed">
                         [소문] 3학년 선배 중에 빌런 조직이랑 내통하는 사람 있다는데 진짜임?<br/>
                         저번에 압수된 '레드 더스트'도 내부 소행이라며... 무섭다 진짜.
                      </p>
                      <div className="flex gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3">
                         <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3"/> 공감 450</span>
                         <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3"/> 댓글 118</span>
                      </div>
                   </div>
                </div>
                <div className="text-center">
                   <button className="bg-gray-800 text-white px-6 py-2 rounded font-bold hover:bg-gray-700">제보하기</button>
                </div>
            </div>
         );
      case 'LOST_FOUND':
         return (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800 border-l-4 border-school-orange pl-3 mb-4">분실물 센터</h3>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded text-sm text-blue-800 mb-4">
                   위험 등급 아티팩트나 무기류 분실 시 즉시 <strong>생활안전부(02-XXX-XXXX)</strong>로 신고하십시오.
                   미신고 적발 시 중징계 처리됩니다.
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                   {[
                      { item: '에테르 제어 반지 (C급)', loc: '제1전술훈련장 탈의실', date: '2084.05.02', status: '보관중' },
                      { item: '전술 단검 (훈련용)', loc: '학생식당', date: '2084.05.01', status: '분실' },
                      { item: '전공 서적 <기초 에테르학>', loc: '도서관 2열람실', date: '2084.04.30', status: '보관중' },
                      { item: '보호대 (왼쪽 팔)', loc: '대운동장', date: '2084.04.28', status: '완료' },
                      { item: 'PCD (개인단말기)', loc: '본관 3층 복도', date: '2084.04.28', status: '보관중' },
                   ].map((item, idx) => (
                      <div key={idx} className="border border-gray-200 p-4 rounded-lg flex justify-between items-center bg-white">
                         <div>
                            <div className="font-bold text-gray-800 flex items-center gap-2">
                               <ShoppingBag className="w-4 h-4 text-gray-400"/> {item.item}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                               습득장소: {item.loc} | 날짜: {item.date}
                            </div>
                         </div>
                         <span className={`text-xs px-2 py-1 rounded font-bold ${
                            item.status === '보관중' ? 'bg-green-100 text-green-700' :
                            item.status === '분실' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-500'
                         }`}>
                            {item.status}
                         </span>
                      </div>
                   ))}
                </div>
            </div>
         );
      case 'PARENTS':
         return (
            <div className="space-y-6">
               <h3 className="text-xl font-bold text-gray-800 border-l-4 border-school-orange pl-3 mb-4">학부모회 알림</h3>
               <div className="space-y-4">
                  <div className="border border-gray-200 p-6 rounded-lg bg-white">
                     <h4 className="font-bold text-lg text-gray-800 mb-2">[긴급] 자녀 등하교 안전 지도 요청</h4>
                     <p className="text-gray-600 text-sm mb-4">
                        최근 마포구 일대에 미등록 이능력자 범죄가 증가하고 있습니다. 
                        가급적 스쿨버스나 하이퍼튜브를 이용하도록 지도 부탁드립니다.
                     </p>
                     <span className="text-xs text-gray-400">2084.05.01 | 학부모회장</span>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-lg bg-white">
                     <h4 className="font-bold text-lg text-gray-800 mb-2">훈련 장비 현대화 기금 모금 결과 보고</h4>
                     <p className="text-gray-600 text-sm mb-4">
                        학부모님들의 성원에 힘입어 구형 VR 시뮬레이터 20대를 최신형으로 교체 완료하였습니다.
                        상세 내역은 첨부파일을 확인해주세요.
                     </p>
                     <span className="text-xs text-gray-400">2084.04.20 | 학부모회 총무</span>
                  </div>
               </div>
               <div className="text-center pt-8 border-t border-gray-200">
                  <p className="text-gray-500 mb-4">더 많은 게시글을 보시려면 학부모 인증이 필요합니다.</p>
                  <button className="bg-gray-800 text-white px-6 py-2 rounded font-bold hover:bg-gray-700">학부모 인증 로그인</button>
               </div>
            </div>
         );
      case 'VIOLENCE':
         return (
            <div className="bg-red-50 border border-red-200 p-8 rounded-xl text-center">
               <ShieldAlert className="w-16 h-16 text-red-600 mx-auto mb-4" />
               <h3 className="text-2xl font-bold text-red-700 mb-4">학교폭력 및 가혹행위 신고</h3>
               <p className="text-gray-700 mb-8 max-w-xl mx-auto">
                  강현고등학교는 학교폭력, 특히 <strong>이능력을 이용한 위협 및 강요</strong>에 대해 <strong>무관용 원칙</strong>을 적용합니다.<br/>
                  무능력자(일반 학생)에 대한 차별적 언행 또한 징계 대상입니다.<br/>
                  신고자의 신원은 철저히 보장되며, 가해자는 즉시 분리 조치됩니다.
               </p>
               <div className="flex justify-center gap-4">
                  <button className="bg-red-600 text-white px-8 py-3 rounded font-bold hover:bg-red-700 shadow-lg">
                     익명 신고하기
                  </button>
                  <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded font-bold hover:bg-gray-50">
                     상담 신청
                  </button>
               </div>
            </div>
         );
      default:
         return (
            <div className="py-20 text-center bg-gray-50 border border-gray-200 rounded-lg">
               <p className="text-gray-500">회원 공개 게시판입니다. 로그인 후 이용해주세요.</p>
            </div>
         );
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 animate-in fade-in duration-500">
       <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-school-text pb-4 mb-8">
          <div>
             <h2 className="text-3xl font-bold text-school-text">{getTabLabel(activeTab)}</h2>
          </div>
          <div className="flex text-sm text-gray-500 mt-4 md:mt-0">
             <span className="flex items-center cursor-pointer hover:text-school-orange transition-colors" onClick={onGoHome}>
                <Home className="w-3 h-3 mr-1"/> 홈
             </span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span>학생/학부모</span>
             <ChevronRight className="w-4 h-4 mx-1" />
             <span className="font-bold text-black">{getTabLabel(activeTab)}</span>
          </div>
       </div>

       <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-4 md:col-span-1">
             <ul className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:gap-0 border-b md:border-b-0 border-gray-200 md:border-t-2 md:border-school-orange pb-4 md:pb-0 no-scrollbar">
                {[
                   { id: 'CLUBS', label: '동아리 활동', icon: Users },
                   { id: 'BAMBOO', label: '대나무숲', icon: MessageCircle },
                   { id: 'LOST_FOUND', label: '분실물 센터', icon: Search },
                   { id: 'PARENTS', label: '학부모회', icon: Heart },
                   { id: 'VIOLENCE', label: '학교폭력신고', icon: ShieldAlert }
                ].map((item) => (
                   <li 
                      key={item.id}
                      onClick={() => setActiveTab(item.id as TabType)}
                      className={`flex-shrink-0 px-4 py-2 md:p-4 md:border-b border-gray-200 cursor-pointer flex items-center gap-3 transition-colors rounded-full md:rounded-none text-sm md:text-base ${activeTab === item.id ? 'bg-school-orange text-white md:bg-school-orange md:text-white font-bold' : 'bg-gray-100 md:bg-white text-gray-600 hover:bg-gray-200 md:hover:bg-gray-50'}`}
                   >
                      <item.icon className="w-4 h-4 hidden md:block" />
                      {item.label}
                   </li>
                ))}
             </ul>
             <button onClick={onGoHome} className="hidden md:block w-full mt-4 py-3 border border-gray-300 text-gray-600 rounded bg-gray-50 hover:bg-gray-100 transition-colors font-bold text-sm">
                메인 화면으로 이동
             </button>
          </div>
          <div className="col-span-4 md:col-span-3 min-h-[500px]">
             {renderContent()}
          </div>
       </div>
    </div>
  );
};

export default SectionStudentLife;