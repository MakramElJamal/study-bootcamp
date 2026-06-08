export interface ConceptCard {
  id: string;
  title: string;
  explanation: string;
  keyPoints?: string[];
  example?: string;
  examTip?: string;
}

export interface Lecture {
  id: string;
  number: number;
  title: string;
  track: 'business' | 'design';
  professor: string;
  tags: string[];
  concepts: ConceptCard[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  topic: string;
  track: 'business' | 'design' | 'both';
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  isReal: boolean;
  questions: QuizQuestion[];
}
