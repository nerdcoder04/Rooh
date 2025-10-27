import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Leaf, Heart, Brain, Star, User } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

interface UserDetails {
  name: string;
  age: string;
  gender: string;
}

interface WellnessLandingProps {
  onStartAssessment: (userDetails: UserDetails) => void;
}

export const WellnessLanding = ({ onStartAssessment }: WellnessLandingProps) => {
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    age: "",
    gender: ""
  });

  const handleStartJourney = () => {
    setShowDetailsForm(true);
  };

  const handleSubmitDetails = () => {
    if (userDetails.name && userDetails.age && userDetails.gender) {
      onStartAssessment(userDetails);
    }
  };

  if (showDetailsForm) {
    return (
      <div className="min-h-screen bg-gradient-wellness py-8 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-sanskrit-text mb-2">Welcome to Rooh</h1>
            <p className="text-muted-foreground">
              Tell us a little about yourself to begin your Ayurvedic journey
            </p>
          </div>

          <Card className="wellness-card">
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={userDetails.name}
                    onChange={(e) => setUserDetails(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={userDetails.age}
                    onChange={(e) => setUserDetails(prev => ({ ...prev, age: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={userDetails.gender} onValueChange={(value) => setUserDetails(prev => ({ ...prev, gender: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleSubmitDetails}
                  className="w-full"
                  disabled={!userDetails.name || !userDetails.age || !userDetails.gender}
                >
                  Begin Prakriti Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-wellness">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src={heroImage} 
            alt="Wellness background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-sanskrit-text leading-tight">
              रूह
              <span className="text-primary block text-3xl md:text-4xl">Discover Your Prakriti</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ancient Vedic wisdom meets modern wellness. Understand your unique Ayurvedic constitution through sacred knowledge passed down through millennia.
            </p>
            <div className="flex justify-center">
              <Button size="lg" onClick={handleStartJourney} className="text-lg px-8 py-6 bg-sacred-saffron hover:bg-sacred-saffron/90">
                Begin Sacred Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Doshas Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sanskrit-text mb-4">त्रिदोष | The Three Doshas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the fundamental energies that govern your physical and mental constitution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="wellness-card text-center">
              <div className="p-6">
                <div className="w-20 h-20 bg-vata/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <div className="text-2xl font-bold text-vata">वायु</div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Vata दोष</h3>
                <p className="text-sm text-vedic-gold font-medium mb-2">वायु + आकाश</p>
                <p className="text-muted-foreground text-sm">
                  Air and Space elements. Movement, creativity, and vital energy.
                </p>
              </div>
            </Card>

            <Card className="wellness-card text-center">
              <div className="p-6">
                <div className="w-20 h-20 bg-pitta/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <div className="text-2xl font-bold text-pitta">अग्नि</div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-200 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pitta दोष</h3>
                <p className="text-sm text-vedic-gold font-medium mb-2">अग्नि + जल</p>
                <p className="text-muted-foreground text-sm">
                  Fire and Water elements. Transformation, intelligence, and metabolism.
                </p>
              </div>
            </Card>

            <Card className="wellness-card text-center">
              <div className="p-6">
                <div className="w-20 h-20 bg-kapha/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <div className="text-2xl font-bold text-kapha">पृथ्वी</div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Kapha दोष</h3>
                <p className="text-sm text-vedic-gold font-medium mb-2">पृथ्वी + जल</p>
                <p className="text-muted-foreground text-sm">
                  Earth and Water elements. Structure, stability, and nourishment.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-sanskrit-text mb-4">
              सर्वे भवन्तु सुखिनः | May All Be Happy
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience personalized wellness guidance rooted in 5,000 years of Vedic wisdom
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-vedic-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-vedic-gold" />
                </div>
                <h4 className="font-semibold mb-2">व्यक्तिगत</h4>
                <p className="text-sm text-muted-foreground">Tailored to your unique Prakriti</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vedic-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-6 w-6 text-vedic-gold" />
                </div>
                <h4 className="font-semibold mb-2">प्राकृतिक</h4>
                <p className="text-sm text-muted-foreground">Natural holistic approach</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vedic-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-6 w-6 text-vedic-gold" />
                </div>
                <h4 className="font-semibold mb-2">वैज्ञानिक</h4>
                <p className="text-sm text-muted-foreground">Ancient wisdom validated</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vedic-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-vedic-gold" />
                </div>
                <h4 className="font-semibold mb-2">संतुलन</h4>
                <p className="text-sm text-muted-foreground">Sustainable life balance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};