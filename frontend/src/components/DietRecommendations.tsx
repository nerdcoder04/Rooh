import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChefHat, Clock, Utensils, AlertCircle, Download } from "lucide-react";
import { DoshaType } from "@/types/prakriti";
import { downloadDietPlan } from "@/utils/downloadPlan";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface DietRecommendationsProps {
  dosha: DoshaType;
  onBack?: () => void;
  onViewRoutine?: () => void;
}

const dietData = {
  vata: {
    name: "Vata",
    color: "vata",
    favorableFoods: [
      "Warm, cooked foods", "Sweet fruits (bananas, dates)", "Whole grains (rice, oats)",
      "Nuts and seeds", "Warm milk", "Ghee and oils", "Root vegetables"
    ],
    avoidFoods: [
      "Cold, raw foods", "Dried fruits", "Beans (except mung)", 
      "Excessive caffeine", "Spicy foods", "Carbonated drinks"
    ],
    mealTiming: [
      "Regular meal times", "Warm breakfast by 8 AM", "Substantial lunch 12-1 PM",
      "Light, early dinner before 7 PM", "Avoid skipping meals"
    ],
    beverages: ["Warm water", "Herbal teas", "Warm milk with spices", "Fresh juices (room temp)"],
    tips: ["Eat in calm environment", "Chew food thoroughly", "Add healthy fats", "Use warming spices"]
  },
  pitta: {
    name: "Pitta", 
    color: "pitta",
    favorableFoods: [
      "Cool, refreshing foods", "Sweet fruits (melons, grapes)", "Leafy greens",
      "Coconut water", "Cooling herbs", "Moderate proteins", "Raw vegetables"
    ],
    avoidFoods: [
      "Spicy, hot foods", "Citrus fruits", "Tomatoes", "Excessive salt",
      "Fried foods", "Alcohol", "Red meat"
    ],
    mealTiming: [
      "Never skip meals", "Light breakfast", "Substantial lunch at noon",
      "Moderate dinner before 8 PM", "Avoid eating when angry"
    ],
    beverages: ["Cool water", "Coconut water", "Cooling teas", "Fresh vegetable juices"],
    tips: ["Eat in peaceful setting", "Avoid overeating", "Include cooling foods", "Limit caffeine"]
  },
  kapha: {
    name: "Kapha",
    color: "kapha", 
    favorableFoods: [
      "Light, warm foods", "Spicy dishes", "Leafy greens", "Legumes",
      "Warming spices", "Steamed vegetables", "Low-fat proteins"
    ],
    avoidFoods: [
      "Heavy, oily foods", "Dairy products", "Cold foods", "Sweet foods",
      "Excessive salt", "Processed foods", "Refined sugars"
    ],
    mealTiming: [
      "Light breakfast or skip", "Main meal at lunch", "Very light dinner",
      "Avoid late night eating", "Allow 4-5 hours between meals"
    ],
    beverages: ["Warm water", "Ginger tea", "Green tea", "Diluted fruit juices"],
    tips: ["Eat largest meal at lunch", "Use stimulating spices", "Avoid overeating", "Stay active after meals"]
  }
};

export const DietRecommendations = ({ dosha, onBack, onViewRoutine }: DietRecommendationsProps) => {
  const diet = dietData[dosha];
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDownload = () => {
    if (!isAuthenticated) {
      sessionStorage.setItem("returnPath", window.location.pathname);
      navigate("/signin");
      return;
    }
    downloadDietPlan(dosha);
  };

  const handleConsultation = () => {
    toast({
      title: "Coming Soon",
      description: "Schedule consultation feature will be available soon. Stay tuned!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-wellness py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${diet.color}/10 mb-4`}>
            <ChefHat className={`h-8 w-8 text-${diet.color}`} />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {diet.name} Diet Plan
          </h1>
          <p className="text-muted-foreground">
            Personalized nutrition recommendations for your constitution
          </p>
        </div>

        {/* Favorable Foods */}
        <Card className="wellness-card mb-6">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Utensils className="h-5 w-5 mr-2 text-success" />
              Recommended Foods
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {diet.favorableFoods.map((food, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-success flex-shrink-0" />
                  <span className="text-sm text-foreground">{food}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Foods to Avoid */}
        <Card className="wellness-card mb-6">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-warning" />
              Foods to Limit or Avoid
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {diet.avoidFoods.map((food, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-warning flex-shrink-0" />
                  <span className="text-sm text-foreground">{food}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Meal Timing */}
        <Card className="wellness-card mb-6">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              Optimal Meal Timing
            </h3>
            <div className="space-y-3">
              {diet.mealTiming.map((timing, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{timing}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Beverages */}
          <Card className="wellness-card">
            <div className="p-6">
              <h4 className="font-semibold text-foreground mb-3">Best Beverages</h4>
              <div className="flex flex-wrap gap-2">
                {diet.beverages.map((beverage, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {beverage}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Tips */}
          <Card className="wellness-card">
            <div className="p-6">
              <h4 className="font-semibold text-foreground mb-3">Eating Tips</h4>
              <div className="space-y-2">
                {diet.tips.map((tip, index) => (
                  <div key={index} className="text-xs text-muted-foreground">
                    • {tip}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {onViewRoutine && (
            <Button variant="accent" size="lg" onClick={onViewRoutine}>
              View Daily Routine
            </Button>
          )}
          <Button variant="wellness" size="lg" onClick={handleDownload}>
            <Download className="h-5 w-5 mr-2" />
            {isAuthenticated ? "Download Meal Plan" : "Sign In to Download"}
          </Button>
          <Button variant="outline" size="lg" onClick={handleConsultation}>
            Schedule Consultation
          </Button>
          {onBack && (
            <Button variant="ghost" onClick={onBack}>
              Retake Assessment
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};