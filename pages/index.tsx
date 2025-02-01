import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Login } from "@/components/Login";
import { Signup } from "@/components/Signup";
import { ForgotPassword } from "@/components/ForgotPassword";
import { Logout } from "@/components/Logout";
import { MFAVerification } from "@/components/MFAVerificatio";

export default function Home() {
  const [currentView, setCurrentView] = useState<
    "login" | "signup" | "forgotPassword" | "mfa" | "logout"
  >("login");
  const [user, setUser] = useState<{
    name: string;
    role: string;
    phone: string;
  } | null>(null);

  const handleLogin = (userData: {
    name: string;
    role: string;
    phone: string;
  }) => {
    setUser(userData);
    setCurrentView("mfa");
  };

  const handleMFAVerification = () => {
    setCurrentView("logout");
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView("login");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-gray-900 via-purple-800 to-blue-600 relative overflow-hidden">
      {/* Glowing Background Animation */}
      <div className="absolute inset-0 w-full h-full bg-gradient-radial from-purple-900 via-transparent to-transparent opacity-40 animate-pulse"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Neon Glow Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold text-white tracking-wide drop-shadow-md">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text animate-glow">
              AwDitor
            </span>
          </h1>
          <p className="text-blue-200 mt-2 text-lg">
            AI-Powered Audit Management
          </p>
        </div>

        {/* Glassmorphism Effect Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-white/20">
          <AnimatePresence mode="wait">
            {currentView === "login" && (
              <Login
                key="login"
                onSignupClick={() => setCurrentView("signup")}
                onForgotPasswordClick={() => setCurrentView("forgotPassword")}
                onLogin={handleLogin}
              />
            )}
            {currentView === "signup" && (
              <Signup
                key="signup"
                onLoginClick={() => setCurrentView("login")}
              />
            )}
            {currentView === "forgotPassword" && (
              <ForgotPassword
                key="forgotPassword"
                onBackToLoginClick={() => setCurrentView("login")}
              />
            )}
            {currentView === "mfa" && user && (
              <MFAVerification
                key="mfa"
                phoneNumber={user.phone}
                onVerify={handleMFAVerification}
                onCancel={() => setCurrentView("login")}
              />
            )}
            {currentView === "logout" && user && (
              <Logout key="logout" user={user} onLogout={handleLogout} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
