
import React, { useState } from "react";
import { Mail, Phone, MessageCircle, Users, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { getLanguageContent } from "@/data/languageContent";

const ContactSection = () => {
  const { language } = useLanguage();
  const content = getLanguageContent(language);
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: language === 'ar' ? "تم إرسال الرسالة بنجاح" : "Message sent successfully",
        description: language === 'ar' 
          ? "شكراً لتواصلك معنا، سنرد عليك قريباً" 
          : "Thank you for reaching out, we'll get back to you soon",
        duration: 5000,
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-skillora-blue to-blue-600 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">
          {content.contactUs}
        </h3>
        <p className="opacity-90 text-sm">
          {content.contactDesc}
        </p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 dark:text-white">
                    {content.yourName}
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'ar' ? "أدخل اسمك" : "Enter your name"}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 dark:text-white">
                    {content.yourEmail}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'ar' ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 dark:text-white">
                    {content.yourMessage}
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={language === 'ar' ? "اكتب رسالتك هنا..." : "Type your message here..."}
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting 
                    ? content.sending
                    : content.sendMessage}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 dark:text-white">
                {content.contactInfo}
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-skillora-blue dark:text-blue-400 mr-2" />
                  <span className="dark:text-gray-300">6hasan.mubarak9@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-skillora-blue dark:text-blue-400 mr-2" />
                  <span className="dark:text-gray-300">0776963765</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-skillora-blue dark:text-blue-400 mr-2" />
                  <span className="dark:text-gray-300">@skillora_support</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 dark:text-white">
                {content.officeHours}
              </h4>
              <ul className="space-y-2 dark:text-gray-300">
                <li>{content.weekdays}</li>
                <li>{content.saturday}</li>
                <li>{content.sunday}</li>
              </ul>
            </div>
            
            {/* Team Information */}
            <div>
              <h4 className="text-lg font-semibold mb-3 dark:text-white flex items-center">
                <Users className="h-5 w-5 mr-2 text-skillora-blue dark:text-blue-400" />
                {content.ourTeam}
              </h4>
              <ul className="space-y-2 dark:text-gray-300">
                <li><strong>{content.owner}:</strong> Hasan Mubarak</li>
                <li><strong>{content.coOwner}:</strong> Zackaria Fataftah</li>
                <li><strong>{content.supervisor}:</strong> Ms. Heba Almashni</li>
              </ul>
            </div>
            
            {/* License Information */}
            <div>
              <h4 className="text-lg font-semibold mb-3 dark:text-white flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-skillora-blue dark:text-blue-400" />
                {content.license}
              </h4>
              <p className="text-sm dark:text-gray-300">
                {content.licenseText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
