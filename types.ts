export interface Character {
  id: string;
  name: string;
  role: string;
  faction: string;
  description: string;
  avatarUrl: string;
  coverUrl: string;
  tags: string[];
  systemInstruction: string;
  themeColor: 'blue' | 'purple' | 'red' | 'green' | 'yellow';
  abilityName?: string;
  abilityDescription?: string;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export type ThemeColor = 'blue' | 'purple' | 'red' | 'green' | 'yellow';