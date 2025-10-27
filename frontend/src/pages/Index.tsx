import { useState, useEffect } from "react";
import { WellnessHeader } from "@/components/WellnessHeader";
import { WellnessLanding } from "@/components/WellnessLanding";
import { PrakritiAssessment } from "@/components/PrakritiAssessment";
import { PrakritiResult } from "@/components/PrakritiResult";
import { DietRecommendations } from "@/components/DietRecommendations";
import { DailyRoutineGuide } from "@/components/DailyRoutineGuide";
import { AssessmentResult } from "@/types/prakriti";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface UserDetails {
  name: string;
  age: string;
  gender: string;
}

type AppPage = "landing" | "assessment" | "result" | "profile" | "diet" | "routine";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<AppPage>("landing");
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const { toast } = useToast();
  const { user } = useAuth();

  // Handle return from signin
  useEffect(() => {
    const returnPage = sessionStorage.getItem("returnPage");
    if (returnPage && user) {
      const page = returnPage as AppPage;
      setCurrentPage(page);
      sessionStorage.removeItem("returnPage");
    }
  }, [user]);

  const handleStartAssessment = (details: UserDetails) => {
    setUserDetails(details);
    setCurrentPage("assessment");
  };

  const handleAssessmentComplete = (result: AssessmentResult) => {
    setAssessmentResult(result);
    setCurrentPage("result");
    toast({
      title: "🕉️ Prakriti Analysis Complete!",
      description: `${userDetails?.name}, your dominant dosha is ${result.dominant}. Discover your personalized wellness path.`,
    });
  };

  const handleNavigation = (page: string) => {
    if (page === "home") {
      setCurrentPage("landing");
    } else if (page === "assessment") {
      setCurrentPage("assessment");
    } else if (page === "profile") {
      setCurrentPage("profile");
    }
  };

  const handleProgressTracking = () => {
    toast({
      title: "Coming Soon",
      description: "Progress tracking and wellness journey monitoring will be available soon.",
    });
  };

  const handleViewDiet = () => {
    setCurrentPage("diet");
  };

  const handleViewRoutine = () => {
    setCurrentPage("routine");
  };

  const handleRetakeAssessment = () => {
    setAssessmentResult(null);
    setCurrentPage("assessment");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "assessment":
        return (
          <PrakritiAssessment 
            onComplete={handleAssessmentComplete}
          />
        );
      case "result":
        return assessmentResult ? (
          <PrakritiResult 
            result={assessmentResult}
            userDetails={userDetails}
            onRetake={handleRetakeAssessment}
            onViewDiet={handleViewDiet}
            onViewRoutine={handleViewRoutine}
            onProgressTracking={handleProgressTracking}
          />
        ) : (
          <WellnessLanding onStartAssessment={handleStartAssessment} />
        );
      case "diet":
        return assessmentResult ? (
          <DietRecommendations 
            dosha={assessmentResult.dominant}
            onBack={() => setCurrentPage("landing")}
            onViewRoutine={handleViewRoutine}
          />
        ) : (
          <WellnessLanding onStartAssessment={handleStartAssessment} />
        );
      case "routine":
        return assessmentResult ? (
          <DailyRoutineGuide 
            dosha={assessmentResult.dominant}
            onBack={() => setCurrentPage("landing")}
            onViewDiet={handleViewDiet}
          />
        ) : (
          <WellnessLanding onStartAssessment={handleStartAssessment} />
        );
      case "landing":
      default:
        return (
          <WellnessLanding 
            onStartAssessment={handleStartAssessment}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      {currentPage !== "landing" && (
        <WellnessHeader 
          currentPage={currentPage === "assessment" ? "assessment" : "home"}
          onNavigate={handleNavigation}
        />
      )}
      {renderCurrentPage()}
    </div>
  );
};

export default Index;
