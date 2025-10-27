import { Button } from "@/components/ui/button";
import { Heart, Leaf, User, Menu } from "lucide-react";
import { useState } from "react";

interface WellnessHeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export const WellnessHeader = ({ currentPage = "home", onNavigate }: WellnessHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", id: "home", icon: Heart },
    { name: "Assessment", id: "assessment", icon: Leaf },
    { name: "Profile", id: "profile", icon: User },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius)] bg-gradient-primary">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Rooh</h1>
              <p className="text-xs text-muted-foreground">Wellness & Prakriti</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "soft" : "ghost"}
                  size="sm"
                  onClick={() => onNavigate?.(item.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? "soft" : "ghost"}
                    size="sm"
                    onClick={() => {
                      onNavigate?.(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-start space-x-2 w-full"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};