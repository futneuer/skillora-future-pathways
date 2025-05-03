
export interface CourseModule {
  id: number;
  title: string;
  description: string;
  duration: string;
  videoUrl?: string;
  completed?: boolean;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: "beginner" | "intermediate" | "advanced";
  rating: number;
  category: string;
  image: string;
  price: number;
  enrolled?: boolean;
  modules?: CourseModule[];
  popularity?: number;
  isNew?: boolean;
}
