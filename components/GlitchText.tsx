import React from 'react';

interface GlitchTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, as: Tag = 'span', className = '' }) => {
  return (
    <Tag className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-red opacity-0 group-hover:opacity-70 group-hover:animate-glitch clip-path-inset-1">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-blue opacity-0 group-hover:opacity-70 group-hover:animate-glitch animation-delay-200 clip-path-inset-2">
        {text}
      </span>
    </Tag>
  );
};

export default GlitchText;
