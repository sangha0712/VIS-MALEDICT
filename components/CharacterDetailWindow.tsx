import React from 'react';
import { X, User, Shield, Zap } from 'lucide-react';
import { Character } from '../types';

interface CharacterDetailWindowProps {
  character: Character;
  onClose: () => void;
}

const CharacterDetailWindow: React.FC<CharacterDetailWindowProps> = ({ character, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 font-sans backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 max-h-[90vh]">
        
        {/* Header Image */}
        <div className="relative h-48 bg-gray-200 flex-shrink-0">
            <img src={character.coverUrl} alt="Cover" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <button 
                onClick={onClose} 
                className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors backdrop-blur-md"
            >
                <X className="w-6 h-6" />
            </button>
            
            <div className="absolute bottom-[-40px] left-8 flex items-end">
                <div className="w-28 h-28 rounded-xl border-4 border-white shadow-lg overflow-hidden bg-white">
                    <img src={character.avatarUrl} alt={character.name} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="pt-12 pb-8 px-8 overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{character.name}</h2>
                    <div className="flex flex-wrap items-center gap-2 text-gray-600 font-medium">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold text-white
                            ${character.themeColor === 'red' ? 'bg-red-500' : 
                              character.themeColor === 'blue' ? 'bg-blue-500' :
                              character.themeColor === 'green' ? 'bg-green-500' :
                              character.themeColor === 'purple' ? 'bg-purple-500' : 'bg-yellow-500'
                            }`}
                        >
                            {character.faction}
                        </span>
                        <span className="text-sm bg-gray-100 px-2 py-0.5 rounded text-gray-600 border border-gray-200">
                           {character.role}
                        </span>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2 border-b border-gray-100 pb-2">
                        <User className="w-5 h-5 text-school-orange" />
                        인물 소개
                    </h3>
                    <p className="text-gray-700 leading-relaxed bg-gray-50 p-5 rounded-lg border border-gray-100 text-sm md:text-base">
                        {character.description}
                    </p>
                </div>

                {/* Ability Profile Section */}
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2 border-b border-gray-100 pb-2">
                        <Zap className="w-5 h-5 text-school-orange" />
                        이능력 프로필 (Ability Profile)
                    </h3>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
                        <div className="flex flex-col gap-4">
                           <div>
                              <div className="text-xs font-bold text-gray-500 uppercase mb-1 tracking-wider">Ability Name</div>
                              <div className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                 {character.abilityName || '데이터 없음'}
                              </div>
                           </div>
                           
                           <div className="h-px w-full bg-gray-200"></div>
                           
                           <div>
                              <div className="text-xs font-bold text-gray-500 uppercase mb-1 tracking-wider">Technical Detail</div>
                              <p className="text-gray-700 text-sm leading-relaxed">
                                 {character.abilityDescription || '상세 데이터가 존재하지 않습니다.'}
                              </p>
                           </div>
                        </div>
                    </div>
                </div>

                {/* Status Info (Visual Only) */}
                <div>
                   <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2 border-b border-gray-100 pb-2">
                        <Shield className="w-5 h-5 text-school-orange" />
                        종합 평가
                    </h3>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 p-3 rounded-lg">
                         <div className="text-xs text-gray-500 mb-1">이능력 등급</div>
                         <div className="font-bold text-gray-800">Class {['S', 'A', 'B', 'C'][Math.floor(Math.random() * 4)]}</div>
                      </div>
                      <div className="bg-white border border-gray-200 p-3 rounded-lg">
                         <div className="text-xs text-gray-500 mb-1">전술 이해도</div>
                         <div className="font-bold text-gray-800">{['최상', '상', '중', '하'][Math.floor(Math.random() * 4)]}</div>
                      </div>
                   </div>
                </div>
            </div>
        </div>
        
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
            <button 
                onClick={onClose}
                className="px-6 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 font-bold transition-colors border border-gray-300 shadow-sm"
            >
                닫기
            </button>
        </div>

      </div>
    </div>
  );
};

export default CharacterDetailWindow;