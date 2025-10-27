import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AssessmentResult, DoshaType } from "@/types/prakriti";
import { RotateCcw, Download, Share, BookOpen, Calendar, ChefHat, TrendingUp } from "lucide-react";

interface UserDetails {
  name: string;
  age: string;
  gender: string;
}

interface PrakritiResultProps {
  result: AssessmentResult;
  userDetails: UserDetails | null;
  onRetake?: () => void;
  onViewDiet?: () => void;
  onViewRoutine?: () => void;
  onProgressTracking?: () => void;
}

const doshaInfo = {
  vata: {
    name: "Vata",
    element: "Air & Space",
    characteristics: ["Creative", "Energetic", "Quick-thinking", "Adaptable"],
    color: "vata",
    description: "You have a Vata-dominant constitution, characterized by movement, creativity, and adaptability."
  },
  pitta: {
    name: "Pitta", 
    element: "Fire & Water",
    characteristics: ["Focused", "Determined", "Intelligent", "Leadership"],
    color: "pitta",
    description: "You have a Pitta-dominant constitution, characterized by transformation, intelligence, and determination."
  },
  kapha: {
    name: "Kapha",
    element: "Earth & Water", 
    characteristics: ["Calm", "Stable", "Compassionate", "Patient"],
    color: "kapha",
    description: "You have a Kapha-dominant constitution, characterized by stability, compassion, and groundedness."
  }
};

export const PrakritiResult = ({ result, userDetails, onRetake, onViewDiet, onViewRoutine, onProgressTracking }: PrakritiResultProps) => {
  const downloadAnalysis = () => {
    const analysisText = `
ROOH - Ayurvedic Prakriti Analysis
================================

Name: ${userDetails?.name}
Age: ${userDetails?.age}
Gender: ${userDetails?.gender}

PRAKRITI CONSTITUTION
---------------------
Dominant Dosha: ${result.dominant.toUpperCase()}
Secondary Dosha: ${result.secondary || 'None'}

DOSHA PERCENTAGES
-----------------
Vata: ${result.percentage.vata}%
Pitta: ${result.percentage.pitta}%
Kapha: ${result.percentage.kapha}%

Generated on: ${new Date().toLocaleDateString()}
    `;
    
    const blob = new Blob([analysisText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${userDetails?.name}_Prakriti_Analysis.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const dominantDosha = doshaInfo[result.dominant];
  const secondaryDosha = result.secondary ? doshaInfo[result.secondary] : null;

  return (
    <div className="min-h-screen bg-gradient-wellness py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-sanskrit-text mb-2">
            नमस्ते {userDetails?.name} | Your Sacred Prakriti
          </h1>
          <p className="text-muted-foreground">
            Based on ancient Vedic wisdom, here's your unique Ayurvedic constitution
          </p>
        </div>

        {/* Main Result Card */}
        <Card className="wellness-card mb-8">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-${dominantDosha.color}/10 mb-4`}>
                <span className={`text-3xl font-bold text-${dominantDosha.color}`}>
                  {dominantDosha.name.charAt(0)}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {dominantDosha.name} Dominant
              </h2>
              <p className="text-muted-foreground mb-4">
                {dominantDosha.element} Constitution
              </p>
              <p className="text-sm text-foreground leading-relaxed max-w-2xl mx-auto">
                {dominantDosha.description}
              </p>
            </div>

            {/* Dosha Percentages */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {Object.entries(result.percentage).map(([dosha, percentage]) => {
                const info = doshaInfo[dosha as DoshaType];
                return (
                  <div key={dosha} className="text-center">
                    <div className={`text-${info.color} font-semibold text-lg mb-2`}>
                      {info.name}
                    </div>
                    <Progress 
                      value={percentage} 
                      className="h-3 mb-2"
                    />
                    <div className="text-2xl font-bold text-foreground">{percentage}%</div>
                  </div>
                );
              })}
            </div>

            {/* Characteristics */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Your Key Characteristics</h3>
              <div className="flex flex-wrap gap-2">
                {dominantDosha.characteristics.map((trait, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {trait}
                  </Badge>
                ))}
                {secondaryDosha && secondaryDosha.characteristics.slice(0, 2).map((trait, index) => (
                  <Badge key={`secondary-${index}`} variant="outline" className="px-3 py-1">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Secondary Dosha */}
            {secondaryDosha && (
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Secondary Influence: {secondaryDosha.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  You also show traits of {secondaryDosha.name} constitution, which adds {secondaryDosha.element.toLowerCase()} qualities to your profile.
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Button variant="wellness" onClick={onViewDiet} className="flex items-center space-x-2">
            <ChefHat className="h-4 w-4" />
            <span>Diet Plan</span>
          </Button>
          <Button variant="accent" onClick={onViewRoutine} className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Daily Routine</span>
          </Button>
          <Button onClick={downloadAnalysis} className="flex items-center space-x-2 bg-vedic-gold hover:bg-vedic-gold/90 text-white">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
          <Button variant="outline" onClick={onProgressTracking} className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span>Progress</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Share className="h-4 w-4" />
            <span>Share</span>
          </Button>
        </div>

        {/* Wellness Tips */}
        <Card className="wellness-card mb-8">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary" />
              Quick Wellness Tips for {dominantDosha.name}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-foreground mb-2">Recommended Foods</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Warm, cooked foods</li>
                  <li>• Sweet, sour, and salty tastes</li>
                  <li>• Regular meal times</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Lifestyle Practices</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Regular sleep schedule</li>
                  <li>• Gentle, grounding exercises</li>
                  <li>• Stress management techniques</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Retake Assessment */}
        <div className="text-center">
          <Button variant="soft" onClick={onRetake} className="flex items-center space-x-2">
            <RotateCcw className="h-4 w-4" />
            <span>Retake Assessment</span>
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Your constitution can change over time based on lifestyle and environment
          </p>
        </div>
      </div>
    </div>
  );
};