import React from 'react';
import { Character } from '../types';
import { MessageSquare } from 'lucide-react';

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
      {/* Photo Area */}
      <div className="relative h-56 bg-gray-100 overflow-hidden border-b border-gray-100">
         <img 
            src={character.coverUrl} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm group-hover:scale-105 transition-transform"
         />
         <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-24 h-24 bg-white p-1 rounded-full shadow-md">
                <img 
                  src={character.avatarUrl} 
                  alt={character.name} 
                  className="w-full h-full object-cover rounded-full"
                />
             </div>
         </div>
         <div className="absolute top-2 right-2 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">
            {character.faction === 'None' ? '기타' : character.faction}
         </div>
      </div>

      {/* Info Area */}
      <div className="p-5 text-center">
         <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-school-orange transition-colors">
            {character.name}
         </h3>
         <p className="text-sm text-gray-500 mb-3 font-medium">
            {character.role}
         </p>
         
         <div className="w-8 h-0.5 bg-gray-200 mx-auto mb-3"></div>

         <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed h-8">
            {character.description}
         </p>
         
         <button className="mt-4 w-full bg-gray-50 text-gray-600 border border-gray-200 py-2 rounded text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-school-orange group-hover:text-white group-hover:border-school-orange transition-all">
            <MessageSquare className="w-4 h-4" />
            1:1 대화하기
         </button>
      </div>
    </div>
  );
};

export default CharacterCard;