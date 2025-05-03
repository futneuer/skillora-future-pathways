
import React, { useState, useEffect } from "react";
import { User, Edit, BookOpen, Award, Clock, Settings, LogIn } from "lucide-react";
import Header from "@/components/Header";
import BottomNavbar from "@/components/BottomNavbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  profession: string;
  joinDate: string;
  coursesEnrolled: number;
  coursesCompleted: number;
  skills: string[];
}

const Profile = () => {
  const { language } = useLanguage();
  const { user, isAuthenticated, login, register } = useAuth();
  const { toast } = useToast();
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [userData, setUserData] = useState<UserProfile>({
    name: "",
    email: "",
    bio: "",
    profession: "",
    joinDate: new Date().toISOString().split('T')[0],
    coursesEnrolled: 0,
    coursesCompleted: 0,
    skills: []
  });
  
  const [authForm, setAuthForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  // Load user data from local storage on component mount
  useEffect(() => {
    if (isAuthenticated && user) {
      const savedUserData = localStorage.getItem(`userData_${user.id}`);
      if (savedUserData) {
        setUserData(JSON.parse(savedUserData));
      } else {
        // Default demo data if no data exists
        const defaultData = {
          name: user.name,
          email: user.email,
          bio: language === 'ar' ? "مهتم بتطوير المهارات التقنية والقيادية" : "Interested in developing technical and leadership skills",
          profession: language === 'ar' ? "مطور برمجيات" : "Software Developer",
          joinDate: new Date().toISOString().split('T')[0],
          coursesEnrolled: 3,
          coursesCompleted: 1,
          skills: ["Python", "Data Analysis", "Critical Thinking"]
        };
        setUserData(defaultData);
        localStorage.setItem(`userData_${user.id}`, JSON.stringify(defaultData));
      }
    } else if (!isAuthenticated) {
      // Default guest data for preview
      const demoData = {
        name: language === 'ar' ? "أحمد محمد" : "Ahmed Mohammed",
        email: "ahmed@example.com",
        bio: language === 'ar' ? "مهتم بتطوير المهارات التقنية والقيادية" : "Interested in developing technical and leadership skills",
        profession: language === 'ar' ? "مطور برمجيات" : "Software Developer",
        joinDate: new Date().toISOString().split('T')[0],
        coursesEnrolled: 3,
        coursesCompleted: 1,
        skills: ["Python", "Data Analysis", "Critical Thinking"]
      };
      setUserData(demoData);
    }
  }, [isAuthenticated, user, language]);

  // Save changes to local storage
  const saveChanges = () => {
    if (isAuthenticated && user) {
      localStorage.setItem(`userData_${user.id}`, JSON.stringify(userData));
      setIsEditMode(false);
      toast({
        title: language === 'ar' ? "تم الحفظ" : "Saved",
        description: language === 'ar' ? "تم حفظ التغييرات بنجاح" : "Changes saved successfully",
      });
    }
  };
  
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLoginMode && authForm.password !== authForm.confirmPassword) {
      toast({
        title: language === 'ar' ? "خطأ" : "Error",
        description: language === 'ar' ? "كلمتا المرور غير متطابقتين" : "Passwords don't match",
        variant: "destructive",
      });
      return;
    }
    
    try {
      if (isLoginMode) {
        const result = await login(authForm.email, authForm.password);
        if (result.success) {
          toast({
            title: language === 'ar' ? "تم تسجيل الدخول" : "Logged In",
            description: language === 'ar' ? "مرحباً بعودتك" : "Welcome back",
          });
        } else {
          toast({
            title: language === 'ar' ? "خطأ" : "Error",
            description: result.message,
            variant: "destructive",
          });
        }
      } else {
        const result = await register(authForm.name, authForm.email, authForm.password);
        if (result.success) {
          toast({
            title: language === 'ar' ? "تم إنشاء الحساب" : "Account Created",
            description: language === 'ar' ? "تم إنشاء حسابك بنجاح" : "Your account was created successfully",
          });
        } else {
          toast({
            title: language === 'ar' ? "خطأ" : "Error",
            description: result.message,
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      toast({
        title: language === 'ar' ? "خطأ" : "Error",
        description: String(error),
        variant: "destructive",
      });
    }
  };

  const content = {
    ar: {
      title: "الملف الشخصي",
      editProfile: "تعديل",
      save: "حفظ",
      cancel: "إلغاء",
      name: "الاسم",
      email: "البريد الإلكتروني",
      bio: "نبذة شخصية",
      profession: "المهنة",
      joinDate: "تاريخ الانضمام",
      courses: "الدورات",
      coursesEnrolled: "الدورات المسجلة",
      coursesCompleted: "الدورات المكتملة",
      skills: "المهارات",
      overview: "نظرة عامة",
      progress: "التقدم",
      certificates: "الشهادات",
      login: "تسجيل الدخول",
      register: "إنشاء حساب",
      password: "كلمة المرور",
      confirmPassword: "تأكيد كلمة المرور",
      haveAccount: "لديك حساب؟",
      dontHaveAccount: "ليس لديك حساب؟",
      or: "أو",
      continue: "المتابعة كزائر",
      guestMode: "أنت في وضع الزائر"
    },
    en: {
      title: "Profile",
      editProfile: "Edit",
      save: "Save",
      cancel: "Cancel",
      name: "Name",
      email: "Email",
      bio: "Bio",
      profession: "Profession",
      joinDate: "Join Date",
      courses: "Courses",
      coursesEnrolled: "Courses Enrolled",
      coursesCompleted: "Courses Completed",
      skills: "Skills",
      overview: "Overview",
      progress: "Progress",
      certificates: "Certificates",
      login: "Login",
      register: "Register",
      password: "Password",
      confirmPassword: "Confirm Password",
      haveAccount: "Have an account?",
      dontHaveAccount: "Don't have an account?",
      or: "or",
      continue: "Continue as guest",
      guestMode: "You are in guest mode"
    }
  };

  const currentLanguage = content[language];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
        <Header />
        
        <div className="p-5 flex flex-col items-center justify-center min-h-[80vh]">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-full max-w-md">
            <div className="mb-6 text-center">
              <User size={48} className="mx-auto text-skillora-blue mb-2" />
              <h1 className="text-2xl font-bold dark:text-white">{currentLanguage.title}</h1>
            </div>
            
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {!isLoginMode && (
                <div>
                  <Label htmlFor="name">{currentLanguage.name}</Label>
                  <Input 
                    id="name" 
                    value={authForm.name}
                    onChange={(e) => setAuthForm({...authForm, name: e.target.value})}
                    required
                  />
                </div>
              )}
              
              <div>
                <Label htmlFor="email">{currentLanguage.email}</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={authForm.email}
                  onChange={(e) => setAuthForm({...authForm, email: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="password">{currentLanguage.password}</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={authForm.password}
                  onChange={(e) => setAuthForm({...authForm, password: e.target.value})}
                  required
                />
              </div>
              
              {!isLoginMode && (
                <div>
                  <Label htmlFor="confirmPassword">{currentLanguage.confirmPassword}</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password"
                    value={authForm.confirmPassword}
                    onChange={(e) => setAuthForm({...authForm, confirmPassword: e.target.value})}
                    required
                  />
                </div>
              )}
              
              <Button type="submit" className="w-full">
                {isLoginMode ? currentLanguage.login : currentLanguage.register}
              </Button>
              
              <div className="text-center">
                <button 
                  type="button"
                  onClick={() => setIsLoginMode(!isLoginMode)}
                  className="text-skillora-blue dark:text-blue-400 text-sm"
                >
                  {isLoginMode ? currentLanguage.dontHaveAccount : currentLanguage.haveAccount}
                </button>
              </div>
              
              {/* Guest view separator */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm">
                    {currentLanguage.or}
                  </span>
                </div>
              </div>
              
              {/* Guest access button */}
              <Button variant="outline" className="w-full" onClick={() => window.history.back()}>
                <LogIn className="mr-2 h-4 w-4" />
                {currentLanguage.continue}
              </Button>
            </form>
          </div>
        </div>
        
        <BottomNavbar />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <Header />
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold dark:text-white">{currentLanguage.title}</h1>
          {!isEditMode ? (
            <Button variant="ghost" size="sm" onClick={() => setIsEditMode(true)}>
              <Edit className="h-4 w-4 mr-1" />
              {currentLanguage.editProfile}
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={() => setIsEditMode(false)}>
                {currentLanguage.cancel}
              </Button>
              <Button size="sm" onClick={saveChanges}>
                {currentLanguage.save}
              </Button>
            </div>
          )}
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 mb-6">
          <div className="flex items-center mb-6">
            <div className="h-20 w-20 rounded-full bg-skillora-blue/20 flex items-center justify-center mr-4">
              <User size={40} className="text-skillora-blue dark:text-blue-400" />
            </div>
            
            <div>
              {isEditMode ? (
                <div className="space-y-2">
                  <Input 
                    value={userData.name} 
                    onChange={(e) => setUserData({...userData, name: e.target.value})}
                  />
                  <Input 
                    value={userData.profession} 
                    onChange={(e) => setUserData({...userData, profession: e.target.value})}
                  />
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold dark:text-white">{userData.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{userData.profession}</p>
                </>
              )}
            </div>
          </div>
          
          {isEditMode ? (
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">{currentLanguage.email}</Label>
                <Input 
                  id="email"
                  value={userData.email} 
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="bio">{currentLanguage.bio}</Label>
                <Input 
                  id="bio"
                  value={userData.bio} 
                  onChange={(e) => setUserData({...userData, bio: e.target.value})}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{currentLanguage.email}</h3>
                <p className="dark:text-white">{userData.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{currentLanguage.bio}</h3>
                <p className="dark:text-white">{userData.bio}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{currentLanguage.joinDate}</h3>
                <p className="dark:text-white">{userData.joinDate}</p>
              </div>
            </div>
          )}
        </div>
        
        <Tabs defaultValue="overview" className="mb-6">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="overview">{currentLanguage.overview}</TabsTrigger>
            <TabsTrigger value="progress">{currentLanguage.progress}</TabsTrigger>
            <TabsTrigger value="certificates">{currentLanguage.certificates}</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 mt-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold dark:text-white">{currentLanguage.courses}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-skillora-blue/10 p-4 rounded-lg">
                  <div className="flex items-center justify-center h-10 w-10 bg-skillora-blue/20 rounded-full mb-2">
                    <BookOpen className="h-5 w-5 text-skillora-blue dark:text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-skillora-blue dark:text-blue-400">{userData.coursesEnrolled}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{currentLanguage.coursesEnrolled}</p>
                </div>
                
                <div className="bg-skillora-green/10 p-4 rounded-lg">
                  <div className="flex items-center justify-center h-10 w-10 bg-skillora-green/20 rounded-full mb-2">
                    <Award className="h-5 w-5 text-skillora-green dark:text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-skillora-green dark:text-green-400">{userData.coursesCompleted}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{currentLanguage.coursesCompleted}</p>
                </div>
              </div>
              
              <div className="mb-2">
                <h3 className="font-bold mb-3 dark:text-white">{currentLanguage.skills}</h3>
                <div className="flex flex-wrap gap-2">
                  {userData.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-1 px-3 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="progress">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 mt-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold dark:text-white">{language === 'ar' ? 'الدورات الجارية' : 'In Progress'}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <h4 className="font-medium dark:text-white">
                    {language === 'ar' ? 'أساسيات الذكاء الاصطناعي' : 'AI Fundamentals'}
                  </h4>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 my-2">
                    <Clock size={14} className="mr-1" />
                    <span>{language === 'ar' ? '4/8 ساعات' : '4/8 hours'}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div className="bg-skillora-blue h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <h4 className="font-medium dark:text-white">
                    {language === 'ar' ? 'مهارات التفكير النقدي' : 'Critical Thinking Skills'}
                  </h4>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 my-2">
                    <Clock size={14} className="mr-1" />
                    <span>{language === 'ar' ? '2/6 ساعات' : '2/6 hours'}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div className="bg-skillora-blue h-2 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="certificates">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 mt-4 flex flex-col items-center justify-center">
              <Award size={64} className="text-skillora-blue mb-4" />
              <p className="text-center text-gray-600 dark:text-gray-400">
                {language === 'ar' ? 'أكمل المزيد من الدورات للحصول على شهادات' : 'Complete more courses to earn certificates'}
              </p>
              <Button variant="outline" className="mt-4">
                {language === 'ar' ? 'استكشاف الدورات' : 'Explore Courses'}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default Profile;
