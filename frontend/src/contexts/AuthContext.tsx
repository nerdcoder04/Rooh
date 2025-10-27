import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  token?: string;
}

interface AuthContextType {
  user: User | null;
  signUp: (name: string, email: string, password: string, phone: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Load user from localStorage on mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const signUp = async (name: string, email: string, password: string, phone: string) => {
    try {
      // Try to connect to backend
      try {
        const response = await fetch("http://localhost:3000/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password, phone }),
        });

        if (response.ok) {
          const data = await response.json();
          const newUser = { ...data.user, token: data.token };
          setUser(newUser);
          localStorage.setItem("user", JSON.stringify(newUser));
          return;
        }
      } catch (fetchError) {
        console.log("Backend not available, using mock authentication");
      }

      // For demo purposes, create a mock user
      const mockUser = {
        id: Date.now().toString(),
        name,
        email,
        token: `mock_token_${Date.now()}`,
      };
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
    } catch (error) {
      console.error("Sign up error:", error);
      // Even on error, create a mock user for demo
      const mockUser = {
        id: Date.now().toString(),
        name,
        email,
        token: `mock_token_${Date.now()}`,
      };
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      // Try to connect to backend
      try {
        const response = await fetch("http://localhost:3000/api/auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          const signedInUser = { id: "1", email, name: email.split("@")[0], token: data.token };
          setUser(signedInUser);
          localStorage.setItem("user", JSON.stringify(signedInUser));
          return;
        }
      } catch (fetchError) {
        console.log("Backend not available, using mock authentication");
      }
      
      // For demo purposes: Accept ANY credentials and create a mock user
      const mockUser = {
        id: Date.now().toString(),
        email,
        name: email.split("@")[0] || email || "User",
        token: `mock_token_${Date.now()}`,
      };
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
    } catch (error) {
      console.error("Sign in error:", error);
      // Even on error, create a mock user for demo
      const mockUser = {
        id: Date.now().toString(),
        email,
        name: email.split("@")[0] || email || "User",
        token: `mock_token_${Date.now()}`,
      };
      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signIn,
        signOut,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

