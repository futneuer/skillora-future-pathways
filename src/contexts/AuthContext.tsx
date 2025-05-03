
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCurrentUser, isLoggedIn, loginUser, registerUser, logoutUser } from '@/services/authService';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check if user is logged in on mount
  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = isLoggedIn();
      setIsAuthenticated(loggedIn);
      
      if (loggedIn) {
        const currentUser = getCurrentUser();
        if (currentUser) {
          // Only pass necessary user data (exclude password)
          const { password, ...userData } = currentUser;
          setUser(userData);
        }
      }
    };
    
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const result = loginUser(email, password);
    
    if (result.success && result.user) {
      const { password, ...userData } = result.user;
      setUser(userData);
      setIsAuthenticated(true);
    }
    
    return { success: result.success, message: result.message };
  };

  const register = async (name: string, email: string, password: string) => {
    const result = registerUser(name, email, password);
    
    if (result.success && result.user) {
      const { password, ...userData } = result.user;
      setUser(userData);
      setIsAuthenticated(true);
    }
    
    return { success: result.success, message: result.message };
  };

  const logout = () => {
    logoutUser();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
