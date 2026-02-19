import React from 'react';
import { Character } from '../types';
import { FileText } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  onSelect: (character: Character) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onSelect }) => {
  return (
    <div 
      className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col hover:border-school-orange"
      onClick={() => onSelect(character)}
    >
      {/* Photo Area - Updated Design */}
      <div className="relative h-80 bg-gray-100 overflow-hidden border-b border-gray-100">
         <img 
            src={character.avatarUrl} 
            alt={character.name} 
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
         />
         <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm">
            {character.faction === 'None' ? '기타' : character.faction}
         </div>
         {/* Gradient Overlay at bottom for text readability if needed, but we have text below */}
         <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Info Area */}
      <div className="p-5 text-center flex flex-col flex-1">
         <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-school-orange transition-colors font-serif">
            {character.name}
         </h3>
         <p className="text-sm text-school-sub mb-3 font-medium">
            {character.role}
         </p>
         
         <div className="w-8 h-0.5 bg-gray-200 mx-auto mb-4"></div>

         <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed h-8 mb-5">
            {character.description}
         </p>
         
         <div className="mt-auto">
            <button className="w-full bg-white text-gray-600 border border-gray-200 py-2.5 rounded text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-school-orange group-hover:text-white group-hover:border-school-orange transition-all">
                <FileText className="w-4 h-4" />
                상세 프로필
            </button>
         </div>
      </div>
    </div>
  );
};

export default CharacterCard;