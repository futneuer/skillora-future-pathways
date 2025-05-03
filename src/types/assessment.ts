
export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface AssessmentResult {
  timestamp: string;
  answers: Record<number, string>;
  skillScores: Record<string, number>;
  recommendedPaths: string[];
}
