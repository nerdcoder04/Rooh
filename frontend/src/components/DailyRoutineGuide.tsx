import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Sun, Moon, Activity, Clock, Download } from "lucide-react";
import { DoshaType } from "@/types/prakriti";
import { downloadRoutinePlan } from "@/utils/downloadPlan";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface DailyRoutineGuideProps {
  dosha: DoshaType;
  onBack?: () => void;
  onViewDiet?: () => void;
}

const routineData = {
  vata: {
    name: "Vata",
    color: "vata",
    wakeTime: "6:00 - 7:00 AM",
    sleepTime: "10:00 - 10:30 PM",
    morning: [
      "Warm water with lemon", "Oil massage (abhyanga)", "Gentle yoga or stretching",
      "Meditation (10-15 min)", "Warm, nourishing breakfast"
    ],
    afternoon: [
      "Substantial, warm lunch", "Brief rest or walk", "Creative activities",
      "Avoid overstimulation", "Stay warm and grounded"
    ],
    evening: [
      "Light, early dinner", "Calming activities", "Warm bath",
      "Reading or gentle music", "Avoid screens before bed"
    ],
    exercise: ["Gentle yoga", "Walking", "Swimming", "Tai chi", "Light weights"],
    tips: ["Maintain regular schedules", "Keep warm", "Avoid rushing", "Practice grounding"]
  },
  pitta: {
    name: "Pitta",
    color: "pitta", 
    wakeTime: "5:30 - 6:30 AM",
    sleepTime: "10:30 - 11:00 PM", 
    morning: [
      "Cool water", "Coconut oil massage", "Moderate exercise",
      "Cooling breathing (Sheetali)", "Balanced breakfast"
    ],
    afternoon: [
      "Cooling, substantial lunch", "Brief siesta if possible", "Productive work time",
      "Stay cool and hydrated", "Avoid excessive heat"
    ],
    evening: [
      "Moderate dinner", "Relaxing activities", "Cool shower",
      "Calming practices", "Wind down gradually"
    ],
    exercise: ["Swimming", "Cycling", "Moderate jogging", "Yoga", "Team sports"],
    tips: ["Avoid midday heat", "Stay cool", "Manage intensity", "Practice patience"]
  },
  kapha: {
    name: "Kapha",
    color: "kapha",
    wakeTime: "5:00 - 6:00 AM", 
    sleepTime: "10:00 - 11:00 PM",
    morning: [
      "Warm water with honey", "Dry brushing", "Vigorous exercise",
      "Energizing breathing", "Light breakfast or skip"
    ],
    afternoon: [
      "Main meal at lunch", "Stay active", "Stimulating activities", 
      "Avoid afternoon naps", "Keep energy moving"
    ],
    evening: [
      "Very light dinner", "Active pursuits", "Warm, dry practices",
      "Stimulating activities", "Avoid heavy meals"
    ],
    exercise: ["Running", "High-intensity workouts", "Dancing", "Martial arts", "Competitive sports"],
    tips: ["Stay active", "Avoid heaviness", "Seek stimulation", "Maintain movement"]
  }
};

export const DailyRoutineGuide = ({ dosha, onBack, onViewDiet }: DailyRoutineGuideProps) => {
  const routine = routineData[dosha];
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDownload = () => {
    if (!isAuthenticated) {
      sessionStorage.setItem("returnPage", "routine");
      navigate("/signin");
      return;
    }
    downloadRoutinePlan(dosha);
  };

  const handleReminders = () => {
    toast({
      title: "Coming Soon",
      description: "Set daily reminders feature will be available soon. Stay tuned!",
    });
  };
  
  return (
    <div className="min-h-screen bg-gradient-wellness py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${routine.color}/10 mb-4`}>
            <Calendar className={`h-8 w-8 text-${routine.color}`} />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {routine.name} Daily Routine
          </h1>
          <p className="text-muted-foreground">
            Structured schedule for optimal balance and well-being
          </p>
        </div>

        {/* Sleep Schedule */}
        <Card className="wellness-card mb-6">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              Optimal Sleep Schedule
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Sun className="h-8 w-8 text-accent" />
                <div>
                  <div className="font-medium text-foreground">Wake Up</div>
                  <div className="text-sm text-muted-foreground">{routine.wakeTime}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Moon className="h-8 w-8 text-secondary-accent" />
                <div>
                  <div className="font-medium text-foreground">Sleep Time</div>
                  <div className="text-sm text-muted-foreground">{routine.sleepTime}</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Daily Schedule */}
        <div className="grid gap-6 mb-8">
          {/* Morning */}
          <Card className="wellness-card">
            <div className="p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Sun className="h-5 w-5 mr-2 text-accent" />
                Morning Routine (6:00 - 10:00 AM)
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {routine.morning.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Afternoon */}
          <Card className="wellness-card">
            <div className="p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Sun className="h-5 w-5 mr-2 text-primary" />
                Afternoon Routine (10:00 AM - 6:00 PM)
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {routine.afternoon.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Evening */}
          <Card className="wellness-card">
            <div className="p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Moon className="h-5 w-5 mr-2 text-secondary-accent" />
                Evening Routine (6:00 - 10:00 PM)
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {routine.evening.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-secondary-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Exercise & Tips */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Exercise */}
          <Card className="wellness-card">
            <div className="p-6">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Activity className="h-5 w-5 mr-2 text-success" />
                Recommended Exercise
              </h4>
              <div className="flex flex-wrap gap-2">
                {routine.exercise.map((exercise, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {exercise}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* General Tips */}
          <Card className="wellness-card">
            <div className="p-6">
              <h4 className="font-semibold text-foreground mb-3">Daily Wellness Tips</h4>
              <div className="space-y-2">
                {routine.tips.map((tip, index) => (
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
          {onViewDiet && (
            <Button variant="accent" size="lg" onClick={onViewDiet}>
              View Diet Plan
            </Button>
          )}
          <Button variant="wellness" size="lg" onClick={handleDownload}>
            <Download className="h-5 w-5 mr-2" />
            {isAuthenticated ? "Download Daily Routine" : "Sign In to Download"}
          </Button>
          <Button variant="outline" size="lg" onClick={handleReminders}>
            Set Daily Reminders
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