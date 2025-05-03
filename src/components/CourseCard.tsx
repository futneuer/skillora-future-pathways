
import React from "react";
import { BookOpen, Clock, Star, Award, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: string;
  rating: number;
  students: number;
  description: string;
  price: string;
  isPopular?: boolean;
  lastUpdated?: string;
  isEnrolled?: boolean;
  onEnroll: () => void;
  enrollText: string;
  enrolledText: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  instructor,
  duration,
  level,
  rating,
  students,
  description,
  price,
  isPopular = false,
  lastUpdated,
  isEnrolled = false,
  onEnroll,
  enrollText,
  enrolledText
}) => {
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              {isPopular && (
                <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                  <TrendingUp size={14} className="mr-1" />
                  Popular
                </Badge>
              )}
              <Badge variant="outline" className="text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                {price}
              </Badge>
            </div>
            
            <h3 className="text-lg font-bold mb-1 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{instructor}</p>
          </div>
          <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-lg flex items-center justify-center shrink-0">
            <BookOpen size={28} className="text-white" />
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Clock size={14} className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Award size={14} className="mr-1" />
            <span>{level}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Users size={14} className="mr-1" />
            <span>{students.toLocaleString()} students</span>
          </div>
          {lastUpdated && (
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Calendar size={14} className="mr-1" />
              <span>Updated {formatDate(lastUpdated)}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">{rating}</span>
          </div>
          {isEnrolled ? (
            <Button variant="outline" className="text-green-600 dark:text-green-400 border-green-600 dark:border-green-400" disabled>
              {enrolledText}
            </Button>
          ) : (
            <Button onClick={onEnroll}>
              {enrollText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

// Export TrendingUp icon for use in the component
const TrendingUp = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default CourseCard;
