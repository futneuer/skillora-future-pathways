
/// <reference types="vite/client" />

// Add type definitions for the Navigator.connection property
interface NetworkInformation {
  effectiveType: 'slow-2g' | '2g' | '3g' | '4g';
  saveData: boolean;
}

interface Navigator {
  connection?: NetworkInformation;
}

// Add type definition for the Window.deferredInstallPrompt property
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

interface Window {
  deferredInstallPrompt?: BeforeInstallPromptEvent;
  updateDocumentLanguage: (language: string) => void;
}
