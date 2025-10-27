import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { assessmentQuestions } from "@/data/questions";
import { AssessmentResult, DoshaType } from "@/types/prakriti";

interface PrakritiAssessmentProps {
  onComplete?: (result: AssessmentResult) => void;
}

export const PrakritiAssessment = ({ onComplete }: PrakritiAssessmentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { dosha: DoshaType; weight: number }>>({});

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  const handleAnswer = (dosha: DoshaType, weight: number) => {
    const questionId = assessmentQuestions[currentQuestion].id;
    const newAnswers = { ...answers, [questionId]: { dosha, weight } };
    setAnswers(newAnswers);

    if (currentQuestion < assessmentQuestions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      // Calculate result
      setTimeout(() => calculateResult(newAnswers), 300);
    }
  };

  const calculateResult = (finalAnswers: Record<string, { dosha: DoshaType; weight: number }>) => {
    const scores = { vata: 0, pitta: 0, kapha: 0 };
    
    Object.values(finalAnswers).forEach(answer => {
      scores[answer.dosha] += answer.weight;
    });

    const total = scores.vata + scores.pitta + scores.kapha;
    const percentages = {
      vata: Math.round((scores.vata / total) * 100),
      pitta: Math.round((scores.pitta / total) * 100),
      kapha: Math.round((scores.kapha / total) * 100)
    };

    const sortedDoshas = Object.entries(scores).sort(([,a], [,b]) => b - a);
    const dominant = sortedDoshas[0][0] as DoshaType;
    const secondary = sortedDoshas[1][1] > 0 ? sortedDoshas[1][0] as DoshaType : undefined;

    const assessmentResult: AssessmentResult = {
      vata: scores.vata,
      pitta: scores.pitta,
      kapha: scores.kapha,
      dominant,
      secondary,
      percentage: percentages
    };

    onComplete?.(assessmentResult);
  };


  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const question = assessmentQuestions[currentQuestion];
  const categoryColors = {
    physical: "text-vata",
    mental: "text-pitta", 
    habits: "text-kapha",
    environmental: "text-secondary-accent"
  };

  return (
    <div className="min-h-screen bg-gradient-wellness py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-primary mr-2" />
            <h1 className="text-3xl font-bold text-foreground">Prakriti Assessment</h1>
          </div>
          <p className="text-muted-foreground">
            Discover your unique Ayurvedic constitution through mindful observation
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {assessmentQuestions.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="wellness-card mb-6">
          <div className="p-6">
            <div className="mb-4">
              <span className={`text-xs font-medium px-3 py-1 rounded-full bg-muted ${categoryColors[question.category]}`}>
                {question.category.charAt(0).toUpperCase() + question.category.slice(1)}
              </span>
            </div>
            <h2 className="text-xl font-semibold mb-6 text-foreground leading-relaxed">
              {question.text}
            </h2>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => handleAnswer(option.dosha, option.weight)}
                  className="w-full text-left justify-start p-4 h-auto whitespace-normal hover:bg-primary/5 hover:border-primary transition-all duration-200"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-3 h-3 rounded-full bg-${option.dosha} mt-1 flex-shrink-0`} />
                    <span className="text-sm leading-relaxed">{option.text}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={goToPrevious}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Take your time to reflect on each question
          </p>

          <div className="w-24" /> {/* Spacer for centering */}
        </div>
      </div>
    </div>
  );
};