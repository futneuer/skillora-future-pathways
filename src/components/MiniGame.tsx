
import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2 } from "lucide-react";

interface Position {
  x: number;
  y: number;
}

interface Target {
  id: number;
  position: Position;
  hit: boolean;
}

const MiniGame = () => {
  const { language } = useLanguage();
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [targets, setTargets] = useState<Target[]>([]);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const timerId = useRef<number | null>(null);
  const targetGeneratorId = useRef<number | null>(null);
  
  const translations = {
    en: {
      title: "Quick Reflexes",
      description: "Click on the targets as quickly as possible to score points!",
      score: "Score",
      timeLeft: "Time Left",
      start: "Start Game",
      restart: "Play Again",
    },
    ar: {
      title: "ردود فعل سريعة",
      description: "انقر على الأهداف بأسرع ما يمكن لتسجيل النقاط!",
      score: "النقاط",
      timeLeft: "الوقت المتبقي",
      start: "ابدأ اللعبة",
      restart: "العب مرة أخرى",
    }
  };
  
  const text = translations[language];
  
  useEffect(() => {
    return () => {
      // Clean up timers when component unmounts
      if (timerId.current) window.clearInterval(timerId.current);
      if (targetGeneratorId.current) window.clearInterval(targetGeneratorId.current);
    };
  }, []);
  
  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setTargets([]);
    setGameActive(true);
    
    // Start countdown timer
    timerId.current = window.setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          window.clearInterval(timerId.current as number);
          window.clearInterval(targetGeneratorId.current as number);
          setGameActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Generate targets every 1.5 seconds
    targetGeneratorId.current = window.setInterval(() => {
      if (gameAreaRef.current) {
        const { width, height } = gameAreaRef.current.getBoundingClientRect();
        
        // Generate random position within the game area
        const newTarget: Target = {
          id: Date.now(),
          position: {
            x: Math.random() * (width - 40),
            y: Math.random() * (height - 40)
          },
          hit: false
        };
        
        setTargets(prev => [...prev, newTarget]);
      }
    }, 1500);
  };
  
  const handleTargetClick = (targetId: number) => {
    setTargets(prev => prev.map(target => 
      target.id === targetId ? { ...target, hit: true } : target
    ));
    
    setScore(prev => prev + 1);
  };
  
  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-4">
        <h2 className="text-xl font-bold mb-2 text-skillora-blue dark:text-blue-400">{text.title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{text.description}</p>
      </div>
      
      <div className="flex justify-between mb-4">
        <Card>
          <CardContent className="p-4 flex items-center">
            <span className="font-bold">{text.score}:</span>
            <span className="ml-2 text-lg font-bold text-skillora-blue dark:text-blue-400">{score}</span>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex items-center">
            <span className="font-bold">{text.timeLeft}:</span>
            <span className={`ml-2 text-lg font-bold ${timeLeft < 10 ? 'text-red-500' : 'text-skillora-blue dark:text-blue-400'}`}>
              {timeLeft}s
            </span>
          </CardContent>
        </Card>
      </div>
      
      <div 
        ref={gameAreaRef}
        className="flex-grow relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden"
        style={{ minHeight: "300px" }}
      >
        {!gameActive && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button 
              onClick={startGame}
              size="lg"
              className="flex items-center gap-2"
            >
              <Gamepad2 className="h-5 w-5" />
              {timeLeft === 30 ? text.start : text.restart}
            </Button>
          </div>
        )}
        
        {gameActive && targets.map(target => (
          !target.hit && (
            <div
              key={target.id}
              className="absolute w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full cursor-pointer transition-transform hover:scale-105"
              style={{ 
                left: target.position.x,
                top: target.position.y,
                animation: 'pulse 2s infinite'
              }}
              onClick={() => handleTargetClick(target.id)}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default MiniGame;
