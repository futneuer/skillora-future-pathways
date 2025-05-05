
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Assessment from "./pages/Assessment";
import Skills from "./pages/Skills";
import Planning from "./pages/Planning";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ChatAI from "./pages/ChatAI";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AuthProvider } from "./contexts/AuthContext";
import AppInstaller from "./components/AppInstaller";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Initialize default settings if none exist
  useEffect(() => {
    const savedSettings = localStorage.getItem('userSettings');
    if (!savedSettings) {
      const defaultSettings = {
        notifications: { email: true, app: true, marketing: false },
        privacy: { profileVisibility: "public", showProgress: true },
        security: { twoFactorAuth: false }
      };
      localStorage.setItem('userSettings', JSON.stringify(defaultSettings));
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <div className="fixed bottom-20 left-4 right-4 z-50 pointer-events-none">
                  <div className="pointer-events-auto">
                    <AppInstaller />
                  </div>
                </div>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/assessment" element={<Assessment />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/planning" element={<Planning />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/course/:id" element={<CourseDetails />} />
                  <Route path="/chat" element={<ChatAI />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
